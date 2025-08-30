
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Bot, Sparkles, ArrowLeft } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";

interface InsightHubPanelProps {
  onExit: () => void;
}

export function InsightHubPanel({ onExit }: InsightHubPanelProps) {
  const examplePrompts = [
    "Train a binary classifier for churn. Optimize for recall; ensure model size < 50MB; provide ONNX export.",
    "Build a regression model to predict house prices. Use MAE as the primary evaluation metric.",
    "Analyze customer feedback for sentiment. Identify the top 5 most common negative themes."
  ];

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
            <Button variant="outline" onClick={onExit}>
                <ArrowLeft className="mr-2" />
                Exit Insight Hub
            </Button>
        </CardHeader>
        <CardContent>
            <div className="space-y-4">
                <Textarea 
                    placeholder="Describe what you want the system to do with the uploaded dataset (task, metric, constraints). E.g.: 'Train a binary classifier for churn. Optimize for recall; ensure model size < 50MB; provide ONNX export.'"
                    rows={4}
                    className="text-base"
                />
                <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                       <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="sm">Examples</Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                {examplePrompts.map((prompt, index) => (
                                    <DropdownMenuItem key={index} onSelect={() => console.log(prompt)}>
                                        {prompt.substring(0, 50)}...
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Button variant="ghost" size="sm">Reset</Button>
                    </div>
                    <Button>
                        <Sparkles className="mr-2" />
                        Run
                    </Button>
                </div>
            </div>
        </CardContent>
    </Card>
  </change>
  <change>
    <file>/src/app/dashboard/layout.tsx</file>
    <content><![CDATA[
'use client';

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen w-full bg-background">
      <Header />
      <main className="flex-grow p-4 md:p-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}
