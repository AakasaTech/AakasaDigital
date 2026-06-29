import type { Metadata } from 'next';
import { FileText, HeadphonesIcon, Package, Sparkles } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import ProductCard from '@/components/ProductCard';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Explore Aakasa Digital\'s AI-powered SaaS products for billing, invoicing, and customer support.',
};

const products = [
  {
    name:        'BillCraft AI',
    tagline:     'Intelligent Billing for Modern Businesses',
    description:
      'Create invoices, manage customers, track payments, and automate billing workflows with AI-powered assistance. Designed for freelancers, consultants, and small businesses who want to get paid faster with less effort.',
    url:      'https://billcraft.aakasa.dev',
    cta:      'Visit BillCraft AI',
    icon:     <FileText className="h-6 w-6" />,
    gradient: 'linear-gradient(135deg, #1D8CFF 0%, #2563EB 100%)',
    badge:    'Live',
  },
  {
    name:        'SupportCraft AI',
    tagline:     'Smarter Support for Growing Businesses',
    description:
      'A complete AI-powered help desk for freelancers, startups, and small businesses. Handle every customer conversation — from email to portal — without stitching together separate tools.',
    features: [
      'Ticket management with status, priority & assignments',
      'AI-suggested replies, auto-categorisation & summaries (GPT-4o / Claude)',
      'Dedicated support email — acme@supportcraft.aakasa.dev — no SMTP setup',
      'Customer self-service portal to submit & track tickets',
      'Knowledge base with rich editor, categories & AI-assisted search',
      'Team management with owner / admin / agent roles',
      'Real-time ticket thread updates',
      'Flexible billing — Pro & Business plans via PayPal',
    ],
    url:      'https://supportcraft.aakasa.dev',
    cta:      'Visit SupportCraft AI',
    icon:     <HeadphonesIcon className="h-6 w-6" />,
    gradient: 'linear-gradient(135deg, #38BDF8 0%, #0EA5E9 100%)',
    badge:    'Live',
  },
];

const upcoming = [
  { name: 'ProjectCraft AI', description: 'AI-powered project management for small teams.' },
  { name: 'HireCraft AI', description: 'Streamlined applicant tracking and hiring workflows.' },
  { name: 'ReportCraft AI', description: 'Business analytics and reporting in plain language.' },
];

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        badge="All Products"
        title="Our Software Products"
        description="Practical AI-powered tools built for freelancers, startups, and small businesses."
      />

      {/* Current products */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-xl font-bold text-foreground">Available Now</h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Coming soon */}
      <section className="border-t border-border bg-muted/20 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Sparkles className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">More products coming soon</h2>
              <p className="text-sm text-muted-foreground">We&apos;re constantly building new tools.</p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {upcoming.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-dashed border-border bg-card/50 p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-muted-foreground">
                  <Package className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{item.name}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{item.description}</p>
                <span className="mt-4 inline-flex rounded-full border border-border bg-muted px-3 py-0.5 text-xs font-medium text-muted-foreground">
                  Coming soon
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to get started?"
        description="Try our AI-powered business tools and see the difference."
        primaryCta="Contact Us"
        primaryHref="/contact"
      />
    </>
  );
}
