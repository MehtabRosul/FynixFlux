
'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';
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
  summary: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
}

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  sections: Section[];
}

export function LegalLayout({ title, lastUpdated, sections }: LegalLayoutProps) {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || '');

  const handleSectionClick = (id: string) => {
    setActiveSection(id);
  };
  
  const activeSectionContent = sections.find(s => s.id === activeSection);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <div className="flex-grow container mx-auto px-4 py-8 md:px-6 md:py-12">
        <div className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight text-foreground">{title}</h1>
            <p className="text-sm text-muted-foreground mt-2">Last updated: {lastUpdated}</p>
        </div>

        <div className="flex gap-8">
          <aside className="w-64 flex-shrink-0">
            <div className="sticky top-24">
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
            </div>
          </aside>

          <main className="w-full">
            {activeSectionContent && (
              <Card
                key={activeSectionContent.id}
                id={activeSectionContent.id}
                className="scroll-mt-24 animate-in fade-in-50 zoom-in-95 slide-in-from-top-4 duration-500"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    {activeSectionContent.icon}
                    {activeSectionContent.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-invert max-w-none text-muted-foreground leading-relaxed py-8">
                   <div className="bg-muted/50 p-4 rounded-md mb-6 border-l-4 border-primary">
                    <p className="font-semibold text-foreground italic">"{activeSectionContent.summary}"</p>
                  </div>
                  <div>{activeSectionContent.content}</div>
                </CardContent>
              </Card>
            )}
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
