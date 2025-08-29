
import { Panel } from './panel';

const LiveTrainingGraph = () => (
    <div className="h-full flex items-center justify-center">
        <p className="text-white/30 text-sm">Live Training Graph</p>
    </div>
);

const EpochRibbon = () => (
    <div className="h-full flex items-center justify-center">
        <p className="text-white/30 text-sm">Epoch Ribbon</p>
    </div>
);

const LiveInsightsFeed = () => (
     <div className="h-full flex items-center justify-center">
        <p className="text-white/30 text-sm">Live Insights Feed</p>
    </div>
);

const ModelTuner = () => (
    <div className="h-full flex items-center justify-center">
       <p className="text-white/30 text-sm">Model Recommendation & Tuner</p>
   </div>
);


export function LeftColumn() {
  return (
    <div className="h-full flex flex-col gap-5">
        <div className="h-[360px] flex-shrink-0">
            <Panel title="Live Training — Primary View">
                <LiveTrainingGraph />
            </Panel>
        </div>
        <div className="h-[72px] flex-shrink-0">
            <Panel title="Epoch Ribbon">
                <EpochRibbon />
            </Panel>
        </div>
        <div className="flex-grow grid grid-cols-2 gap-5">
            <Panel title="Live Training Insights (AI Narrative)">
                <LiveInsightsFeed />
            </Panel>
            <Panel title="Suggested Models & Tuning Planner">
                <ModelTuner />
            </Panel>
        </div>
    </div>
  );
}
