"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useParallax } from '@/components/providers/parallax-provider';
import Image from 'next/image';

export function HeroSection() {
  const { scrollY } = useParallax();
  const isReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const bgY = isReducedMotion ? 0 : scrollY * 0.5;
  const textY = isReducedMotion ? 0 : scrollY * 0.7;

  return (
    <section id="hero" className="relative h-[100vh] w-full overflow-hidden flex items-center justify-center">
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          transform: `translate3d(0, ${bgY}px, 0)`,
        }}
      >
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Abstract background"
          data-ai-hint="abstract network"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
      </div>
      
      <div 
        className="relative z-10 text-center px-4"
        style={{ 
          transform: `translate3d(0, ${textY}px, 0)`,
        }}
      >
        <h1 className="text-4xl font-headline font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block text-primary">ForgeFlow Pilot</span>
          <span className="block text-foreground">Streamline Your MLOps Pipeline</span>
        </h1>
        <p className="mx-auto mt-6 max-w-[700px] text-muted-foreground md:text-xl">
          From dataset to deployment, ForgeFlow Pilot provides the tools you need to build, test, and manage your machine learning models with confidence and speed.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/dashboard">Launch Your First Project</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/features">Explore Features</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
