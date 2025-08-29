
'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import {
  BrainCircuit,
  X,
  Pin,
  MessageSquare,
  ShieldCheck,
  Lightbulb,
  Settings,
  TestTube,
  Sparkles,
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { DataHealthPanel } from './data-health-panel';

interface InsightHubProps {
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
}

const quickActions = [
    { id: "validate_dataset", label: "Validate Dataset", icon: ShieldCheck },
    { id: "suggest_model", label: "Suggest Model", icon: Lightbulb },
    { id: "plan_tuning", label: "Plan Tuning", icon: Settings },
    { id: "run_qa", label: "Run AI QA", icon: TestTube }
];

export function InsightHub({ isOpen, onOpenChange }: InsightHubProps) {
  return (
    <>
        {/* Floating Button - Hidden when panel is open */}
        {!isOpen && (
            <div className="fixed bottom-8 right-6 z-50">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                onClick={() => onOpenChange(true)}
                                className="rounded-full h-14 w-14 p-0 shadow-2xl shadow-primary/40 flex items-center justify-center gap-1"
                                aria-label="Open Insight Hub"
                            >
                                <Sparkles className="h-5 w-5" />
                                <BrainCircuit className="h-5 w-5" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="left" className="mr-2">
                            <p>Insight Hub</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        )}

        {/* Panel */}
        <aside
            className={cn(
            'fixed top-16 right-0 h-[calc(100vh-4rem)] z-30 bg-card border-l transition-transform duration-300 ease-in-out flex flex-col',
            isOpen ? 'translate-x-0' : 'translate-x-full'
            )}
            style={{ width: '420px' }}
        >
            {/* Header */}
            <header className="flex items-center justify-between p-4 border-b h-16 flex-shrink-0">
                <div className="flex items-center gap-2">
                    <BrainCircuit className="w-6 h-6 text-primary" />
                    <h2 className="text-lg font-bold">Insight Hub</h2>
                </div>
                <div className="flex items-center gap-1">
                    <TooltipProvider>
                        <Tooltip><TooltipTrigger asChild><Button variant="ghost" size="icon"><Pin className="w-4 h-4" /></Button></TooltipTrigger><TooltipContent><p>Pin Panel</p></TooltipContent></Tooltip>
                        <Tooltip><TooltipTrigger asChild><Button variant="ghost" size="icon"><MessageSquare className="w-4 h-4" /></Button></TooltipTrigger><TooltipContent><p>Open Chat</p></TooltipContent></Tooltip>
                        <Tooltip><TooltipTrigger asChild><Button variant="ghost" size="icon" onClick={() => onOpenChange(false)}><X className="w-4 h-4" /></Button></TooltipTrigger><TooltipContent><p>Close</p></TooltipContent></Tooltip>
                    </TooltipProvider>
                </div>
            </header>

            {/* Quick Actions */}
             <div className="p-2 border-b flex-shrink-0">
                <div className="grid grid-cols-4 gap-1">
                    {quickActions.map(action => (
                        <TooltipProvider key={action.id}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="ghost" className="flex flex-col items-center h-auto py-2 gap-1 text-xs">
                                        <action.icon className="w-5 h-5" />
                                        <span>{action.label}</span>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{action.label}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-grow overflow-y-auto">
                 <Tabs defaultValue="data" className="flex flex-col h-full">
                    <div className="flex-shrink-0">
                        <TabsList className="mx-2 mt-2">
                            <TabsTrigger value="data">Data</TabsTrigger>
                            <TabsTrigger value="training">Training</TabsTrigger>
                            <TabsTrigger value="evaluation">Evaluation</TabsTrigger>
                            <TabsTrigger value="deployment">Deployment</TabsTrigger>
                            <TabsTrigger value="assistant">Assistant</TabsTrigger>
                        </TabsList>
                    </div>
                    <div className="flex-grow overflow-y-auto">
                        <TabsContent value="data" className="pt-0">
                            <DataHealthPanel />
                        </TabsContent>
                        <TabsContent value="training" className="p-4">
                            <p className="text-center text-muted-foreground">Training insights will appear here.</p>
                        </TabsContent>
                        <TabsContent value="evaluation" className="p-4">
                            <p className="text-center text-muted-foreground">Evaluation insights will appear here.</p>
                        </TabsContent>
                        <TabsContent value="deployment" className="p-4">
                            <p className="text-center text-muted-foreground">Deployment insights will appear here.</p>
                        </TabsContent>
                        <TabsContent value="assistant" className="p-4">
                            <p className="text-center text-muted-foreground">AI Assistant chat will appear here.</p>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
            
            {/* Footer */}
            <footer className="p-4 border-t text-center text-xs text-muted-foreground flex-shrink-0">
                <p>All AI suggestions include evidence. Confirm before applying.</p>
            </footer>
        </aside>
        
        {/* Overlay */}
        {isOpen && <div onClick={() => onOpenChange(false)} className="fixed inset-0 bg-black/30 z-20 md:hidden" />}
    </>
  );
}
