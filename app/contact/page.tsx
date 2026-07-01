import type { Metadata } from 'next';
import { Mail, Globe } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Aakasa Digital. Ask about our products, partnerships, or anything else — we typically respond within 1–2 business days.',
  openGraph: {
    title:       'Contact Us | Aakasa Digital',
    description: 'Get in touch with Aakasa Digital. Ask about our products, partnerships, or anything else — we typically respond within 1–2 business days.',
    url:         'https://aakasa.dev/contact',
  },
  twitter: {
    title:       'Contact Us | Aakasa Digital',
    description: 'Get in touch with Aakasa Digital. Ask about our products, partnerships, or anything else — we typically respond within 1–2 business days.',
  },
};

const contactInfo = [
  {
    icon:  <Mail className="h-5 w-5" />,
    label: 'General Enquiries',
    value: 'hello@aakasa.dev',
    href:  'mailto:hello@aakasa.dev',
  },
  {
    icon:  <Mail className="h-5 w-5" />,
    label: 'Support',
    value: 'support@aakasa.dev',
    href:  'mailto:support@aakasa.dev',
  },
  {
    icon:  <Globe className="h-5 w-5" />,
    label: 'Website',
    value: 'aakasa.dev',
    href:  'https://aakasa.dev',
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        badge="Contact"
        title="Get in touch"
        description="Have a question or want to learn more? We'd love to hear from you."
      />

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-5">

            {/* Contact form */}
            <div className="lg:col-span-3">
              <h2 className="mb-6 text-xl font-bold text-foreground">Send us a message</h2>
              <ContactForm />
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2">
              <h2 className="mb-6 text-xl font-bold text-foreground">Contact information</h2>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">{item.label}</p>
                      <a
                        href={item.href}
                        className="mt-0.5 block text-sm font-semibold text-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="mt-6 rounded-2xl p-6 text-white"
                style={{ background: 'linear-gradient(135deg, #0A1C50 0%, #1D8CFF 100%)' }}
              >
                <p className="text-sm font-semibold">Response time</p>
                <p className="mt-1.5 text-sm text-white/80">
                  We typically respond to all enquiries within 1–2 business days.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
