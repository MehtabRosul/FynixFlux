import { Header } from '@/components/layout/header';
import { HeroSection } from '@/components/sections/hero-section';
import { CtaSection } from '@/components/sections/cta-section';
import { Footer } from '@/components/layout/footer';
import { ParallaxProvider } from '@/components/providers/parallax-provider';
import { DeployableWorkSection } from '@/components/sections/deployable-work-section';
import { HowItWorksSection } from '@/components/sections/how-it-works-section';
import { FeaturesSection } from '@/components/sections/features-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <ParallaxProvider>
          <HeroSection />
          <DeployableWorkSection />
          <HowItWorksSection />
          <FeaturesSection />
          <CtaSection />
        </ParallaxProvider>
      </main>
      <Footer />
    </div>
  );
}
