"use client";

import Phone from "@/components/Phone";
import { Button } from "@/components/ui/button";
import { BASE_PRICE, PRODUCT_PRICES } from "@/config/products";
import { cn, formatPrice } from "@/lib/utils";
import { COLORS, MODELS } from "@/validators/option-validator";
import { Configuration } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import { ArrowRight, Check } from "lucide-react";
import { useEffect, useState } from "react";
import Confetti from "react-dom-confetti";
import { createCheckoutSession } from "./actions";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import LoginModal from "@/components/LoginModal";

interface IDesignPreviewProps {
  configuration: Configuration;
}

const DesignPreview = ({ configuration }: IDesignPreviewProps) => {
  const { toast } = useToast();

  const [showConfetti, setShowConfetti] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  useEffect(() => setShowConfetti(true), []);

  const router = useRouter();

  const { user, isLoading } = useKindeBrowserClient();

  const { color, model, finish, material, id, croppedImageUrl } = configuration;

  const tw = COLORS.find((c) => c.value === color)?.tw;
  const { label: modelLabel } = MODELS.options.find((m) => m.value === model)!;

  let totalPrice = BASE_PRICE;
  if (material) {
    totalPrice += PRODUCT_PRICES.material[material];
  }
  if (finish) {
    totalPrice += PRODUCT_PRICES.finish[finish];
  }

  const { mutate: createPaymentSession } = useMutation({
    mutationKey: ["getCheckoutSession"],
    mutationFn: createCheckoutSession,
    onSuccess: ({ url }) => {
      if (url) {
        router.push(url);
      } else {
        throw new Error("Unable to redirect to checkout");
      }
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "There was a problem on our end, Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleCheckout = () => {
    if (user && !isLoading) {
      createPaymentSession({ configId: id });
    } else {
      localStorage.setItem("configurationId", id);
      setIsLoginModalOpen(true);
    }
  };

  return (
    <>
      <div
        className="pointer-events-none select-none absolute inset-0 overflow-hidden flex justify-center"
        aria-hidden
      >
        <Confetti
          active={showConfetti}
          config={{
            elementCount: 200,
            spread: 90,
          }}
        />
      </div>
      <LoginModal isOpen={isLoginModalOpen} setIsOpen={setIsLoginModalOpen} />
      <div className="mt-20 flex flex-col items-center md:grid  text-sm sm:grid-cols-12 sm:grid-rows-1 sm:gap-x-6 md:gap-x-8 lg:gap-x-12">
        <div className="md:col-span-4 lg:col-span-3 md:row-span-2 md:row-end-2">
          <Phone
            imgSrc={croppedImageUrl!}
            className={cn(`bg-${tw}`, "max-w-[150px] md:max-w-full")}
          />
        </div>
        <div className="mt-6 sm:col-span-9 md:row-end-1'">
          <h3 className="text-3xl font-bold tracking-tight text-gray-900">
            Your {modelLabel} Case
          </h3>
          <div className="mt-3 flex items-center gap-1.5 text-base">
            <Check className="w-4 h-4 text-green-500" />
            In stock and ready to ship
          </div>
        </div>
        <div className="sm:col-span-12 md:col-span-9 text-base">
          <div className="grid grid-cols-1 gap-y-8 border-b border-gray-200 py-8 sm:grid-cols-2 sm:gap-x-6 sm:py-6 md:py-10">
            <div>
              <p className="font-medium text-zinc-950">Highlights</p>
              <ol className="mt-3 text-zinc-700 list-disc list-inside">
                <li>5 year print warranty</li>
                <li>TPU Protection</li>
                <li>Wireless charging compatible</li>
                <li>Packaging made from recycled materials</li>
              </ol>
            </div>
            <div>
              <p className="font-medium text-zinc-950">Materials</p>
              <ol className="mt-3 text-zinc-700 list-disc list-inside">
                <li>Premium Quality Durable materials.</li>
                <li>Scratch and fingerprint resistant</li>
              </ol>
            </div>
          </div>
          <div className="mt-8">
            <div className="bg-gray-50 p-6 sm:rounded-lg sm:p-8">
              <div className="flow-root text-sm">
                <div className="flex items-center justify-between py-1 mt-2">
                  <p className="text-gray-600">Base Price</p>
                  <p className="font-medium text-gray-900">
                    {formatPrice(BASE_PRICE / 100)}
                  </p>
                </div>
                {finish === "glossy" ? (
                  <div className="flex items-center justify-between py-1 mt-2">
                    <p className="text-gray-600">Glossy Finish</p>
                    <p className="font-medium text-gray-900">
                      {formatPrice(PRODUCT_PRICES.finish.glossy / 100)}
                    </p>
                  </div>
                ) : null}
                {finish === "matte" ? (
                  <div className="flex items-center justify-between py-1 mt-2">
                    <p className="text-gray-600">Matte Finish</p>
                    <p className="font-medium text-gray-900">
                      {formatPrice(PRODUCT_PRICES.finish.matte / 100)}
                    </p>
                  </div>
                ) : null}
                {finish === "textured" ? (
                  <div className="flex items-center justify-between py-1 mt-2">
                    <p className="text-gray-600">Textured Finish</p>
                    <p className="font-medium text-gray-900">
                      {formatPrice(PRODUCT_PRICES.finish.textured / 100)}
                    </p>
                  </div>
                ) : null}
                {material === "leather" ? (
                  <div className="flex items-center justify-between py-1 mt-2">
                    <p className="text-gray-600">Leather Material</p>
                    <p className="font-medium text-gray-900">
                      {formatPrice(PRODUCT_PRICES.material.leather / 100)}
                    </p>
                  </div>
                ) : null}
                {material === "polycarbonate" ? (
                  <div className="flex items-center justify-between py-1 mt-2">
                    <p className="text-gray-600">Polycarbonate Material</p>
                    <p className="font-medium text-gray-900">
                      {formatPrice(PRODUCT_PRICES.material.polycarbonate / 100)}
                    </p>
                  </div>
                ) : null}
                {material === "silicone" ? (
                  <div className="flex items-center justify-between py-1 mt-2">
                    <p className="text-gray-600">Silicone Material</p>
                    <p className="font-medium text-gray-900">
                      {formatPrice(PRODUCT_PRICES.material.silicone / 100)}
                    </p>
                  </div>
                ) : null}
                <div className="my-2 h-px bg-gray-200" />
                <div className="flex items-center justify-between py-2">
                  <p className="font-semibold text-gray-900">Order total</p>
                  <p className="font-semibold text-gray-900">
                    {formatPrice(totalPrice / 100)}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end pb-12">
              <Button
                isLoading={isLoading!}
                disabled={isLoading!}
                loadingText="Loading"
                className="px-4 sm:px-6 lg:px-8"
                onClick={() => handleCheckout()}
              >
                Checkout <ArrowRight className="h-4 w-4 ml-1.5 inline" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignPreview;
