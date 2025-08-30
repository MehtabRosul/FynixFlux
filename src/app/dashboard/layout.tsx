'use client';

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen w-full bg-background">
      <Header />
      <main className="flex-grow p-4 md:p-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}