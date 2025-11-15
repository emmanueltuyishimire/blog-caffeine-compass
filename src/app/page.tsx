import { blogPosts } from '@/lib/data';
import { PostCard } from '@/components/blog/post-card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'The latest articles on coffee culture, brewing techniques, and our love for the bean.',
};


export default function Home() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl md:text-5xl font-headline font-bold mb-10">Caffeine Compass</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
