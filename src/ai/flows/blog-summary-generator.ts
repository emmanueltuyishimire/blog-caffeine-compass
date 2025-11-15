'use server';

/**
 * @fileOverview AI-powered blog post summarization flow.
 *
 * - generateBlogSummary - A function that generates a concise summary of a blog post.
 * - BlogSummaryInput - The input type for the generateBlogSummary function, which includes the blog post content.
 * - BlogSummaryOutput - The return type for the generateBlogSummary function, which includes the generated summary.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const BlogSummaryInputSchema = z.object({
  blogPostContent: z
    .string()
    .describe('The complete content of the blog post that needs to be summarized.'),
});
export type BlogSummaryInput = z.infer<typeof BlogSummaryInputSchema>;

const BlogSummaryOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the blog post.'),
});
export type BlogSummaryOutput = z.infer<typeof BlogSummaryOutputSchema>;

export async function generateBlogSummary(input: BlogSummaryInput): Promise<BlogSummaryOutput> {
  return generateBlogSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'blogSummaryPrompt',
  input: {schema: BlogSummaryInputSchema},
  output: {schema: BlogSummaryOutputSchema},
  prompt: `Summarize the following blog post in a concise paragraph.

Blog Post Content:
{{blogPostContent}}`,
});

const generateBlogSummaryFlow = ai.defineFlow(
  {
    name: 'generateBlogSummaryFlow',
    inputSchema: BlogSummaryInputSchema,
    outputSchema: BlogSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
