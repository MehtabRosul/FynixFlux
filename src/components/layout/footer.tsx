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
      <div className="container mx-auto px-4 py-6 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <div className="flex items-center gap-2">
            <Logo />
             <p className="text-center md:text-left">
              &copy; {year} ForgeFlow. Build by expertise by{' '}
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
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
