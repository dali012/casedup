import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import ProductSchema from "@/components/ProductSchema";
import Reviews from "@/components/Reviews";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Check, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <ProductSchema />
      <section>
        <MaxWidthWrapper className="pb-16 md:pb-24 pt-6 md:pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-4 md:px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <Image
                  src="/snake-1.webp"
                  alt="CasedUp custom phone case design element"
                  width={112} // Based on w-28
                  height={112} // Approximated
                  className="w-full"
                />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-10 md:mt-16 font-bold !leading-tight text-gray-900 text-4xl md:text-5xl lg:text-7xl">
                Custom Phone Cases as{" "}
                <span className="bg-green-600 px-2 text-white">Unique</span> as
                You Are.
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Stand out with exclusive,{" "}
                <span className="font-semibold">artist-inspired</span> phone
                cases that redefine your style.
              </p>
              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="w-5 h-5 shrink-0 text-green-600" />
                    Premium Quality Durable materials.
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="w-5 h-5 shrink-0 text-green-600" />
                    Exclusive Designs Handpicked, artist-inspired designs.
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="w-5 h-5 shrink-0 text-green-600" />
                    Customizable Personalize your case with initials.
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="w-5 h-5 shrink-0 text-green-600" />
                    Modern iPhone models supported
                  </li>
                </div>
              </ul>

              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <Image
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-1.webp"
                    alt="Satisfied CasedUp customer"
                    width={40}
                    height={40}
                  />
                  <Image
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-2.webp"
                    alt="Satisfied CasedUp customer"
                    width={40}
                    height={40}
                  />
                  <Image
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-3.webp"
                    alt="Satisfied CasedUp customer"
                    width={40}
                    height={40}
                  />
                  <Image
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-4.webp"
                    alt="Satisfied CasedUp customer"
                    width={40}
                    height={40}
                  />
                  <Image
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-5.jpg"
                    alt="Satisfied CasedUp customer"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                  </div>
                  <p>
                    <span className="font-semibold">1.250</span> happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 w-full flex justify-center px-4 sm:px-8 md:px-0 mt-16 sm:mt-24 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <Image
                src="/your-image.webp"
                width={208} // Based on lg:w-52
                height={208} // Approximated square ratio
                className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block"
                alt="Custom phone case decorative element"
              />
              <Image
                src="/line.webp"
                width={80} // Based on w-20
                height={40} // Approximated height
                className="absolute w-20 -left-6 -bottom-6 select-none"
                alt="Decorative line element for phone case design"
              />
              <Phone className="w-64" imgSrc="/testimonials/1.webp" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="bg-slate-100 py-12 md:py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-8 md:gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-row items-center gap-2 md:gap-4 sm:gap-6">
            <h2 className="order-1 mt-1 md:mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-3xl md:text-4xl lg:text-6xl text-gray-900">
              What our
              <span className="relative px-2">
                customers
                <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-600" />
              </span>
              say
            </h2>
            <Image
              src="/snake-2.webp"
              width={96} // Based on w-24
              height={96} // Approximated square ratio
              className="w-24 order-0 lg:order-2"
              alt="Testimonial Snake decoration for CasedUp phone cases"
            />
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-8 md:gap-16">
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  &quot;I absolutely love my new phone case from CasedUp! The
                  design is stunning, and it fits my phone perfectly. I&apos;ve
                  already received
                  <span className="p-0.5 bg-slate-800 text-white">
                    so many compliments!
                  </span>
                  &quot;
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <Image
                  src="/users/user-1.webp"
                  width={48} // Based on w-12
                  height={48} // Based on h-12
                  className="rounded-full h-12 w-12 object-cover"
                  alt="CasedUp customer testimonial profile"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">James</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  &quot;CasedUp offers the best combination of style and
                  durability. My phone is protected, and I get to show off a
                  <span className="p-0.5 bg-slate-800 text-white">
                    design that truly reflects my personality
                  </span>
                  .&quot;
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <Image
                  src="/users/user-2.webp"
                  width={48} // Based on w-12
                  height={48} // Based on h-12
                  className="rounded-full h-12 w-12 object-cover"
                  alt="CasedUp verified customer review"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Sarah</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>

        <div className="pt-16">
          <Reviews />
        </div>
      </section>

      <section className="bg-white py-12 md:py-24">
        <MaxWidthWrapper>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Custom Cases for All Popular Phone Models
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 text-center px-2 md:px-0">
            <div className="p-3 md:p-4 border rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-base md:text-lg">
                iPhone 15 Series
              </h3>
              <p className="text-xs md:text-sm text-gray-600 mt-1 md:mt-2">
                Premium Protection
              </p>
            </div>
            <div className="p-3 md:p-4 border rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-base md:text-lg">
                iPhone 16 Series
              </h3>
              <p className="text-xs md:text-sm text-gray-600 mt-1 md:mt-2">
                Perfect Fit Guaranteed
              </p>
            </div>
            <div className="p-3 md:p-4 border rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-base md:text-lg">
                Samsung Galaxy S24 Series
              </h3>
              <p className="text-xs md:text-sm text-gray-600 mt-1 md:mt-2">
                Sleek & Protective
              </p>
            </div>
            <div className="p-3 md:p-4 border rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-base md:text-lg">
                Samsung Galaxy S25 Series
              </h3>
              <p className="text-xs md:text-sm text-gray-600 mt-1 md:mt-2">
                Stylish Durability
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="bg-slate-50 py-12 md:py-24">
        <MaxWidthWrapper>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Premium Quality <span className="text-green-600">Materials</span> &
            Craftsmanship
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-12 px-4 md:px-0">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
                Durable Construction
              </h3>
              <ul className="space-y-1 md:space-y-2">
                <li className="flex items-start">
                  <Check className="h-4 w-4 md:h-5 md:w-5 text-green-600 mr-1.5 md:mr-2 mt-0.5 shrink-0" />
                  <span className="text-sm md:text-base">
                    <strong>Thickness:</strong> 2.2mm slim profile
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 md:h-5 md:w-5 text-green-600 mr-1.5 md:mr-2 mt-0.5 shrink-0" />
                  <span className="text-sm md:text-base">
                    <strong>Weight:</strong> Just 35g - ultralight design
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 md:h-5 md:w-5 text-green-600 mr-1.5 md:mr-2 mt-0.5 shrink-0" />
                  <span className="text-sm md:text-base">
                    <strong>Materials:</strong> Impact-resistant polycarbonate
                    with TPU inner layer
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
                Superior Print Quality
              </h3>
              <ul className="space-y-1 md:space-y-2">
                <li className="flex items-start">
                  <Check className="h-4 w-4 md:h-5 md:w-5 text-green-600 mr-1.5 md:mr-2 mt-0.5 shrink-0" />
                  <span className="text-sm md:text-base">
                    <strong>Resolution:</strong> Ultra-HD 1200 DPI printing
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 md:h-5 md:w-5 text-green-600 mr-1.5 md:mr-2 mt-0.5 shrink-0" />
                  <span className="text-sm md:text-base">
                    <strong>Finish:</strong> Scratch-resistant coating
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 md:h-5 md:w-5 text-green-600 mr-1.5 md:mr-2 mt-0.5 shrink-0" />
                  <span className="text-sm md:text-base">
                    <strong>Colors:</strong> Vibrant, fade-resistant ink
                    technology
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
                Precision Fit
              </h3>
              <ul className="space-y-1 md:space-y-2">
                <li className="flex items-start">
                  <Check className="h-4 w-4 md:h-5 md:w-5 text-green-600 mr-1.5 md:mr-2 mt-0.5 shrink-0" />
                  <span className="text-sm md:text-base">
                    <strong>Design:</strong> Model-specific precise cutouts
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 md:h-5 md:w-5 text-green-600 mr-1.5 md:mr-2 mt-0.5 shrink-0" />
                  <span className="text-sm md:text-base">
                    <strong>Compatibility:</strong> Full access to all ports and
                    buttons
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 md:h-5 md:w-5 text-green-600 mr-1.5 md:mr-2 mt-0.5 shrink-0" />
                  <span className="text-sm md:text-base">
                    <strong>Protection:</strong> Raised edges for screen and
                    camera protection
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="bg-white py-12 md:py-24">
        <MaxWidthWrapper>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
                We Ship <span className="text-green-600">Worldwide</span>
              </h2>
              <p className="text-lg mb-4">
                Your custom phone case will be carefully packaged and shipped to
                your doorstep, wherever you are in the world.
              </p>

              <div className="space-y-4 mt-8">
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Fast Production</h3>
                    <p>
                      All cases are printed and shipped within 1-2 business days
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Trackable Shipping
                    </h3>
                    <p>Receive tracking information for every order</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Global Delivery</h3>
                    <p>
                      North America: 3-5 days
                      <br />
                      Europe: 5-7 days
                      <br />
                      Rest of World: 7-14 days
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <Image
                src="/worldwide.png"
                alt="CasedUp ships custom phone cases worldwide"
                width={550}
                height={350}
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="bg-slate-50 py-12 md:py-24">
        <MaxWidthWrapper>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12">
            Frequently Asked Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto px-4 md:px-0">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
                How do I create my custom case?
              </h3>
              <p className="text-sm md:text-base">
                Simply click "Create Your Custom Phone Case", upload your photo,
                select your phone model, and customize your design. Our
                intuitive editor makes it easy to perfect your case.
              </p>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
                What phone models do you support?
              </h3>
              <p className="text-sm md:text-base">
                We support all recent iPhone models (iPhone 12-15 series) and
                Samsung Galaxy models (S21-S24 series). Check our full list of
                supported models in the phone selection step.
              </p>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
                What materials are your cases made from?
              </h3>
              <p className="text-sm md:text-base">
                Our cases feature a hybrid construction with a shock-absorbing
                TPU inner layer and a durable polycarbonate outer shell,
                offering premium protection without adding bulk.
              </p>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
                How much does shipping cost?
              </h3>
              <p className="text-sm md:text-base">
                We offer free standard shipping on all orders over $35. For
                orders under $35, shipping is $4.99 within the US and varies for
                international destinations based on location.
              </p>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
                What is your return policy?
              </h3>
              <p className="text-sm md:text-base">
                We offer a 30-day satisfaction guarantee. If you're not happy
                with your case, we'll replace it or provide a full refund.
                Custom cases cannot be returned unless there's a manufacturing
                defect.
              </p>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
                How long will my order take to arrive?
              </h3>
              <p className="text-sm md:text-base">
                After the 1-2 business day production time, delivery typically
                takes 3-5 days in North America, 5-7 days for Europe, and 7-14
                days for other international destinations.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg">
              Have more questions?{" "}
              <Link href="/contact" className="text-green-600 font-semibold">
                Contact our support team
              </Link>
            </p>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="py-12 md:py-24 bg-white">
        <MaxWidthWrapper>
          <div className="mb-8 md:mb-12 px-4 md:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="order-1 tracking-tight text-center text-balance !leading-tight font-bold text-3xl md:text-5xl lg:text-6xl text-gray-900">
                Upload your photo and get{" "}
                <span className="relative px-2 bg-green-600 text-white">
                  your own case{" "}
                </span>
                now
              </h2>
            </div>
          </div>
          <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
            <div className="relative flex flex-col items-center md:grid md:grid-cols-2 gap-12 md:gap-40">
              <Image
                src="/arrow.webp"
                width={40}
                height={40}
                className="absolute top-[18rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0 w-10 md:w-auto"
                alt="Arrow pointing to custom phone case creation process"
                priority
              />
              <div className="relative h-64 sm:h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl">
                <Image
                  src="/horse.webp"
                  className="rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 h-full w-full"
                  alt="Custom photo upload example for personalized phone case"
                  width={400}
                  height={320}
                />
              </div>
              <Phone
                className="w-48 md:w-60 mt-8 md:mt-0"
                imgSrc="/horse_phone.webp"
              />
            </div>
          </div>

          <ul className="mx-auto mt-8 md:mt-12 max-w-prose sm:text-lg space-y-2 w-fit px-4">
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-600 shrink-0" />
              <span>Easy photo upload from your device or social media</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-600 shrink-0" />
              <span>
                Intuitive design tools to position and edit your image
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-600 shrink-0" />
              <span>Preview your case before ordering</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-600 shrink-0" />
              <span>Secure checkout with multiple payment options</span>
            </li>
          </ul>

          <div className="flex justify-center mt-10 md:mt-12">
            <Link
              href="/configure/upload"
              className={buttonVariants({
                size: "lg",
                className: "text-base md:text-lg px-6 md:px-8 py-3 md:py-4",
              })}
            >
              Create Your Custom Case Now{" "}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
