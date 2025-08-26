
export function Loader() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
       <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center animate-pulse">
        {/* Your Logo Here or an SVG */}
       </div>
       <p className="text-muted-foreground">Loading...</p>
    </div>
  );
}
