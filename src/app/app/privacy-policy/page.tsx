import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | CasedUp",
  description:
    "How CasedUp collects, uses, and protects your personal information",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white py-12 md:py-24">
      <MaxWidthWrapper>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 mb-8">
            Last updated: April 1, 2025
          </p>

          <div className="prose prose-slate max-w-none">
            <h2 className="text-xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p>
              CasedUp ("we", "our", or "us") is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use, and
              share information about you when you use our website and services.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">
              2. Information We Collect
            </h2>
            <p>
              2.1. <strong>Information You Provide:</strong> We collect
              information you provide when creating an account, placing an
              order, or contacting us, including:
            </p>
            <ul className="list-disc pl-6 my-4">
              <li>Contact information (name, email address, phone number)</li>
              <li>Billing and shipping information</li>
              <li>Account credentials</li>
              <li>Order information</li>
              <li>Custom design content and images you upload</li>
              <li>Communications with us</li>
            </ul>
            <p>
              2.2. <strong>Information Collected Automatically:</strong> We
              automatically collect certain information about your device and
              how you interact with our website, including:
            </p>
            <ul className="list-disc pl-6 my-4">
              <li>
                Device information (browser type, IP address, device
                identifiers)
              </li>
              <li>Usage information (pages visited, time spent)</li>
              <li>Location information</li>
              <li>Cookies and similar technologies (see our Cookie Policy)</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">
              3. How We Use Your Information
            </h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-6 my-4">
              <li>Process and fulfill your orders</li>
              <li>Provide customer support</li>
              <li>Improve our products and services</li>
              <li>Communicate with you about orders and promotional offers</li>
              <li>Detect and prevent fraud</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">
              4. Sharing Your Information
            </h2>
            <p>We may share your information with:</p>
            <ul className="list-disc pl-6 my-4">
              <li>
                Service providers (payment processors, shipping companies)
              </li>
              <li>Business partners with your consent</li>
              <li>Legal authorities when required by law</li>
            </ul>
            <p>We do not sell your personal information to third parties.</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">5. Cookie Usage</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your
              experience, analyze usage, and assist in our marketing efforts.
              See our{" "}
              <Link
                href="/cookie-policy"
                className="text-green-600 hover:underline"
              >
                Cookie Policy
              </Link>{" "}
              for more details.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">
              6. Your Rights and Choices
            </h2>
            <p>Depending on your location, you may have rights to:</p>
            <ul className="list-disc pl-6 my-4">
              <li>Access, correct, or delete your personal information</li>
              <li>Object to certain processing of your information</li>
              <li>Withdraw consent where applicable</li>
              <li>Data portability</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information
              in the "Contact Us" section.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">
              7. Data Security
            </h2>
            <p>
              We implement reasonable security measures to protect your
              information. However, no method of transmission over the Internet
              is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">
              8. Children's Privacy
            </h2>
            <p>
              Our services are not directed to children under 16. We do not
              knowingly collect personal information from children under 16. If
              you believe we have collected information from a child under 16,
              please contact us.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">
              9. International Data Transfers
            </h2>
            <p>
              Your information may be transferred to, stored, and processed in
              countries other than your country of residence. We take steps to
              ensure your information receives an adequate level of protection.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">
              10. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy periodically. We will notify you
              of material changes by posting the updated policy on our website
              with a new effective date.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">11. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our privacy
              practices, please contact us at{" "}
              <a
                href="mailto:privacy@casedup.store"
                className="text-green-600 hover:underline"
              >
                privacy@casedup.store
              </a>
              .
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex gap-4">
              <Link href="/terms" className="text-green-600 hover:underline">
                Terms of Service
              </Link>
              <Link
                href="/cookie-policy"
                className="text-green-600 hover:underline"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
