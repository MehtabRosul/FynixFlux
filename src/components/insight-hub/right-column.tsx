
import { Panel } from './panel';

const PlaceholderContent = ({ text }: { text: string }) => (
     <div className="h-full flex items-center justify-center">
        <p className="text-white/30 text-sm">{text}</p>
    </div>
);

export function RightColumn() {
  return (
    <div className="h-full flex flex-col gap-5">
       <div className="h-[196px] flex-shrink-0">
            <Panel title="Dataset Health & Auto-Diagnosis">
                <PlaceholderContent text="Dataset Health & Auto-Diagnosis" />
            </Panel>
       </div>
       <div className="h-[136px] flex-shrink-0">
            <Panel title="Smart Label Recommender">
                <PlaceholderContent text="Smart Label Recommender" />
            </Panel>
       </div>
       <div className="h-[136px] flex-shrink-0">
            <Panel title="Auto-Feature Synthesis Preview">
                <PlaceholderContent text="Auto-Feature Synthesis Preview" />
            </Panel>
       </div>
       <div className="h-[136px] flex-shrink-0">
            <Panel title="Explainability Snapshot (Top Features)">
                <PlaceholderContent text="Explainability Snapshot" />
            </Panel>
       </div>
       <div className="h-[136px] flex-shrink-0">
            <Panel title="Model Card / AI QA Summary">
                <PlaceholderContent text="Model Card / AI QA Summary" />
            </Panel>
       </div>
       <div className="h-[136px] flex-shrink-0">
            <Panel title="Threshold Optimizer & Deployment Advisor">
                <PlaceholderContent text="Threshold Optimizer & Deployment Advisor" />
            </Panel>
       </div>
    </div>
  );
}
