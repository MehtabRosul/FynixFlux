import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const Logo = () => (
  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
    {/* Your Logo Here */}
  </div>
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
           <Link href="/about" className="hover:text-primary transition-colors" prefetch={false}>
            About Us
          </Link>
          <Link href="/blog" className="hover:text-primary transition-colors" prefetch={false}>
            Blog
          </Link>
           <Link href="/contact" className="hover:text-primary transition-colors" prefetch={false}>
            Contact
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Button asChild>
            <Link href="/signup">Create an Account</Link>
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
                 <Link href="/about" className="hover:text-primary transition-colors" prefetch={false}>
                  About Us
                </Link>
                <Link href="/blog" className="hover:text-primary transition-colors" prefetch={false}>
                  Blog
                </Link>
                <Link href="/contact" className="hover:text-primary transition-colors" prefetch={false}>
                  Contact
                </Link>
              </nav>
              <div className="flex flex-col gap-2">
                 <Button asChild>
                  <Link href="/signup">Create an Account</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
