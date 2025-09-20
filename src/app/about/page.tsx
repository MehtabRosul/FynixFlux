

'use client';

import React from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { ShieldCheck, GitCommit, Eye, Zap, Bot } from 'lucide-react';
import { ParallaxProvider, useParallax } from '@/components/providers/parallax-provider';
import { Playfair_Display } from 'next/font/google';

const display = Playfair_Display({ subsets: ['latin'], weight: ['600','700'] });

// Parallax-aware Section Component
const ParallaxSection = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <section className={`relative py-20 md:py-24 overflow-hidden ${className}`}>
            {children}
        </section>
    );
};

const HeroSection = () => {
    const { scrollY } = useParallax();
    const isReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const bgY = isReducedMotion ? 0 : scrollY * 0.2;
    const midY = isReducedMotion ? 0 : scrollY * 0.55;
    const fgY = isReducedMotion ? 0 : scrollY * 0.8;

    return (
        <ParallaxSection className="min-h-screen flex items-center justify-center text-center bg-background">
            <div className="absolute inset-0 z-0 opacity-20" style={{ transform: `translate3d(0, ${bgY}px, 0)` }}>
                 <Image src="https://placehold.co/1920x1080.png" alt="Abstract background grid" fill className="object-cover" data-ai-hint="abstract grid" />
            </div>
            <div className="absolute inset-0 z-10 opacity-10" style={{ transform: `translate3d(0, ${midY}px, 0)` }}>
                {/* Midground floating shapes can go here */}
            </div>
            <div className="relative z-20 container mx-auto px-4 md:px-6" style={{ transform: `translate3d(0, ${fgY}px, 0)`}}>
                <div className="grid gap-12 items-center">
                    <div className="space-y-6 text-left">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground font-headline">ForgeFlow Pilot</h1>
                        <p className="text-xl md:text-2xl text-muted-foreground">
                           From dataset to deployable model — control every step with clarity and speed.
                        </p>
                        <p className="text-lg text-muted-foreground">
                           Upload any dataset, train exactly how you want, monitor live, and export production-ready artifacts.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button asChild size="lg">
                                <Link href="/signup">Get Started</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline">
                                <Link href="/docs">View Docs</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </ParallaxSection>
    );
};

const MissionSection = () => {
     return (
        <ParallaxSection className="bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl space-y-4">
                 <h2 className="text-3xl font-bold tracking-tighter font-headline">Our Mission</h2>
                 <p className="text-xl text-muted-foreground">
                    To remove friction between raw data and production-ready models — giving creators the freedom to build, validate and deliver reliable ML with transparency and speed.
                 </p>
                 <h3 className="text-2xl font-semibold !mt-8">We aim to empower teams and solo creators to move from idea to production with confidence and repeatability.</h3>
            </div>
        </ParallaxSection>
    )
}

