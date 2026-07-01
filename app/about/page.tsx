import type { Metadata } from 'next';
import { Target, Eye, Users, Lightbulb } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Aakasa Digital — a software company building practical SaaS and AI-powered products for modern businesses.',
  openGraph: {
    title:       'About Aakasa Digital',
    description: 'Learn about Aakasa Digital — a software company building practical SaaS and AI-powered products for modern businesses.',
    url:         'https://aakasa.dev/about',
  },
  twitter: {
    title:       'About Aakasa Digital',
    description: 'Learn about Aakasa Digital — a software company building practical SaaS and AI-powered products for modern businesses.',
  },
};

const values = [
  {
    icon:        <Lightbulb className="h-5 w-5" />,
    title:       'Practical over Perfect',
    description: 'We ship software that works for real businesses today, not theoretical solutions for tomorrow.',
  },
  {
    icon:        <Users className="h-5 w-5" />,
    title:       'Built for People',
    description: 'Our products are designed for the people who use them — simple, affordable, and reliable.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        badge="About Us"
        title="About Aakasa Digital"
        description="A software company focused on building practical SaaS and AI-powered products for modern businesses."
      />

      {/* Main content */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Aakasa Digital is a software company focused on building practical SaaS and AI-powered
              products for freelancers, startups, and small businesses. Our goal is to create simple,
              affordable, and reliable software that solves real business problems.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              We believe that great software should be accessible to every business — not just
              enterprise teams with large budgets. That&apos;s why we build tools that are priced fairly,
              easy to use from day one, and powerful enough to grow with your business.
            </p>
          </div>

          {/* Mission & Vision cards */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            <div
              className="rounded-2xl p-8 text-white"
              style={{ background: 'linear-gradient(135deg, #0A1C50 0%, #1D8CFF 100%)' }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
                <Target className="h-5 w-5 text-white" aria-hidden="true" />
              </div>
              <h2 className="mt-5 text-lg font-bold">Our Mission</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                To create practical software that helps businesses automate operations, improve
                productivity, and grow efficiently.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Eye className="h-5 w-5" aria-hidden="true" />
              </div>
              <h2 className="mt-5 text-lg font-bold text-foreground">Our Vision</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                To build a global portfolio of software products trusted by businesses of all sizes.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mt-14">
            <h2 className="mb-6 text-xl font-bold text-foreground">What we believe in</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    {v.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{v.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {v.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Want to work with us?"
        description="We'd love to hear from you. Reach out to learn more about our products or partnerships."
        primaryCta="Get in Touch"
        primaryHref="/contact"
        secondaryCta="View Products"
        secondaryHref="/products"
      />
    </>
  );
}
