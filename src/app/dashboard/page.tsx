
'use client';

import { useState } from 'react';
import { DataUploadPanel } from '@/components/dashboard/data-upload-panel';
import { DatasetPreviewPanel } from '@/components/dashboard/dataset-preview-panel';
import { LiveMetricsChart } from '@/components/dashboard/live-metrics-chart';
import { ModelDetailsPanel } from '@/components/dashboard/model-details-panel';
import { ModelTestPanel } from '@/components/dashboard/model-test-panel';
import { TopControlRow } from '@/components/dashboard/top-control-row';
import { TrainingControlsPanel } from '@/components/dashboard/training-controls-panel';
import { LiveInsightsFeed } from '@/components/dashboard/live-insights-feed';
import { AnimatePresence, motion } from 'framer-motion';
import { InsightHubPanel } from '@/components/dashboard/insight-hub-panel';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { InsightHubButton } from '@/components/dashboard/insight-hub-button';

export interface TrainingConfig {
  problemCategorization: string | null;
  modelSelection: string | null;
  dataSplitting: string | null;
  hyperparameterTuning: string | null;
  evaluationMetric: string | null;
}

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

  const handleStartTraining = () => {
    console.log("Starting training with config:", trainingConfig);
    setIsTraining(true);
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
        <div className="lg:col-span-4 space-y-6">
          <DataUploadPanel />
           <AnimatePresence>
            {!isInsightHubMode && (
               <motion.div
                    variants={animationVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="overflow-hidden"
                >
                  <TrainingControlsPanel onStartTraining={handleStartTraining} />
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
                <ModelTestPanel className="h-full" />
            </motion.div>
         )}
        </AnimatePresence>
        <ModelDetailsPanel className="h-full" />
        <DatasetPreviewPanel />
      </div>

      {!isInsightHubMode && <InsightHubButton onClick={() => setIsInsightHubMode(true)} />}
    </div>
  );
}
