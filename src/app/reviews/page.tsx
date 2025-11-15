import { productReviews } from '@/lib/data';
import { ReviewCard } from '@/components/reviews/review-card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Product Reviews',
  description: 'Unbiased reviews of the latest coffee gear, from grinders to espresso machines.',
};

export default function ReviewsPage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl md:text-5xl font-headline font-bold mb-10">Product Reviews</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {productReviews.map((review) => (
          <ReviewCard key={review.slug} review={review} />
        ))}
      </div>
    </div>
  );
}
