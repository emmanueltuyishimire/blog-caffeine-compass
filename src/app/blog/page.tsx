import { blogPosts } from '@/lib/data';
import { PostCard } from '@/components/blog/post-card';
import type { Metadata } from 'next';
import { PaginationControls } from '@/components/blog/pagination-controls';
import { FeaturedPostCard } from '@/components/blog/featured-post-card';

interface BlogPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const siteUrl = process.env.URL || 'https://blog.calculation.site';

export async function generateMetadata({ searchParams }: BlogPageProps): Promise<Metadata> {
  const page = searchParams['page'] ?? '1';
  const pageUrl = `/blog${page !== '1' ? `?page=${page}` : ''}`;

  return {
    title: 'Blog',
    description: 'The latest articles on coffee culture, brewing techniques, and our love for the bean.',
    alternates: {
      canonical: pageUrl,
    },
  };
}

export default function BlogPage({ searchParams }: BlogPageProps) {
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

  const pageUrl = `${siteUrl}/blog`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Caffeine Compass Blog',
    description: 'The latest articles on coffee culture, brewing techniques, and our love for the bean.',
    url: pageUrl,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: blogPosts.map((post, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${siteUrl}/blog/${post.slug}`,
        name: post.title,
      })),
    },
  };

  return (
    <div className="container py-12 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
