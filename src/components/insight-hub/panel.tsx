import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PanelProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function Panel({ title, children, className }: PanelProps) {
  return (
    <div className={cn("bg-[#0f1113] rounded-xl h-full flex flex-col border border-white/5", className)}>
      <div className="px-4 py-2 border-b border-white/5">
        <h2 className="text-sm font-semibold text-white/90">{title}</h2>
      </div>
      <div className="flex-grow p-4 relative">
        {children}
      </div>
    </div>
  );
}
