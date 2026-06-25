import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Aakasa Digital (Pvt) Ltd.',
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        badge="Legal"
        title="Privacy Policy"
        description="Last updated: June 2026"
      />

      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl space-y-10 text-sm leading-relaxed text-muted-foreground">

          <div>
            <h2 className="mb-3 text-base font-bold text-foreground">1. Introduction</h2>
            <p>
              Aakasa Digital (Pvt) Ltd (&quot;Aakasa Digital&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the
              website at aakasa.dev and provides SaaS products including BillCraft AI and
              SupportCraft AI. This Privacy Policy explains how we collect, use, and protect your
              personal information when you use our services.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-bold text-foreground">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                <strong className="text-foreground">Account information:</strong> Name, email address,
                and password when you register for an account.
              </li>
              <li>
                <strong className="text-foreground">Usage data:</strong> Information about how you use
                our products, including features accessed and actions taken.
              </li>
              <li>
                <strong className="text-foreground">Business data:</strong> Data you input into our
                products, such as invoice details, customer information, or support tickets.
              </li>
              <li>
                <strong className="text-foreground">Payment information:</strong> Billing details
                processed securely through our payment provider.
              </li>
              <li>
                <strong className="text-foreground">Communications:</strong> Messages you send us via
                our contact form or support email.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-base font-bold text-foreground">3. How We Use Your Information</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>To provide, operate, and improve our products and services.</li>
              <li>To process payments and manage subscriptions.</li>
              <li>To send service-related communications and product updates.</li>
              <li>To respond to your enquiries and provide customer support.</li>
              <li>To comply with legal obligations.</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-base font-bold text-foreground">4. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your data, including
              encryption in transit and at rest. We limit access to your personal data to authorised
              team members who require it to perform their duties.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-bold text-foreground">5. Third-Party Services</h2>
            <p>
              We may use trusted third-party service providers to operate our business, including
              payment processors, cloud infrastructure providers, and analytics tools. These providers
              are contractually obligated to keep your information confidential.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-bold text-foreground">6. Data Retention</h2>
            <p>
              We retain your data for as long as your account is active or as required to provide
              services. You may request deletion of your data at any time by contacting us at{' '}
              <a href="mailto:hello@aakasa.dev" className="text-primary hover:underline">
                hello@aakasa.dev
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-bold text-foreground">7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate data.</li>
              <li>Request deletion of your data.</li>
              <li>Withdraw consent for data processing where applicable.</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-base font-bold text-foreground">8. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or your data, please contact us at{' '}
              <a href="mailto:hello@aakasa.dev" className="text-primary hover:underline">
                hello@aakasa.dev
              </a>
              .
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
