
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Wand2, Loader2, CheckCircle, AlertTriangle } from "lucide-react";

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


export function ModelTestPanel({ className, isTrainingComplete, onTestModel, isTesting, testReport }: ModelTestPanelProps) {
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

    const buttonDisabled = !isTrainingComplete || isTesting;
    const buttonContent = isTesting ? (
      <>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Testing...
      </>
    ) : (
      <>
        <Wand2 className="mr-2 h-4 w-4" />
        Test Model
      </>
    );
    
    return (
        <Button onClick={onTestModel} disabled={buttonDisabled} className="w-full">
          {buttonContent}
        </Button>
    )
  };

  return (
    <Card className={cn("flex flex-col", className)}>
      <CardHeader>
        <CardTitle>Test Model</CardTitle>
        <CardDescription>
            {testReport ? "Test report generated." : isTesting ? "Testing in progress..." : "Test your trained model with new inputs."}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-center">
        {renderContent()}
      </CardContent>
    </Card>
  );
}
