
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { BrainCircuit } from "lucide-react";

interface AiExplanationPanelProps {
  className?: string;
}

export function AiExplanationPanel({ className }: AiExplanationPanelProps) {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle>AI-Generated Explanation</CardTitle>
        <CardDescription>Get a narrative explanation of model behavior.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
            Use AI to generate SHAP values and a human-readable summary of how the model makes predictions for a specific input.
        </p>
        <Button disabled className="w-full">
          <BrainCircuit className="mr-2 h-4 w-4" />
          Generate Explanation
        </Button>
      </CardContent>
    </Card>
  );
}
