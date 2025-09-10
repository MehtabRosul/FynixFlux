
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Bot, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { parseTrainingPrompt, ParsedTrainingPlan } from "@/app/actions/ai";

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
  const { toast } = useToast();

  const isTrainingPrompt = (text: string) => {
    const normalized = text.toLowerCase();
    const positiveSignals = [
      // actions
      "train", "training", "fit", "tune", "optimize", "evaluate", "test",
      // objects
      "model", "dataset", "data", "features", "labels",
      // tasks
      "classification", "regression", "time-series", "forecast", "clustering",
      // config terms
      "split", "train/test", "k-fold", "cross-validation", "hyperparameter", "learning rate", "epochs", "max_depth",
      // metrics
      "accuracy", "f1", "auc", "roc", "mae", "mse", "rmse", "r2",
      // algorithms
      "randomforest", "xgboost", "lightgbm", "catboost", "svm", "logistic", "prophet"
    ];
    const hasSignal = positiveSignals.some((kw) => normalized.includes(kw));
    // guard against clearly off-topic prompts
    const offTopicSignals = ["joke", "weather", "news", "email", "login", "image", "story", "translate", "code a website"];
    const isOffTopic = offTopicSignals.some((kw) => normalized.includes(kw));
    return hasSignal && !isOffTopic;
  };

  const handleStart = async () => {
    const text = inputValue.trim();
    if (!text) {
      toast({ title: "Enter a training prompt", description: "Describe how you want the model trained." });
      return;
    }
    if (!isTrainingPrompt(text)) {
      toast({
        title: "Prompt not related to model training",
        description: "Please provide instructions about training, tuning, splitting, models, or metrics.",
      });
      return;
    }
    toast({ title: "Processing training plan", description: "Analyzing your instructions..." });
    try {
      const plan: ParsedTrainingPlan = await parseTrainingPrompt(text);
      const detail = [
        plan.problemCategorization && `Problem: ${plan.problemCategorization}`,
        plan.modelSelection && `Model: ${plan.modelSelection}`,
        plan.dataSplitting && `Split: ${plan.dataSplitting}`,
        plan.hyperparameterTuning && `Tuning: ${plan.hyperparameterTuning}`,
        plan.evaluationMetric && `Metric: ${plan.evaluationMetric}`,
      ].filter(Boolean).join(" · ");
      toast({ title: "Plan created", description: detail || "Defaults will be used." });
      // Emit a custom event so the dashboard can apply configuration and start training
      const event = new CustomEvent("insighthub:training-plan", { detail: plan });
      window.dispatchEvent(event);
    } catch (e) {
      toast({ title: "Failed to parse prompt", description: "Please refine your training instructions." });
    }
  };

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
                    <Button size="lg" className="bg-gradient-to-r from-primary/80 to-accent/80 text-primary-foreground" onClick={handleStart}>
                        <Sparkles className="mr-2 h-5 w-5" />
                        Start Training
                    </Button>
                </div>
            </div>
        </CardContent>
    </Card>
  );
}
