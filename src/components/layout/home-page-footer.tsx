
const Logo = () => (
  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
    {/* Your Logo Here */}
  </div>
);

export function HomePageFooter() {
  return (
    <footer className="bg-background">
      <div className="container mx-auto px-4 py-6 md:px-6">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <Logo />
          <p>&copy; 2025 ForgeFlow all copyrights are preserved.</p>
        </div>
      </div>
    </footer>
  );
}
