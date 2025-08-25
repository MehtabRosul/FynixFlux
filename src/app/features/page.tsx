import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { FeaturesSection } from '@/components/sections/features-section';

export default function FeaturesPage() {
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
