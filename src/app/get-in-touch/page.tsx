import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Mail, Linkedin, ArrowRight } from 'lucide-react';
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
            <CardContent className="space-y-4">
              <a 
                href="mailto:mehtabrosul10@gmail.com" 
                className="block p-4 rounded-md bg-muted hover:bg-muted/80 transition-colors group"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-primary" />
                    <div>
                      <h3 className="font-semibold text-foreground">Email Me</h3>
                      <p className="text-sm text-muted-foreground">Click to send an email</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/in/rosulmehtab/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block p-4 rounded-md bg-muted hover:bg-muted/80 transition-colors group"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <Linkedin className="w-6 h-6 text-primary" />
                    <div>
                      <h3 className="font-semibold text-foreground">Connect on LinkedIn</h3>
                      <p className="text-sm text-muted-foreground">View my profile</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                </div>
              </a>

            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
