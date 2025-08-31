
"use client";

import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from '@/lib/utils';

interface Option {
  value: string;
  label: string;
}

interface ControlCardProps {
  label: string;
  options: Option[];
  value: string | null;
  onValueChange: (value: string) => void;
}

export function ControlCard({ label, options, value, onValueChange }: ControlCardProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex-1 min-w-[220px] h-[72px] bg-card/80 border border-white/5 rounded-xl p-4 flex items-center justify-between transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.4)] hover:border-primary/40">
          <div className={cn("text-left", !value && "flex items-center h-full w-full")}>
            <p className={cn(
              "text-sm text-muted-foreground uppercase tracking-wider",
              value && "mb-1"
            )}>
              {label}
            </p>
            {value && (
              <p className="text-base font-medium text-foreground">{value}</p>
            )}
          </div>
          <ChevronDown className="h-5 w-5 text-muted-foreground" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64">
        <DropdownMenuLabel>{label}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={value ?? ""} onValueChange={onValueChange}>
          {options.map((option) => (
            <DropdownMenuRadioItem key={option.value} value={option.label}>
              {option.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
