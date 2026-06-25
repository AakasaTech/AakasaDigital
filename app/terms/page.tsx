import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Aakasa Digital (Pvt) Ltd.',
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        badge="Legal"
        title="Terms of Service"
        description="Last updated: June 2026"
      />

      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl space-y-10 text-sm leading-relaxed text-muted-foreground">

          <div>
            <h2 className="mb-3 text-base font-bold text-foreground">1. Acceptance of Terms</h2>
            <p>
              By accessing or using any product or service provided by Aakasa Digital (Pvt) Ltd
              (&quot;Aakasa Digital&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), you agree to be bound by these Terms of
              Service. If you do not agree to these terms, please do not use our services.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-bold text-foreground">2. Description of Services</h2>
            <p>
              Aakasa Digital provides SaaS products including BillCraft AI, SupportCraft AI, and
              other products accessible at aakasa.dev and its subdomains. We reserve the right to
              modify, suspend, or discontinue any service at any time with reasonable notice.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-bold text-foreground">3. Account Responsibilities</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
              <li>You must provide accurate and complete information when registering.</li>
              <li>You are responsible for all activities that occur under your account.</li>
              <li>You must notify us immediately of any unauthorised use of your account.</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-base font-bold text-foreground">4. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Use our services for any unlawful or fraudulent purpose.</li>
              <li>Attempt to gain unauthorised access to our systems or other users&apos; accounts.</li>
              <li>Upload or transmit harmful, offensive, or malicious content.</li>
              <li>Reverse engineer, decompile, or otherwise attempt to extract source code from our products.</li>
              <li>Resell, sublicense, or otherwise commercialise access to our services without permission.</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-base font-bold text-foreground">5. Payment and Subscriptions</h2>
            <p>
              Paid plans are billed in advance on a monthly or annual basis. All fees are
              non-refundable except where required by law. We reserve the right to change pricing
              with 30 days&apos; notice. Failure to pay may result in suspension of access to the service.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-bold text-foreground">6. Intellectual Property</h2>
            <p>
              All content, software, and technology provided by Aakasa Digital remains our exclusive
              property. You retain ownership of all data you upload to our services. We do not claim
              any rights to your business data.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-bold text-foreground">7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Aakasa Digital shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages arising from your use
              of our services. Our total liability to you shall not exceed the amount you paid us in
              the 12 months preceding the claim.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-bold text-foreground">8. Termination</h2>
            <p>
              You may terminate your account at any time. We reserve the right to suspend or
              terminate accounts that violate these terms, with or without notice. Upon termination,
              your right to use our services ceases immediately.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-bold text-foreground">9. Changes to Terms</h2>
            <p>
              We may update these Terms of Service from time to time. We will notify you of material
              changes via email or a notice within the product. Continued use of our services after
              changes constitutes acceptance of the updated terms.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-bold text-foreground">10. Contact Us</h2>
            <p>
              If you have questions about these Terms, please contact us at{' '}
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
