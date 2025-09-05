import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, TestTube2 } from 'lucide-react';

export default function ModelSandboxPage() {
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
                        <TestTube2 className="w-12 h-12 text-primary" />
                    </div>
                </div>
                <CardTitle className="text-3xl font-bold font-headline">Model Test Sandbox</CardTitle>
                <CardDescription className="text-lg text-muted-foreground pt-2">
                    Confidence in your model is paramount. Our on-demand testing panel allows for rapid validation. You can perform single-input tests with explanations (e.g., SHAP summaries), upload a CSV for batch testing, and quickly compare the performance of different model versions. Each test run is saved as validation evidence, providing a complete audit trail.
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
