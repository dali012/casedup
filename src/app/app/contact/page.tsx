import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Us | CasedUp",
  description:
    "Get in touch with CasedUp customer support for questions about custom phone cases or orders",
};

export default function ContactPage() {
  return (
    <div className="bg-white py-12 md:py-24">
      <MaxWidthWrapper>
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          <div className="w-full md:w-1/2">
            <div className="max-w-md">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Get In Touch
              </h1>
              <p className="text-gray-600 mb-10">
                Have questions about your order, our products, or anything else?
                Fill out the form and our team will get back to you as soon as
                possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full shrink-0">
                    <Mail className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email Us</h3>
                    <p className="text-gray-600">support@casedup.com</p>
                    <p className="text-sm text-gray-500 mt-1">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full shrink-0">
                    <Phone className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Call Us</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Monday to Friday, 9am-5pm ET
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full shrink-0">
                    <Clock className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM ET
                    </p>
                    <p className="text-gray-600">
                      Saturday: 10:00 AM - 4:00 PM ET
                    </p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full shrink-0">
                    <MapPin className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Location</h3>
                    <p className="text-gray-600">123 Phone Case Street</p>
                    <p className="text-gray-600">New York, NY 10001</p>
                    <p className="text-gray-600">United States</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="bg-slate-50 p-6 md:p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Name
                    </label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      className="w-full"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="w-full"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Order Question / Product Inquiry / Other"
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Please describe your question or issue in detail..."
                    className="w-full min-h-[150px]"
                    required
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className={buttonVariants({
                      size: "lg",
                      className: "w-full",
                    })}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-slate-50 p-5 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">
                How long will my order take to arrive?
              </h3>
              <p className="text-gray-600">
                After production (1-2 business days), delivery takes 3-5 days in
                North America, 5-7 days for Europe, and 7-14 days for other
                destinations.
              </p>
            </div>
            <div className="bg-slate-50 p-5 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">
                Do you offer expedited shipping?
              </h3>
              <p className="text-gray-600">
                Yes, we offer expedited shipping options at checkout for
                customers who need their cases sooner.
              </p>
            </div>
            <div className="bg-slate-50 p-5 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">
                Can I track my order?
              </h3>
              <p className="text-gray-600">
                Yes, you'll receive a tracking number by email once your order
                has been shipped.
              </p>
            </div>
            <div className="bg-slate-50 p-5 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">
                What if my case doesn't fit my phone?
              </h3>
              <p className="text-gray-600">
                We guarantee proper fit for all supported models. If there's an
                issue, contact us for a replacement or refund.
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
