
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Wand2 } from "lucide-react";

interface ModelTestPanelProps {
  className?: string;
  isTrainingComplete: boolean;
}

export function ModelTestPanel({ className, isTrainingComplete }: ModelTestPanelProps) {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle>Test Model</CardTitle>
        <CardDescription>
            {isTrainingComplete ? "Test your trained model with new inputs." : "Test model after training."}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button disabled={!isTrainingComplete} className="w-full">
          <Wand2 className="mr-2 h-4 w-4" />
          Test Model
        </Button>
      </CardContent>
    </Card>
  );
}
