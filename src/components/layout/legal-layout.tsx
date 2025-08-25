
'use client';

import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Section {
  id: string;
  title: string;
  content: string;
  icon?: React.ReactNode;
}

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  sections: Section[];
}

export function LegalLayout({ title, lastUpdated, sections }: LegalLayoutProps) {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || '');
  const contentRef = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -60% 0px" } // Highlights when section is closer to the middle
    );

    const currentObserver = observer.current;

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        currentObserver.observe(element);
      }
    });

    return () => {
       sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          currentObserver.unobserve(element);
        }
      });
    };
  }, [sections]);

  const handleSectionClick = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const SidebarNav = ({ isMobile = false }: { isMobile?: boolean }) => (
    <nav className="space-y-1 p-2">
      {sections.map((section) => (
        <Button
          key={section.id}
          variant="ghost"
          onClick={() => handleSectionClick(section.id)}
          className={cn(
            'w-full justify-start text-left h-auto py-1.5 px-2 gap-2 text-xs',
            activeSection === section.id
              ? 'bg-primary text-primary-foreground'
              : 'hover:bg-accent/50'
          )}
        >
          {section.icon && React.cloneElement(section.icon as React.ReactElement, { size: 16 })}
          <span className="truncate">{section.title}</span>
        </Button>
      ))}
    </nav>
  );

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <div className="flex-grow container mx-auto px-4 py-8 md:px-6 md:py-12">
        <div className="mb-8 flex justify-between items-center">
            <div>
                 <h1 className="text-4xl font-bold tracking-tight text-foreground">{title}</h1>
                 <p className="text-sm text-muted-foreground mt-2">Last updated: {lastUpdated}</p>
            </div>
            <div className="md:hidden">
                 <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon">
                            <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                         <SheetHeader>
                            <SheetTitle>Menu</SheetTitle>
                            <SheetDescription className="sr-only">
                                Navigation for legal page sections
                            </SheetDescription>
                        </SheetHeader>
                        <ScrollArea className="h-[calc(100vh-4rem)]">
                            <SidebarNav isMobile />
                        </ScrollArea>
                    </SheetContent>
                </Sheet>
            </div>
        </div>

        <div className="flex gap-12">
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-24">
              <SidebarNav />
            </div>
          </aside>

          <main ref={contentRef} className="w-full space-y-8">
             {sections.map((section) => (
                <Card
                  id={section.id}
                  key={section.id}
                  className={cn(
                    "scroll-mt-24 transition-all duration-300",
                    activeSection === section.id ? "border-primary shadow-lg" : "border-border"
                  )}
                >
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-2xl">
                        {section.icon}
                        {section.title}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="prose prose-invert max-w-none text-muted-foreground leading-relaxed">
                        <p>{section.content}</p>
                    </CardContent>
                </Card>
            ))}
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
