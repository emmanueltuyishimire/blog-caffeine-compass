import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import type { blogPosts } from '@/lib/data';

type Post = (typeof blogPosts)[0];

interface FeaturedPostCardProps {
  post: Post;
}

export function FeaturedPostCard({ post }: FeaturedPostCardProps) {
  return (
    <Card className="group overflow-hidden md:grid md:grid-cols-2 md:items-center">
      <div className="p-0 md:order-2">
        <Link href={`/blog/${post.slug}`} className="block overflow-hidden" aria-label={`Read more about ${post.title}`}>
          <Image
            src={post.imageUrl}
            alt={post.title}
            width={1200}
            height={800}
            className="aspect-video object-cover w-full group-hover:scale-105 transition-transform duration-300"
            data-ai-hint={post.imageHint}
            priority
          />
        </Link>
      </div>
      <CardContent className="p-6 md:p-8 lg:p-12 md:order-1">
        <p className="text-sm font-semibold text-primary uppercase tracking-wider">Latest Post</p>
        <h2 className="font-headline text-2xl md:text-3xl lg:text-4xl leading-tight mt-2">
          <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
            {post.title}
          </Link>
        </h2>
        <p className="mt-4 text-muted-foreground line-clamp-3">{post.excerpt}</p>
        <div className="mt-6">
            <Link
            href={`/blog/${post.slug}`}
            className="font-semibold text-primary hover:underline flex items-center group-hover:gap-3 transition-all duration-300"
            aria-label={`Read more about ${post.title}`}
            >
            Read More <ArrowRight className="ml-2 h-4 w-4 " />
            </Link>
        </div>
      </CardContent>
    </Card>
  );
}
