"use client"

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, LayoutDashboard, Database, Library } from "lucide-react";
import { cn } from "@/lib/utils";

const Logo = () => (
  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
    {/* Your Logo Here */}
  </div>
);

const navLinks = [
    { href: "/dashboard", label: "Dashboard", icon: <LayoutDashboard className="h-4 w-4" /> },
    { href: "/dashboard/datasets", label: "Datasets", icon: <Database className="h-4 w-4" /> },
    { href: "/dashboard/models", label: "Model Registry", icon: <Library className="h-4 w-4" /> },
];

function DashboardHeader() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
                <Logo />
                <span>ForgeFlow</span>
            </Link>

            <nav className="hidden md:flex md:items-center md:gap-5 text-sm font-medium ml-6">
                {navLinks.map(link => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                            "transition-colors hover:text-foreground",
                             pathname.startsWith(link.href) && (link.href === "/dashboard" ? pathname === link.href : true) ? "text-foreground" : "text-muted-foreground"
                        )}
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>

            <div className="flex items-center gap-4 ml-auto">
                 <Button variant="outline" size="sm" asChild>
                    <Link href="/">Exit Dashboard</Link>
                </Button>
            </div>
            
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                    variant="outline"
                    size="icon"
                    className="shrink-0 md:hidden"
                    >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <nav className="grid gap-6 text-lg font-medium">
                        <Link href="/" className="flex items-center gap-2 text-lg font-semibold mb-4">
                            <Logo />
                            <span>ForgeFlow</span>
                        </Link>
                        {navLinks.map(link => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "flex items-center gap-4 px-2.5",
                                    pathname.startsWith(link.href) && (link.href === "/dashboard" ? pathname === link.href : true) ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                {link.icon}
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </SheetContent>
            </Sheet>
        </header>
    );
}


export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <DashboardHeader />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        {children}
      </main>
    </div>
  );
}