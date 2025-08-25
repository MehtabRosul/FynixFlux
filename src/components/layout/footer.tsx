import Link from 'next/link';

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

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 py-8 md:flex-row md:px-6">
        <div className="flex items-center gap-2">
           <Logo />
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
