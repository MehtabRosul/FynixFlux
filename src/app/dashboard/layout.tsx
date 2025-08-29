import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { InsightHubButton } from "@/components/dashboard/insight-hub-button";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen w-full bg-background">
      <Header />
      <main className="flex-1 p-4 md:p-8">
        {children}
      </main>
      <InsightHubButton />
      <Footer />
    </div>
  );
}
