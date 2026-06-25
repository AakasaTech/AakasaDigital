import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:py-32">
      {/* Sky-inspired radial gradients */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 90% 70% at 50% -10%, rgba(29,140,255,0.14) 0%, transparent 60%),' +
            'radial-gradient(ellipse 40% 40% at 10% 80%, rgba(56,189,248,0.07) 0%, transparent 50%),' +
            'radial-gradient(ellipse 40% 40% at 90% 60%, rgba(37,99,235,0.06) 0%, transparent 50%)',
        }}
      />

      {/* Star-like dot pattern */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
      >
        <defs>
          <pattern
            id="ad-stars"
            x="0"
            y="0"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="40" cy="40" r="1"   fill="rgba(29,140,255,0.25)" />
            <circle cx="15" cy="25" r="0.7" fill="rgba(56,189,248,0.18)" />
            <circle cx="65" cy="15" r="0.6" fill="rgba(29,140,255,0.12)" />
            <circle cx="8"  cy="60" r="0.8" fill="rgba(37,99,235,0.15)"  />
            <circle cx="72" cy="68" r="0.7" fill="rgba(56,189,248,0.12)" />
            <circle cx="55" cy="50" r="0.5" fill="rgba(29,140,255,0.10)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#ad-stars)" />
      </svg>

      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-3.5 py-1.5 text-xs font-semibold text-primary">
            <Sparkles className="h-3 w-3" aria-hidden="true" />
            AI-Powered Business Software
          </div>

          {/* Headline */}
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.75rem] lg:leading-[1.1]">
            Building Smarter Businesses
            <br />
            <span
              style={{
                background:           'linear-gradient(135deg, #1D8CFF 0%, #38BDF8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor:  'transparent',
                backgroundClip:       'text',
              }}
            >
              with AI-Powered Solutions
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Aakasa Digital builds practical SaaS products that help freelancers, startups, and small
            businesses automate workflows, improve productivity, and grow efficiently.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/products"
              className="ad-btn-primary inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-base font-semibold text-white"
            >
              Explore Products
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-7 py-3.5 text-base font-semibold text-foreground shadow-sm transition-colors hover:bg-muted"
            >
              Contact Us
            </Link>
          </div>

          {/* Product pill badges */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://billcraft.aakasa.dev"
              className="ad-glass inline-flex items-center gap-2 rounded-full border border-border/60 px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition-shadow hover:shadow-md"
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: 'linear-gradient(135deg, #1D8CFF, #2563EB)' }}
                aria-hidden="true"
              />
              BillCraft AI
            </a>
            <a
              href="https://supportcraft.aakasa.dev"
              className="ad-glass inline-flex items-center gap-2 rounded-full border border-border/60 px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition-shadow hover:shadow-md"
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: 'linear-gradient(135deg, #38BDF8, #0EA5E9)' }}
                aria-hidden="true"
              />
              SupportCraft AI
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
