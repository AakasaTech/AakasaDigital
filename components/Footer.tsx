import Link from 'next/link';
import Image from 'next/image';

const products = [
  { label: 'BillCraft AI — AI-powered invoicing', href: 'https://billcraft.aakasa.dev' },
  { label: 'SupportCraft AI — AI help desk', href: 'https://supportcraft.aakasa.dev' },
  { label: 'TaskCraft AI — Task & time tracking', href: 'https://taskcraft.aakasa.dev' },
  { label: 'PDFCraft — Browser-based PDF tools', href: 'https://pdfcraft.aakasa.dev' },
  { label: 'Aakasa Tools — Free browser utilities', href: 'https://tools.aakasa.dev' },
];

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" aria-label="Aakasa Digital">
              <Image
                src="/logo.png"
                alt="Aakasa Digital"
                height={96}
                width={480}
                className="h-24 w-auto"
              />
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Building practical SaaS and AI-powered solutions for modern businesses.
            </p>
            <p className="mt-3 text-xs text-muted-foreground">
              <a href="mailto:hello@aakasa.dev" className="hover:text-foreground transition-colors">
                hello@aakasa.dev
              </a>
            </p>
          </div>

          {/* Products */}
          <div>
            <p className="mb-4 text-sm font-semibold text-foreground">Products</p>
            <ul className="space-y-2.5">
              {products.map((p) => (
                <li key={p.href}>
                  <a
                    href={p.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="mb-4 text-sm font-semibold text-foreground">Company</p>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Aakasa Digital (Pvt) Ltd. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
