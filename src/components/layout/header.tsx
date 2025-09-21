

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Menu, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

const Logo = () => (
  <div className="w-12 h-12 lg:w-60 lg:h-12 bg-primary/20 rounded-lg flex items-center justify-center">
    {/* Your Logo Here */}
  </div>
);

export function Header() {
  const pathname = usePathname();
  const isDashboardPage = pathname.startsWith('/dashboard');
  const isGetInTouchPage = pathname === '/get-in-touch';

  const navLinks = [
    { href: "/features", label: "Features" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/about", label: "About Us" },
    { href: "/security", label: "Security" },
    { href: "/docs", label: "Documentation" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b">
      <div className="px-4 lg:px-6">
        <div className="mx-auto w-full max-w-6xl flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 mr-6" prefetch={false}>
          <Logo />
        </Link>
        
        {/* Desktop Nav (PC only) */}
        <div className="hidden lg:flex flex-grow items-center justify-center">
            <nav className="flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
                <Link 
                key={link.href} 
                href={link.href} 
                className={cn(
                    "transition-colors hover:text-primary",
                    pathname === link.href ? "text-primary" : "text-foreground"
                )} 
                prefetch={false}
                >
                {link.label}
                </Link>
            ))}
            </nav>
        </div>

        <div className="hidden lg:flex items-center gap-4 ml-auto lg:ml-6">
             {!isGetInTouchPage && (
               <Button asChild>
                    <Link href="/get-in-touch">Contact Us</Link>
                </Button>
             )}
        </div>


        {/* Mobile Nav */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <SheetDescription className="sr-only">Main navigation menu</SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 p-4">
              <Link href="/" className="flex items-center gap-2" prefetch={false}>
                <Logo />
                 <span className="font-bold text-lg">ForgeFlow</span>
              </Link>
              <nav className="grid gap-2 text-base font-medium">
                {navLinks.map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href} 
                    className={cn(
                      "transition-colors hover:text-primary",
                       pathname === link.href ? "text-primary" : "text-foreground"
                    )} 
                    prefetch={false}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
               <div className="flex flex-col gap-2">
                 {isDashboardPage && (
                      <Button asChild>
                          <Link href="/dashboard">Go to Dashboard</Link>
                      </Button>
                 )}
                 {!isGetInTouchPage && (
                   <Button asChild>
                      <Link href="/get-in-touch">Contact Us</Link>
                   </Button>
                 )}
                </div>
            </div>
          </SheetContent>
        </Sheet>
        </div>
      </div>
    </header>
  );
}
