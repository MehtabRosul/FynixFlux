'use server';
/**
 * @fileOverview An AI Narrative Tool that generates human-readable insights from training metrics and logs.
 *
 * - generateInsights - A function that generates narrative insights from training metrics and logs.
 * - AiNarrativeToolInput - The input type for the generateInsights function.
 * - AiNarrativeToolOutput - The return type for the generateInsights function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiNarrativeToolInputSchema = z.object({
  trainingMetrics: z.string().describe('Training metrics in JSON format.'),
  trainingLogs: z.string().describe('Training logs in plain text format.'),
});
export type AiNarrativeToolInput = z.infer<typeof AiNarrativeToolInputSchema>;

const AiNarrativeToolOutputSchema = z.object({
  insights: z.string().describe('Human-readable insights generated from the training metrics and logs.'),
});
export type AiNarrativeToolOutput = z.infer<typeof AiNarrativeToolOutputSchema>;

export async function generateInsights(input: AiNarrativeToolInput): Promise<AiNarrativeToolOutput> {
  return aiNarrativeToolFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiNarrativeToolPrompt',
  input: {schema: AiNarrativeToolInputSchema},
  output: {schema: AiNarrativeToolOutputSchema},
  prompt: `You are an AI Narrative Tool that analyzes training metrics and logs to generate human-readable insights.

  Analyze the provided training metrics and logs to identify key trends, potential issues (e.g., overfitting), and improvements in model performance.
  Provide concise and informative insights that can help users quickly understand the performance of their model.

  Training Metrics:
  {{trainingMetrics}}

  Training Logs:
  {{trainingLogs}}

  Insights:
  `,
});

const aiNarrativeToolFlow = ai.defineFlow(
  {
    name: 'aiNarrativeToolFlow',
    inputSchema: AiNarrativeToolInputSchema,
    outputSchema: AiNarrativeToolOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
