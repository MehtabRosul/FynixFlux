
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Bot, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

interface InsightHubPanelProps {
  onExit: () => void;
}

const placeholderQuestions = [
    "What were the top 5 most important features for my latest `churn-prediction` model?",
    "Compare the ROC AUC of `run-xgboost-v1` and `run-lightgbm-v2`.",
    "Generate a model card for the model tagged as `production-candidate`.",
    "Summarize the training logs for any failed runs in the last 24 hours.",
    "Show me all datasets with a data quality score below 85%.",
    "Draft a Python script to load and run inference with model `v3.onnx`."
];

export function InsightHubPanel({ onExit }: InsightHubPanelProps) {
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (inputValue) return;

    const intervalId = setInterval(() => {
      setCurrentPlaceholderIndex(prevIndex => (prevIndex + 1) % placeholderQuestions.length);
    }, 4000); 

    return () => clearInterval(intervalId);
  }, [inputValue]);


  return (
    <Card>
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
                 <div className="relative">
                       <div
                           className="absolute inset-0 p-3 pointer-events-none text-muted-foreground text-sm"
                       >
                           {placeholderQuestions[currentPlaceholderIndex]}
                       </div>
                    <Textarea
                        placeholder=""
                        rows={4}
                        className="bg-background/50"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </div>
                <div className="flex justify-end items-center pt-4 pr-4">
                     <div className="relative w-20 h-20 group">
                        {/* Ripple Animation */}
                        <span className="absolute inline-flex h-full w-full rounded-full bg-primary/20 animate-ripple-effect opacity-75"></span>
                        
                        {/* Gradient Background */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-secondary transition-all duration-300 group-hover:from-accent group-hover:to-primary"></div>
                        
                        {/* Glassmorphism Effect */}
                        <div className="absolute inset-0 rounded-full backdrop-blur-sm bg-white/10"></div>
                        
                        {/* Inner Shadow and Border */}
                        <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/20 shadow-inner"></div>

                        <Button 
                            size="icon"
                            className="relative w-full h-full rounded-full bg-transparent shadow-lg hover:bg-transparent"
                            aria-label="Run"
                        >
                            <Sparkles className="h-9 w-9 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover:scale-110" />
                        </Button>
                    </div>
                </div>
            </div>
        </CardContent>
    </Card>
  );
}