const CorePrinciplesSection = () => {
    const principles = [
      {
        icon: <ShieldCheck className="w-8 h-8 text-primary" />,
        title: "Trust & Safety",
        description: "Design for auditable, explainable ML; built-in PII detection and secure defaults.",
      },
      {
        icon: <GitCommit className="w-8 h-8 text-primary" />,
        title: "Reproducibility",
        description: "Every run captures dataset, config, checkpoints and artifacts for full lineage.",
      },
      {
        icon: <Eye className="w-8 h-8 text-primary" />,
        title: "Privacy by Design",
        description: "Data controls, masking options, and private project isolation are core.",
      },
      {
        icon: <Bot className="w-8 h-8 text-primary" />,
        title: "AI-Powered Automation",
        description: "Use the Insight Hub to automate entire workflows with a single natural language command.",
      },
    ];
    return (
        <ParallaxSection className="bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6">
                 <div className="text-center max-w-3xl mx-auto mb-12">
                     <h2 className="text-3xl font-bold tracking-tighter font-headline">Core Principles</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {principles.map((principle, index) => (
                        <Card 
                            key={principle.title} 
                            className="text-center p-6 transition-all duration-500 hover:shadow-primary/20 hover:-translate-y-2 animate-in fade-in-0 slide-in-from-bottom-8"
                            style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'backwards' }}
                        >
                            <div className="flex justify-center mb-4">{principle.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{principle.title}</h3>
                            <p className="text-muted-foreground">{principle.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </ParallaxSection>
    )
}

const CreatorSection = () => {
    const [clicks, setClicks] = React.useState(0)
    const [showEgg, setShowEgg] = React.useState(false)
    const sparkles = React.useMemo(() => Array.from({ length: 14 }).map((_, i) => ({
        id: i,
        top: Math.random() * 80 + 10,
        left: Math.random() * 80 + 10,
        delay: Math.random() * 1.5 + 0.2,
    })), [])
    // removed mini-game for performance stability

    React.useEffect(() => {
        if (clicks === 0) return
        const reset = setTimeout(() => setClicks(0), 4000)
        if (clicks >= 5) {
            setShowEgg(true)
            setClicks(0)
            const hide = setTimeout(() => setShowEgg(false), 12000)
            return () => {
                clearTimeout(reset)
                clearTimeout(hide)
            }
        }
        return () => clearTimeout(reset)
    }, [clicks])


    return (
        <ParallaxSection>
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col items-center">
                        <div
                          className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-lg hover:rounded-full overflow-hidden shadow-2xl ring-1 ring-border/30 hover:ring-primary/50 transition-[border-radius,box-shadow,ring-color] duration-150"
                          role="button"
                          aria-label="Portrait"
                          tabIndex={0}
                          onClick={() => setClicks(c => c + 1)}
                        >
                          <Image
                            src="https://placehold.co/600x600.png"
                            alt="Portrait"
                            data-ai-hint="square portrait"
                            fill
                            className="object-cover"
                          />
                          {showEgg && (
                            <>
                              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent animate-subtle-gradient pointer-events-none" />
                              {sparkles.map(s => (
                                <span
                                  key={s.id}
                                  className="absolute w-1.5 h-1.5 rounded-full bg-primary/70 animate-ping"
                                  style={{ top: `${s.top}%`, left: `${s.left}%`, animationDelay: `${s.delay}s` }}
                                />
                              ))}
                              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-2 py-1 rounded-full bg-background/80 backdrop-blur text-[10px] font-medium text-foreground shadow ring-1 ring-border">
                                Craft Mode Unlocked
                              </div>
                            </>
                          )}
                        </div>
                        {showEgg && (
                          <div className="mt-3 text-xs text-muted-foreground italic flex items-center gap-2">
                            <Zap className="w-4 h-4 text-primary" />
                            <span>Hidden note: craft with care, measure twice, ship once.</span>
                          </div>
                        )}
                    </div>
                    <div className="space-y-6 text-center lg:text-left">
                        <h2 className={`text-3xl font-bold tracking-tight ${display.className}`}>Principal Maker — Mehtab Rosul</h2>
                        <p className="text-xl text-muted-foreground font-semibold">Engineering the bridge from raw data to reliable production models.</p>
                        <p className="text-lg text-muted-foreground">
                           Mehtab Rosul is an experienced machine learning engineer and MLOps practitioner focused on building tooling that removes friction between data and production. With a background in large-scale model deployment and developer tooling, Mehtab created ForgeFlow Pilot to give creators a single, safe, and flexible platform to iterate and ship models.
                        </p>
                        <p className="font-semibold text-foreground">Focus areas: model reproducibility • explainability • developer DX • production artifacts.</p>
                        {showEgg && (
                          <p className="text-xs text-muted-foreground">You unlocked the artisan’s pledge. Expect deliberate defaults and respectful ergonomics across the stack.</p>
                        )}
                    </div>
                </div>
            </div>
        </ParallaxSection>
    )
}

const CtaFooter = () => {
    return (
        <ParallaxSection className="bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 md:px-6 text-center">
                 <h2 className="text-3xl font-bold tracking-tighter font-headline">Start building smarter, faster, and safer models with ForgeFlow Pilot</h2>
                 <div className="mt-8 flex gap-4 justify-center">
                     <Button size="lg" variant="secondary" asChild>
                        <Link href="/dashboard">Get Started</Link>
                     </Button>
                     <Button size="lg" variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                        <Link href="/docs">View Docs</Link>
                     </Button>
                 </div>
             </div>
        </ParallaxSection>
    )
}


export default function AboutPage() {
  return (
    <ParallaxProvider>
        <div className="flex flex-col min-h-screen bg-background">
          <Header />
          <main className="flex-grow">
            <HeroSection />
            <MissionSection />
            <CorePrinciplesSection />
            <CreatorSection />
            <CtaFooter />
          </main>
          <Footer />
        </div>
    </ParallaxProvider>
  );
}
