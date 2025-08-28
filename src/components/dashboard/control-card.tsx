import { ChevronDown } from 'lucide-react';

interface ControlCardProps {
  label: string;
  value: string;
}

export function ControlCard({ label, value }: ControlCardProps) {
  return (
    <button className="flex-1 min-w-[220px] h-[72px] bg-card/80 border border-white/5 rounded-xl p-4 flex items-center justify-between transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/20">
      <div className="text-left">
        <p className="text-sm text-muted-foreground uppercase tracking-wider">{label}</p>
        <p className="text-base font-medium text-foreground">{value}</p>
      </div>
      <ChevronDown className="h-5 w-5 text-muted-foreground" />
    </button>
  );
}
