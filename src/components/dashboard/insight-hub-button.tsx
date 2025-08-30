
'use client';

import { Button } from "@/components/ui/button"
import { Bot } from "lucide-react"

interface InsightHubButtonProps {
    onClick: () => void;
}

export function InsightHubButton({ onClick }: InsightHubButtonProps) {
    return (
        <div className="fixed bottom-8 right-8 z-50 group">
            <div className="relative w-16 h-16">
                {/* Ripple Animation */}
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary/20 animate-ripple-effect opacity-75"></span>
                
                {/* Gradient Background */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-secondary transition-all duration-300 group-hover:from-accent group-hover:to-primary"></div>
                
                {/* Glassmorphism Effect */}
                <div className="absolute inset-0 rounded-full backdrop-blur-sm bg-white/10"></div>
                
                {/* Inner Shadow and Border */}
                <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/20 shadow-inner"></div>

                <Button 
                    onClick={onClick}
                    className="relative w-full h-full rounded-full bg-transparent shadow-lg hover:bg-transparent"
                    aria-label="Open Insight Hub"
                >
                    <Bot className="h-9 w-9 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover:scale-110" />
                </Button>
            </div>
        </div>
    )
}
