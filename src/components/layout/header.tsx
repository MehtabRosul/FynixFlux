import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const Logo = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-7 w-7 text-primary"
    >
      <path d="M12 2l7.5 7.5-7.5 7.5-7.5-7.5L12 2z" fill="hsl(var(--primary))" opacity="0.4"/>
      <path d="M2 12l7.5 7.5L17 12l-7.5-7.5L2 12z" />
    </svg>
  );

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/features" className="hover:text-primary transition-colors" prefetch={false}>
            Features
          </Link>
          <Link href="/how-it-works" className="hover:text-primary transition-colors" prefetch={false}>
            How It Works
          </Link>
          <Link href="/pricing" className="hover:text-primary transition-colors" prefetch={false}>
            Pricing
          </Link>
           <Link href="/about" className="hover:text-primary transition-colors" prefetch={false}>
            About Us
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/login">Sign In</Link>
          </Button>
          <Button asChild>
            <Link href="/dashboard">Get Started</Link>
          </Button>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-4 p-4">
              <Link href="/" className="flex items-center gap-2" prefetch={false}>
                <Logo />
              </Link>
              <nav className="grid gap-2 text-base font-medium">
                <Link href="/features" className="hover:text-primary transition-colors" prefetch={false}>
                  Features
                </Link>
                <Link href="/how-it-works" className="hover:text-primary transition-colors" prefetch={false}>
                  How It Works
                </Link>
                <Link href="/pricing" className="hover:text-primary transition-colors" prefetch={false}>
                  Pricing
                </Link>
                 <Link href="/about" className="hover:text-primary transition-colors" prefetch={false}>
                  About Us
                </Link>
              </nav>
              <div className="flex flex-col gap-2">
                 <Button variant="ghost" asChild>
                  <Link href="/login">Sign In</Link>
                </Button>
                <Button asChild>
                  <Link href="/dashboard">Get Started</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
