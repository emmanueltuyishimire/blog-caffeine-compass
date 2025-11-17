import { notFound } from 'next/navigation';
import Image from 'next/image';
import { blogPosts } from '@/lib/data';
import type { Metadata } from 'next';
import { FAQPage, WithContext } from 'schema-dts';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

const siteUrl = process.env.URL || 'http://localhost:3000';

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }
  
  const url = `/blog/${post.slug}`;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const fullUrl = `${siteUrl}${url}`;

  // Regular expression to find all FAQ sections
  const faqRegex = /<dt.*?>(.*?)<\/dt><dd>(.*?)<\/dd>/gs;
  const faqMatches = [...post.content.matchAll(faqRegex)];

  const faqJsonLd: WithContext<FAQPage> | null = faqMatches.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqMatches.map(match => {
      // Basic text extraction from HTML, can be improved with a parser if needed
      const question = match[1].replace(/<[^>]*>/g, '').trim();
      const answer = match[2].replace(/<[^>]*>/g, '').trim();
      return {
        '@type': 'Question',
        name: question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: answer,
        },
      };
    }),
  } : null;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': fullUrl,
    },
    headline: post.title,
    description: post.excerpt,
    image: post.imageUrl,
    author: {
      '@type': 'Organization',
      name: 'Caffeine Compass',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Caffeine Compass',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`,
      },
    },
    datePublished: post.date,
  };

  const scripts = [
    <script
      key="article-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
    />,
  ];

  if (faqJsonLd) {
    scripts.push(
      <script
        key="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    );
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: url,
      images: [
        {
          url: post.imageUrl,
          width: 1200,
          height: 800,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.imageUrl],
    },
    other: {
      'script-ld-json': scripts,
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }
  
  return (
    <article>
      <header className="container pt-8 md:pt-16">
         <h1 className="text-3xl md:text-5xl font-headline font-bold text-center max-w-4xl mx-auto">
            {post.title}
          </h1>
      </header>

      <div className="container max-w-5xl mx-auto my-8 md:my-12">
        <div className="relative w-full h-auto aspect-video rounded-lg overflow-hidden">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
            data-ai-hint={post.imageHint}
          />
        </div>
      </div>

      <div className="container max-w-3xl mx-auto pb-8 md:pb-16">
        <div
          className="prose prose-lg dark:prose-invert max-w-none text-foreground prose-headings:font-headline prose-headings:text-foreground prose-p:font-body prose-li:font-body"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  );
}
