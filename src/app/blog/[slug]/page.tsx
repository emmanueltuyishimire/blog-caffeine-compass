import { notFound } from 'next/navigation';
import Image from 'next/image';
import { blogPosts } from '@/lib/data';
import type { Metadata } from 'next';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const url = `/blog/${post.slug}`;

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
  
  const url = process.env.NEXT_PUBLIC_BASE_URL ? `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.slug}` : `/blog/${post.slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    headline: post.title,
    description: post.excerpt,
    image: post.imageUrl,
    author: {
      '@type': 'Person',
      name: 'T.Emmanuel',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Caffeine Compass',
      logo: {
        '@type': 'ImageObject',
        url: '/logo.png',
      },
    },
    datePublished: post.date,
  };


  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
