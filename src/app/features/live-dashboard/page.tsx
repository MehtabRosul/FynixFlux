import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, LayoutDashboard } from 'lucide-react';

export default function LiveDashboardPage() {
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
                        <LayoutDashboard className="w-12 h-12 text-primary" />
                    </div>
                </div>
                <CardTitle className="text-3xl font-bold font-headline">Live Training Dashboard</CardTitle>
                <CardDescription className="text-lg text-muted-foreground pt-2">
                    Transparency is key to effective model training. Our live dashboard provides a real-time window into your training job. You can monitor key metrics like loss and accuracy, view streaming logs, track epoch and batch updates, and see the overall progress of the pipeline. This resilient feed ensures you're always informed, even if you disconnect and reconnect.
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
