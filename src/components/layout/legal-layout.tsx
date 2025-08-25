
'use client';

import { useState, useEffect, useRef } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

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
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px', threshold: 0 }
    );

    const currentContentRef = contentRef.current;
    if (currentContentRef) {
      const sectionElements = currentContentRef.querySelectorAll('section');
      sectionElements.forEach((section) => observer.observe(section));
    }
    
    return () => {
       if (currentContentRef) {
        const sectionElements = currentContentRef.querySelectorAll('section');
        sectionElements.forEach((section) => observer.unobserve(section));
      }
    };
  }, [sections]);

  useEffect(() => {
    document.body.classList.add('legal-page');
    return () => {
      document.body.classList.remove('legal-page');
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <div className="container mx-auto flex-grow px-4 py-8 md:px-6 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-12">
          <aside className="hidden lg:block lg:col-span-1">
            <nav className="sticky top-24">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">{title}</h3>
              <ul>
                {sections.map((section) => (
                  <li key={section.id} className="mb-2">
                    <a
                      href={`#${section.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                        setActiveSection(section.id);
                      }}
                      className={cn(
                        'flex items-center text-sm transition-colors',
                        activeSection === section.id
                          ? 'text-primary font-semibold'
                          : 'text-muted-foreground hover:text-foreground'
                      )}
                    >
                      {activeSection === section.id && <Check className="h-4 w-4 mr-2 text-primary" />}
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <main ref={contentRef} className="lg:col-span-3">
            <div className="mb-8">
              <p className="text-sm text-muted-foreground">Updated: {lastUpdated}</p>
              <h1 className="text-4xl font-bold tracking-tight text-foreground mt-2">{title}</h1>
            </div>

            <div className="space-y-12">
              {sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-24">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">{section.title}</h2>
                  <div className="prose prose-invert max-w-none text-muted-foreground">
                    <p>{section.content}</p>
                  </div>
                </section>
              ))}
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
