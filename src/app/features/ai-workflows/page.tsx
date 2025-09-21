'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Bot } from 'lucide-react';
import { PageLoader } from '@/components/ui/page-loader';
import { useState, useEffect } from 'react';

export default function AiWorkflowsPage() {
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isPageLoading) {
    return <PageLoader message="Loading AI Workflows..." showProgress={true} progress={75} />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <Card>
              <CardHeader>
                <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full bg-primary/10">
                        <Bot className="w-12 h-12 text-primary" />
                    </div>
                </div>
                <CardTitle className="text-3xl font-bold font-headline">AI-Powered Workflows</CardTitle>
                <CardDescription className="text-lg text-muted-foreground pt-2">
                    Accelerate your process with the Insight Hub, our AI-powered assistant. Instead of manual configuration, you can use natural language to define your entire workflow. Describe your dataset, the model you want to train, and your success metrics. The AI will generate an execution plan, which you can approve to automate the entire process from data preparation to final evaluation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild>
                  <Link href="/features">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Features
                  </Link>
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
