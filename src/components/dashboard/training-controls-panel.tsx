
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rocket, Loader2 } from "lucide-react";

interface TrainingControlsPanelProps {
  onStartTraining: () => void;
  isTraining: boolean;
  datasetUploaded: boolean;
}

export function TrainingControlsPanel({ onStartTraining, isTraining, datasetUploaded }: TrainingControlsPanelProps) {
  const isDisabled = isTraining || !datasetUploaded;

  const getButtonContent = () => {
    if (isTraining) {
      return (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Training in Progress...
        </>
      );
    }
    return (
      <>
        <Rocket className="mr-2 h-4 w-4" />
        Start Model Training
      </>
    );
  };
  
  const getDescription = () => {
      if (isTraining) return "The model is currently training. Please wait.";
      if (!datasetUploaded) return "Please upload a dataset to begin.";
      return "Begin the model training process with the selected configuration.";
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Start Training</CardTitle>
        <CardDescription>{getDescription()}</CardDescription>
      </CardHeader>
      <CardContent className="py-10">
        <Button className="w-full" onClick={onStartTraining} disabled={isDisabled}>
          {getButtonContent()}
        </Button>
      </CardContent>
    </Card>
  );
}
