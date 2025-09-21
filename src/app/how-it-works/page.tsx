'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HowItWorksSection } from '@/components/sections/how-it-works-section';
import { PageLoader } from '@/components/ui/page-loader';
import { useState, useEffect } from 'react';

export default function HowItWorksPage() {
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isPageLoading) {
    return <PageLoader message="Loading How It Works..." showProgress={true} progress={75} />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HowItWorksSection />
      </main>
      <Footer />
    </div>
  );
}
