
"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Loader2, CheckCircle, AlertTriangle } from "lucide-react";

export interface TestReport {
  biasMetrics: {
    demographicParity: number;
    equalizedOdds: number;
  };
  performanceMetrics: {
    testAccuracy: number;
    testPrecision: number;
    testRecall: number;
  };
}

interface ModelTestPanelProps {
  className?: string;
  isTrainingComplete: boolean;
  onTestModel: () => void;
  isTesting: boolean;
  testReport: TestReport | null;
}

const ReportMetric = ({ label, value, higherIsBetter = true }: { label: string, value: number, higherIsBetter?: boolean }) => {
  const isGood = higherIsBetter ? value > 0.9 : value < 0.1;
  const isNeutral = higherIsBetter ? value > 0.8 : value < 0.2;
  const colorClass = isGood ? "text-green-400" : isNeutral ? "text-yellow-400" : "text-red-400";
  return (
    <div className="flex justify-between items-center text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span className={cn("font-semibold", colorClass)}>{value.toFixed(3)}</span>
    </div>
  );
};


export function ModelTestPanel({ className, isTrainingComplete, onTestModel: _onTestModel, isTesting, testReport }: ModelTestPanelProps) {
  const renderContent = () => {
    if (testReport) {
      return (
        <div className="space-y-4 animate-in fade-in-50 duration-500">
            <div>
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary" /> Performance</h4>
              <div className="space-y-1">
                <ReportMetric label="Test Accuracy" value={testReport.performanceMetrics.testAccuracy} />
                <ReportMetric label="Test Precision" value={testReport.performanceMetrics.testPrecision} />
                <ReportMetric label="Test Recall" value={testReport.performanceMetrics.testRecall} />
              </div>
            </div>
             <div>
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-primary" /> Bias Check</h4>
              <div className="space-y-1">
                 <ReportMetric label="Demographic Parity" value={testReport.biasMetrics.demographicParity} higherIsBetter={false} />
                 <ReportMetric label="Equalized Odds" value={testReport.biasMetrics.equalizedOdds} higherIsBetter={false} />
              </div>
            </div>
        </div>
      );
    }

    if (isTesting) {
      return (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" />
            AI is automatically evaluating your model...
          </div>
          <div className="h-2 w-full rounded bg-muted overflow-hidden">
            <div className="h-full w-1/3 bg-primary animate-[pulse_1.2s_ease-in-out_infinite]" />
          </div>
          <div className="grid grid-cols-3 gap-3 text-xs text-muted-foreground">
            <div className="p-2 rounded bg-background/60 border border-border/50 animate-pulse">Scoring predictions</div>
            <div className="p-2 rounded bg-background/60 border border-border/50 animate-pulse">Computing metrics</div>
            <div className="p-2 rounded bg-background/60 border border-border/50 animate-pulse">Running bias checks</div>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-3 text-sm text-muted-foreground">
        <p>
          Once training completes, the system automatically runs a short evaluation to verify your model.
          You’ll see live progress here, followed by performance and bias metrics.
        </p>
        <p>
          No action needed. This section updates itself and will disappear once the results are ready.
        </p>
        {!isTrainingComplete && (
          <p className="text-xs">Tip: Finish a training run to trigger automated testing.</p>
        )}
      </div>
    )
  };

  return (
    <Card className={cn("flex flex-col", className)}>
      <CardHeader>
        <CardTitle>Test Model</CardTitle>
        <CardDescription>
            {testReport ? "Test report generated." : isTesting ? "AI is evaluating the model. This will take a moment." : "Test your trained model with new inputs."}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-center">
        {renderContent()}
      </CardContent>
    </Card>
  );
}
