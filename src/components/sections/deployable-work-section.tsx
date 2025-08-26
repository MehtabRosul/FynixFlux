
'use client';

import { useRef, useEffect } from 'react';
import { useParallax } from '@/components/providers/parallax-provider';
import { Card } from '@/components/ui/card';
import { Code, Zap, Package, Grid } from 'lucide-react';
import { cn } from '@/lib/utils';

const exportFormats = [
  {
    icon: <Package className="w-8 h-8 text-primary" />,
    title: 'Python Wheel',
  },
  {
    icon: <Code className="w-8 h-8 text-primary" />,
    title: 'ONNX',
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: 'TorchScript',
  },
  {
    icon: <Grid className="w-8 h-8 text-primary" />,
    title: 'TFLite',
  },
];

export function DeployableWorkSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in', 'fade-in-0', 'slide-in-from-bottom-8');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal-on-scroll');
    elements?.forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 md:py-32 bg-background overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid gap-16">

                {/* Top Section */}
                <div className="text-center max-w-3xl mx-auto space-y-4 reveal-on-scroll opacity-0 transition-all duration-700">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                        Your Work, Preserved and Deployable
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        ForgeFlow ML saves every artifact of your workflow. Datasets remain available for
                        reproducibility, model binaries are neatly stored, and you can export in multiple formats.
                        Everything you build stays organized, accessible, and ready for deployment.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {exportFormats.map((format, index) => (
                        <Card 
                            key={format.title} 
                            className="reveal-on-scroll opacity-0 text-center p-6 transition-all duration-500 ease-in-out hover:shadow-primary/20 hover:-translate-y-2"
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <div className="flex justify-center mb-4">{format.icon}</div>
                            <h3 className="text-xl font-semibold">{format.title}</h3>
                        </Card>
                    ))}
                </div>

                {/* Bottom Section */}
                <div className="text-center max-w-3xl mx-auto space-y-4 pt-12 reveal-on-scroll opacity-0 transition-all duration-700" style={{ transitionDelay: '300ms' }}>
                     <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                        Built by Developers, for Developers
                    </h2>
                     <p className="text-lg text-muted-foreground">
                        ForgeFlow ML is a powerful tool built for collaboration. Integrate with your favorite tools,
                        share insights with your team, and build on a platform designed for the entire machine
                        learning community.
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
}
