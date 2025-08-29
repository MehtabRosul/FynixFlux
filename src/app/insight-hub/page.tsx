
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ShieldCheck, Lightbulb, Settings, TestTube, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const insightActions = [
    { 
      id: "validate_dataset", 
      label: "Analyze Dataset Health", 
      description: "Run automated data quality, PII, and schema checks.",
      icon: ShieldCheck,
      href: "/dashboard"
    },
    { 
      id: "suggest_model", 
      label: "Get Model Suggestions",
      description: "Receive AI-powered recommendations for the best model types.",
      icon: Lightbulb,
      href: "/dashboard"
    },
    { 
      id: "plan_tuning", 
      label: "Create a Tuning Plan",
      description: "Generate a hyperparameter tuning strategy for your model.",
      icon: Settings,
      href: "/dashboard"
    },
    { 
      id: "run_qa", 
      label: "Perform AI-driven QA",
      description: "Run robustness, fairness, and adversarial tests on your model.",
      icon: TestTube,
      href: "/dashboard"
    }
];

export default function InsightHubPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow flex items-center justify-center py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground font-headline">Insight Hub</h1>
                <p className="mt-4 text-lg md:text-xl text-muted-foreground">
                    Your AI-powered command center for making smarter decisions throughout the model lifecycle. Select an action to get started.
                </p>
            </div>

            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {insightActions.map((action, index) => (
                    <Link key={action.id} href={action.href} className="group">
                        <Card 
                            className="h-full flex flex-col text-center p-6 transition-all duration-300 ease-in-out hover:shadow-primary/20 hover:-translate-y-2 hover:shadow-xl"
                            style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'backwards' }}
                        >
                            <CardHeader className="flex-grow">
                                <div className="flex justify-center mb-4">
                                    <action.icon className="w-10 h-10 text-primary" />
                                </div>
                                <CardTitle>{action.label}</CardTitle>
                                <CardDescription className="mt-2">{action.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="text-primary font-semibold flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    Go to Action <ArrowRight className="w-4 h-4" />
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
            
            <div className="mt-20 max-w-3xl mx-auto text-center">
                 <Card className="bg-muted/30">
                    <CardHeader>
                        <CardTitle>How it works</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                          The Insight Hub uses AI to analyze your data and models, providing actionable recommendations to improve performance, ensure fairness, and accelerate your workflow. Each tool is designed to give you expert-level guidance on demand.
                        </p>
                         <Button variant="link" asChild className="mt-4">
                            <Link href="/docs">Read the Docs</Link>
                         </Button>
                    </CardContent>
                 </Card>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
