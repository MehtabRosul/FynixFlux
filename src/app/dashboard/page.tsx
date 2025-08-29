
'use client';

import { useState } from 'react';
import { DataUploadPanel } from '@/components/dashboard/data-upload-panel';
import { DatasetPreviewPanel } from '@/components/dashboard/dataset-preview-panel';
import { LiveMetricsChart } from '@/components/dashboard/live-metrics-chart';
import { ModelDetailsPanel } from '@/components/dashboard/model-details-panel';
import { ModelTestPanel } from '@/components/dashboard/model-test-panel';
import { TopControlRow } from '@/components/dashboard/top-control-row';
import { TrainingControlsPanel } from '@/components/dashboard/training-controls-panel';

export interface TrainingConfig {
  problemCategorization: string | null;
  modelSelection: string | null;
  dataSplitting: string | null;
  hyperparameterTuning: string | null;
  evaluationMetric: string | null;
}

export default function DashboardPage() {
  const [isTraining, setIsTraining] = useState(false);
  const [trainingConfig, setTrainingConfig] = useState<TrainingConfig>({
    problemCategorization: null,
    modelSelection: null,
    dataSplitting: null,
    hyperparameterTuning: null,
    evaluationMetric: null,
  });

  const handleStartTraining = () => {
    // In a real app, you would pass the trainingConfig to the training service
    console.log("Starting training with config:", trainingConfig);
    setIsTraining(true);
  };
  
  const handleConfigChange = (key: keyof TrainingConfig, value: string) => {
    setTrainingConfig(prevConfig => ({
      ...prevConfig,
      [key]: value
    }));
  };

  return (
    <div className="space-y-6">
      <TopControlRow config={trainingConfig} onConfigChange={handleConfigChange} />

      <div className="grid grid-cols-12 gap-6">
        {/* Left Column */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          <LiveMetricsChart isTraining={isTraining} />
        </div>

        {/* Right Column */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          <DataUploadPanel />
          <TrainingControlsPanel onStartTraining={handleStartTraining} />
        </div>

        {/* Lower Row */}
        <div className="col-span-12 grid lg:grid-cols-3 gap-6">
          <ModelTestPanel />
          <ModelDetailsPanel />
          <DatasetPreviewPanel />
        </div>
      </div>
    </div>
  );
}
