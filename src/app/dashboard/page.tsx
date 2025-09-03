
'use client';

import { useState } from 'react';
import { DataUploadPanel } from '@/components/dashboard/data-upload-panel';
import { DatasetPreviewPanel } from '@/components/dashboard/dataset-preview-panel';
import { LiveMetricsChart } from '@/components/dashboard/live-metrics-chart';
import { ModelDetailsPanel, ModelDetails } from '@/components/dashboard/model-details-panel';
import { ModelTestPanel } from '@/components/dashboard/model-test-panel';
import { TopControlRow } from '@/components/dashboard/top-control-row';
import { TrainingControlsPanel } from '@/components/dashboard/training-controls-panel';
import { LiveInsightsFeed } from '@/components/dashboard/live-insights-feed';
import { AnimatePresence, motion } from 'framer-motion';
import { InsightHubPanel } from '@/components/dashboard/insight-hub-panel';
import { InsightHubButton } from '@/components/dashboard/insight-hub-button';
import { AiExplanationPanel } from '@/components/dashboard/ai-explanation-panel';

export interface TrainingConfig {
  problemCategorization: string | null;
  modelSelection: string | null;
  dataSplitting: string | null;
  hyperparameterTuning: string | null;
  evaluationMetric: string | null;
}

export type Dataset = Record<string, string | number>[];

export default function DashboardPage() {
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

  const handleDatasetUpload = (data: Dataset) => {
    setDataset(data);
  };

  const handleStartTraining = () => {
    console.log("Starting training with config:", trainingConfig);
    setIsTraining(true);
    setIsTrainingComplete(false);
    setModelDetails(null);

    // Simulate a training process that takes time
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
    }, 1500 * 20); // Sync with chart animation
  };
  
  const handleConfigChange = (key: keyof TrainingConfig, value: string) => {
    setTrainingConfig(prevConfig => ({
      ...prevConfig,
      [key]: value
    }));
  };

  const animationVariants = {
      initial: { opacity: 0, y: -20, height: 0 },
      animate: { opacity: 1, y: 0, height: 'auto', transition: { duration: 0.3, ease: "easeInOut" } },
      exit: { opacity: 0, y: -20, height: 0, transition: { duration: 0.2, ease: "easeInOut" } },
  };

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
        {/* Left Column */}
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

        {/* Right Column */}
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

      {/* Lower Row */}
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
                <ModelTestPanel className="h-full" isTrainingComplete={isTrainingComplete} />
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
                <AiExplanationPanel className="h-full" />
            </motion.div>
        )}

        <ModelDetailsPanel className="h-full" model={modelDetails} isTraining={isTraining} isTrainingComplete={isTrainingComplete} />
        <DatasetPreviewPanel dataset={dataset} />
      </div>

      {!isInsightHubMode && <InsightHubButton onClick={() => setIsInsightHubMode(true)} />}
    </div>
  );
}
