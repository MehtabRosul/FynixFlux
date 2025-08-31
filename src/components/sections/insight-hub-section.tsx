
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bot, Lightbulb, ListChecks } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    icon: <Lightbulb className="w-8 h-8 text-primary" />,
    title: "Natural Language Commands",
    description: "Simply describe your goal in plain English. The Insight Hub understands your intent, from data cleaning to model choice.",
  },
  {
    icon: <ListChecks className="w-8 h-8 text-primary" />,
    title: "Automated Planning",
    description: "The AI analyzes your request, forms a step-by-step execution plan, and shows it to you before it begins.",
  },
  {
    icon: <Bot className="w-8 h-8 text-primary" />,
    title: "Seamless Execution",
    description: "Once approved, the Hub executes the entire workflow, providing live updates and final results automatically.",
  },
];

export function InsightHubSection() {
    return (
        <section className="py-20 md:py-32 bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm mb-4">
                        <Bot className="inline-block w-5 h-5 mr-2 text-primary" />
                        AI-Powered Workflow
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                        Meet the Insight Hub
                    </h2>
                    <p className="text-lg text-muted-foreground mt-4">
                        Go beyond manual configuration. The Insight Hub is your AI-powered MLOps assistant. Simply describe your goal, and watch as it analyzes your request, forms a plan, and executes the entire workflow from training to evaluation.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                         <Card 
                            key={feature.title} 
                            className="text-center p-6 transition-all duration-500 hover:shadow-primary/20 hover:-translate-y-2"
                        >
                            <div className="flex justify-center mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button size="lg" asChild>
                        <Link href="/dashboard">Try the Insight Hub</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
