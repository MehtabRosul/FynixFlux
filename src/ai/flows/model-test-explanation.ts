'use server';

/**
 * @fileOverview Model test explanation flow for generating SHAP snapshots and narrative summaries.
 *
 * - generateModelExplanation - A function that handles the model explanation process.
 * - GenerateModelExplanationInput - The input type for the generateModelExplanation function.
 * - GenerateModelExplanationOutput - The return type for the generateModelExplanation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateModelExplanationInputSchema = z.object({
  modelInput: z.string().describe('The input to the model for which an explanation is desired.'),
  modelType: z.string().describe('The type of the model being tested (e.g., classification, regression).'),
  featureNames: z.string().array().describe('The names of the features used in the model.'),
});
export type GenerateModelExplanationInput = z.infer<typeof GenerateModelExplanationInputSchema>;

const GenerateModelExplanationOutputSchema = z.object({
  shapSummary: z.string().describe('A summary of the SHAP values for the input.'),
  narrativeExplanation: z.string().describe('A human-readable narrative explaining the model output.'),
});
export type GenerateModelExplanationOutput = z.infer<typeof GenerateModelExplanationOutputSchema>;

export async function generateModelExplanation(input: GenerateModelExplanationInput): Promise<GenerateModelExplanationOutput> {
  return modelTestExplanationFlow(input);
}

const modelExplanationPrompt = ai.definePrompt({
  name: 'modelExplanationPrompt',
  input: {schema: GenerateModelExplanationInputSchema},
  output: {schema: GenerateModelExplanationOutputSchema},
  prompt: `You are an expert in explaining machine learning model behavior.

  Given the following model input, model type, and feature names, generate a SHAP summary and a narrative explanation of the model output.

  Model Input: {{{modelInput}}}
  Model Type: {{{modelType}}}
  Feature Names: {{#each featureNames}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}

  SHAP Summary:
  Narrative Explanation:`, // Handlebars is used for input formatting
});

const modelTestExplanationFlow = ai.defineFlow(
  {
    name: 'modelTestExplanationFlow',
    inputSchema: GenerateModelExplanationInputSchema,
    outputSchema: GenerateModelExplanationOutputSchema,
  },
  async input => {
    const {output} = await modelExplanationPrompt(input);
    return output!;
  }
);
