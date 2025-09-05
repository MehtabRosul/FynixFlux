import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, UploadCloud } from 'lucide-react';

export default function ResumableUploadsPage() {
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
                        <UploadCloud className="w-12 h-12 text-primary" />
                    </div>
                </div>
                <CardTitle className="text-3xl font-bold font-headline">Resumable Dataset Uploads</CardTitle>
                <CardDescription className="text-lg text-muted-foreground pt-2">
                    Our platform is designed to handle large-scale data with ease. Using a sophisticated chunking mechanism, you can upload datasets of any size. If an interruption occurs, the upload can be resumed from the exact point it left off, saving you time and bandwidth. This resilient process ensures your data gets to us reliably, every time.
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
