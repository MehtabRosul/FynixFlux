
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ModelDetailsPanel() {
  return (
    <Card>
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
