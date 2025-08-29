
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

interface TrainingControlsPanelProps {
  onStartTraining: () => void;
}

export function TrainingControlsPanel({ onStartTraining }: TrainingControlsPanelProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Start Training</CardTitle>
        <CardDescription>Begin the model training process.</CardDescription>
      </CardHeader>
      <CardContent className="py-7">
        <Button className="w-full" onClick={onStartTraining}>
          <Rocket className="mr-2 h-4 w-4" />
          Start Model Training
        </Button>
      </CardContent>
    </Card>
  );
}
