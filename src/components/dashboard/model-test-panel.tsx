
"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Loader2, CheckCircle, Scale } from "lucide-react";

// Updated TestReport interface to match the new comprehensive structure
export interface TestReport {
  metadata: {
    reportVersion: string;
    generatedAt: string;
  };
  modelDetails: {
    name: string;
    version: string;
  };
  trainingConfiguration: any; // Using 'any' for simplicity, could be a strong type
  performanceMetrics: {
    overall: {
      accuracy: number;
      precision: number;
      recall: number;
      f1Score: number;
      auc_roc: number;
    };
    confusionMatrix: {
      truePositive: number;
      falsePositive: number;
      trueNegative: number;
      falseNegative: number;
    };
  };
  biasAndFairness: {
    demographicParity: number;
    equalizedOdds: number;
  };
  explainability: {
    shapValues: string;
  };
  executiveSummary: string;
}

interface ModelTestPanelProps {
  className?: string;
  isTrainingComplete: boolean;
  onTestModel: () => void;
  isTesting: boolean;
  testReport: TestReport | null;
}

const ReportMetric = ({ label, value, higherIsBetter = true }: { label: string, value: number, higherIsBetter?: boolean }) => {
  const isGood = higherIsBetter ? value > 0.85 : value < 0.1;
  const isNeutral = higherIsBetter ? value > 0.75 : value < 0.2;
  const colorClass = isGood ? "text-green-400" : isNeutral ? "text-yellow-400" : "text-red-400";
  return (
    <div className="flex justify-between items-center text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span className={cn("font-semibold", colorClass)}>{value.toFixed(3)}</span>
    </div>
  );
};

const ConfusionMatrix = ({ data }: { data: TestReport['performanceMetrics']['confusionMatrix']}) => {
    return (
        <div className="grid grid-cols-2 gap-px bg-border overflow-hidden rounded-lg border border-border">
            <div className="bg-card p-2 text-center">
                <p className="text-xs text-muted-foreground">True Positive</p>
                <p className="font-bold text-lg text-green-400">{data.truePositive}</p>
            </div>
             <div className="bg-card p-2 text-center">
                <p className="text-xs text-muted-foreground">False Positive</p>
                <p className="font-bold text-lg text-red-400">{data.falsePositive}</p>
            </div>
             <div className="bg-card p-2 text-center">
                <p className="text-xs text-muted-foreground">False Negative</p>
                <p className="font-bold text-lg text-red-400">{data.falseNegative}</p>
            </div>
             <div className="bg-card p-2 text-center">
                <p className="text-xs text-muted-foreground">True Negative</p>
                <p className="font-bold text-lg text-green-400">{data.trueNegative}</p>
            </div>
        </div>
    )
}

export function ModelTestPanel({ className, isTrainingComplete, onTestModel: _onTestModel, isTesting, testReport }: ModelTestPanelProps) {
  const renderContent = () => {
    if (testReport) {
      return (
        <div className="space-y-4 animate-in fade-in-50 duration-500">
            <div>
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary" /> Performance</h4>
              <div className="space-y-1">
                <ReportMetric label="Accuracy" value={testReport.performanceMetrics.overall.accuracy} />
                <ReportMetric label="Precision" value={testReport.performanceMetrics.overall.precision} />
                <ReportMetric label="Recall" value={testReport.performanceMetrics.overall.recall} />
                <ReportMetric label="F1-Score" value={testReport.performanceMetrics.overall.f1Score} />
                <ReportMetric label="AUC-ROC" value={testReport.performanceMetrics.overall.auc_roc} />
              </div>
            </div>
            
            <ConfusionMatrix data={testReport.performanceMetrics.confusionMatrix} />

             <div>
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Scale className="w-5 h-5 text-primary" /> Bias & Fairness</h4>
              <div className="space-y-1">
                 <ReportMetric label="Demographic Parity" value={testReport.biasAndFairness.demographicParity} higherIsBetter={false} />
                 <ReportMetric label="Equalized Odds" value={testReport.biasAndFairness.equalizedOdds} higherIsBetter={false} />
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
