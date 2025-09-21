'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useRef, useState } from 'react';
import { useParallax } from '@/components/providers/parallax-provider';

export function FaqSection() {
  // simple parallax values for subtle background shift
  // using requestAnimationFrame via CSS animation utilities (animate-in used already)
  const faqs = [
    {
      q: 'What is Fynix Flux Pilot?',
      a: 'A focused MLOps experience: upload a dataset, configure a run, monitor live metrics, test models, and export artifacts — with optional AI assistance.'
    },
    {
      q: 'Does the demo store my data?',
      a: 'Demo uploads are parsed in the browser for preview. No server persistence occurs unless you wire a backend.'
    },
    {
      q: 'Which model exports are represented?',
      a: 'Export flows represent common formats such as ONNX, TFLite, TorchScript, and Python wheel.'
    },
    {
      q: 'Can I integrate my own backend?',
      a: 'Yes. Add APIs for dataset uploads, training jobs, model registry, and artifact serving, then connect the UI actions to those endpoints.'
    },
    {
      q: 'Is there AI assistance?',
      a: 'Yes. Genkit flows provide narrative insights and explanation authoring. Provide credentials if you want to run real calls.'
    },
    {
      q: 'How do I get started?',
      a: 'Install dependencies, run the dev server, upload a CSV in the dashboard, configure training, and review metrics and artifacts.'
    },
    {
      q: 'Can I customize training controls?',
      a: 'Yes. Problem type, model family, data split, tuning strategy, and primary metric are configurable from the Dashboard top controls.'
    },
    {
      q: 'Does the UI work on mobile?',
      a: 'The layout is responsive with reduced‑motion fallbacks. Heavy parallax is minimized on smaller screens.'
    },
    {
      q: 'How do I export artifacts securely?',
      a: 'Use short‑lived, signed URLs from your object store and retain checksums and provenance metadata for each artifact version.'
    },
    {
      q: 'Can I replace Genkit with another AI provider?',
      a: 'Yes. The flows are modular — swap the provider in the server actions and keep the same UI contracts.'
    }
  ];

  const { scrollY } = useParallax();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [bgOffset, setBgOffset] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const absoluteTop = rect.top + window.scrollY;
    const distance = scrollY - absoluteTop; // how far we've scrolled over the section
    const offset = Math.max(-60, Math.min(60, distance * 0.12));
    setBgOffset(offset);
  }, [scrollY]);

  // Detect desktop (PC) screens only: >= 1024px (Tailwind lg breakpoint)
  useEffect(() => {
    const mql = window.matchMedia('(min-width: 1024px)');
    const onChange = () => setIsDesktop(mql.matches);
    onChange();
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  const toggleItem = (index: number) => {
    setOpenItems(prev => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <section ref={sectionRef} className="relative overflow-hidden pt-1.5 pb-8 md:pt-2 md:pb-12 bg-secondary/30">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-radial-gradient-t from-primary/10 to-transparent"
        style={{ transform: `translate3d(0, ${bgOffset}px, 0)`, willChange: 'transform' }}
      />
      <div className="mx-auto w-full max-w-3xl px-3 md:px-4">
        <div className="text-center mb-4 md:mb-6 animate-in fade-in-0 slide-in-from-bottom-2">
          <h2 className="text-lg md:text-xl font-bold font-headline">Frequently Asked Questions</h2>
          <p className="mt-1 text-muted-foreground max-w-sm mx-auto text-[11px] md:text-xs">Quick answers about the Fynix Flux Pilot experience and how to make the most of it.</p>
        </div>

        <div className="grid gap-2.5 md:grid-cols-2">
          {faqs.map((item, idx) => {
            const isOpen = openItems.has(idx);
            return (
              <Card
                key={item.q}
                className="group animate-in fade-in-0 slide-in-from-bottom-2 transition-transform duration-[5000ms] ease-[cubic-bezier(.19,1,.22,1)] hover:-translate-y-0.5"
                style={{ animationDelay: `${idx * 120}ms`, animationFillMode: 'backwards' }}
                onClick={() => {
                  if (!isDesktop) toggleItem(idx);
                }}
                role={!isDesktop ? 'button' : undefined}
                tabIndex={!isDesktop ? 0 : -1}
              >
                <CardHeader className="p-2.5 md:p-3.5">
                  <CardTitle className="text-[13px] md:text-sm">{item.q}</CardTitle>
                </CardHeader>
                <CardContent
                  className={
                    `text-[11px] md:text-xs text-muted-foreground leading-relaxed overflow-hidden transition-[max-height,opacity,transform] duration-[5000ms] ease-[cubic-bezier(.19,1,.22,1)] will-change-[max-height,opacity,transform] p-0 px-2.5 pb-2.5 md:px-3.5 ` +
                    (isDesktop
                      ? 'max-h-0 opacity-0 -translate-y-1 group-hover:max-h-28 group-hover:opacity-100 group-hover:translate-y-0'
                      : (isOpen ? 'max-h-28 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-1'))
                  }
                >
                  {item.a}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}


