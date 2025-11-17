import { blogPosts } from '@/lib/data';
import { PostCard } from '@/components/blog/post-card';
import type { Metadata } from 'next';
import { PaginationControls } from '@/components/blog/pagination-controls';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

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

function BlogPosts({ currentPage }: { currentPage: number }) {
  const perPage = 9;
  const totalPosts = blogPosts.length;
  
  const offset = (currentPage - 1) * perPage;
  const paginatedPosts = blogPosts.slice(offset, offset + perPage);

  return (
    <>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {paginatedPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      <PaginationControls
        currentPage={currentPage}
        perPage={perPage}
        totalPosts={totalPosts}
      />
    </>
  );
}

function BlogLoadingSkeleton() {
  return (
    <>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="flex flex-col space-y-3">
            <Skeleton className="h-[250px] w-full rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}


export default function BlogPage({ searchParams }: BlogPageProps) {
  const page = searchParams['page'] ?? '1';
  const pageNumber = Number(page);

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
        <Suspense fallback={<BlogLoadingSkeleton />}>
          <BlogPosts currentPage={pageNumber} />
        </Suspense>
      </div>
    </div>
  );
}
