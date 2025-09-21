
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
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover pointer-events-none"
          width="1920"
          height="1080"
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          onContextMenu={(e) => e.preventDefault()}
          onDragStart={(e) => e.preventDefault()}
          onLoadStart={(e) => {
            const video = e.target as HTMLVideoElement;
            video.controls = false;
            video.setAttribute('controlsList', 'nodownload nofullscreen noremoteplayback');
            video.setAttribute('disablePictureInPicture', 'true');
          }}
          style={{ 
            userSelect: 'none',
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none',
            pointerEvents: 'none'
          }}
        >
          <source src="/videos/3141211-uhd_3840_2160_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
      </div>
      
      <div 
        className="relative z-10 text-center px-4"
        style={{ 
          transform: `translate3d(0, ${textY}px, 0)`,
        }}
      >
        <h1 className="text-4xl font-headline font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-8xl">
          <span className="block bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent animate-gentle-shift bg-[200%_auto]">ForgeFlow</span>
        </h1>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Streamline Your MLOps Pipeline
        </h2>
        <p className="mx-auto mt-6 max-w-[700px] text-muted-foreground md:text-xl">
          From dataset to deployment, ForgeFlow Pilot provides the tools you need to build, test, and manage your machine learning models with confidence and speed.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/dashboard">Go to Dashboard</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/features">Explore Features</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
