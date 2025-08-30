
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Wand2 } from "lucide-react";

interface ModelTestPanelProps {
  className?: string;
}

export function ModelTestPanel({ className }: ModelTestPanelProps) {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle>if user want to test the model then details for that will be here</CardTitle>
        <CardDescription>Test model after training</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button disabled className="w-full">
          <Wand2 className="mr-2 h-4 w-4" />
          Test Model
        </Button>
      </CardContent>
    </Card>
  );
}
