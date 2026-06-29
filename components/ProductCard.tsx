import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  name: string;
  tagline: string;
  description: string;
  features?: string[];
  url: string;
  cta: string;
  icon: React.ReactNode;
  gradient?: string;
  badge?: string;
}

export default function ProductCard({
  name,
  tagline,
  description,
  features,
  url,
  cta,
  icon,
  gradient = 'linear-gradient(135deg, #1D8CFF 0%, #2563EB 100%)',
  badge,
}: ProductCardProps) {
  return (
    <div className="relative flex flex-col rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-lg hover:-translate-y-0.5">
      {badge && (
        <div className="absolute -top-3 left-8 rounded-full bg-primary px-3.5 py-0.5 text-xs font-semibold text-white">
          {badge}
        </div>
      )}

      {/* Product icon */}
      <div
        className="flex shrink-0 items-center justify-center rounded-2xl text-white shadow-sm"
        style={{ background: gradient, width: '3.25rem', height: '3.25rem' }}
        aria-hidden="true"
      >
        {icon}
      </div>

      <h3 className="mt-5 text-xl font-bold text-foreground">{name}</h3>
      <p
        className="mt-1 text-sm font-semibold"
        style={{
          background:           gradient,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor:  'transparent',
          backgroundClip:       'text',
        }}
      >
        {tagline}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>

      {features && features.length > 0 && (
        <ul className="mt-4 flex-1 space-y-1.5">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span
                className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ background: gradient }}
                aria-hidden="true"
              />
              {f}
            </li>
          ))}
        </ul>
      )}

      <a
        href={url}
        className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white ad-btn-primary"
        aria-label={cta}
      >
        {cta}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </a>
    </div>
  );
}
