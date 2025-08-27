
import { DataUploadPanel } from "@/components/dashboard/data-upload-panel";
import { DatasetPreviewPanel } from "@/components/dashboard/dataset-preview-panel";
import { TrainingConfigPanel } from "@/components/dashboard/training-config-panel";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
      {/* Left Column: Config & Data */}
      <div className="lg:col-span-3 space-y-4">
          <DataUploadPanel />
          <DatasetPreviewPanel />
          <TrainingConfigPanel />
      </div>

      {/* Center Column: Live Training Canvas */}
      <div className="lg:col-span-6 h-full">
        <Card className="h-full">
            <CardHeader>
                <CardTitle>Live Training Canvas</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">Training visualizations will appear here.</p>
            </CardContent>
        </Card>
      </div>

      {/* Right Column: Live Metrics & Controls */}
      <div className="lg:col-span-3 h-full">
         <Card className="h-full">
            <CardHeader>
                <CardTitle>Live Metrics & Controls</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">Real-time charts and run controls will appear here.</p>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
