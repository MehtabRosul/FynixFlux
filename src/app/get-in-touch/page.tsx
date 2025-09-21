'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Mail, Linkedin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageLoader } from '@/components/ui/page-loader';
import { useState, useEffect } from 'react';

export default function GetInTouchPage() {
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isPageLoading) {
    return <PageLoader message="Loading Contact Page..." showProgress={true} progress={80} />;
  }

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
                className="block p-4 rounded-lg bg-muted hover:bg-primary/10 hover:shadow-lg hover:scale-[1.02] hover:border-primary/20 border border-transparent transition-all duration-300 group cursor-pointer"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-primary group-hover:text-primary/80 transition-colors" />
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">Email Me</h3>
                      <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors">Click to send an email</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/in/rosulmehtab/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block p-4 rounded-lg bg-muted hover:bg-primary/10 hover:shadow-lg hover:scale-[1.02] hover:border-primary/20 border border-transparent transition-all duration-300 group cursor-pointer"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <Linkedin className="w-6 h-6 text-primary group-hover:text-primary/80 transition-colors" />
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">Connect on LinkedIn</h3>
                      <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors">Connect with me</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
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
