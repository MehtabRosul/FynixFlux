
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Bot, Sparkles } from "lucide-react";

interface InsightHubPanelProps {
  onExit: () => void;
}

export function InsightHubPanel({ onExit }: InsightHubPanelProps) {
  return (
    <Card className="border-primary/50 border-2 shadow-primary/10">
        <CardHeader className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                   <Bot className="w-8 h-8 text-primary" />
                </div>
                <div>
                    <CardTitle className="text-2xl font-headline">Insight Hub</CardTitle>
                    <CardDescription>Automated Assistant for End-to-End Model Development</CardDescription>
                </div>
            </div>
        </CardHeader>
        <CardContent>
            <div className="space-y-4">
                <Textarea 
                    placeholder="Describe your goal..."
                    rows={4}
                    className="text-base"
                />
                <div className="flex justify-end">
                    <Button>
                        <Sparkles className="mr-2" />
                        Run
                    </Button>
                </div>
            </div>
        </CardContent>
    </Card>
  );
}
