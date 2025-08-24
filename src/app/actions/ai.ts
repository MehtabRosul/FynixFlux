"use server";

import { generateInsights, AiNarrativeToolInput } from "@/ai/flows/ai-narrative-tool";
import { generateModelExplanation, GenerateModelExplanationInput } from "@/ai/flows/model-test-explanation";

export async function getAiInsights(input: AiNarrativeToolInput) {
    try {
        const result = await generateInsights(input);
        return result;
    } catch (error) {
        console.error(error);
        return { insights: "An error occurred while generating insights." };
    }
}

export async function getModelExplanation(input: GenerateModelExplanationInput) {
    try {
        const result = await generateModelExplanation(input);
        return result;
    } catch (error) {
        console.error(error);
        return { shapSummary: "Error", narrativeExplanation: "An error occurred while generating the explanation." };
    }
}
