'use server';
'use server';

import {generateBlogSummary} from '@/ai/flows/blog-summary-generator';

export const getBlogSummaryAction = async (input: {blogPostContent: string}) => {
  try {
    const result = await generateBlogSummary(input);
    return {summary: result.summary};
  } catch (error: any) {
    return {error: error.message || 'An unexpected error occurred.'};
  }
};
