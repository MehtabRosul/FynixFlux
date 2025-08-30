
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
    "Generate a SHAP explanation for the current model.",
    "Compare the performance of the last two training runs.",
    "What was the best performing model for the `user_churn` dataset?",
    "Summarize the training logs from run `run_abc_123`.",
    "Explain the feature importance for my regression model.",
    "Draft a model card for the production candidate."
];

export function InsightHubPanel({ onExit }: InsightHubPanelProps) {
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (inputValue) return;

    const intervalId = setInterval(() => {
      setCurrentPlaceholderIndex(prevIndex => (prevIndex + 1) % placeholderQuestions.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [inputValue]);


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
                    placeholder={placeholderQuestions[currentPlaceholderIndex]}
                    rows={4}
                    className="text-base"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
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
