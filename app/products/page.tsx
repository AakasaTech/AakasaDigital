import type { Metadata } from 'next';
import { ClipboardList, FileText, FileStack, HeadphonesIcon, Hammer } from 'lucide-react';
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

const pdfcraftSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'PDFCraft',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: 'https://pdfcraft.aakasa.dev',
  description:
    'Merge, split, organize, convert, compress, and sign PDF files — entirely client-side, with nothing ever uploaded to a server.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: 'Free to use.',
  },
  author: {
    '@type': 'Organization',
    name: 'Aakasa Digital',
    url: 'https://aakasa.dev',
  },
};

const toolsSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Aakasa Tools',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  url: 'https://tools.aakasa.dev',
  description:
    'A growing suite of free browser utilities — JSON formatter, password generator, image compressor, and more. Everything runs 100% client-side.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: 'Free to use.',
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
    "Explore Aakasa Digital's AI-powered SaaS products — BillCraft AI for invoicing, SupportCraft AI for customer support, TaskCraft AI for task and time tracking, PDFCraft for PDF tools, and Aakasa Tools for free browser utilities. Built for freelancers, startups, and small businesses.",
  openGraph: {
    title:       'Products | Aakasa Digital',
    description: "Explore Aakasa Digital's AI-powered SaaS products — BillCraft AI, SupportCraft AI, TaskCraft AI, PDFCraft, and Aakasa Tools. Built for freelancers, startups, and small businesses.",
    url:         'https://aakasa.dev/products',
  },
  twitter: {
    title:       'Products | Aakasa Digital',
    description: "Explore Aakasa Digital's AI-powered SaaS products — BillCraft AI, SupportCraft AI, TaskCraft AI, PDFCraft, and Aakasa Tools. Built for freelancers, startups, and small businesses.",
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
      'A complete AI-powered help desk for freelancers, startups, and small businesses. Handle every customer conversation — tickets, email, and self-service portal — without stitching together separate tools.',
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
    url:      'https://taskcraft.aakasa.dev',
    cta:      'Visit TaskCraft AI',
    icon:     <ClipboardList className="h-6 w-6" />,
    gradient: 'linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)',
    badge:    'Live',
  },
  {
    name:        'PDFCraft',
    tagline:     'Every PDF tool you need, right in your browser.',
    description:
      'Merge, split, organize, convert, compress, and sign PDF files — entirely client-side, with nothing ever uploaded to a server. Built for anyone who needs quick, private PDF edits.',
    url:      'https://pdfcraft.aakasa.dev',
    cta:      'Visit PDFCraft',
    icon:     <FileStack className="h-6 w-6" />,
    gradient: 'linear-gradient(135deg, #0A1C50 0%, #1D8CFF 100%)',
    badge:    'Live',
  },
  {
    name:        'Aakasa Tools',
    tagline:     'Every tool you need, 100% in your browser.',
    description:
      'A growing suite of free browser utilities — JSON formatter, password generator, image compressor, and more. Nothing you paste or upload ever leaves your browser.',
    url:      'https://tools.aakasa.dev',
    cta:      'Visit Aakasa Tools',
    icon:     <Hammer className="h-6 w-6" />,
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
    badge:    'Live',
  },
];

export default function ProductsPage() {
  return (
    <>
      <JsonLd schema={[billcraftSchema, supportcraftSchema, taskcraftSchema, pdfcraftSchema, toolsSchema]} />
      <PageHeader
        badge="All Products"
        title="Our Software Products"
        description="Practical AI-powered tools built for freelancers, startups, and small businesses."
      />

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.name} {...product} />
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
