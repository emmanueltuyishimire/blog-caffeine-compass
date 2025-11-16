import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Literata, Space_Grotesk } from 'next/font/google';
import { Analytics } from '@/components/analytics';

const fontBody = Literata({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

const fontHeadline = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-headline',
});

const siteUrl = 'https://blog.calculation.site';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Caffeine Compass',
    template: '%s | Caffeine Compass',
  },
  description: 'Your daily dose of coffee culture, reviews, and science.',
  keywords: ['coffee', 'espresso', 'pour-over', 'coffee beans', 'coffee review', 'caffeine', 'cafe'],
  authors: [{ name: 'T.Emmanuel' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Caffeine Compass',
    description: 'Your daily dose of coffee culture, reviews, and science.',
    url: '/',
    siteName: 'Caffeine Compass',
    images: [
      {
        url: '/og-image.png', // Update with your actual OG image path
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Caffeine Compass',
    description: 'Your daily dose of coffee culture, reviews, and science.',
    images: ['/og-image.png'], // Update with your actual OG image path
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const organizationLdJson = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Caffeine Compass',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    sameAs: [],
  };

  const websiteLdJson = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Caffeine Compass',
    url: siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };


  return (
    <html lang="en" className={`scroll-pt-[3.5rem] ${fontBody.variable} ${fontHeadline.variable}`}>
      <head>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLdJson) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLdJson) }}
          />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={cn('min-h-screen bg-background font-body antialiased')} suppressHydrationWarning={true}>
        <Analytics />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[999] focus:top-2 focus:left-4 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md">
            Skip to main content
        </a>
        <div className="relative flex min-h-dvh flex-col bg-background">
          <Header />
          <main id="main-content" className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
