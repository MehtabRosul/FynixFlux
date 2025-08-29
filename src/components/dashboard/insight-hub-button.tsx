
'use client';

import { Button } from "@/components/ui/button"
import { Lightbulb } from "lucide-react"
import Link from "next/link"

export function InsightHubButton() {
    return (
        <div className="fixed bottom-8 right-8 z-50">
            <Link href="/insight-hub" aria-label="Open Insight Hub">
                <div className="relative">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-primary/75 animate-ripple-effect opacity-75"></span>
                    <Button className="relative rounded-full h-16 w-16 p-0 shadow-lg">
                        <Lightbulb className="h-8 w-8" />
                    </Button>
                </div>
            </Link>
        </div>
    )
}
