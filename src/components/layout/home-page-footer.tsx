"use client";
const Logo = () => (
  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
    {/* Your Logo Here */}
  </div>
);

import { useRef, useState, useEffect } from 'react';
import { useParallax } from '@/components/providers/parallax-provider';

export function HomePageFooter() {
  const { scrollY } = useParallax();
  const sectionRef = useRef<HTMLElement>(null);
  const [bgOffset, setBgOffset] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const absoluteTop = rect.top + window.scrollY;
    const distance = scrollY - absoluteTop;
    const offset = Math.max(-40, Math.min(40, distance * 0.1));
    setBgOffset(offset);
  }, [scrollY]);

  return (
    <footer ref={sectionRef} className="relative overflow-hidden bg-background">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-radial-gradient-t from-accent/12 to-transparent"
        style={{ transform: `translate3d(0, ${bgOffset}px, 0)`, willChange: 'transform' }}
      />
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground animate-in fade-in-0 slide-in-from-bottom-2">
          <Logo />
          <p>&copy; 2025 Fynix Flux all copyrights are preserved.</p>
        </div>
      </div>
    </footer>
  );
}
