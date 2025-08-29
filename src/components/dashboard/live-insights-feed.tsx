
"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface LiveInsightsFeedProps {
  isTraining: boolean;
}

const trainingMessages = [
  "Epoch 1/20: Training started. Initializing weights...",
  "Epoch 2/20: Validation loss decreased to 0.55. Model is learning.",
  "Epoch 3/20: Learning rate adjusted to 0.0009.",
  "Epoch 4/20: Accuracy improved to 88%.",
  "Epoch 5/20: Batch loss stabilizing around 0.30.",
  "Epoch 6/20: No significant improvement in validation loss this epoch.",
  "Epoch 7/20: Training progress at 35%.",
  "Epoch 8/20: Shuffle buffer refilled.",
  "Epoch 9/20: Validation accuracy now at 89%.",
  "Epoch 10/20: Halfway through training. Performance is steady.",
  "Epoch 11/20: Detected slight increase in validation loss. Monitoring for overfitting.",
  "Epoch 12/20: Training loss continues to decrease.",
  "Epoch 13/20: Checkpoint saved. Best performance so far.",
  "Epoch 14/20: GPU utilization at 92%.",
  "Epoch 15/20: Final 5 epochs remaining.",
  "Epoch 16/20: Validation loss has plateaued. Early stopping might be considered.",
  "Epoch 17/20: Reducing learning rate as part of schedule.",
  "Epoch 18/20: Model is converging well.",
  "Epoch 19/20: Almost complete. Finalizing layers.",
  "Epoch 20/20: Training complete. Finalizing artifacts.",
];

export function LiveInsightsFeed({ isTraining }: LiveInsightsFeedProps) {
  const [insights, setInsights] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isTraining) {
      setInsights([]);
      setCurrentIndex(0);

      intervalRef.current = setInterval(() => {
        setCurrentIndex(prevIndex => {
          const nextIndex = prevIndex + 1;
          if (nextIndex > trainingMessages.length) {
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
            }
            return prevIndex;
          }
          
          setInsights(prevInsights => [...prevInsights, trainingMessages[prevIndex]]);
          return nextIndex;
        });
      }, 1500); // New message every 1.5 seconds, same as chart
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isTraining]);

  useEffect(() => {
    if (scrollAreaRef.current) {
      const viewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (viewport) {
        viewport.scrollTop = viewport.scrollHeight;
      }
    }
  }, [insights]);


  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Bot className="h-6 w-6 text-primary" />
          <CardTitle>Live Training Feed</CardTitle>
        </div>
        <CardDescription>A real-time feed of events and observations from the training run.</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-40 w-full rounded-md border p-4" ref={scrollAreaRef}>
          {insights.length > 0 ? (
            <AnimatePresence>
              {insights.map((insight, index) => (
                <motion.div
                  key={index}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm text-muted-foreground mb-2"
                >
                  <span className="font-mono text-xs text-primary/80 mr-2">[{new Date().toLocaleTimeString()}]</span>
                  {insight}
                </motion.div>
              ))}
            </AnimatePresence>
          ) : (
             <div className="flex items-center justify-center h-full">
                <p className="text-muted-foreground text-sm">Awaiting training to start...</p>
            </div>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
