

'use client';

import React from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { ShieldCheck, GitCommit, Eye, Zap, Bot, Sparkles, Star, Code, Palette, Wrench, Heart, Trophy, Gift, Lock, Unlock } from 'lucide-react';
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
    const [eggStage, setEggStage] = React.useState(0) // 0: locked, 1: unlocking, 2: unlocked, 3: celebration
    const [hoverCount, setHoverCount] = React.useState(0)
    const [isAnimating, setIsAnimating] = React.useState(false)
    
    // Enhanced sparkles with different types and animations
    const sparkles = React.useMemo(() => Array.from({ length: 24 }).map((_, i) => ({
        id: i,
        top: Math.random() * 90 + 5,
        left: Math.random() * 90 + 5,
        delay: Math.random() * 2 + 0.1,
        size: Math.random() * 0.5 + 0.5,
        type: ['star', 'sparkle', 'heart', 'code'][Math.floor(Math.random() * 4)],
        duration: Math.random() * 1.5 + 1,
    })), [])

    // Achievement messages that cycle through
    const achievements = [
        "🎯 Precision unlocked!",
        "⚡ Speed mode activated!",
        "🎨 Creative flow engaged!",
        "🔧 Craft mode enabled!",
        "💎 Quality focus achieved!",
        "🚀 Innovation boost ready!",
        "🎪 Magic in the making!",
        "🌟 Excellence unlocked!"
    ]

    const [currentAchievement, setCurrentAchievement] = React.useState(0)

    React.useEffect(() => {
        if (clicks === 0) return
        
        const reset = setTimeout(() => setClicks(0), 5000)
        
        if (clicks >= 3 && clicks < 7) {
            setEggStage(1) // Unlocking
            setIsAnimating(true)
            setTimeout(() => setIsAnimating(false), 2000)
        } else if (clicks >= 7) {
            setEggStage(3) // Celebration
            setShowEgg(true)
            setClicks(0)
            setIsAnimating(true)
            
            // Cycle through achievements
            const achievementInterval = setInterval(() => {
                setCurrentAchievement(prev => (prev + 1) % achievements.length)
            }, 1500)
            
            const hide = setTimeout(() => {
                setShowEgg(false)
                setEggStage(0)
                setIsAnimating(false)
                clearInterval(achievementInterval)
            }, 15000)
            
            return () => {
                clearTimeout(reset)
                clearTimeout(hide)
                clearInterval(achievementInterval)
            }
        }
        return () => clearTimeout(reset)
    }, [clicks, achievements.length])

    const handleClick = () => {
        setClicks(c => c + 1)
        setIsAnimating(true)
        setTimeout(() => setIsAnimating(false), 300)
    }

    const handleHover = () => {
        setHoverCount(c => c + 1)
    }


    return (
        <ParallaxSection>
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col items-center min-h-[400px] justify-center">

                        {/* Main portrait container with flip effect */}
                        <div className="relative w-64 h-64 lg:w-80 lg:h-80 perspective-1000">
                          <div
                            className={`relative w-full h-full transition-transform duration-700 cursor-pointer group ${
                                showEgg ? 'rotate-y-180' : 'rotate-y-0'
                            }`}
                            style={{ transformStyle: 'preserve-3d' }}
                            role="button"
                            aria-label="Interactive Portrait - Click to unlock secrets"
                            tabIndex={0}
                            onClick={handleClick}
                            onMouseEnter={handleHover}
                          >
                            {/* Front side - Image */}
                            <div className="absolute inset-0 w-full h-full backface-hidden">
                              <div
                                className={`relative w-full h-full rounded-lg overflow-hidden shadow-2xl ring-1 transition-all duration-500 cursor-pointer ${
                                    eggStage === 0 ? 'hover:rounded-full ring-border/30 hover:ring-primary/50 hover:shadow-primary/30' :
                                    eggStage === 1 ? 'rounded-2xl ring-primary/70 animate-pulse' :
                                    eggStage === 3 ? 'rounded-full ring-primary shadow-primary/50 scale-105' :
                                    'rounded-2xl ring-primary/50'
                                } ${isAnimating ? 'scale-105' : 'scale-100'}`}
                                onClick={handleClick}
                              >
                                <Image
                                  src="https://i.postimg.cc/F15sDGKp/IMG-20250130-014317.jpg"
                                  alt="Mehtab Rosul - Creator of ForgeFlow Pilot"
                                  data-ai-hint="Mehtab Rosul portrait"
                                  fill
                                  className={`object-cover transition-all duration-500 cursor-pointer ${
                                      eggStage === 3 ? 'brightness-110 saturate-110' : ''
                                  }`}
                                  onClick={handleClick}
                                  style={{ pointerEvents: 'auto' }}
                                />
                                
                                {/* Lock overlay for initial state */}
                                {eggStage === 0 && (
                                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Lock className="w-8 h-8 text-white/80" />
                                  </div>
                                )}

                                {/* Easter egg hint overlay */}
                                {eggStage === 0 && (
                                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                                    {/* Main sparkle */}
                                    <div className="absolute top-3 right-3 w-4 h-4 rounded-full bg-primary/80 animate-pulse shadow-lg">
                                      <div className="absolute inset-0 rounded-full bg-white/40 animate-ping"></div>
                                    </div>
                                    {/* Secondary sparkles */}
                                    <div className="absolute bottom-4 left-4 w-3 h-3 rounded-full bg-accent/80 animate-pulse shadow-lg" style={{ animationDelay: '0.3s' }}>
                                      <div className="absolute inset-0 rounded-full bg-white/30 animate-ping" style={{ animationDelay: '0.3s' }}></div>
                                    </div>
                                    {/* Corner sparkles */}
                                    <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-yellow-400/90 animate-pulse shadow-lg" style={{ animationDelay: '0.9s' }}></div>
                                    <div className="absolute bottom-1 left-1 w-2 h-2 rounded-full bg-pink-400/90 animate-pulse shadow-lg" style={{ animationDelay: '1.2s' }}></div>
                                    {/* Subtle text hint */}
                                    <div className="absolute bottom-2 right-2 text-xs font-bold text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ animationDelay: '0.5s' }}>
                                      ✨
                                    </div>
                                  </div>
                                )}

                                {/* Unlocking animation */}
                                {eggStage === 1 && (
                                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-transparent animate-pulse">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                      <Unlock className="w-12 h-12 text-primary animate-bounce" />
                                    </div>
                                  </div>
                                )}

                                {/* Celebration effects */}
                                {showEgg && (
                                  <>
                                    {/* Animated background gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-transparent animate-pulse" />
                                    
                                    {/* Enhanced sparkles with different types */}
                                    {sparkles.map(s => {
                                      const IconComponent = s.type === 'star' ? Star : 
                                                          s.type === 'heart' ? Heart : 
                                                          s.type === 'code' ? Code : Sparkles
                                      return (
                                        <div
                                          key={s.id}
                                          className="absolute animate-ping"
                                          style={{ 
                                            top: `${s.top}%`, 
                                            left: `${s.left}%`, 
                                            animationDelay: `${s.delay}s`,
                                            animationDuration: `${s.duration}s`
                                          }}
                                        >
                                          <IconComponent 
                                            className={`text-primary/80 ${
                                              s.type === 'star' ? 'text-yellow-400' :
                                              s.type === 'heart' ? 'text-red-400' :
                                              s.type === 'code' ? 'text-blue-400' :
                                              'text-primary'
                                            }`}
                                            style={{ 
                                              width: `${s.size}rem`, 
                                              height: `${s.size}rem` 
                                            }}
                                          />
                                        </div>
                                      )
                                    })}

                                  </>
                                )}

                                {/* Hover count indicator */}
                                {hoverCount > 0 && hoverCount < 3 && (
                                  <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-primary/80 text-white text-xs flex items-center justify-center font-bold animate-pulse">
                                    {hoverCount}
                                  </div>
                                )}
                              </div>
                            </div>

                            {/* Back side - Quote */}
                            <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                              <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl ring-1 ring-primary/50 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent border border-primary/30 p-6 flex flex-col justify-center items-center text-center">
                                <div className="flex items-center gap-2 text-sm font-bold text-primary mb-3">
                                  <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                                  <span>A Message from the Creator</span>
                                </div>
                                <blockquote className="text-xs leading-relaxed text-foreground italic mb-3 max-w-[85%]">
                                  "Every line of code we write is a love letter to the future. 
                                  Every bug we fix is a promise kept.
                                  <br/><br/>
                                  In this digital age, we are the architects of possibility. 
                                  We build the tools that shape how humanity thinks and connects.
                                  <br/><br/>
                                  <strong>Keep building with love, keep shipping with pride, 
                                  and never forget that your code touches lives you'll never meet.</strong>"
                                </blockquote>
                                <div className="text-xs text-primary/80 font-semibold">
                                  — Mehtab Rosul, Creator of ForgeFlow Pilot
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Philosophy quote - keep this */}
                        {showEgg && (
                          <div className="mt-6 space-y-2 animate-fade-in flex flex-col items-center text-center max-w-64 lg:max-w-80">
                            <div className="text-xs text-muted-foreground italic leading-relaxed">
                              "Craft with care, measure twice, ship once. Every pixel, every interaction, every line of code matters in the pursuit of excellence."
                            </div>
                            <div className="text-xs text-muted-foreground">
                              You've discovered the hidden philosophy behind ForgeFlow Pilot.
                            </div>
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
                        

                        {/* Hover interaction hint */}
                        {hoverCount > 0 && hoverCount < 3 && (
                          <div className="text-xs text-muted-foreground italic animate-fade-in">
                            💡 Try hovering more for additional secrets...
                          </div>
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
