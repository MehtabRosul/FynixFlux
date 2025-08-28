
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
import { useState } from 'react';

interface Option {
  value: string;
  label: string;
}

interface ControlCardProps {
  label: string;
  defaultValue: string;
  options: Option[];
}

export function ControlCard({ label, defaultValue, options }: ControlCardProps) {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex-1 min-w-[220px] h-[72px] bg-card/80 border border-white/5 rounded-xl p-4 flex items-center justify-between transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/20">
          <div className="text-left">
            <p className="text-sm text-muted-foreground uppercase tracking-wider">{label}</p>
            <p className="text-base font-medium text-foreground">{selectedValue}</p>
          </div>
          <ChevronDown className="h-5 w-5 text-muted-foreground" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64">
        <DropdownMenuLabel>{label}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={selectedValue} onValueChange={setSelectedValue}>
          {options.map((option) => (
            <DropdownMenuRadioItem key={option.value} value={option.value}>
              {option.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
