'use client';

import { Header } from '@/components/layout/header';
import { HeroSection } from '@/components/sections/hero-section';
import { CtaSection } from '@/components/sections/cta-section';
import { HomePageFooter } from '@/components/layout/home-page-footer';
import { ParallaxProvider } from '@/components/providers/parallax-provider';
import { DeployableWorkSection } from '@/components/sections/deployable-work-section';
import { InsightHubSection } from '@/components/sections/insight-hub-section';
import { FaqSection } from '@/components/sections/faq-section';
import { PageLoader } from '@/components/ui/page-loader';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isPageLoading) {
    return <PageLoader message="Loading Homepage..." showProgress={true} progress={90} />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <ParallaxProvider>
          <HeroSection />
          <DeployableWorkSection />
          <InsightHubSection />
          <CtaSection />
        </ParallaxProvider>
        <FaqSection />
      </main>
      <HomePageFooter />
    </div>
  );
}
