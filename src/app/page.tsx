import { Header } from '@/components/layout/header';
import { HeroSection } from '@/components/sections/hero-section';
import { CtaSection } from '@/components/sections/cta-section';
import { ParallaxProvider } from '@/components/providers/parallax-provider';
import { DeployableWorkSection } from '@/components/sections/deployable-work-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <ParallaxProvider>
          <HeroSection />
          <DeployableWorkSection />
          <CtaSection />
        </ParallaxProvider>
      </main>
      <footer className="py-6 text-center text-sm text-muted-foreground">
        ForgeFlow all copyrights are being preserved.
      </footer>
    </div>
  );
}
