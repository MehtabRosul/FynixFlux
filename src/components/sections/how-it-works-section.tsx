import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { Bot, Lightbulb, ListChecks, PlayCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';

const steps = [
  {
    title: '1. Upload & Profile',
    description:
      'Securely upload your dataset. Fynix Flux Pilot automatically profiles it, flagging quality issues and sensitive data so you can start with a clean slate.',
    image: 'https://picsum.photos/600/400',
    aiHint: 'data upload',
  },
  {
    title: '2. Train & Monitor',
    description:
      'Configure your training job and launch a worker. Watch the magic happen on your live dashboard with real-time metrics, logs, and AI-generated narrative insights.',
    image: 'https://picsum.photos/600/400',
    aiHint: 'dashboard chart',
  },
  {
    title: '3. Test & Validate',
    description:
      'Once training is complete, use the sandbox to test your model artifacts. Compare versions, run batch tests, and generate explainability reports to ensure performance.',
    image: 'https://picsum.photos/600/400',
    aiHint: 'code terminal',
  },
  {
    title: '4. Deploy & Manage',
    description:
      'Promote your validated model to the registry. Download it in your preferred format with ready-to-use code snippets, and manage its lifecycle with tags and rollbacks.',
    image: 'https://picsum.photos/600/400',
    aiHint: 'server deployment',
  },
];

export function HowItWorksSection() {
  const insightHubSteps = [
      { icon: <Lightbulb className="w-8 h-8 text-primary" />, title: "Describe", description: "State your goal in plain English." },
      { icon: <ListChecks className="w-8 h-8 text-primary" />, title: "Plan", description: "The AI forms a step-by-step plan." },
      { icon: <PlayCircle className="w-8 h-8 text-primary" />, title: "Execute", description: "The plan is executed from start to finish." },
  ]
  return (
    <section
      id="how-it-works"
      className="py-12 md:py-24 lg:py-32 bg-secondary/50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">
              How It Works
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              A Seamless Four-Step Workflow
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Go from raw data to a production-ready model in just a few clicks.
            </p>
          </div>
        </div>
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`grid gap-8 md:gap-16 items-center lg:grid-cols-2 ${
                index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div
                className={`space-y-4 ${
                  index % 2 !== 0 ? 'lg:col-start-2' : ''
                }`}
              >
                <h3 className="text-2xl font-bold tracking-tight text-primary">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-lg">
                  {step.description}
                </p>
              </div>
              <Image
                src={step.image}
                alt={step.title}
                data-ai-hint={step.aiHint}
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          ))}
        </div>

        <Separator className="my-16 md:my-24" />

        <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block rounded-lg bg-primary/10 p-3 text-sm mb-4">
              <Bot className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
              Or, Skip the Steps
            </h3>
            <p className="text-lg text-muted-foreground mt-4">
              The Insight Hub is your AI-powered MLOps assistant. Instead of manual clicks, simply describe your goal in plain English. The Hub analyzes your request, forms a plan, and executes the entire workflow for you.
            </p>

            <Card className="mt-8">
                <CardContent className="p-6">
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                        {insightHubSteps.map(step => (
                            <div key={step.title} className="flex flex-col items-center gap-2">
                                {step.icon}
                                <h4 className="font-semibold text-lg">{step.title}</h4>
                                <p className="text-sm text-muted-foreground">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
