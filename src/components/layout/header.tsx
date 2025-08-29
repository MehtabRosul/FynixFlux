

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

const Logo = () => (
  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
    {/* Your Logo Here */}
  </div>
);

export function Header() {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith('/dashboard');

  const navLinks = [
    { href: "/features", label: "Features" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/about", label: "About Us" },
    { href: "/news", label: "News" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 mr-6" prefetch={false}>
          <Logo />
          <span className="font-bold text-lg">ForgeFlow</span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex flex-grow items-center justify-center">
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

        <div className="hidden md:flex items-center gap-4 ml-6">
           {isDashboard ? (
                <Button asChild variant="outline">
                    <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" /> Exit Dashboard</Link>
                </Button>
           ) : (
             <Button asChild>
                  <Link href="/get-in-touch">Contact Us</Link>
              </Button>
           )}
        </div>


        {/* Mobile Nav */}
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
                 {isDashboard ? (
                      <Button asChild variant="outline">
                          <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" /> Exit Dashboard</Link>
                      </Button>
                 ) : (
                   <Button asChild>
                      <Link href="/get-in-touch">Contact Us</Link>
                  </Button>
                 )}
                </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
