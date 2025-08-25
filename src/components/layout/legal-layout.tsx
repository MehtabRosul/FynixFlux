
'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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

  useEffect(() => {
    document.body.classList.add('legal-page');
    return () => {
      document.body.classList.remove('legal-page');
    };
  }, []);

  const handleSectionClick = (id: string) => {
    setActiveSection(id);
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
            'w-full justify-start text-left h-auto py-2 px-3 gap-2',
            activeSection === section.id
              ? 'bg-accent text-accent-foreground'
              : 'hover:bg-accent/50'
          )}
        >
          {section.icon}
          <span className="truncate">{section.title}</span>
        </Button>
      ))}
    </nav>
  );

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <div className="flex-grow container mx-auto px-4 py-8 md:px-6 md:py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">{title}</h1>
          <p className="text-sm text-muted-foreground mt-2">Last updated: {lastUpdated}</p>
        </div>

        <div className="flex">
          <aside className="w-1/4 pr-8">
            <div className="sticky top-24">
              <SidebarNav />
            </div>
          </aside>

          <main className="w-3/4">
            <Card>
              <CardContent className="p-6 md:p-8">
                {currentSection && (
                  <section id={currentSection.id} className="scroll-mt-24">
                    <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-3">
                      {currentSection.icon}
                      {currentSection.title}
                    </h2>
                    <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed">
                      <p>{currentSection.content}</p>
                    </div>
                  </section>
                )}
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
