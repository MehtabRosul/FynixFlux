import Link from 'next/link';

const Logo = () => (
  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
    {/* Your Logo Here */}
  </div>
);

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 py-8 md:flex-row md:px-6">
        <div className="flex items-center gap-2">
           <Logo />
           <span className="text-lg font-semibold">ForgeFlow</span>
        </div>
        <p className="text-sm text-muted-foreground">&copy; {year} ForgeFlow. All rights reserved.</p>
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
