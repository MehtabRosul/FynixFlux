"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles } from "lucide-react";

export default function ExportUseCasePage() {
  const [answer, setAnswer] = useState("");
  const wordCount = useMemo(() => (answer.trim() ? answer.trim().split(/\s+/).length : 0), [answer]);
  const isValid = wordCount >= 10 && wordCount <= 100;

  useEffect(() => {
    // Focus the textarea on open for quick input
    const el = document.getElementById("usecase-textarea") as HTMLTextAreaElement | null;
    el?.focus();
  }, []);

  const submitAndClose = () => {
    try {
      // This page is no longer used; keep noop for backwards compatibility if opened directly
    } finally {
      window.close();
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            <CardTitle>Before we package your model…</CardTitle>
          </div>
          <CardDescription>
            In one short note, what will you use this model for—and how will it help?
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Textarea
            id="usecase-textarea"
            rows={6}
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Example: Detect churn weekly and trigger tailored retention offers in our CRM."
          />
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Aim for 10–100 words. Be concrete (who, where, when).</span>
            <span>{wordCount} words</span>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => window.close()}>Cancel</Button>
          <Button onClick={submitAndClose} disabled={!isValid}>Continue</Button>
        </CardFooter>
      </Card>
    </div>
  );
}


