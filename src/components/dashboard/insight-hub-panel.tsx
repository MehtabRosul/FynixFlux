
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Bot, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
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
  const [currentPlaceholder, setCurrentPlaceholder] = useState(placeholderQuestions[0]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (inputValue) return;

    const intervalId = setInterval(() => {
      setCurrentPlaceholder((prev) => {
        const currentIndex = placeholderQuestions.indexOf(prev);
        const nextIndex = (currentIndex + 1) % placeholderQuestions.length;
        return placeholderQuestions[nextIndex];
      });
    }, 4000); 

    return () => clearInterval(intervalId);
  }, [inputValue]);


  return (
    <Card className="relative overflow-hidden">
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
                     <AnimatePresence mode="wait">
                         <motion.div
                            key={currentPlaceholder}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 p-3 pointer-events-none text-muted-foreground text-sm"
                         >
                            {currentPlaceholder}
                         </motion.div>
                    </AnimatePresence>
                    <Textarea
                        placeholder=""
                        rows={4}
                        className="bg-background/50"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </div>
                <div className="flex justify-end pt-4">
                    <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground animate-subtle-gradient bg-[length:400%_400%]">
                        <Sparkles className="mr-2 h-5 w-5" />
                        Start Training
                    </Button>
                </div>
            </div>
        </CardContent>
    </Card>
  );
}
