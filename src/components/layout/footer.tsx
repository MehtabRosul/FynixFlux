import Link from 'next/link';
import { Mountain } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 py-8 md:flex-row md:px-6">
        <div className="flex items-center gap-2">
          <Mountain className="h-6 w-6 text-primary" />
          <span className="text-lg font-semibold">ForgeFlow Pilot</span>
        </div>
        <p className="text-sm text-muted-foreground">&copy; {year} ForgeFlow Pilot. All rights reserved.</p>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="/terms" className="text-sm hover:underline" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="/privacy" className="text-sm hover:underline" prefetch={false}>
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
}
