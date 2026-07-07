import type { Metadata } from 'next';
import { ClipboardList, FileText, HeadphonesIcon, Package, Sparkles } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import ProductCard from '@/components/ProductCard';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';

const billcraftSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'BillCraft AI',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: 'https://billcraft.aakasa.dev',
  description:
    'AI-powered invoicing and billing platform. Create invoices, manage customers, track payments, and automate billing workflows — built for freelancers, consultants, and small businesses.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: 'Free trial available. Paid plans for advanced features.',
  },
  author: {
    '@type': 'Organization',
    name: 'Aakasa Digital',
    url: 'https://aakasa.dev',
  },
};

const supportcraftSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'SupportCraft AI',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: 'https://supportcraft.aakasa.dev',
  description:
    'AI-powered help desk for freelancers, startups, and small businesses. Manage tickets, email, customer portal, knowledge base, and team workflows — all in one platform.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: 'Free trial available. Pro and Business plans via PayPal.',
  },
  author: {
    '@type': 'Organization',
    name: 'Aakasa Digital',
    url: 'https://aakasa.dev',
  },
};

const taskcraftSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'TaskCraft AI',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: 'https://taskcraft.aakasa.dev',
  description:
    'AI-powered task, project, and time-tracking platform for freelancers, consultants, and small teams. Plan projects, track time, and convert billable hours to invoices in one click.',
  offers: {
    '@type': 'AggregateOffer',
    lowPrice: '0',
    highPrice: '19',
    priceCurrency: 'USD',
    description: 'Free plan available. Solo $9/month, Team $19/month.',
  },
  author: {
    '@type': 'Organization',
    name: 'Aakasa Digital',
    url: 'https://aakasa.dev',
  },
};

export const metadata: Metadata = {
  title: 'Products',
  description:
    "Explore Aakasa Digital's AI-powered SaaS products — BillCraft AI for invoicing, SupportCraft AI for customer support, and TaskCraft AI for task and time tracking. Built for freelancers, startups, and small businesses.",
  openGraph: {
    title:       'Products | Aakasa Digital',
    description: "Explore Aakasa Digital's AI-powered SaaS products — BillCraft AI, SupportCraft AI, and TaskCraft AI. Built for freelancers, startups, and small businesses.",
    url:         'https://aakasa.dev/products',
  },
  twitter: {
    title:       'Products | Aakasa Digital',
    description: "Explore Aakasa Digital's AI-powered SaaS products — BillCraft AI, SupportCraft AI, and TaskCraft AI. Built for freelancers, startups, and small businesses.",
  },
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
  {
    name:        'TaskCraft AI',
    tagline:     'Plan smarter. Track faster. Invoice instantly.',
    description:
      'A unified task, project, and time-tracking platform for freelancers, consultants, and small teams. Manage projects, log billable hours with one-click timers, and push tracked time directly to BillCraft AI as a ready-to-send invoice.',
    features: [
      'Task & project management with milestones and priorities',
      'Time tracking with live timers and manual entry',
      'AI assistant for task creation, summaries & workload insights',
      'One-click invoice export to BillCraft AI',
      'SupportCraft AI integration — convert support tickets into tasks',
      'Team workspaces with roles, permissions & activity feed',
      'Reports, calendar view & client management',
      'Free / Solo $9 / Team $19 per month',
    ],
    url:      'https://taskcraft.aakasa.dev',
    cta:      'Visit TaskCraft AI',
    icon:     <ClipboardList className="h-6 w-6" />,
    gradient: 'linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)',
    badge:    'Live',
  },
];

const upcoming = [
  { name: 'HireCraft AI', description: 'Streamlined applicant tracking and hiring workflows.' },
  { name: 'ReportCraft AI', description: 'Business analytics and reporting in plain language.' },
  { name: 'StoreCraft AI', description: 'Lightweight e-commerce and order management for small sellers.' },
];

export default function ProductsPage() {
  return (
    <>
      <JsonLd schema={[billcraftSchema, supportcraftSchema, taskcraftSchema]} />
      <PageHeader
        badge="All Products"
        title="Our Software Products"
        description="Practical AI-powered tools built for freelancers, startups, and small businesses."
      />

      {/* Current products */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-xl font-bold text-foreground">Available Now</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
