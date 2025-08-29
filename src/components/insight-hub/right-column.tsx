import { Panel } from './panel';

const DatasetHealthCard = () => (
     <div className="h-full flex items-center justify-center">
        <p className="text-white/30">Dataset Health & Auto-Diagnosis</p>
    </div>
);

const LabelRecommender = () => (
     <div className="h-full flex items-center justify-center">
        <p className="text-white/30">Smart Label Recommender</p>
    </div>
);

const FeatsynthPreview = () => (
     <div className="h-full flex items-center justify-center">
        <p className="text-white/30">Auto-Feature Synthesis Preview</p>
    </div>
);

const ExplainabilitySnapshot = () => (
     <div className="h-full flex items-center justify-center">
        <p className="text-white/30">Explainability Snapshot</p>
    </div>
);

const ModelCardQA = () => (
     <div className="h-full flex items-center justify-center">
        <p className="text-white/30">Model Card / AI QA Summary</p>
    </div>
);

const DeploymentAdvisor = () => (
     <div className="h-full flex items-center justify-center">
        <p className="text-white/30">Threshold Optimizer & Deployment Advisor</p>
    </div>
);

export function RightColumn() {
  return (
    <div className="h-full flex flex-col gap-5 overflow-y-auto pr-2">
       <div className="h-1/3">
        <Panel title="Dataset Health & Auto-Diagnosis">
          <DatasetHealthCard />
        </Panel>
       </div>
       <div className="h-1/4">
        <Panel title="Smart Label Recommender">
            <LabelRecommender />
        </Panel>
       </div>
       <div className="h-1/4">
        <Panel title="Auto-Feature Synthesis Preview">
            <FeatsynthPreview />
        </Panel>
       </div>
       <div className="h-1/3">
        <Panel title="Explainability Snapshot (Top Features)">
            <ExplainabilitySnapshot />
        </Panel>
       </div>
        <div className="h-1/3">
        <Panel title="Model Card / AI QA Summary">
            <ModelCardQA />
        </Panel>
       </div>
       <div className="h-1/3">
        <Panel title="Threshold Optimizer & Deployment Advisor">
            <DeploymentAdvisor />
        </Panel>
       </div>
    </div>
  );
}
