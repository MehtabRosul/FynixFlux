import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, DatabaseZap } from 'lucide-react';

export default function DatasetProfilingPage() {
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
                        <DatabaseZap className="w-12 h-12 text-primary" />
                    </div>
                </div>
                <CardTitle className="text-3xl font-bold font-headline">Automated Dataset Profiling</CardTitle>
                <CardDescription className="text-lg text-muted-foreground pt-2">
                    Knowledge is power. The moment your dataset is uploaded, we run a comprehensive profiling job. This includes inferring the data schema, identifying data types, calculating null rates and cardinality, and flagging potential PII. This automated first-pass analysis provides immediate data quality warnings, helping you address issues before you even begin training.
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
