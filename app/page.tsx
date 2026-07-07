import {
  Sparkles,
  Shield,
  Building2,
  TrendingUp,
  Wrench,
  Smile,
  ClipboardList,
  FileText,
  HeadphonesIcon,
  Globe,
} from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import ProductCard from '@/components/ProductCard';
import FeatureCard from '@/components/FeatureCard';
import CTASection from '@/components/CTASection';

const products = [
  {
    name:        'BillCraft AI',
    tagline:     'Intelligent Billing for Modern Businesses',
    description:
      'Create invoices, manage customers, track payments, and automate billing workflows with AI-powered assistance.',
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
      'A full-featured AI help desk — tickets, email, customer portal, knowledge base, and team management — all in one platform.',
    features: [
      'AI-suggested replies & auto-categorisation',
      'Inbound & outbound email (no SMTP setup needed)',
      'Customer self-service portal',
      'Knowledge base with rich article editor',
      'Team roles, assignments & real-time updates',
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
      'Task, project, and time-tracking built for freelancers and small teams. Log hours, manage projects with AI assistance, and push billable time directly to BillCraft AI as an invoice.',
    features: [
      'Task & project management with milestones',
      'Live timers and manual time entry',
      'AI assistant for task creation & summaries',
      'One-click invoice export to BillCraft AI',
      'Team workspaces — Free / Solo $9 / Team $19',
    ],
    url:      'https://taskcraft.aakasa.dev',
    cta:      'Visit TaskCraft AI',
    icon:     <ClipboardList className="h-6 w-6" />,
    gradient: 'linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)',
    badge:    'Live',
  },
];

const features = [
  {
    icon:        <Sparkles className="h-5 w-5" />,
    title:       'AI-Powered Automation',
    description: 'Our products harness the latest AI to automate repetitive tasks, reduce errors, and save you hours every week.',
  },
  {
    icon:        <Wrench className="h-5 w-5" />,
    title:       'Practical Business Tools',
    description: 'No bloat, no fluff. Every feature is designed to solve real business problems faced by freelancers and small teams.',
  },
  {
    icon:        <Shield className="h-5 w-5" />,
    title:       'Secure & Reliable',
    description: 'Built with security first. Your business data is encrypted and protected with bank-grade infrastructure.',
  },
  {
    icon:        <Building2 className="h-5 w-5" />,
    title:       'Built for Small Businesses',
    description: 'Affordable pricing and simple interfaces designed specifically for freelancers, startups, and growing teams.',
  },
  {
    icon:        <TrendingUp className="h-5 w-5" />,
    title:       'Scalable SaaS Products',
    description: 'Our software grows with your business — from your first client to your hundredth, the tools scale with you.',
  },
  {
    icon:        <Smile className="h-5 w-5" />,
    title:       'Simple User Experience',
    description: 'Clean, modern interfaces that anyone can use from day one. No training required, no steep learning curve.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Product Showcase */}
      <section className="border-t border-border px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="mb-3 inline-flex items-center rounded-full border border-primary/25 bg-primary/8 px-3.5 py-1.5 text-xs font-semibold text-primary">
              Our Products
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Software built for how you work
            </h2>
            <p className="mt-4 text-muted-foreground">
              Practical AI-powered tools that simplify your business operations.
            </p>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Aakasa */}
      <section className="border-t border-border bg-muted/20 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Aakasa Digital?</h2>
            <p className="mt-4 text-muted-foreground">
              We build software the way businesses actually need it.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Product Ecosystem */}
      <section className="border-t border-border px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
            {/* Left: icon + visual */}
            <div className="flex shrink-0 items-center justify-center">
              <div
                className="flex h-24 w-24 items-center justify-center rounded-3xl text-white shadow-lg"
                style={{ background: 'linear-gradient(135deg, #0A1C50 0%, #1D8CFF 100%)' }}
              >
                <Globe className="h-12 w-12" aria-hidden="true" />
              </div>
            </div>

            {/* Right: copy */}
            <div>
              <div className="inline-flex items-center rounded-full border border-primary/25 bg-primary/8 px-3.5 py-1.5 text-xs font-semibold text-primary mb-4">
                Growing Portfolio
              </div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                A growing ecosystem of business software
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Aakasa Digital is building a growing portfolio of SaaS products for business
                automation, billing, support, productivity, and operations. Our mission is to create
                a suite of deeply integrated tools that work together to run your entire business
                — all from one company you can trust.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['Billing & Invoicing', 'Customer Support', 'Task & Time Tracking', 'Productivity', 'Operations', 'More coming…'].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-muted/60 px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Ready to work smarter?"
        description="Explore our growing suite of business software products."
        primaryCta="View Products"
        primaryHref="/products"
        secondaryCta="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}
