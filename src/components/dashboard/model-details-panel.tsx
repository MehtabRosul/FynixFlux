
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

export interface ModelDetails {
  modelName: string;
  version: string;
  primaryMetric: {
    name: string;
    value: number;
  };
}

interface ModelDetailsPanelProps {
  className?: string;
  model: ModelDetails | null;
  isTraining: boolean;
}

export function ModelDetailsPanel({ className, model, isTraining }: ModelDetailsPanelProps) {
  const renderContent = () => {
    if (isTraining) {
      return (
        <div className="space-y-3">
          <Skeleton className="h-5 w-3/4" />
          <Skeleton className="h-5 w-1/2" />
          <Skeleton className="h-5 w-2/3" />
        </div>
      );
    }
    
    if (model) {
      return (
        <div className="space-y-2 text-sm">
          <p><strong>Model Name:</strong> {model.modelName}</p>
          <p><strong>Version:</strong> {model.version}</p>
          <p>
            <strong>Primary Metric ({model.primaryMetric.name}):</strong> 
            <span className="font-bold text-primary ml-2">{model.primaryMetric.value}</span>
          </p>
        </div>
      );
    }

    return <p className="text-sm text-muted-foreground">Train a model to see its details here.</p>;
  };

  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle>Model Details</CardTitle>
        <CardDescription>
          {isTraining ? "Generating model details..." : "Summary of the best performing model."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {renderContent()}
      </CardContent>
    </Card>
  );
}
