import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Mail, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function GetInTouchPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold font-headline">Get in Touch</CardTitle>
              <CardDescription>I'd love to hear from you. Here's how you can reach me.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-md bg-muted">
                <Mail className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a href="mailto:mehtabrosul10@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    mehtabrosul10@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-md bg-muted">
                <Linkedin className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="font-semibold">LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/rosulmehtab/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    linkedin.com/in/rosulmehtab
                  </a>
                </div>
              </div>
               <div className="text-center pt-4">
                 <Button asChild>
                    <a href="mailto:mehtabrosul10@gmail.com">Send an Email</a>
                 </Button>
               </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
