import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star } from 'lucide-react';
import type { productReviews } from '@/lib/data';

type Review = (typeof productReviews)[0];

interface ReviewCardProps {
  review: Review;
}

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-accent fill-accent' : 'text-muted-foreground/50'
        }`}
      />
    ))}
  </div>
);

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <Card className="flex flex-col group overflow-hidden">
      <CardHeader className="p-0">
        <div className="block overflow-hidden">
          <Image
            src={review.imageUrl}
            alt={review.productName}
            width={600}
            height={400}
            className="aspect-[3/2] object-cover w-full group-hover:scale-105 transition-transform duration-300"
            data-ai-hint={review.imageHint}
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-1 flex flex-col">
        <StarRating rating={review.rating} />
        <CardTitle className="font-headline text-lg lg:text-xl leading-snug mt-2">
          {review.productName}
        </CardTitle>
        <p className="mt-2 text-muted-foreground flex-1">{review.summary}</p>
      </CardContent>
    </Card>
  );
}
