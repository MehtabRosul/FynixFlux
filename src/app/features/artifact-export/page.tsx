import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Download } from 'lucide-react';

export default function ArtifactExportPage() {
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
                        <Download className="w-12 h-12 text-primary" />
                    </div>
                </div>
                <CardTitle className="text-3xl font-bold font-headline">Versatile Artifact Export</CardTitle>
                <CardDescription className="text-lg text-muted-foreground pt-2">
                    A model isn't useful until it can be deployed. We provide multiple export formats to fit your production environment, including dependency-light Python wheels, ONNX, TFLite, and TorchScript. Each artifact comes with plaintext copy-paste instructions for immediate integration, helping you bridge the gap between training and deployment.
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
