'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { FeaturesSection } from '@/components/sections/features-section';
import { PageLoader } from '@/components/ui/page-loader';
import { useState, useEffect } from 'react';

export default function FeaturesPage() {
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isPageLoading) {
    return <PageLoader message="Loading Features..." showProgress={true} progress={75} />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
}
