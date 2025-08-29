import { Panel } from './panel';

const LiveTrainingGraph = () => (
    <div className="h-full flex items-center justify-center">
        <p className="text-white/30">Live Training Graph (WebGL)</p>
    </div>
);

const EpochRibbon = () => (
    <div className="h-full flex items-center justify-center">
        <p className="text-white/30">Epoch Ribbon</p>
    </div>
);

const LiveInsightsFeed = () => (
     <div className="h-full flex items-center justify-center">
        <p className="text-white/30">Live Insights Feed</p>
    </div>
);

const ModelTuner = () => (
    <div className="h-full flex items-center justify-center">
       <p className="text-white/30">Model Recommendation & Tuner</p>
   </div>
);


export function LeftColumn() {
  return (
    <div className="h-full flex flex-col gap-5">
      <div className="grid grid-rows-6 gap-5 flex-grow">
          <div className="row-span-3">
             <Panel title="Live Training — Primary View">
                <LiveTrainingGraph />
            </Panel>
          </div>
           <div className="row-span-1">
             <Panel title="Epoch Ribbon">
                <EpochRibbon />
            </Panel>
           </div>
           <div className="row-span-2 grid grid-cols-2 gap-5">
                <Panel title="Live Training Insights (AI Narrative)">
                    <LiveInsightsFeed />
                </Panel>
                <Panel title="Suggested Models & Tuning Planner">
                    <ModelTuner />
                </Panel>
           </div>
      </div>
    </div>
  );
}
