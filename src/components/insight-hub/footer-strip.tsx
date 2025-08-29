
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageSquare } from "lucide-react";


export function FooterStrip() {
  return (
    <div className="bg-[#0f1113] rounded-xl h-[96px] flex items-center justify-between px-6 border border-white/5 shadow-[0_-6px_18px_rgba(2,2,8,0.35)]">
        {/* Left: Global Controls */}
        <div className="flex items-center gap-6">
            <div className="flex items-center space-x-2">
                <Switch id="smoothing-toggle" defaultChecked />
                <Label htmlFor="smoothing-toggle" className="text-xs text-white/70">Smoothing</Label>
            </div>
            <div className="flex items-center gap-2">
                 <Label htmlFor="scale-select" className="text-xs text-white/70">Scale</Label>
                <Select defaultValue="linear">
                    <SelectTrigger id="scale-select" className="w-24 h-8 text-xs bg-[#161719] border-white/10">
                        <SelectValue placeholder="Scale" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="linear">Linear</SelectItem>
                        <SelectItem value="log">Log</SelectItem>
                    </SelectContent>
                </Select>
            </div>
             <div className="flex items-center gap-2">
                 <Label htmlFor="update-select" className="text-xs text-white/70">Update</Label>
                <Select defaultValue="2s">
                    <SelectTrigger id="update-select" className="w-20 h-8 text-xs bg-[#161719] border-white/10">
                        <SelectValue placeholder="Update" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="1s">1s</SelectItem>
                        <SelectItem value="2s">2s</SelectItem>
                        <SelectItem value="5s">5s</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>

        {/* Center: Cost/Carbon */}
        <div className="text-center">
            <p className="text-sm font-medium">Estimated cost: <span className="text-green-400">$12.30</span></p>
            <p className="text-xs text-white/50">Carbon: 0.40 kgCO₂e</p>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-white/70 hover:bg-white/10 hover:text-white">
                <MessageSquare className="w-4 h-4 mr-2" />
                Ask Insight Hub
            </Button>
             <Button variant="outline" className="text-white/90 border-white/20 hover:bg-white/10 h-11">
                Apply All (Preview)
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 h-11 w-40 shadow-lg shadow-primary/30">
                Export Model
            </Button>
        </div>

    </div>
  );
}
