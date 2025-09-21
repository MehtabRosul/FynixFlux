
import Link from 'next/link';
// import removed

const Logo = () => (
  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
    {/* Your Logo Here */}
  </div>
);

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-6 md:px-6">
        <div className="flex flex-col items-center justify-center gap-4 text-sm text-muted-foreground md:flex-row md:gap-6">
          <div className="flex items-center gap-2">
            <Logo />
            <p className="text-center md:text-left">© 2025 Fynix Flux. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/get-in-touch" className="hover:text-primary transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <p className="text-center">&copy; {year}. Designed, developed & supported by{' '}
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
      </div>
    </footer>
  );
}
