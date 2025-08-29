'use client';

import { usePathname } from 'next/navigation';
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { InsightHubButton } from "@/components/dashboard/insight-hub-button";
import { cn } from '@/lib/utils';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isInsightHubPage = pathname === '/insight-hub';

  return (
    <div className="flex flex-col min-h-screen w-full bg-background">
      {!isInsightHubPage && <Header />}
      <main className={cn("flex-grow", !isInsightHubPage && "p-4 md:p-8")}>
        {children}
      </main>
      {!isInsightHubPage && <InsightHubButton />}
      {!isInsightHubPage && <Footer />}
    </div>
  );
}
