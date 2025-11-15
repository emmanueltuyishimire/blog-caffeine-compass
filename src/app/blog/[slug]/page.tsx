import { notFound } from 'next/navigation';
import Image from 'next/image';
import { blogPosts } from '@/lib/data';
import { AiSummary } from '@/components/blog/ai-summary';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article>
      <header className="relative w-full h-[50vh] min-h-[300px]">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover"
          priority
          data-ai-hint={post.imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
        <div className="relative container h-full flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-3xl md:text-5xl font-headline font-bold drop-shadow-lg max-w-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-white/90">
            By {post.author} on {post.date}
          </p>
        </div>
      </header>

      <div className="container max-w-3xl mx-auto py-8 md:py-16">
        <div
          className="prose prose-lg dark:prose-invert max-w-none text-foreground prose-headings:font-headline prose-headings:text-foreground prose-p:font-body prose-li:font-body"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        <AiSummary content={post.content} />
      </div>
    </article>
  );
}
