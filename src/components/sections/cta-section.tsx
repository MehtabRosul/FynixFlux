
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useParallax } from '@/components/providers/parallax-provider';
import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function CtaSection() {
  const { scrollY } = useParallax();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [translateY, setTranslateY] = useState(100);
  const [opacity, setOpacity] = useState(0);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const sectionTop = section.offsetTop;
    const viewportHeight = window.innerHeight;

    const startPin = sectionTop - viewportHeight;
    const endPin = sectionTop;

    if (scrollY >= startPin && scrollY <= endPin) {
      setIsFixed(true);
      const progress = (scrollY - startPin) / (endPin - startPin);
      
      const newTranslateY = 100 - (progress * 100);
      setTranslateY(newTranslateY);

      const newOpacity = progress;
      setOpacity(newOpacity);

    } else if (scrollY < startPin) {
      setIsFixed(false);
      setTranslateY(100);
      setOpacity(0);
    } else {
      setIsFixed(true);
      setTranslateY(0);
      setOpacity(1);
    }

  }, [scrollY]);

  return (
    <section id="cta" ref={sectionRef} className="relative h-[150vh] bg-transparent">
        <div className={cn("top-0 left-0 w-full h-screen flex items-center justify-center", isFixed ? 'fixed' : 'absolute bottom-0')}>
             <div 
                className="container mx-auto px-4 md:px-6"
                style={{
                    transform: `translateY(${translateY}vh)`,
                    opacity: opacity,
                    willChange: 'transform, opacity'
                }}
             >
                <div 
                    className="relative overflow-hidden rounded-lg p-8 shadow-2xl md:p-12 lg:p-16 animate-subtle-gradient bg-[length:400%_400%]"
                    style={{
                        backgroundImage: `linear-gradient(to right, 
                            hsl(var(--primary)), 
                            hsl(var(--primary) / 0.8), 
                            hsl(var(--accent)), 
                            hsl(var(--accent) / 0.8), 
                            hsl(var(--destructive)), 
                            hsl(var(--destructive) / 0.8),
                            hsl(var(--primary))
                        )`
                    }}
                >
                <div className="relative z-10 flex flex-col items-center text-center animate-tilt">
                    <h2 className="text-3xl font-extrabold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl font-headline">
                    Ready to Forge Your Next Breakthrough?
                    </h2>
                    <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
                    Stop wrestling with infrastructure and start building better models. Join the waitlist and be the first to experience the future of MLOps.
                    </p>
                    <div className="mt-8">
                    <Button size="lg" variant="secondary" asChild>
                        <Link href="/dashboard">Start Forging</Link>
                    </Button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
  );
}
