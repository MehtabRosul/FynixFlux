
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wand2 } from "lucide-react";

export function ModelTestPanel() {
  return (
    <Card>
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
