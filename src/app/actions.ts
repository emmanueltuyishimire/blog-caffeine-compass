
'use server';

import { generateBlogSummary, type BlogSummaryInput } from '@/ai/flows/blog-summary-generator';

export async function getBlogSummaryAction(input: BlogSummaryInput) {
  try {
    const result = await generateBlogSummary(input);
    if (result && result.summary) {
        return { summary: result.summary, error: null };
    }
    return { summary: null, error: 'Failed to generate summary.' };
  } catch (e) {
    console.error(e);
    // This message will be displayed to the user.
    return { summary: null, error: 'An unexpected error occurred while generating the summary. Please try again later.' };
  }
}
