import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service | CasedUp",
  description:
    "Terms and conditions for using CasedUp custom phone case services",
};

export default function TermsPage() {
  return (
    <div className="bg-white py-12 md:py-24">
      <MaxWidthWrapper>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            Terms of Service
          </h1>
          <p className="text-sm text-gray-500 mb-8">
            Last updated: April 1, 2025
          </p>

          <div className="prose prose-slate max-w-none">
            <h2 className="text-xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p>
              Welcome to CasedUp. These Terms of Service ("Terms") govern your
              use of our website, services, and products. By accessing or using
              CasedUp, you agree to be bound by these Terms.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">2. Eligibility</h2>
            <p>
              You must be at least 18 years old to use CasedUp. By using our
              services, you represent and warrant that you meet this eligibility
              requirement.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">
              3. User Accounts
            </h2>
            <p>
              When you create an account, you must provide accurate and complete
              information. You are responsible for maintaining the
              confidentiality of your account credentials and for all activities
              that occur under your account.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">
              4. Ordering and Payment
            </h2>
            <p>
              All product prices are listed in USD. We accept major credit cards
              and other payment methods as displayed at checkout. Payment must
              be received in full before your order is processed.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">
              5. Custom Products
            </h2>
            <p>
              5.1. <strong>Your Content:</strong> When you upload images or
              content for custom phone cases, you retain ownership of your
              content, but grant us a license to use it to fulfill your order.
            </p>
            <p>
              5.2. <strong>Prohibited Content:</strong> You may not upload
              content that is illegal, infringing, offensive, or violates
              third-party rights. We reserve the right to refuse any order that
              contains prohibited content.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">
              6. Shipping and Returns
            </h2>
            <p>
              6.1. <strong>Shipping:</strong> Delivery times are estimates and
              not guaranteed. Shipping costs are calculated at checkout based on
              your location.
            </p>
            <p>
              6.2. <strong>Returns:</strong> Custom products cannot be returned
              unless there is a manufacturing defect. Please inspect your order
              upon receipt and contact us within 30 days if there's an issue.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">
              7. Intellectual Property
            </h2>
            <p>
              All content on CasedUp, including designs, text, graphics, logos,
              and software, is owned by CasedUp and protected by intellectual
              property laws.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">
              8. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, CasedUp shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages arising from your use of our services.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">
              9. Changes to Terms
            </h2>
            <p>
              We may update these Terms from time to time. We will notify you of
              material changes by posting the new Terms on this page with a new
              effective date.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">10. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at{" "}
              <a
                href="mailto:support@casedup.com"
                className="text-green-600 hover:underline"
              >
                support@casedup.com
              </a>
              .
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p>
              By using CasedUp, you acknowledge that you have read and
              understood these Terms of Service and agree to be bound by them.
            </p>
            <div className="mt-4 flex gap-4">
              <Link
                href="/privacy-policy"
                className="text-green-600 hover:underline"
              >
                Privacy Policy
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
