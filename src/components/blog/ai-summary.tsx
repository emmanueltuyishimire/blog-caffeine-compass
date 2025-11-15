'use client';

import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import { getBlogSummaryAction } from '@/app/actions';
import { CoffeeBeanIcon } from '../icons';

interface AiSummaryProps {
  content: string;
}

export function AiSummary({ content }: AiSummaryProps) {
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerateSummary = async () => {
    setIsLoading(true);
    setSummary('');

    // Quick sanitization to remove HTML for the AI prompt
    const textContent = content.replace(/<[^>]*>/g, ' ');

    const result = await getBlogSummaryAction({ blogPostContent: textContent });

    setIsLoading(false);

    if (result.error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: result.error,
      });
    } else if (result.summary) {
      setSummary(result.summary);
    }
  };

  return (
    <div className="my-8">
      <div className="flex justify-center">
        <Button onClick={handleGenerateSummary} disabled={isLoading} size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
          {isLoading ? (
            <>
              <Sparkles aria-hidden="true" className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Sparkles aria-hidden="true" className="mr-2 h-4 w-4" />
              Generate AI Summary
            </>
          )}
        </Button>
      </div>

      {summary && (
        <Alert className="mt-6 bg-card" role="status">
          <CoffeeBeanIcon aria-hidden="true" className="h-5 w-5" />
          <AlertTitle className="font-headline">AI-Generated Summary</AlertTitle>
          <AlertDescription className="mt-2">{summary}</AlertDescription>
        </Alert>
      )}
    </div>
  );
}
