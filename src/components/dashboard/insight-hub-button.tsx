
'use client';

import { Button } from "@/components/ui/button"
import { Lightbulb } from "lucide-react"
import Link from "next/link"

export function InsightHubButton() {
    return (
        <div className="fixed bottom-8 right-8 z-50">
            <Link href="/insight-hub" aria-label="Open Insight Hub">
                <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                    <Button 
                        className="relative rounded-full h-16 w-16 p-0 shadow-lg bg-background hover:bg-background/90"
                        aria-label="Open Insight Hub"
                    >
                         <span className="absolute inline-flex h-full w-full rounded-full bg-primary/20 animate-ripple-effect opacity-75"></span>
                        <Lightbulb className="h-8 w-8 text-primary drop-shadow-[0_0_8px_rgba(var(--primary-rgb),0.5)]" />
                    </Button>
                </div>
            </Link>
        </div>
    )
}
