'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';

interface PaginationControlsProps {
  currentPage: number;
  perPage: number;
  totalPosts: number;
}

export function PaginationControls({ currentPage, perPage, totalPosts }: PaginationControlsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const totalPages = Math.ceil(totalPosts / perPage);
  const hasPrevPage = currentPage > 1;
  const hasNextPage = currentPage < totalPages;

  const handlePrev = () => {
    router.push(`/?page=${currentPage - 1}`);
  };

  const handleNext = () => {
    router.push(`/?page=${currentPage + 1}`);
  };

  return (
    <div className="flex justify-center items-center gap-4 mt-12">
      <Button onClick={handlePrev} disabled={!hasPrevPage}>
        Previous
      </Button>
      <span className="text-sm text-muted-foreground">
        Page {currentPage} of {totalPages}
      </span>
      <Button onClick={handleNext} disabled={!hasNextPage}>
        Next
      </Button>
    </div>
  );
}
