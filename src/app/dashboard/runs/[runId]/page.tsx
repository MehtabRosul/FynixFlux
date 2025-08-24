import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { AiInsights } from "@/components/dashboard/ai-insights";
import { ModelTestPanel } from "@/components/dashboard/model-test-panel";
import { LiveMetricsChart } from "@/components/dashboard/live-metrics-chart";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function RunDetailsPage({ params }: { params: { runId: string } }) {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-4">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>Training Run: ChurnPredictor-20231026-a1b2c3d4</CardTitle>
                <CardDescription>Run ID: {params.runId}</CardDescription>
              </div>
              <Badge variant="outline" className="text-accent-foreground border-accent">RUNNING</Badge>
            </div>
            <div className="pt-4">
                <Progress value={75} />
                <p className="text-sm text-muted-foreground mt-2">Epoch 7/10 - 75% complete</p>
            </div>
          </CardHeader>
        </Card>

        <Tabs defaultValue="metrics">
          <TabsList>
            <TabsTrigger value="metrics">Metrics</TabsTrigger>
            <TabsTrigger value="logs">Logs</TabsTrigger>
            <TabsTrigger value="artifacts">Artifacts</TabsTrigger>
          </TabsList>
          <TabsContent value="metrics">
            <div className="grid gap-4 md:grid-cols-2">
                <LiveMetricsChart />
                <Card>
                    <CardHeader><CardTitle>Validation Metrics</CardTitle></CardHeader>
                    <CardContent className="space-y-2 text-sm">
                        <p><strong>AUC:</strong> 0.8921</p>
                        <p><strong>Accuracy:</strong> 0.9150</p>
                        <p><strong>F1-Score:</strong> 0.8532</p>
                    </CardContent>
                </Card>
            </div>
          </TabsContent>
          <TabsContent value="logs">
             <Card>
                <CardHeader><CardTitle>Streaming Logs</CardTitle></CardHeader>
                <CardContent>
                    <ScrollArea className="h-72 w-full font-mono text-xs bg-muted p-4 rounded-md">
                        <p>[2023-10-26 10:30:01] Starting training run...</p>
                        <p>[2023-10-26 10:30:05] Epoch 1/10 - loss: 0.65, acc: 0.75, val_loss: 0.55, val_acc: 0.80</p>
                        <p>[2023-10-26 10:31:10] Epoch 2/10 - loss: 0.45, acc: 0.82, val_loss: 0.48, val_acc: 0.85</p>
                        <p>[2023-10-26 10:32:15] Epoch 3/10 - loss: 0.35, acc: 0.88, val_loss: 0.42, val_acc: 0.87</p>
                        <p>[2023-10-26 10:33:20] Epoch 4/10 - loss: 0.30, acc: 0.90, val_loss: 0.40, val_acc: 0.88</p>
                        <p>[2023-10-26 10:34:25] Epoch 5/10 - loss: 0.28, acc: 0.91, val_loss: 0.39, val_acc: 0.88</p>
                        <p>[2023-10-26 10:35:30] Epoch 6/10 - loss: 0.26, acc: 0.92, val_loss: 0.38, val_acc: 0.89</p>
                        <p>[2023-10-26 10:36:35] Epoch 7/10 - loss: 0.25, acc: 0.92, val_loss: 0.38, val_acc: 0.89</p>
                    </ScrollArea>
                </CardContent>
             </Card>
          </TabsContent>
          <TabsContent value="artifacts">
             <Card>
                <CardHeader><CardTitle>Run Artifacts</CardTitle></CardHeader>
                <CardContent><p>Artifact download links will appear here.</p></CardContent>
             </Card>
          </TabsContent>
        </Tabs>

      </div>
      <div className="lg:col-span-1 space-y-4">
        <AiInsights />
        <ModelTestPanel />
      </div>
    </div>
  );
}
