import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: {
    default: 'Caffeine Compass',
    template: '%s | Caffeine Compass',
  },
  description: 'Your daily dose of coffee culture, reviews, and science.',
  keywords: ['coffee', 'espresso', 'pour-over', 'coffee beans', 'coffee review', 'caffeine', 'cafe'],
  authors: [{ name: 'Caffeine Compass' }],
  openGraph: {
    title: 'Caffeine Compass',
    description: 'Your daily dose of coffee culture, reviews, and science.',
    url: 'https://calculation.site/blog',
    siteName: 'Caffeine Compass',
    images: [
      {
        url: '/blog/og-image.png', // Update with your actual OG image path
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
    images: ['/blog/og-image.png'], // Update with your actual OG image path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-pt-[3.5rem]">
      <head>
        <link rel="icon" href="/blog/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Literata:ital,opsz,wght@0,7..72,400;0,7..72,700;1,7..72,400&family=Space+Grotesk:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn('min-h-screen bg-background font-body antialiased')} suppressHydrationWarning={true}>
        <div className="relative flex min-h-dvh flex-col bg-background">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
