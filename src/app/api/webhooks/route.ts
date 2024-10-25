import { db } from "@/db";
import { stripe } from "@/lib/stripe";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { Resend } from "resend";
import OrderReceivedEmail from "@/components/emails/OrderReceivedEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get("Stripe-Signature");

    if (!signature) {
      return new Response("Invalid signature", { status: 400 });
    }

    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    console.log("Event type:", event.type);
    console.log("Event Object:", event);

    if (event.type === "checkout.session.completed") {
      if (!event.data.object.customer_details) {
        throw new Error("Customer not found");
      }

      const session = event.data.object as Stripe.Checkout.Session;

      const { userId, orderId } = session.metadata || {
        userId: undefined,
        orderId: undefined,
      };

      if (!userId || !orderId) {
        throw new Error("User or order not found");
      }

      const billingAddress = session.customer_details!.address;
      const shippingAddress = session.shipping_details!.address;

      const updatedOrder = await db.order.update({
        where: {
          id: orderId,
        },
        data: {
          isPaid: true,
          shippingAddress: {
            create: {
              name: session.customer_details!.name!,
              city: shippingAddress!.city!,
              country: shippingAddress!.country!,
              postalCode: shippingAddress!.postal_code!,
              state: shippingAddress!.state!,
              street: shippingAddress!.line1!,
            },
          },
          billingAddress: {
            create: {
              name: session.customer_details!.name!,
              city: billingAddress!.city!,
              country: billingAddress!.country!,
              postalCode: billingAddress!.postal_code!,
              state: billingAddress!.state!,
              street: billingAddress!.line1!,
            },
          },
        },
      });

      await resend.emails.send({
        from: "CasedUp <dali.jerbi97@gmail.com>",
        to: [event.data.object.customer_details.email!],
        subject: "Thanks for your order!",
        react: OrderReceivedEmail({
          orderId,
          orderDate: updatedOrder.createdAt.toLocaleDateString(),
          //@ts-ignore
          shippingAddress: {
            name: session.customer_details!.name!,
            city: shippingAddress!.city!,
            country: shippingAddress!.country!,
            postalCode: shippingAddress!.postal_code!,
            state: shippingAddress!.state!,
            street: shippingAddress!.line1!,
          },
        }),
      });
    }
    return NextResponse.json({ result: event, ok: true });
  } catch (error) {
    return NextResponse.json({
      message: "Something went wrong",
      ok: false,
      status: 500,
    });
  }
}
