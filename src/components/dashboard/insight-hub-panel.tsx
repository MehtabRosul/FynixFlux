
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AnimatedBotIcon } from "@/components/ui/animated-bot-icon";

interface InsightHubPanelProps {
  onExit: () => void;
}

const placeholderQuestions = [
    "Train a classification model on the 'customer_churn_v2.csv' dataset to predict the 'churn' column.",
    "Use a RandomForest classifier, reserve 30% of the data for testing, and focus on maximizing the AUC score.",
    "Clean the dataset by removing rows with missing values and apply one-hot encoding to categorical features before training.",
    "Train an XGBoost model for 100 epochs with a learning rate of 0.05. After training, test its accuracy.",
    "Perform hyperparameter tuning using grid search on the 'learning_rate' and 'max_depth' parameters.",
    "Split the data using stratified sampling to handle class imbalance, then train a logistic regression model."
];

export function InsightHubPanel({ onExit }: InsightHubPanelProps) {
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (inputValue) return;

    const intervalId = setInterval(() => {
        setCurrentPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholderQuestions.length);
    }, 4000); 

    return () => clearInterval(intervalId);
  }, [inputValue]);


  return (
    <Card className="relative overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                   <AnimatedBotIcon className="w-8 h-8 text-primary" />
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
                    <Textarea
                        placeholder=""
                        rows={4}
                        className="bg-background/50"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    {!inputValue && (
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentPlaceholderIndex}
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -5 }}
                                transition={{ duration: 0.5 }}
                                className="absolute top-0 left-0 px-3 py-2 text-sm text-muted-foreground pointer-events-none"
                            >
                                {placeholderQuestions[currentPlaceholderIndex]}
                            </motion.div>
                        </AnimatePresence>
                    )}
                </div>
                <div className="flex justify-end pt-4">
                    <Button size="lg" className="bg-gradient-to-r from-primary/80 to-accent/80 text-primary-foreground">
                        <Sparkles className="mr-2 h-5 w-5" />
                        Start Training
                    </Button>
                </div>
            </div>
        </CardContent>
    </Card>
  );
}
