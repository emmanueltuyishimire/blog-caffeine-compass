import { productReviews } from '@/lib/data';
import { ReviewCard } from '@/components/reviews/review-card';
import type { Metadata } from 'next';
import { headers } from 'next/headers';

export const metadata: Metadata = {
  title: 'Product Reviews',
  description: 'Unbiased reviews of the latest coffee gear, from grinders to espresso machines.',
  alternates: {
    canonical: '/reviews',
  },
};

export default function ReviewsPage() {
    const headersList = headers();
    const proto = headersList.get('x-forwarded-proto') || 'http';
    const host = headersList.get('x-forwarded-host') || headersList.get('host');
    const url = `${proto}://${host}/reviews`;

    const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Product Reviews',
    description: 'Unbiased reviews of the latest coffee gear, from grinders to espresso machines.',
    url: url,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: productReviews.map((review, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
            '@type': 'Product',
            name: review.productName,
            url: url,
            image: review.imageUrl,
            review: {
                '@type': 'Review',
                reviewRating: {
                    '@type': 'Rating',
                    ratingValue: review.rating.toString(),
                    bestRating: '5',
                },
                author: {
                    '@type': 'Person',
                    name: 'T.Emmanuel'
                }
            }
        }
      })),
    },
  };
  return (
    <div className="container py-12 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="text-4xl md:text-5xl font-headline font-bold mb-10">Product Reviews</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {productReviews.map((review) => (
          <ReviewCard key={review.slug} review={review} />
        ))}
      </div>
    </div>
  );
}
