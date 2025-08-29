
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
    <div className="bg-[#0f1113] rounded-xl h-[72px] flex items-center justify-between px-6 border border-white/5 shadow-[0_6px_18px_rgba(2,2,8,0.35)]">
      <div className="flex items-center gap-4">
        <Logo />
        <div>
            <h1 className="text-lg font-bold leading-none">Insight Hub</h1>
            <p className="text-xs text-white/60 leading-tight mt-1">Project • Run Name • <span className="text-green-400">Healthy</span></p>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-white/70 hover:bg-white/10 hover:text-white w-10 h-10 rounded-full">
                <ShieldCheck className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white/70 hover:bg-white/10 hover:text-white w-10 h-10 rounded-full">
                <Lightbulb className="w-5 h-5" />
            </Button>
             <Button variant="ghost" size="icon" className="text-white/70 hover:bg-white/10 hover:text-white w-10 h-10 rounded-full">
                <Settings className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white/70 hover:bg-white/10 hover:text-white w-10 h-10 rounded-full">
                <TestTube className="w-5 h-5" />
            </Button>
      </div>

      <div className="flex items-center gap-2">
            <Badge variant="secondary" className="bg-[#161719] text-white/70 border-none">Health: 98%</Badge>
            <Badge variant="secondary" className="bg-[#161719] text-white/70 border-none">Task: T-a4g8s</Badge>
            <Badge variant="secondary" className="bg-green-500/20 text-green-300 border border-green-500/30">GPU: Idle</Badge>
      </div>
    </div>
  );
}
