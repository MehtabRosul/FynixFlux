
'use client';

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SlidersHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";


export function TrainingConfigPanel() {
  const [isAdvanced, setIsAdvanced] = useState(false);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-6 h-6 text-primary" />
            <CardTitle>Training Configuration</CardTitle>
        </div>
        <CardDescription>Define your training job from presets or advanced settings.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
            <Button className="flex-1" variant={!isAdvanced ? "default" : "outline"} onClick={() => setIsAdvanced(false)}>Quick Train (Auto)</Button>
            <Button variant={isAdvanced ? "default" : "outline"} className="flex-1" onClick={() => setIsAdvanced(true)}>Advanced Setup</Button>
        </div>

        {isAdvanced && (
            <Accordion type="single" collapsible defaultValue="item-1" className="animate-in fade-in-50">
            <AccordionItem value="item-1">
                <AccordionTrigger className="text-base font-semibold">Task & Model</AccordionTrigger>
                <AccordionContent className="space-y-4 pt-2">
                    <div className="grid gap-2">
                        <Label htmlFor="task-type">Task Type</Label>
                        <Select defaultValue="classification">
                            <SelectTrigger id="task-type">
                                <SelectValue placeholder="Select a task" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="classification">Classification</SelectItem>
                                <SelectItem value="regression">Regression</SelectItem>
                                <SelectItem value="nlp-classification">NLP Classification</SelectItem>
                                <SelectItem value="image-classification">Image Classification</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="model-select">Model</Label>
                        <Select defaultValue="randomforest">
                            <SelectTrigger id="model-select">
                                <SelectValue placeholder="Select a model" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="randomforest">Random Forest</SelectItem>
                                <SelectItem value="xgboost">XGBoost</SelectItem>
                                <SelectItem value="mlp">MLP (Deep Net)</SelectItem>
                                <SelectItem value="cnn">CNN (Image)</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className="text-base font-semibold">Training Strategy</AccordionTrigger>
                <AccordionContent>
                <p className="text-muted-foreground text-sm">Configure splits, sampling, epochs, and more here.</p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className="text-base font-semibold">Hyperparameters</AccordionTrigger>
                <AccordionContent>
                    <p className="text-muted-foreground text-sm">Set up hyperparameter tuning (Grid, Random, Bayesian).</p>
                </AccordionContent>
            </AccordionItem>
            </Accordion>
        )}
        
        <Button size="lg" className="w-full">Start Training Run</Button>
      </CardContent>
    </Card>
  );
}
