
'use client';

import { useState, useEffect, useCallback } from 'react';
import { DataUploadPanel } from '@/components/dashboard/data-upload-panel';
import { DatasetPreviewPanel } from '@/components/dashboard/dataset-preview-panel';
import { LiveMetricsChart } from '@/components/dashboard/live-metrics-chart';
import { ModelDetailsPanel, ModelDetails } from '@/components/dashboard/model-details-panel';
import { ModelTestPanel, TestReport } from '@/components/dashboard/model-test-panel';
import { TopControlRow } from '@/components/dashboard/top-control-row';
import { TrainingControlsPanel } from '@/components/dashboard/training-controls-panel';
import { LiveInsightsFeed } from '@/components/dashboard/live-insights-feed';
import { AnimatePresence, motion } from 'framer-motion';
import { InsightHubPanel } from '@/components/dashboard/insight-hub-panel';
import { InsightHubButton } from '@/components/dashboard/insight-hub-button';
import { AiExplanationPanel } from '@/components/dashboard/ai-explanation-panel';
import { PageLoader } from '@/components/ui/page-loader';

export interface TrainingConfig {
  problemCategorization: string | null;
  modelSelection: string | null;
  dataSplitting: string | null;
  hyperparameterTuning: string | null;
  evaluationMetric: string | null;
}

export type Dataset = Record<string, string | number>[];

