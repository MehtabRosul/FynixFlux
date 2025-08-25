import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

const Logo = () => (
  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
    {/* Your Logo Here */}
  </div>
);

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <Logo />
            <span className="text-lg font-semibold">ForgeFlow</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link href="/features" className="text-sm hover:underline" prefetch={false}>
              Features
            </Link>
            <Link href="/how-it-works" className="text-sm hover:underline" prefetch={false}>
              How it Works
            </Link>
            <Link href="/about" className="text-sm hover:underline" prefetch={false}>
              About
            </Link>
            <Link href="/blog" className="text-sm hover:underline" prefetch={false}>
              Blog
            </Link>
            <Link href="/contact" className="text-sm hover:underline" prefetch={false}>
              Contact
            </Link>
          </nav>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <div className="flex flex-col items-center gap-2 text-center md:flex-row md:text-left">
            <p>&copy; {year} ForgeFlow. All rights reserved.</p>
            <p>
              Created by{' '}
              <a
                href="https://www.rosulmehtab.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary hover:underline"
              >
                Mehtab Rosul
              </a>
              .
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="/terms" className="hover:underline" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}