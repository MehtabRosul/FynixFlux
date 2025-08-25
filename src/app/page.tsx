import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { CtaSection } from '@/components/sections/cta-section';
import { ParallaxProvider } from '@/components/providers/parallax-provider';
import { FeaturesSection } from '@/components/sections/features-section';
import { HowItWorksSection } from '@/components/sections/how-it-works-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <ParallaxProvider>
          <HeroSection />
          <FeaturesSection />
          <HowItWorksSection />
          <CtaSection />
        </ParallaxProvider>
      </main>
      <Footer />
    </div>
  );
}
