import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HowItWorksSection } from '@/components/sections/how-it-works-section';

export default function HowItWorksPage() {
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
