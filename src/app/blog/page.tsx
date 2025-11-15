import { blogPosts } from '@/lib/data';
import { PostCard } from '@/components/blog/post-card';
import type { Metadata } from 'next';
import { PaginationControls } from '@/components/blog/pagination-controls';
import { FeaturedPostCard } from '@/components/blog/featured-post-card';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'The latest articles on coffee culture, brewing techniques, and our love for the bean.',
};

export default function BlogPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = searchParams['page'] ?? '1';
  const pageNumber = Number(page);
  const perPage = 8;
  const totalPosts = blogPosts.length;
  
  const featuredPost = pageNumber === 1 ? blogPosts[0] : null;
  
  // On page 1, we show 1 featured + 7 regular posts.
  // On subsequent pages, we show 8 regular posts.
  const postsToShow = pageNumber === 1 ? 7 : perPage;
  const offset = pageNumber === 1 ? 1 : (pageNumber - 1) * perPage - (perPage - postsToShow -1);
  
  const paginatedPosts = blogPosts.slice(offset, offset + postsToShow);

  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl md:text-5xl font-headline font-bold mb-10">Caffeine Compass</h1>
      
      {featuredPost && (
        <div className="mb-12">
          <FeaturedPostCard post={featuredPost} />
        </div>
      )}

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {paginatedPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      <PaginationControls
        currentPage={pageNumber}
        perPage={perPage}
        totalPosts={totalPosts}
      />
    </div>
  );
}
