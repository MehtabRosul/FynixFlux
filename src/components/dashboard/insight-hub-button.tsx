
'use client';

import { Button } from "@/components/ui/button"
import { BrainCircuit } from "lucide-react"
import Link from "next/link"

export function InsightHubButton() {
    return (
        <Button asChild className="fixed bottom-8 right-8 rounded-full h-16 w-16 p-0 shadow-2xl shadow-primary/40 animate-pulse-glow">
            <Link href="/insight-hub" aria-label="Open Insight Hub">
                <BrainCircuit className="h-8 w-8" />
            </Link>
        </Button>
    )
}
