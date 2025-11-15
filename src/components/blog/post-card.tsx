import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import type { blogPosts } from '@/lib/data';

type Post = (typeof blogPosts)[0];

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card className="flex flex-col group overflow-hidden">
      <CardHeader className="p-0">
        <Link href={`/${post.slug}`} className="block overflow-hidden">
          <Image
            src={post.imageUrl}
            alt={post.title}
            width={1200}
            height={800}
            className="aspect-[3/2] object-cover w-full group-hover:scale-105 transition-transform duration-300"
            data-ai-hint={post.imageHint}
          />
        </Link>
      </CardHeader>
      <CardContent className="p-6 flex-1">
        <CardTitle className="font-headline text-xl lg:text-2xl leading-snug">
          <Link href={`/${post.slug}`} className="hover:text-primary transition-colors">
            {post.title}
          </Link>
        </CardTitle>
        <p className="mt-3 text-muted-foreground line-clamp-3">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link
          href={`/${post.slug}`}
          className="font-semibold text-primary hover:underline flex items-center group-hover:gap-3 transition-all duration-300"
        >
          Read More <ArrowRight className="ml-2 h-4 w-4 " />
        </Link>
      </CardFooter>
    </Card>
  );
}
