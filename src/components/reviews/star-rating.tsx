import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
}

export const StarRating = ({ rating }: StarRatingProps) => (
  <div className="flex items-center gap-0.5" aria-label={`Rating: ${rating} out of 5 stars`}>
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-accent fill-accent' : 'text-muted-foreground/50'
        }`}
        aria-hidden="true"
      />
    ))}
  </div>
);
