
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { BrainCircuit } from "lucide-react";

interface AiExplanationPanelProps {
  className?: string;
  canGenerate: boolean;
  isGenerating: boolean;
  explanation: string | null;
  onGenerate: () => void;
}

export function AiExplanationPanel({ className, canGenerate, isGenerating, explanation, onGenerate }: AiExplanationPanelProps) {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle>Training Insights & Findings</CardTitle>
        <CardDescription>{explanation ? "Explanation ready." : isGenerating ? "Generating explanation..." : "Get a narrative explanation of model behavior."}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {!isGenerating && !explanation && (
          <Button disabled={!canGenerate} onClick={onGenerate} className="w-full">
            <BrainCircuit className="mr-2 h-4 w-4" />
            Generate Explanation
          </Button>
        )}
        {explanation && (
          <div className="text-sm text-muted-foreground whitespace-pre-wrap leading-relaxed max-h-72 overflow-auto pr-2">
            {explanation}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
