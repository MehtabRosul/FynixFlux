import Link from 'next/link';

const Logo = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className="h-8 w-8 text-primary"
      fill="currentColor"
    >
      <path d="M128,24A104,104,0,0,0,36.18,172.11,103.41,103.41,0,0,0,32,192a104,104,0,0,0,192,0,103.41,103.41,0,0,0-4.18-20.11A104,104,0,0,0,128,24Zm0,192a88,88,0,0,1-64.35-29.31,103.41,103.41,0,0,0,4.18-20.11,88,88,0,1,1,120.34,0,103.41,103.41,0,0,0,4.18,20.11A88,88,0,0,1,128,216Z" opacity="0.2" />
      <path d="M228.18,172.11A104,104,0,0,0,128,24V216a104,104,0,0,0,96-84.8,103.41,103.41,0,0,0,4.18-20.11ZM144,204.8V176h16a8,8,0,0,1,0,16H144Zm0-40.8V136h24a8,8,0,0,1,0,16H144Zm0-40V96h16a8,8,0,0,1,0,16H144Zm32,24a8,8,0,0,1-8,8H160V120h8a8,8,0,0,1,0,16Zm16-48a8,8,0,0,1-8,8H184V88h8a8,8,0,0,1,0,16Zm-24,80a8,8,0,0,1-8,8H144V184h16a8,8,0,0,1,8,8Zm-48-40a8,8,0,0,1,8,8v40a8,8,0,0,1-16,0V160A8,8,0,0,1,112,152Zm0-48a8,8,0,0,1,8,8v24a8,8,0,0,1-16,0V112A8,8,0,0,1,112,104ZM96,88a8,8,0,0,1,16,0v8a8,8,0,0,1-16,0Zm0,48a8,8,0,0,1,16,0v48a8,8,0,0,1-16,0Zm-4.18-99.89a88,88,0,0,1,68.36-42A88.52,88.52,0,0,1,192,57.5a88,88,0,0,1,28.34,105.18,103.41,103.41,0,0,0-4.18-20.11,88,88,0,0,1-120.34,0A103.41,103.41,0,0,0,91.82,88.11Z" fill="hsl(var(--primary))" />
    </svg>
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
