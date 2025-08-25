
'use client';

import React from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Eye, GitCommit, Heart, Zap, ShieldCheck, GitBranch, Telescope, Briefcase, Mail } from 'lucide-react';
import { ParallaxProvider, useParallax } from '@/components/providers/parallax-provider';

// Parallax-aware Section Component
const ParallaxSection = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <section className={`relative py-20 md:py-32 overflow-hidden ${className}`}>
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
                <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                     <div className="flex items-center justify-center">
                         <Image
                          src="https://placehold.co/1000x600.png"
                          alt="ForgeFlow Pilot dashboard preview"
                          data-ai-hint="dashboard preview"
                          width={1000}
                          height={600}
                          className="rounded-lg shadow-2xl"
                        />
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

const WhatWeBuildSection = () => {
    const features = [
        { title: "Upload & Profile", description: "Upload CSV, Parquet, JSONL, XLSX. Instant schema profiling and data quality suggestions." },
        { title: "Configurable Training", description: "Full control: choose algorithms, set hyperparameters, checkpoint, and resume." },
        { title: "Live Insights & Exports", description: "Stream metrics, inspect logs, and export artifacts (wheel, ONNX, TFLite, TorchScript)." },
    ];
    return (
        <ParallaxSection>
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-3 gap-8">
                {features.map(feature => (
                    <Card key={feature.title} className="p-6 text-center hover:shadow-primary/20 hover:-translate-y-1 transition-transform">
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                    </Card>
                ))}
                </div>
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
        icon: <Zap className="w-8 h-8 text-primary" />,
        title: "Efficiency",
        description: "Optimized pipelines and checkpointing to iterate faster with predictable resource usage.",
      },
    ];
    return (
        <ParallaxSection className="bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6">
                 <div className="text-center max-w-3xl mx-auto mb-12">
                     <h2 className="text-3xl font-bold tracking-tighter font-headline">Core Principles</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {principles.map((principle) => (
                        <Card key={principle.title} className="text-center p-6 hover:shadow-primary/20 hover:-translate-y-1 transition-transform">
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

const JourneySection = () => {
    const timelineEvents = [
        { date: "2023 Q1", title: "Concept & Prototype", description: "Project founded; prototype of dataset upload and basic training flow.", image: "https://placehold.co/800x450.png" },
        { date: "2023 Q4", title: "Alpha Release", description: "Public alpha: UI, profiling, and simulated training runs.", image: "https://placehold.co/800x450.png" },
        { date: "2024 Q2", title: "Live Training & Exports", description: "Live metrics, artifact export formats added.", image: "https://placehold.co/800x450.png" },
        { date: "2024 Q4", title: "Pilot Scale", description: "Scaling worker pool, monitoring & production-ready artifacts.", image: "https://placehold.co/800x450.png" },
        { date: "2025", title: "Ongoing Improvements", description: "Roadmap items: hyperparameter UI, registry enhancements, model testing features.", image: "https://placehold.co/800x450.png" },
    ];
     return (
        <ParallaxSection>
            <div className="container mx-auto px-4 md:px-6">
                 <div className="text-center max-w-3xl mx-auto mb-16">
                     <h2 className="text-3xl font-bold tracking-tighter font-headline">Our Journey</h2>
                </div>
                <div className="relative">
                    <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border" aria-hidden="true"></div>
                    <div className="space-y-16">
                        {timelineEvents.map((event, index) => (
                             <div key={event.date} className="flex items-center justify-center relative">
                                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8 order-2'}`}>
                                    <p className="font-bold text-primary">{event.date}</p>
                                    <h3 className="text-xl font-semibold my-1">{event.title}</h3>
                                    <p className="text-muted-foreground">{event.description}</p>
                                </div>
                                <div className="z-10 bg-background p-2 rounded-full border-2 border-primary">
                                    <Telescope className="w-6 h-6 text-primary" />
                                </div>
                                <div className="w-full lg:w-5/12 flex items-center justify-center p-4">
                                   <Image src={event.image} alt={event.title} width={800} height={450} className="rounded-lg shadow-xl" data-ai-hint="abstract tech" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </ParallaxSection>
    )
}

const CreatorSection = () => {
    return (
        <ParallaxSection className="bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col items-center">
                       <Image
                          src="https://placehold.co/600x600.png"
                          alt="Mehtab Rosul, Creator of ForgeFlow Pilot"
                          data-ai-hint="male portrait"
                          width={600}
                          height={600}
                          className="rounded-full shadow-2xl w-64 h-64 lg:w-80 lg:h-80 object-cover"
                        />
                    </div>
                    <div className="space-y-6 text-center lg:text-left">
                        <h2 className="text-3xl font-bold tracking-tighter font-headline">Creator — Mehtab Rosul</h2>
                        <p className="text-xl text-muted-foreground font-semibold">The architect and driving force behind ForgeFlow Pilot.</p>
                        <p className="text-lg text-muted-foreground">
                           Mehtab Rosul is an experienced machine learning engineer and MLOps practitioner focused on building tooling that removes friction between data and production. With a background in large-scale model deployment and developer tooling, Mehtab created ForgeFlow Pilot to give creators a single, safe, and flexible platform to iterate and ship models.
                        </p>
                        <p className="font-semibold text-foreground">Focus areas: model reproducibility • explainability • developer DX • production artifacts.</p>
                         <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button asChild size="lg">
                                <a href="mailto:mehtab@example.com">Contact Mehtab</a>
                            </Button>
                            <Button asChild size="lg" variant="outline">
                                <Link href="/contact">Request a Demo</Link>
                            </Button>
                        </div>
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
                        <Link href="/signup">Get Started</Link>
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
            <WhatWeBuildSection />
            <CorePrinciplesSection />
            <JourneySection />
            <CreatorSection />
            <CtaFooter />
          </main>
          <Footer />
        </div>
    </ParallaxProvider>
  );
}

    