export default function DashboardPage() {
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [isTraining, setIsTraining] = useState(false);
  const [isInsightHubMode, setIsInsightHubMode] = useState(false);
  const [trainingConfig, setTrainingConfig] = useState<TrainingConfig>({
    problemCategorization: null,
    modelSelection: null,
    dataSplitting: null,
    hyperparameterTuning: null,
    evaluationMetric: null,
  });
  const [dataset, setDataset] = useState<Dataset | null>(null);
  const [modelDetails, setModelDetails] = useState<ModelDetails | null>(null);
  const [isTrainingComplete, setIsTrainingComplete] = useState(false);
  const [isTesting, setIsTesting] = useState(false);
  const [testReport, setTestReport] = useState<TestReport | null>(null);
  const [canGenerateExplanation, setCanGenerateExplanation] = useState(false);
  const [isGeneratingExplanation, setIsGeneratingExplanation] = useState(false);
  const [explanation, setExplanation] = useState<string | null>(null);

  const handleConfigChange = useCallback((key: keyof TrainingConfig, value: string) => {
    setTrainingConfig(prevConfig => ({ ...prevConfig, [key]: value }));
  }, []);

  const handleTestModel = useCallback(() => {
    setIsTesting(true);
    setTimeout(() => {
      const performance = {
        accuracy: parseFloat((0.85 + Math.random() * 0.1).toFixed(3)),
        precision: parseFloat((0.82 + Math.random() * 0.1).toFixed(3)),
        recall: parseFloat((0.88 + Math.random() * 0.1).toFixed(3)),
        f1Score: parseFloat((0.85 + Math.random() * 0.1).toFixed(3)),
        auc_roc: modelDetails?.primaryMetric.value || 0,
      };
      const bias = {
        demographicParity: parseFloat((0.05 + Math.random() * 0.1).toFixed(3)),
        equalizedOdds: parseFloat((0.02 + Math.random() * 0.08).toFixed(3)),
      };
      const confusion = {
        truePositive: Math.floor(Math.random() * 1000),
        falsePositive: Math.floor(Math.random() * 50),
        trueNegative: Math.floor(Math.random() * 2000),
        falseNegative: Math.floor(Math.random() * 40),
      };

      const summary = `Executive Summary\n\nDataset was ingested and validated successfully. The system prepared features and trained the model according to your instructions. Below is a concise recap you can share with stakeholders.\n\nConfiguration\n- Problem: ${trainingConfig.problemCategorization || 'unspecified'}\n- Model: ${trainingConfig.modelSelection || 'Custom'}\n- Data Split: ${trainingConfig.dataSplitting || 'train/test'}\n- Tuning: ${trainingConfig.hyperparameterTuning || 'none'}\n- Optimization Metric: ${trainingConfig.evaluationMetric || 'AUC-ROC'}\n\nWhat Happened\n1) Training: The model was fit on the training partition, with early feedback monitored via live metrics.\n2) Validation: Hyperparameters and thresholds (if applicable) were selected to optimize the chosen metric.\n3) Testing: The trained model was evaluated on the hold-out data to estimate real-world performance.\n\nKey Results\n- Accuracy: ${performance.accuracy.toFixed(3)}\n- Precision: ${performance.precision.toFixed(3)}\n- Recall: ${performance.recall.toFixed(3)}\n- Bias Check: Demographic Parity ${bias.demographicParity.toFixed(3)}, Equalized Odds ${bias.equalizedOdds.toFixed(3)} (lower is better).\n\nGuidance\n- If your business goal values fewer false negatives, consider tuning for higher recall.\n- For class imbalance, ensure stratified splits and review threshold calibration.\n- Re-run with alternative models to compare trade-offs, then export the best performing artifact.\n\nConclusion\nThe model is trained, evaluated, and suitable for the next step. You can now export artifacts or iterate with refined settings.`;

      const newTestReport: TestReport = {
        metadata: {
          reportVersion: '1.0',
          generatedAt: new Date().toISOString(),
        },
        modelDetails: {
          name: modelDetails?.modelName || 'Unknown Model',
          version: modelDetails?.version || 'N/A',
        },
        trainingConfiguration: trainingConfig,
        performanceMetrics: {
          overall: performance,
          confusionMatrix: confusion
        },
        biasAndFairness: bias,
        explainability: {
          shapValues: 'SHAP values would be populated here by a server-side explainability process.',
        },
        executiveSummary: summary,
      };

      setTestReport(newTestReport);
      setIsTesting(false);
      setCanGenerateExplanation(true);
    }, 2000);
  }, [modelDetails, trainingConfig]);

  const handleStartTraining = useCallback(() => {
    console.log("Starting training with config:", trainingConfig);
    setIsTraining(true);
    setIsTrainingComplete(false);
    setModelDetails(null);
    setTestReport(null);
    setCanGenerateExplanation(false);
    setExplanation(null);

    setTimeout(() => {
        const simulatedDetails: ModelDetails = {
            modelName: `${trainingConfig.modelSelection || 'Custom'}-run-${Math.random().toString(36).substring(2, 9)}`,
            version: `v${Math.floor(Math.random() * 3) + 1}`,
            primaryMetric: {
                name: trainingConfig.evaluationMetric || 'AUC-ROC',
                value: parseFloat((0.75 + Math.random() * 0.2).toFixed(3))
            }
        };
        setModelDetails(simulatedDetails);
        setIsTraining(false);
        setIsTrainingComplete(true);
        handleTestModel();
    }, 1500 * 20);
  }, [trainingConfig, handleTestModel]);

  const handleDatasetUpload = (data: Dataset) => {
    setDataset(data);
  };

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail as Partial<TrainingConfig> | undefined;
      if (!detail) return;
      setTrainingConfig(prev => ({ ...prev, ...detail }));
      if (dataset) {
        handleStartTraining();
      }
    };
    window.addEventListener('insighthub:training-plan', handler as EventListener);
    return () => window.removeEventListener('insighthub:training-plan', handler as EventListener);
  }, [dataset, handleStartTraining]);

  const handleGenerateExplanation = useCallback(async () => {
    if (!canGenerateExplanation || isGeneratingExplanation) return;
    setIsGeneratingExplanation(true);
    setTimeout(() => {
      const summary = testReport?.executiveSummary || "No summary available.";
      setExplanation(summary);
      setIsGeneratingExplanation(false);
      setCanGenerateExplanation(false);
    }, 1200);
  }, [canGenerateExplanation, isGeneratingExplanation, testReport]);

  const animationVariants = {
      initial: { opacity: 0, y: -20, height: 0 },
      animate: { opacity: 1, y: 0, height: 'auto', transition: { duration: 0.3, ease: "easeInOut" } },
      exit: { opacity: 0, y: -20, height: 0, transition: { duration: 0.2, ease: "easeInOut" } },
  };

  // Page loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (isPageLoading) {
    return <PageLoader message="Loading Dashboard..." showProgress={true} progress={85} />;
  }

  return (
    <div className="space-y-6">
      <AnimatePresence>
        {isInsightHubMode && (
           <motion.div
              variants={animationVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="overflow-hidden"
            >
              <InsightHubPanel onExit={() => setIsInsightHubMode(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isInsightHubMode && (
          <motion.div 
            variants={animationVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="overflow-hidden"
          >
            <TopControlRow config={trainingConfig} onConfigChange={handleConfigChange} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 space-y-6">
          <LiveMetricsChart isTraining={isTraining} />
           <AnimatePresence>
            {!isInsightHubMode && (
                <motion.div
                    variants={animationVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="overflow-hidden"
                >
                    <LiveInsightsFeed isTraining={isTraining} />
                </motion.div>
            )}
           </AnimatePresence>
        </div>

        <div className="lg:col-span-4 space-y-6 flex flex-col">
          <div className="flex-grow">
            <DataUploadPanel onDatasetUpload={handleDatasetUpload} />
          </div>
           <AnimatePresence>
            {!isInsightHubMode && (
               <motion.div
                    variants={animationVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="overflow-hidden"
                >
                  <TrainingControlsPanel onStartTraining={handleStartTraining} isTraining={isTraining} datasetUploaded={!!dataset} />
               </motion.div>
            )}
           </AnimatePresence>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <AnimatePresence>
         {!isInsightHubMode && (
            <motion.div
                className="overflow-hidden"
                variants={animationVariants}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <ModelTestPanel 
                    className="h-full" 
                    isTrainingComplete={isTrainingComplete} 
                    onTestModel={handleTestModel}
                    isTesting={isTesting}
                    testReport={testReport}
                />
            </motion.div>
         )}
        </AnimatePresence>
        
        {isInsightHubMode && (
             <motion.div
                className="overflow-hidden"
                variants={animationVariants}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <AiExplanationPanel 
                  className="h-full"
                  canGenerate={canGenerateExplanation}
                  isGenerating={isGeneratingExplanation}
                  explanation={explanation}
                  onGenerate={handleGenerateExplanation}
                />
            </motion.div>
        )}

        <ModelDetailsPanel 
          className="h-full" 
          model={modelDetails} 
          isTraining={isTraining} 
          isTrainingComplete={isTrainingComplete}
          testReport={testReport}
          onUpdate={(changes) => setModelDetails(prev => prev ? ({ ...prev, ...changes }) : prev)}
        />
        <DatasetPreviewPanel dataset={dataset} />
      </div>

      {!isInsightHubMode && <InsightHubButton onClick={() => setIsInsightHubMode(true)} />}
    </div>
  );
}
