import Link from 'next/link';
import Image from 'next/image';
import { blogPosts, productReviews } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { PostCard } from '@/components/blog/post-card';
import { ReviewCard } from '@/components/reviews/review-card';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-image');
  const latestPosts = blogPosts.slice(0, 2);
  const latestReviews = productReviews.slice(0, 2);

  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        <section className="relative w-full h-[60vh] min-h-[400px]">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="relative container h-full flex flex-col items-start justify-end pb-12 text-white">
            <h1 className="text-4xl md:text-6xl font-headline font-bold drop-shadow-lg max-w-3xl">
              Your Daily Dose of Coffee Culture
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl drop-shadow-md">
              Exploring the world of coffee from bean to cup. In-depth reviews, brewing guides, and the science behind your favorite drink.
            </p>
            <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/blog">
                Start Reading <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </section>
        
        <section className="py-12 md:py-20">
          <div className="container">
            <h2 className="text-3xl font-headline font-bold mb-8">Latest Posts</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {latestPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-headline font-bold mb-8">Recent Reviews</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {productReviews.map((review) => (
                <ReviewCard key={review.slug} review={review} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
