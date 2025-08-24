import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function CtaSection() {
  return (
    <section id="cta" className="py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative overflow-hidden rounded-lg bg-primary/90 p-8 md:p-12 lg:p-16">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-20"></div>
          <div className="relative z-10 flex flex-col items-center text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl font-headline">
              Ready to Forge Your Next Breakthrough?
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
              Stop wrestling with infrastructure and start building better models. Join the waitlist and be the first to experience the future of MLOps.
            </p>
            <div className="mt-8">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/dashboard">Start Forging for Free</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
