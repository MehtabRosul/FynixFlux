
'use client';

import { Button } from "@/components/ui/button"
import { Lightbulb } from "lucide-react"
import Link from "next/link"

export function InsightHubButton() {
    return (
        <Button asChild className="fixed bottom-8 right-8 rounded-full h-16 w-16 p-0 shadow-lg animate-soothing-glow">
            <Link href="/insight-hub" aria-label="Open Insight Hub">
                <Lightbulb className="h-8 w-8" />
            </Link>
        </Button>
    )
}
