import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { Check, ChevronDown, ChevronRight, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata = {
  title: "Supported Phone Models | CasedUp",
  description:
    "Custom phone cases for all popular iPhone, Samsung, Google, and other smartphone models",
};

const phoneModels = {
  iphone: [
    { label: "iPhone 16 Pro Max", popular: true },
    { label: "iPhone 16 Pro", popular: true },
    { label: "iPhone 15 Pro Max", popular: true },
    { label: "iPhone 15 Pro", popular: true },
    { label: "iPhone 15 Plus", popular: true },
    { label: "iPhone 15", popular: true },
    { label: "iPhone 14 Pro Max", popular: true },
    { label: "iPhone 14 Pro", popular: true },
    { label: "iPhone 14 Plus", popular: false },
    { label: "iPhone 14", popular: false },
    { label: "iPhone 13 Pro Max", popular: false },
    { label: "iPhone 13 Pro", popular: false },
    { label: "iPhone 13", popular: false },
    { label: "iPhone 13 Mini", popular: false },
    { label: "iPhone 12 Pro Max", popular: false },
    { label: "iPhone 12 Pro", popular: false },
    { label: "iPhone 12", popular: false },
    { label: "iPhone 12 Mini", popular: false },
    { label: "iPhone 11 Pro Max", popular: false },
    { label: "iPhone 11 Pro", popular: false },
    { label: "iPhone 11", popular: false },
    { label: "iPhone XS Max", popular: false },
    { label: "iPhone XS", popular: false },
    { label: "iPhone XR", popular: false },
    { label: "iPhone X", popular: false },
  ],
  samsung: [
    { label: "Galaxy S25 Ultra", popular: true },
    { label: "Galaxy S25+", popular: true },
    { label: "Galaxy S24 Ultra", popular: true },
    { label: "Galaxy S24+", popular: true },
    { label: "Galaxy S24", popular: true },
    { label: "Galaxy S23 Ultra", popular: true },
    { label: "Galaxy S23+", popular: false },
    { label: "Galaxy S23", popular: false },
    { label: "Galaxy S22 Ultra", popular: false },
    { label: "Galaxy S22+", popular: false },
    { label: "Galaxy S22", popular: false },
    { label: "Galaxy S21 Ultra", popular: false },
    { label: "Galaxy S21+", popular: false },
    { label: "Galaxy S21", popular: false },
    { label: "Galaxy S21 FE", popular: false },
    { label: "Galaxy Note 20 Ultra", popular: false },
    { label: "Galaxy Note 20", popular: false },
  ],
  google: [
    { label: "Pixel 8 Pro", popular: true },
    { label: "Pixel 8", popular: true },
    { label: "Pixel 7 Pro", popular: false },
    { label: "Pixel 7", popular: false },
    { label: "Pixel 7a", popular: false },
    { label: "Pixel 6 Pro", popular: false },
    { label: "Pixel 6", popular: false },
    { label: "Pixel 6a", popular: false },
    { label: "Pixel 5", popular: false },
  ],
};

export default function PhoneModelsPage() {
  return (
    <div className="bg-white py-12 md:py-24">
      <MaxWidthWrapper>
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Custom Cases for <span className="text-green-600">Every</span> Phone
          </h1>
          <p className="text-lg text-gray-600">
            We support a wide range of smartphone models to ensure you can
            create a custom case that fits your device perfectly. Find your
            phone model below and start designing your unique case today.
          </p>
        </div>

        <Tabs defaultValue="iphone" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="iphone" className="text-base">
              iPhone
            </TabsTrigger>
            <TabsTrigger value="samsung" className="text-base">
              Samsung
            </TabsTrigger>
            <TabsTrigger value="google" className="text-base">
              Google
            </TabsTrigger>
          </TabsList>

          <TabsContent value="iphone" className="mt-4">
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">
                Popular iPhone Models
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {phoneModels.iphone
                  .filter((model) => model.popular)
                  .map((model) => (
                    <Link
                      href="/configure/upload"
                      key={model.label}
                      className="flex flex-col items-center p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors border border-gray-200"
                    >
                      <Image
                        src="/phone-outline.png"
                        alt={model.label}
                        width={80}
                        height={160}
                        className="mb-3"
                      />
                      <span className="font-medium text-center">
                        {model.label}
                      </span>
                      <span className="text-sm text-green-600 mt-1">
                        In Stock
                      </span>
                    </Link>
                  ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">All iPhone Models</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {phoneModels.iphone.map((model) => (
                  <Link
                    href="/configure/upload"
                    key={model.label}
                    className="flex justify-between items-center p-3 bg-white rounded-lg hover:bg-slate-50 transition-colors border border-gray-200"
                  >
                    <span>{model.label}</span>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="text-center mt-10">
              <p className="text-gray-600 mb-4">
                Don't see your iPhone model? Contact us for custom requests.
              </p>
              <Link
                href="/contact"
                className={buttonVariants({
                  variant: "outline",
                })}
              >
                Contact Support
              </Link>
            </div>
          </TabsContent>

          <TabsContent value="samsung" className="mt-4">
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">
                Popular Samsung Models
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {phoneModels.samsung
                  .filter((model) => model.popular)
                  .map((model) => (
                    <Link
                      href="/configure/upload"
                      key={model.label}
                      className="flex flex-col items-center p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors border border-gray-200"
                    >
                      <Image
                        src="/samsung-outline.png"
                        alt={model.label}
                        width={80}
                        height={160}
                        className="mb-3"
                      />
                      <span className="font-medium text-center">
                        {model.label}
                      </span>
                      <span className="text-sm text-green-600 mt-1">
                        In Stock
                      </span>
                    </Link>
                  ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">All Samsung Models</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {phoneModels.samsung.map((model) => (
                  <Link
                    href="/configure/upload"
                    key={model.label}
                    className="flex justify-between items-center p-3 bg-white rounded-lg hover:bg-slate-50 transition-colors border border-gray-200"
                  >
                    <span>{model.label}</span>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </Link>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="google" className="mt-4">
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">
                Popular Google Pixel Models
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {phoneModels.google
                  .filter((model) => model.popular)
                  .map((model) => (
                    <Link
                      href="/configure/upload"
                      key={model.label}
                      className="flex flex-col items-center p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors border border-gray-200"
                    >
                      <Image
                        src="/pixel-outline.png"
                        alt={model.label}
                        width={80}
                        height={160}
                        className="mb-3"
                      />
                      <span className="font-medium text-center">
                        {model.label}
                      </span>
                      <span className="text-sm text-green-600 mt-1">
                        In Stock
                      </span>
                    </Link>
                  ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">
                All Google Pixel Models
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {phoneModels.google.map((model) => (
                  <Link
                    href="/configure/upload"
                    key={model.label}
                    className="flex justify-between items-center p-3 bg-white rounded-lg hover:bg-slate-50 transition-colors border border-gray-200"
                  >
                    <span>{model.label}</span>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </Link>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 bg-slate-50 p-6 md:p-8 rounded-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Case Features
            </h2>
            <p className="text-gray-600 mb-8">
              All our custom cases, regardless of phone model, come with these
              premium features:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-start gap-3 mb-2">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <h3 className="font-semibold">Perfect Fit Guarantee</h3>
                </div>
                <p className="text-sm text-gray-600 pl-9">
                  Each case is precisely designed for your specific phone model
                  with accurate cutouts for all ports and buttons.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-start gap-3 mb-2">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <h3 className="font-semibold">Premium Materials</h3>
                </div>
                <p className="text-sm text-gray-600 pl-9">
                  Constructed with high-quality, impact-resistant polycarbonate
                  and flexible TPU for maximum protection.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-start gap-3 mb-2">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <h3 className="font-semibold">Vibrant HD Printing</h3>
                </div>
                <p className="text-sm text-gray-600 pl-9">
                  Your designs are printed in stunning Ultra-HD 1200 DPI quality
                  with fade-resistant inks.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Create Your Custom Case?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Select your phone model above or get started right away with our
            design tool.
          </p>
          <Link
            href="/configure/upload"
            className={buttonVariants({
              size: "lg",
              className: "px-8 py-6 text-lg",
            })}
          >
            Start Designing Now
          </Link>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
