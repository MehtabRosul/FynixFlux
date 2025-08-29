import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Settings, ShieldCheck, TestTube } from "lucide-react";
import Image from 'next/image';

const Logo = () => (
    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
      {/* Your Logo Here */}
    </div>
  );

export function HeaderBar() {
  return (
    <div className="bg-[#0f1113] rounded-xl h-full flex items-center justify-between px-4 border border-white/5">
      <div className="flex items-center gap-4">
        <Logo />
        <div>
            <h1 className="text-lg font-bold">Insight Hub</h1>
            <p className="text-xs text-white/70">Project • Run Name • <span className="text-green-400">Healthy</span></p>
        </div>
      </div>
      
      {/* Center content if any, e.g., context selector */}
      <div>
        {/* Placeholder for Context Selector */}
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="text-white/70 hover:bg-white/10 hover:text-white">
                <ShieldCheck className="w-4 h-4 mr-2" /> Validate Dataset
            </Button>
            <Button variant="ghost" size="sm" className="text-white/70 hover:bg-white/10 hover:text-white">
                <Lightbulb className="w-4 h-4 mr-2" /> Suggest Model
            </Button>
             <Button variant="ghost" size="sm" className="text-white/70 hover:bg-white/10 hover:text-white">
                <Settings className="w-4 h-4 mr-2" /> Plan Tuning
            </Button>
            <Button variant="ghost" size="sm" className="text-white/70 hover:bg-white/10 hover:text-white">
                <TestTube className="w-4 h-4 mr-2" /> Run AI QA
            </Button>
        </div>
        <div className="flex items-center gap-2">
            <Badge variant="secondary" className="bg-[#161719] text-white/70">Health: 98%</Badge>
            <Badge variant="secondary" className="bg-[#161719] text-white/70">Task: T-a4g8s</Badge>
            <Badge variant="secondary" className="bg-green-500/20 text-green-300 border border-green-500/30">GPU: Idle</Badge>
        </div>
      </div>
    </div>
  );
}
