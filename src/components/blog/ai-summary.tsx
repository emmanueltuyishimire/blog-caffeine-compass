'use client';

import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import { generateBlogSummary } from '@/ai/flows/blog-summary-generator';
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

    try {
        const result = await generateBlogSummary({ blogPostContent: textContent });
        if (result.summary) {
            setSummary(result.summary);
        }
    } catch(e: any) {
        toast({
            variant: 'destructive',
            title: 'Error',
            description: e.message || 'Could not generate summary.',
        });
    }


    setIsLoading(false);
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
