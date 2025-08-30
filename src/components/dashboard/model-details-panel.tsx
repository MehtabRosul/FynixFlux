
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ModelDetailsPanelProps {
  className?: string;
}

export function ModelDetailsPanel({ className }: ModelDetailsPanelProps) {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle>trained model details will be shown here</CardTitle>
        <CardDescription>Summary of the best performing model.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm">
          <p><strong>Model Name:</strong> XGBoost-asf87</p>
          <p><strong>Version:</strong> v3</p>
          <p><strong>Primary Metric (AUC):</strong> 0.842</p>
        </div>
      </CardContent>
    </Card>
  );
}
