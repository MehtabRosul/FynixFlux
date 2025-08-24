"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TestTube2, Wand2 } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { getModelExplanation } from "@/app/actions/ai";
import { Skeleton } from "../ui/skeleton";
import { Separator } from "../ui/separator";

export function ModelTestPanel() {
  const [input, setInput] = useState('{"age": 45, "income": 80000, "has_mortgage": true}');
  const [explanation, setExplanation] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleExplain = async () => {
    setIsLoading(true);
    setExplanation(null);
    const result = await getModelExplanation({
      modelInput: input,
      modelType: "classification",
      featureNames: ["age", "income", "has_mortgage"],
    });
    setExplanation(result.narrativeExplanation);
    setIsLoading(false);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <TestTube2 className="h-6 w-6 text-primary" />
          <CardTitle>Model Test Sandbox</CardTitle>
        </div>
        <CardDescription>Test the model with a single input and get an explanation.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label htmlFor="model-input" className="text-sm font-medium">Model Input (JSON)</label>
          <Textarea
            id="model-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="mt-1 font-mono"
            rows={3}
          />
        </div>
        <Button onClick={handleExplain} disabled={isLoading} className="w-full">
          <Wand2 className={`mr-2 h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
          Run & Explain
        </Button>
        {isLoading && (
          <div className="space-y-2 pt-2">
             <Separator />
             <h4 className="font-semibold pt-2">Explanation</h4>
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        )}
        {explanation && (
          <div className="pt-2 space-y-2">
            <Separator />
            <h4 className="font-semibold pt-2">Explanation</h4>
            <p className="text-sm text-muted-foreground">{explanation}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
