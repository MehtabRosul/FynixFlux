'use client';

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { NavigationLoader } from "@/components/ui/navigation-loader";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <NavigationLoader>
      <div className="flex flex-col min-h-screen w-full bg-background">
        <Header />
        <main className="flex-grow p-4 md:p-8">
          <Button variant="ghost" size="sm" className="mb-4" onClick={() => router.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          {children}
        </main>
        <Footer />
      </div>
    </NavigationLoader>
  );
}
