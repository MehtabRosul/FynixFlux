
'use client';

import { useParallax } from '@/components/providers/parallax-provider';
import { Button } from '@/components/ui/button';
import { Bot } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function InsightHubSection() {
    const { scrollY } = useParallax();
    const isReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const imageY = isReducedMotion ? 0 : scrollY * 0.15;
    const textY = isReducedMotion ? 0 : scrollY * -0.05;

    return (
        <section className="relative py-20 md:py-32 bg-secondary/30 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div 
                        className="relative z-10 space-y-6 text-center lg:text-left"
                        style={{ transform: `translateY(${textY}px)` }}
                    >
                        <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm mb-4">
                            <Bot className="inline-block w-5 h-5 mr-2 text-primary" />
                            AI-Powered Workflow
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                            Meet the Insight Hub
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Go beyond manual configuration. The Insight Hub is your AI-powered MLOps assistant. Simply describe your goal in plain English, and watch as it analyzes your request, forms a plan, and executes the entire workflow from training to evaluation. It's the fastest way to move from idea to production-ready model.
                        </p>
                        <Button size="lg" asChild>
                            <Link href="/dashboard">Try the Insight Hub</Link>
                        </Button>
                    </div>

                    <div 
                        className="relative h-80 lg:h-full"
                        style={{ transform: `translateY(${imageY}px)` }}
                    >
                        <Image
                            src="https://picsum.photos/800/600"
                            alt="Insight Hub AI Assistant"
                            data-ai-hint="abstract ai brain"
                            fill
                            className="object-cover rounded-lg shadow-2xl"
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 via-transparent to-transparent"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
