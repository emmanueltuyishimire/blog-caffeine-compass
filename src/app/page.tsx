import { blogPosts } from '@/lib/data';
import { PostCard } from '@/components/blog/post-card';
import type { Metadata } from 'next';
import { PaginationControls } from '@/components/blog/pagination-controls';

interface BlogPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({ searchParams }: BlogPageProps): Promise<Metadata> {
  const page = searchParams['page'] ?? '1';
  const pageUrl = page === '1' ? '/' : `/?page=${page}`;

  return {
    title: {
      default: 'Caffeine Compass',
      template: '%s | Caffeine Compass',
    },
    description: 'Your daily dose of coffee culture, reviews, and science.',
    alternates: {
      canonical: pageUrl,
    },
  };
}

export default function BlogPage({ searchParams }: BlogPageProps) {
  const page = searchParams['page'] ?? '1';
  const pageNumber = Number(page);
  const perPage = 9;
  const totalPosts = blogPosts.length;
  
  const offset = (pageNumber - 1) * perPage;
  const paginatedPosts = blogPosts.slice(offset, offset + perPage);

  return (
    <div>
      <section className="relative h-[60vh] w-full bg-slate-900 flex items-center justify-center">
            <div className="relative z-10 text-center p-4">
                <h1 className="text-4xl md:text-6xl font-headline font-bold text-white">
                Caffeine Compass
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-slate-300">
                Your daily dose of coffee culture, brewing techniques, and our love for the bean.
                </p>
            </div>
        </section>

      <div className="container py-12 md:py-20">
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
    </div>
  );
}
