import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";

export const metadata = {
  title: "Cookie Policy | CasedUp",
  description:
    "How CasedUp uses cookies and similar technologies on our website",
};

export default function CookiePolicyPage() {
  return (
    <div className="bg-white py-12 md:py-24">
      <MaxWidthWrapper>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Cookie Policy</h1>
          <p className="text-sm text-gray-500 mb-8">
            Last updated: April 1, 2025
          </p>

          <div className="prose prose-slate max-w-none">
            <h2 className="text-xl font-semibold mt-8 mb-4">
              1. What Are Cookies?
            </h2>
            <p>
              Cookies are small text files that are stored on your device when
              you visit websites. They are widely used to make websites work
              more efficiently and provide information to the owners of the
              site. Cookies help enhance your browsing experience by remembering
              your preferences and enabling certain site functionality.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">
              2. How We Use Cookies
            </h2>
            <p>
              CasedUp uses cookies and similar technologies for the following
              purposes:
            </p>
            <ul className="list-disc pl-6 my-4">
              <li>
                <strong>Essential cookies:</strong> Necessary for the website to
                function properly
              </li>
              <li>
                <strong>Performance cookies:</strong> Help us understand how
                visitors interact with our website
              </li>
              <li>
                <strong>Functionality cookies:</strong> Remember your
                preferences and settings
              </li>
              <li>
                <strong>Authentication cookies:</strong> Manage your login
                sessions and security
              </li>
              <li>
                <strong>Analytics cookies:</strong> Collect information about
                how you use our website
              </li>
              <li>
                <strong>Marketing cookies:</strong> Track your activity across
                websites to deliver relevant ads
              </li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">
              3. Types of Cookies We Use
            </h2>

            <h3 className="text-lg font-medium mt-6 mb-3">
              3.1 Essential Cookies
            </h3>
            <p>
              These cookies are necessary for the website to function and cannot
              be switched off in our systems. They are usually only set in
              response to actions made by you which amount to a request for
              services, such as setting your privacy preferences, logging in, or
              filling in forms.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-3">
              3.2 Authentication Cookies
            </h3>
            <p>
              We use Kinde for authentication services. Kinde sets cookies to
              manage your login sessions, remember your authentication status,
              and ensure security. These cookies include:
            </p>
            <ul className="list-disc pl-6 my-4">
              <li>
                <code>kinde_auth</code>: Stores authentication session
                information
              </li>
              <li>
                <code>kinde_token</code>: Stores encrypted authentication tokens
              </li>
              <li>
                <code>kinde_state</code>: Maintains authentication state between
                pages
              </li>
            </ul>
            <p>
              When you log in with Google through Kinde, additional cookies from
              Google may be set to facilitate the authentication process.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-3">
              3.3 Analytics Cookies
            </h3>
            <p>
              We use analytics cookies to collect information about how you use
              our website, which pages you visit, and how you interact with our
              content. This helps us improve our website and services.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-3">
              3.4 Marketing and Advertising Cookies
            </h3>
            <p>
              These cookies are used to track your activity across websites and
              to deliver relevant advertisements to you. They remember that you
              have visited our website and share this information with
              advertisers.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">
              4. Third-Party Cookies
            </h2>
            <p>Some cookies are placed by third parties on our website:</p>
            <ul className="list-disc pl-6 my-4">
              <li>
                <strong>Kinde:</strong> Authentication and user management
              </li>
              <li>
                <strong>Google:</strong> Authentication (when using Google
                sign-in) and analytics
              </li>
              <li>
                <strong>Payment processors:</strong> For secure payment
                transactions
              </li>
              <li>
                <strong>Social media platforms:</strong> If you use social
                sharing features
              </li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">
              5. Managing Cookies
            </h2>
            <p>
              Most web browsers allow you to control cookies through their
              settings. You can:
            </p>
            <ul className="list-disc pl-6 my-4">
              <li>Delete all cookies from your browser</li>
              <li>
                Block cookies by activating the setting on your browser that
                allows you to refuse all or some cookies
              </li>
              <li>Set your browser to notify you when you receive a cookie</li>
            </ul>
            <p>
              Please note that restricting cookies may impact your experience on
              our website and limit some functionality.
            </p>
            <p>
              For information on how to manage cookies in your browser, please
              visit:
            </p>
            <ul className="list-disc pl-6 my-4">
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline"
                >
                  Google Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline"
                >
                  Safari
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline"
                >
                  Microsoft Edge
                </a>
              </li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">
              6. Changes to This Cookie Policy
            </h2>
            <p>
              We may update this Cookie Policy from time to time. We will notify
              you of any changes by posting the new policy on this page with a
              new effective date.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">7. Contact Us</h2>
            <p>
              If you have any questions about our Cookie Policy, please contact
              us at{" "}
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
                href="/privacy-policy"
                className="text-green-600 hover:underline"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
