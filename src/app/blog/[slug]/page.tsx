import { notFound } from 'next/navigation';
import Image from 'next/image';
import { blogPosts } from '@/lib/data';
import type { Metadata } from 'next';
import { FAQPage, WithContext, Article, ImageObject, BreadcrumbList } from 'schema-dts';

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
  const fullUrl = `${siteUrl}${url}`;

  // FAQPage JSON-LD
  const faqRegex = /<dt.*?>(.*?)<\/dt><dd>(.*?)<\/dd>/gs;
  const faqMatches = [...post.content.matchAll(faqRegex)];
  const faqJsonLd: WithContext<FAQPage> | null = faqMatches.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqMatches.map(match => {
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

  // Article JSON-LD
  const articleJsonLd: WithContext<Article> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': fullUrl,
    },
    headline: post.title,
    description: post.excerpt,
    image: `${siteUrl}${post.imageUrl}`,
    author: {
      '@type': 'Organization',
      name: 'Caffeine Compass',
      url: siteUrl,
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
    dateModified: post.date, // Using post.date as fallback
  };

  // ImageObject JSON-LD
  const imageJsonLd: WithContext<ImageObject> = {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: `${siteUrl}${post.imageUrl}`,
    name: post.title,
    description: post.excerpt,
    author: {
        '@type': 'Organization',
        name: 'Caffeine Compass',
    },
    encodingFormat: 'image/webp',
  };

  // BreadcrumbList JSON-LD
  const breadcrumbJsonLd: WithContext<BreadcrumbList> = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl,
        },
        {
            '@type': 'ListItem',
            position: 2,
            name: post.title,
            item: fullUrl,
        }
    ],
  };

  const allScripts = [
    articleJsonLd,
    imageJsonLd,
    breadcrumbJsonLd
  ];

  if (faqJsonLd) {
    allScripts.push(faqJsonLd);
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: fullUrl,
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
      'script-ld-json': JSON.stringify(allScripts),
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
