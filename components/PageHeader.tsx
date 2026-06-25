interface PageHeaderProps {
  badge?: string;
  title: string;
  description?: string;
}

export default function PageHeader({ badge, title, description }: PageHeaderProps) {
  return (
    <section className="border-b border-border bg-muted/20 px-6 py-16 text-center">
      <div className="mx-auto max-w-3xl">
        {badge && (
          <div className="mb-4 inline-flex items-center rounded-full border border-primary/25 bg-primary/8 px-3.5 py-1.5 text-xs font-semibold text-primary">
            {badge}
          </div>
        )}
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
        {description && (
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{description}</p>
        )}
      </div>
    </section>
  );
}
