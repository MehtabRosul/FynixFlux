
'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { cn } from '@/lib/utils';
import { Check, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react';


interface Section {
  id: string;
  title: string;
  content: string;
}

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  sections: Section[];
}

export function LegalLayout({ title, lastUpdated, sections }: LegalLayoutProps) {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || '');
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    document.body.classList.add('legal-page');
    return () => {
      document.body.classList.remove('legal-page');
    };
  }, []);
  
  const handleSectionClick = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
     if (isSheetOpen) {
      setIsSheetOpen(false);
    }
  };

  const currentSection = sections.find(s => s.id === activeSection) || sections[0];

  const SidebarNav = () => (
     <nav className="space-y-1">
        {sections.map((section) => (
          <Button
            key={section.id}
            variant="ghost"
            onClick={() => handleSectionClick(section.id)}
            className={cn(
              'w-full justify-start text-left h-auto py-2',
              activeSection === section.id
                ? 'bg-accent text-accent-foreground'
                : 'hover:bg-accent/50'
            )}
          >
            {section.title}
          </Button>
        ))}
      </nav>
  );


  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <div className="container mx-auto flex-grow px-4 py-8 md:px-6 md:py-12">

        <div className="mb-8 flex items-center justify-between">
            <div>
                 <h1 className="text-4xl font-bold tracking-tight text-foreground">{title}</h1>
                 <p className="text-sm text-muted-foreground mt-2">Last updated: {lastUpdated}</p>
            </div>
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="lg:hidden">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Open Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-3/4 sm:w-1/2">
                    <div className="p-4">
                        <h3 className="text-lg font-semibold mb-4">{title}</h3>
                        <SidebarNav />
                    </div>
                </SheetContent>
            </Sheet>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-12">
          <aside className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24">
              <SidebarNav />
            </div>
          </aside>

          <main className="lg:col-span-3">
             <Card>
                <CardContent className="p-6 md:p-8">
                     {sections.map((section) => (
                        <section key={section.id} id={section.id} className="scroll-mt-24">
                        <h2 className="text-2xl font-semibold text-foreground mb-4">{section.title}</h2>
                        <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed">
                            <p>{section.content}</p>
                        </div>
                        {section.id !== sections[sections.length - 1].id && <hr className="my-8 border-border" />}
                        </section>
                    ))}
                </CardContent>
             </Card>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
