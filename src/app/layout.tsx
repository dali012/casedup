import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Recursive } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";
import Script from "next/script";

const recursive = Recursive({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://casedup.store"),
  title: {
    default: "CasedUp | Custom Phone Cases as Unique as You",
    template: "%s | CasedUp",
  },
  description:
    "Design your own custom phone case with CasedUp. Upload your photo and create a personalized case that fits your style and personality.",
  keywords: [
    "custom phone case",
    "personalized phone case",
    "photo phone case",
    "iPhone case",
    "Samsung case",
    "phone accessories",
  ],
  creator: "CasedUp Team",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CasedUp | Custom Phone Cases as Unique as You",
    description:
      "Design your own custom phone case with CasedUp. Upload your photo and create a personalized case that fits your style and personality.",
    url: "https://www.casedup.store",
    siteName: "CasedUp",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "CasedUp - Custom Phone Cases",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CasedUp | Custom Phone Cases as Unique as You",
    description:
      "Design your own custom phone case with CasedUp. Upload your photo and create a personalized case.",
    images: ["/op.png"],
    creator: "@casedup",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={recursive.className}>
        <Navbar />
        <main className="flex flex-col min-h-[calc(100vh-3.5rem-1px)] grainy-light">
          <div className="flex-1 flex flex-col h-full">
            <Providers>{children}</Providers>
          </div>
          <Footer />
        </main>
        <Toaster />
        <Script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "ba2b6a22b7e44482ba545675dd2cf893"}'
          strategy="lazyOnload"
          id="cloudflare-analytics"
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-JX2V1KYQPC`}
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JX2V1KYQPC');
          `}
        </Script>
      </body>
    </html>
  );
}
