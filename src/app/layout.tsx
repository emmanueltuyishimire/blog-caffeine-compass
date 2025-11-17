import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Inter } from 'next/font/google';
import { Analytics } from '@/components/analytics';
import { Organization, WebSite, WithContext } from 'schema-dts';
import Script from 'next/script';

const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

const fontHeadline = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-headline',
});

const siteUrl = process.env.URL || 'https://blog.calculation.site';

const organizationLdJson: WithContext<Organization> = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Caffeine Compass',
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  sameAs: ['https://calculation.site'],
};

const websiteLdJson: WithContext<WebSite> = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Caffeine Compass',
  url: siteUrl,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteUrl}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Caffeine Compass',
    template: '%s | Caffeine Compass',
  },
  description: 'Your daily dose of coffee culture, reviews, and science.',
  keywords: ['coffee', 'espresso', 'pour-over', 'coffee beans', 'coffee review', 'caffeine', 'cafe'],
  authors: [{ name: 'T.Emmanuel', url: siteUrl }],
  creator: 'T.Emmanuel',
  publisher: 'Caffeine Compass',
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
        url: '/caffeine-calculation-site-background-image.webp',
        width: 1200,
        height: 630,
        alt: 'A panoramic image of coffee beans and brewing equipment.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Caffeine Compass',
    description: 'Your daily dose of coffee culture, reviews, and science.',
    images: ['/caffeine-calculation-site-background-image.webp'],
  },
  other: {
    'google-adsense-account': 'ca-pub-3042243846300811',
    'script-ld-json': JSON.stringify([organizationLdJson, websiteLdJson]),
  },
  icons: {
    icon: '/favicon.ico',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className={`scroll-pt-[3.5rem] ${fontBody.variable} ${fontHeadline.variable}`}>
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3042243846300811"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
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
