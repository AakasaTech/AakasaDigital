import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Aakasa Digital (Pvt) Ltd — how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        badge="Legal"
        title="Privacy Policy"
        description="Last updated: 27 June 2026"
      />

      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl space-y-10 text-sm leading-relaxed text-muted-foreground">

          <div>
            <p>
              Aakasa Digital (Pvt) Ltd (&quot;Aakasa Digital&quot;, &quot;we&quot;, &quot;us&quot;, or
              &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy describes
              how we collect, use, disclose, and safeguard your personal information when you visit{' '}
              <strong className="text-foreground">aakasa.dev</strong> or use our SaaS products,
              including <strong className="text-foreground">BillCraft AI</strong> and{' '}
              <strong className="text-foreground">SupportCraft AI</strong> (collectively, the
              &quot;Services&quot;). Please read this policy carefully. By using our Services, you
              consent to the practices described herein.
            </p>
          </div>

          {/* 1 */}
          <div>
            <h2 className="mb-3 text-base font-bold text-foreground">1. Information We Collect</h2>
            <p className="mb-3">We collect information you provide directly, information generated automatically, and information from third-party services.</p>

            <h3 className="mb-2 font-semibold text-foreground">1.1 Information You Provide</h3>
            <ul className="mb-4 list-disc space-y-2 pl-5">
              <li><strong className="text-foreground">Account registration:</strong> Name, email address, and password.</li>
              <li><strong className="text-foreground">Profile information:</strong> Business name, phone number, and billing address.</li>
              <li><strong className="text-foreground">Business data:</strong> Invoice details, customer records, support tickets, and any other content you create or upload within our products.</li>
              <li><strong className="text-foreground">Payment information:</strong> Billing details (card number, expiry, CVV) submitted via our payment processors. We do not store raw card data on our servers.</li>
              <li><strong className="text-foreground">Communications:</strong> Messages sent via our contact form, support email, or in-app chat.</li>
            </ul>

            <h3 className="mb-2 font-semibold text-foreground">1.2 Information Collected Automatically</h3>
            <ul className="mb-4 list-disc space-y-2 pl-5">
              <li><strong className="text-foreground">Log data:</strong> IP address, browser type, operating system, referring URLs, and pages visited.</li>
              <li><strong className="text-foreground">Usage data:</strong> Features accessed, actions taken, session duration, and error reports.</li>
              <li><strong className="text-foreground">Device data:</strong> Device identifiers, screen resolution, and language settings.</li>
              <li><strong className="text-foreground">Cookies and similar technologies:</strong> See Section 6 for details.</li>
            </ul>

            <h3 className="mb-2 font-semibold text-foreground">1.3 Information from Third Parties</h3>
            <p>
              We may receive information about you from payment processors (Stripe, PayPal), authentication
              providers, and AI model providers where relevant to delivering the Services.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="mb-3 text-base font-bold text-foreground">2. How We Use Your Information</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>To create and manage your account and deliver the Services you subscribe to.</li>
              <li>To process payments and manage billing and subscriptions.</li>
              <li>To power AI features within our products (e.g., natural-language invoice generation, AI-assisted support responses).</li>
              <li>To send transactional emails such as invoices, receipts, and password resets.</li>
              <li>To send product updates and announcements (you may opt out at any time).</li>
              <li>To respond to your enquiries, feedback, and support requests.</li>
              <li>To monitor and improve the performance, security, and reliability of our Services.</li>
              <li>To detect and prevent fraud, abuse, and other harmful activity.</li>
              <li>To comply with applicable legal obligations and enforce our Terms of Service.</li>
            </ul>
          </div>

          {/* 3 */}
          <div>
            <h2 className="mb-3 text-base font-bold text-foreground">3. Legal Basis for Processing</h2>
            <p className="mb-3">Where applicable law requires a legal basis, we process your personal data on the following grounds:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li><strong className="text-foreground">Contract performance:</strong> Processing necessary to deliver the Services you have subscribed to.</li>
              <li><strong className="text-foreground">Legitimate interests:</strong> Improving our products, preventing fraud, and ensuring security — balanced against your rights.</li>
              <li><strong className="text-foreground">Legal obligation:</strong> Compliance with applicable laws and regulations.</li>
              <li><strong className="text-foreground">Consent:</strong> Marketing communications and non-essential cookies, where consent is required.</li>
            </ul>
          </div>

          {/* 4 */}
          <div>
            <h2 className="mb-3 text-base font-bold text-foreground">4. How We Share Your Information</h2>
            <p className="mb-3">We do not sell your personal data. We share information only in the following circumstances:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-foreground">Service providers:</strong> Trusted third-party vendors who help us operate the Services (e.g., cloud hosting, payment processing, email delivery, AI inference). These providers are contractually bound to protect your data and use it only on our behalf.
              </li>
              <li>
                <strong className="text-foreground">AI model providers:</strong> Content you submit to AI-powered features may be processed by third-party AI providers (such as OpenAI or Anthropic) to generate responses. We do not share data beyond what is necessary for inference, and we do not permit providers to use your data to train their models.
              </li>
              <li>
                <strong className="text-foreground">Business transfers:</strong> In the event of a merger, acquisition, or sale of assets, your data may be transferred to the successor entity, with notice provided where required by law.
              </li>
              <li>
                <strong className="text-foreground">Legal compliance:</strong> Where required by law, court order, or governmental authority.
              </li>
              <li>
                <strong className="text-foreground">With your consent:</strong> Any other sharing with your explicit prior consent.
              </li>
            </ul>
          </div>

          {/* 5 */}
          <div>
            <h2 className="mb-3 text-base font-bold text-foreground">5. Data Retention</h2>
            <p>
              We retain your personal data for as long as your account is active or as needed to provide the
              Services. After account closure, we retain data for a reasonable period to comply with legal
              obligations, resolve disputes, and enforce our agreements. Business data (invoices, tickets, etc.)
              may be retained for up to 7 years for accounting and regulatory purposes. You may request early
              deletion of your data — see Section 8.
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="mb-3 text-base font-bold text-foreground">6. Cookies and Tracking Technologies</h2>
            <p className="mb-3">We use cookies and similar technologies to operate and improve our Services:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li><strong className="text-foreground">Essential cookies:</strong> Required for authentication, session management, and security. These cannot be disabled.</li>
              <li><strong className="text-foreground">Functional cookies:</strong> Remember your preferences such as language and layout settings.</li>
              <li><strong className="text-foreground">Analytics cookies:</strong> Help us understand how users interact with our Services (e.g., page views, feature usage). Collected in aggregate or pseudonymous form.</li>
            </ul>
            <p className="mt-3">
              You can control non-essential cookies through your browser settings. Disabling cookies may
              affect the functionality of some features.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="mb-3 text-base font-bold text-foreground">7. Data Security</h2>
            <p>
              We implement appropriate technical and organisational measures to protect your data against
              unauthorised access, disclosure, alteration, or destruction. These include TLS encryption for
              data in transit, encryption at rest for sensitive fields, role-based access controls, and
              regular security reviews. However, no method of transmission over the internet or electronic
              storage is 100% secure. We encourage you to use a strong, unique password and to notify us
              immediately if you suspect unauthorised access to your account.
            </p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="mb-3 text-base font-bold text-foreground">8. Your Rights</h2>
            <p className="mb-3">
              Depending on your jurisdiction, you may have the following rights regarding your personal data:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li><strong className="text-foreground">Access:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong className="text-foreground">Rectification:</strong> Request correction of inaccurate or incomplete data.</li>
              <li><strong className="text-foreground">Erasure:</strong> Request deletion of your personal data, subject to legal retention requirements.</li>
              <li><strong className="text-foreground">Restriction:</strong> Request that we limit the processing of your data in certain circumstances.</li>
              <li><strong className="text-foreground">Data portability:</strong> Receive your data in a structured, machine-readable format.</li>
              <li><strong className="text-foreground">Objection:</strong> Object to processing based on legitimate interests or for direct marketing.</li>
              <li><strong className="text-foreground">Withdraw consent:</strong> Where processing is based on consent, you may withdraw it at any time without affecting the lawfulness of prior processing.</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us at{' '}
              <a href="mailto:hello@aakasa.dev" className="text-primary hover:underline">
                hello@aakasa.dev
              </a>
              . We will respond within 30 days.
            </p>
          </div>

          {/* 9 */}
          <div>
            <h2 className="mb-3 text-base font-bold text-foreground">9. International Data Transfers</h2>
            <p>
              Aakasa Digital is based in Sri Lanka. Our cloud infrastructure and third-party service providers
              may process your data in countries outside your own. Where transfers occur, we ensure appropriate
              safeguards are in place (such as standard contractual clauses or equivalent protections) to
              maintain the same level of protection as required in your jurisdiction.
            </p>
          </div>

          {/* 10 */}
          <div>
            <h2 className="mb-3 text-base font-bold text-foreground">10. Children&apos;s Privacy</h2>
            <p>
              Our Services are not directed to individuals under the age of 18. We do not knowingly collect
              personal data from minors. If you believe we have inadvertently collected such data, please
              contact us immediately and we will delete it promptly.
            </p>
          </div>

          {/* 11 */}
          <div>
            <h2 className="mb-3 text-base font-bold text-foreground">11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. We will notify you of material changes by
              posting a notice on our website or sending an email to your registered address at least 14
              days before the changes take effect. Your continued use of our Services after the effective
              date constitutes acceptance of the revised policy.
            </p>
          </div>

          {/* 12 */}
          <div>
            <h2 className="mb-3 text-base font-bold text-foreground">12. Contact Us</h2>
            <p>
              If you have questions, concerns, or requests relating to this Privacy Policy or our data
              practices, please contact our privacy team at:
            </p>
            <address className="mt-3 not-italic">
              <strong className="text-foreground">Aakasa Digital (Pvt) Ltd</strong><br />
              Sri Lanka<br />
              <a href="mailto:hello@aakasa.dev" className="text-primary hover:underline">
                hello@aakasa.dev
              </a>
            </address>
          </div>

        </div>
      </section>
    </>
  );
}
