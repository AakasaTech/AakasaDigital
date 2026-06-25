import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  headline: string;
  description: string;
  primaryCta: string;
  primaryHref: string;
  secondaryCta?: string;
  secondaryHref?: string;
}

export default function CTASection({
  headline,
  description,
  primaryCta,
  primaryHref,
  secondaryCta,
  secondaryHref,
}: CTASectionProps) {
  return (
    <section className="border-t border-border bg-muted/20 px-6 py-20 text-center">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{headline}</h2>
        <p className="mt-4 text-lg text-muted-foreground">{description}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={primaryHref}
            className="ad-btn-primary inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-base font-semibold text-white"
          >
            {primaryCta}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          {secondaryCta && secondaryHref && (
            <Link
              href={secondaryHref}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-7 py-3.5 text-base font-semibold text-foreground shadow-sm transition-colors hover:bg-muted"
            >
              {secondaryCta}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
