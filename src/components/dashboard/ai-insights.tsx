"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, RefreshCw } from "lucide-react";
import { getAiInsights } from "@/app/actions/ai";
import { Skeleton } from "../ui/skeleton";

// Mock data to send to the AI
const mockMetrics = JSON.stringify({
  epochs: 7,
  final_loss: 0.25,
  final_accuracy: 0.92,
  final_val_loss: 0.38,
  final_val_accuracy: 0.89,
});
const mockLogs = `
[2023-10-26 10:30:01] Starting training run...
[2023-10-26 10:30:05] Epoch 1/10 - loss: 0.65, acc: 0.75, val_loss: 0.55, val_acc: 0.80
[2023-10-26 10:31:10] Epoch 2/10 - loss: 0.45, acc: 0.82, val_loss: 0.48, val_acc: 0.85
[2023-10-26 10:32:15] Epoch 3/10 - loss: 0.35, acc: 0.88, val_loss: 0.42, val_acc: 0.87
[2023-10-26 10:33:20] Epoch 4/10 - loss: 0.30, acc: 0.90, val_loss: 0.40, val_acc: 0.88
[2023-10-26 10:34:25] Epoch 5/10 - loss: 0.28, acc: 0.91, val_loss: 0.39, val_acc: 0.88
[2023-10-26 10:35:30] Epoch 6/10 - loss: 0.26, acc: 0.92, val_loss: 0.38, val_acc: 0.89
[2023-10-26 10:36:35] Epoch 7/10 - loss: 0.25, acc: 0.92, val_loss: 0.38, val_acc: 0.89
`;

export function AiInsights() {
  const [insights, setInsights] = useState("Click 'Generate Insights' to get an AI-powered summary of this run.");
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    setIsLoading(true);
    setInsights("");
    const result = await getAiInsights({ trainingMetrics: mockMetrics, trainingLogs: mockLogs });
    setInsights(result.insights);
    setIsLoading(false);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Bot className="h-6 w-6 text-primary" />
            <CardTitle>AI Narrative Insights</CardTitle>
          </div>
          <Button variant="ghost" size="icon" onClick={handleGenerate} disabled={isLoading}>
            <RefreshCw className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
          </Button>
        </div>
        <CardDescription>An automated summary of the training run's performance.</CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">{insights}</p>
        )}
      </CardContent>
    </Card>
  );
}
