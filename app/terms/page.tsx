import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Aakasa Digital (Pvt) Ltd — your agreement with us when using BillCraft AI and SupportCraft AI.',
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        badge="Legal"
        title="Terms of Service"
        description="Last updated: 27 June 2026"
      />

      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl space-y-10 text-sm leading-relaxed text-muted-foreground">

          <div>
            <p>
              These Terms of Service (&quot;Terms&quot;) govern your access to and use of the products and
              services provided by <strong className="text-foreground">Aakasa Digital (Pvt) Ltd</strong>{' '}
              (&quot;Aakasa Digital&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), including{' '}
              <strong className="text-foreground">BillCraft AI</strong>,{' '}
              <strong className="text-foreground">SupportCraft AI</strong>, and this website at{' '}
              <strong className="text-foreground">aakasa.dev</strong> (collectively, the &quot;Services&quot;).
              By creating an account or using any of our Services, you agree to these Terms. If you
              are accepting on behalf of a company or organisation, you represent that you have authority
              to bind that entity.
            </p>
          </div>

          {/* 1 */}
          <div>
            <h2 className="mb-3 text-base font-bold text-foreground">1. Eligibility</h2>
            <p>
              You must be at least 18 years of age and capable of forming a legally binding contract
              to use our Services. Our Services are intended for business use. By using our Services,
              you represent and warrant that you meet these requirements.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="mb-3 text-base font-bold text-foreground">2. Accounts</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>You must register for an account to access most features. You agree to provide accurate, current, and complete information and to keep it up to date.</li>
              <li>You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account.</li>
              <li>You must notify us immediately at{' '}<a href="mailto:legal@aakasa.dev" className="text-primary hover:underline">legal@aakasa.dev</a>{' '}if you suspect any unauthorised access to your account.</li>
              <li>We reserve the right to disable accounts that violate these Terms or that have been inactive for an extended period, with reasonable notice where practicable.</li>
            </ul>
          </div>

          {/* 3 */}
          <div>
            <h2 className="mb-3 text-base font-bold text-foreground">3. Subscriptions and Payment</h2>

            <h3 className="mb-2 font-semibold text-foreground">3.1 Paid Plans</h3>
            <p className="mb-3">
              Access to certain features requires a paid subscription. Subscription fees are charged in
              advance on a monthly or annual basis, depending on the plan you select. All fees are
              stated exclusive of taxes unless noted otherwise.
            </p>

            <h3 className="mb-2 font-semibold text-foreground">3.2 Free Trials</h3>
            <p className="mb-3">
              We may offer a free trial period. At the end of the trial, your account will automatically
              convert to a paid subscription unless you cancel before the trial ends.
            </p>

            <h3 className="mb-2 font-semibold text-foreground">3.3 Renewals and Cancellations</h3>
            <p className="mb-3">
              Subscriptions renew automatically at the end of each billing period. You may cancel at
              any time from your account settings. Cancellation takes effect at the end of the current
              billing period — you will retain access until then.
            </p>

            <h3 className="mb-2 font-semibold text-foreground">3.4 Refunds</h3>
            <p className="mb-3">
              All fees are non-refundable except where required by applicable law. If you believe a
              charge was made in error, please contact us within 14 days.
            </p>

            <h3 className="mb-2 font-semibold text-foreground">3.5 Price Changes</h3>
            <p>
              We may change subscription pricing with at least 30 days&apos; advance notice. Continued
              use of the Services after a price change constitutes acceptance of the new pricing.
            </p>
          </div>

          {/* 4 */}
          <div>
            <h2 className="mb-3 text-base font-bold text-foreground">4. Acceptable Use</h2>
            <p className="mb-3">You agree to use our Services only for lawful purposes and in accordance with these Terms. You must not:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Use the Services for any unlawful, fraudulent, or deceptive purpose.</li>
              <li>Violate any applicable law, regulation, or third-party rights.</li>
              <li>Attempt to gain unauthorised access to our systems, infrastructure, or other users&apos; accounts.</li>
              <li>Upload or transmit viruses, malware, or any other malicious or harmful code.</li>
              <li>Reverse engineer, decompile, disassemble, or otherwise attempt to derive source code from any part of our Services.</li>
              <li>Scrape, crawl, or extract data from our Services in an automated manner without our prior written consent.</li>
              <li>Resell, sublicense, or provide access to our Services to third parties without authorisation.</li>
              <li>Use AI features to generate content that is illegal, harmful, abusive, or violates the rights of others.</li>
              <li>Introduce excessive load or conduct denial-of-service attacks against our infrastructure.</li>
            </ul>
            <p className="mt-3">
              We reserve the right to suspend or terminate access for any violation of this section,
              immediately and without notice in serious cases.
            </p>
          </div>

          {/* 5 */}
          <div>
            <h2 className="mb-3 text-base font-bold text-foreground">5. AI-Powered Features</h2>
            <p className="mb-3">
              Our products include features powered by artificial intelligence, including large language
              models operated by third-party providers. By using these features, you acknowledge:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>AI-generated content may contain errors, inaccuracies, or omissions. You are responsible for reviewing all AI output before relying on it.</li>
              <li>AI features are provided as productivity tools and do not constitute professional advice (legal, financial, tax, or otherwise).</li>
              <li>Input you provide to AI features may be transmitted to third-party AI providers to generate responses, as described in our Privacy Policy.</li>
              <li>You must not submit sensitive personal data (such as government-issued ID numbers or health information) to AI-powered features unless explicitly supported and documented.</li>
            </ul>
          </div>

          {/* 6 */}
          <div>
            <h2 className="mb-3 text-base font-bold text-foreground">6. Your Data</h2>
            <p className="mb-3">
              You retain full ownership of all data, content, and materials you upload or create within
              our Services (&quot;Your Data&quot;). You grant us a limited, non-exclusive licence to process
              Your Data solely as necessary to provide the Services.
            </p>
            <p>
              We do not use Your Data to train AI models, sell it to third parties, or access it for
              any purpose other than delivering the Services, maintaining security, and complying with
              legal obligations. Upon account termination, you may export Your Data within 30 days before
              it is deleted from our systems, subject to our data retention obligations.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="mb-3 text-base font-bold text-foreground">7. Intellectual Property</h2>
            <p>
              All software, code, design, trademarks, logos, and content forming part of our Services
              (excluding Your Data) are owned by or licensed to Aakasa Digital and are protected by
              applicable intellectual property laws. Nothing in these Terms grants you any right to use
              our branding, trademarks, or proprietary technology except as expressly permitted.
            </p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="mb-3 text-base font-bold text-foreground">8. Third-Party Services</h2>
            <p>
              Our Services may integrate with or link to third-party services (e.g., payment processors,
              email providers). Your use of those services is subject to their own terms and privacy
              policies. Aakasa Digital is not responsible for the practices or content of third-party
              services.
            </p>
          </div>

          {/* 9 */}
          <div>
            <h2 className="mb-3 text-base font-bold text-foreground">9. Service Availability</h2>
            <p>
              We aim to maintain high availability of our Services but do not guarantee uninterrupted
              access. We may perform scheduled maintenance with advance notice where reasonably practicable.
              We reserve the right to modify, suspend, or discontinue any feature or Service at any time,
              with reasonable notice for material changes.
            </p>
          </div>

          {/* 10 */}
          <div>
            <h2 className="mb-3 text-base font-bold text-foreground">10. Disclaimer of Warranties</h2>
            <p>
              The Services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind,
              whether express or implied, including but not limited to implied warranties of
              merchantability, fitness for a particular purpose, and non-infringement. We do not warrant
              that the Services will be error-free, secure, or continuously available.
            </p>
          </div>

          {/* 11 */}
          <div>
            <h2 className="mb-3 text-base font-bold text-foreground">11. Limitation of Liability</h2>
            <p className="mb-3">
              To the maximum extent permitted by applicable law, Aakasa Digital and its officers,
              directors, employees, and agents shall not be liable for any:
            </p>
            <ul className="mb-3 list-disc space-y-2 pl-5">
              <li>Indirect, incidental, special, consequential, or punitive damages.</li>
              <li>Loss of profits, revenue, data, business opportunities, or goodwill.</li>
              <li>Damages arising from AI-generated output, unauthorised access, or events beyond our reasonable control.</li>
            </ul>
            <p>
              Our total aggregate liability to you for any claim arising out of or relating to these
              Terms or the Services shall not exceed the greater of (a) the total fees you paid us in
              the 12 months preceding the claim, or (b) USD 100.
            </p>
          </div>

          {/* 12 */}
          <div>
            <h2 className="mb-3 text-base font-bold text-foreground">12. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Aakasa Digital and its affiliates, officers,
              and employees from any claims, damages, liabilities, costs, or expenses (including
              reasonable legal fees) arising from your use of the Services, Your Data, or your
              violation of these Terms or applicable law.
            </p>
          </div>

          {/* 13 */}
          <div>
            <h2 className="mb-3 text-base font-bold text-foreground">13. Termination</h2>
            <p>
              You may close your account at any time from your account settings or by contacting us.
              We may suspend or terminate your account, with or without notice, if you breach these
              Terms, fail to pay fees, or engage in conduct that we reasonably believe is harmful to
              other users or to Aakasa Digital. Upon termination, your right to use the Services ceases
              immediately. Provisions that by their nature should survive termination will remain in
              effect.
            </p>
          </div>

          {/* 14 */}
          <div>
            <h2 className="mb-3 text-base font-bold text-foreground">14. Governing Law and Dispute Resolution</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of Sri Lanka, without
              regard to conflict-of-law principles. Any dispute arising out of or in connection with
              these Terms shall first be submitted to good-faith negotiation. If unresolved within 30
              days, disputes shall be referred to the courts of Sri Lanka, which shall have exclusive
              jurisdiction.
            </p>
          </div>

          {/* 15 */}
          <div>
            <h2 className="mb-3 text-base font-bold text-foreground">15. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. We will provide at least 14 days&apos; notice
              of material changes via email or a prominent notice within the Services. Your continued
              use of the Services after the effective date of revised Terms constitutes your acceptance
              of those changes.
            </p>
          </div>

          {/* 16 */}
          <div>
            <h2 className="mb-3 text-base font-bold text-foreground">16. General</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li><strong className="text-foreground">Entire agreement:</strong> These Terms, together with our Privacy Policy and any product-specific terms, constitute the entire agreement between you and Aakasa Digital.</li>
              <li><strong className="text-foreground">Severability:</strong> If any provision is found unenforceable, the remaining provisions remain in full force.</li>
              <li><strong className="text-foreground">Waiver:</strong> Our failure to enforce any provision does not constitute a waiver of our right to do so in the future.</li>
              <li><strong className="text-foreground">Assignment:</strong> You may not assign your rights or obligations under these Terms without our prior written consent. We may assign our rights without restriction.</li>
            </ul>
          </div>

          {/* 17 */}
          <div>
            <h2 className="mb-3 text-base font-bold text-foreground">17. Contact Us</h2>
            <p>
              If you have questions about these Terms or our Services, please contact us at:
            </p>
            <address className="mt-3 not-italic">
              <strong className="text-foreground">Aakasa Digital (Pvt) Ltd</strong><br />
              Sri Lanka<br />
              <a href="mailto:legal@aakasa.dev" className="text-primary hover:underline">
                legal@aakasa.dev
              </a>
            </address>
          </div>

        </div>
      </section>
    </>
  );
}
