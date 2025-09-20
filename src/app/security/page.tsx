import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, Lock, Server, FileCheck2, AlertTriangle } from 'lucide-react';

export default function SecurityPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow py-12 md:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          {/* Page header */}
          <div className="mb-10 rounded-lg border bg-card/60 p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-md bg-primary/15"><ShieldCheck className="w-6 h-6 text-primary" /></div>
              <h1 className="text-3xl font-bold font-headline">Security at ForgeFlow Pilot</h1>
            </div>
            <p className="mt-3 text-muted-foreground">
              We care about the confidentiality, integrity, and availability of your data and artifacts. Below is an
              overview of the controls used in this demo and the recommended practices when you deploy ForgeFlow Pilot
              in production.
            </p>
          </div>

          {/* 3-column summary */}
          <div className="grid gap-6 md:grid-cols-3 mb-10">
            <div className="flex">
            <Card className="flex flex-col h-full w-full">
              <CardHeader className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-primary/15"><Lock className="w-5 h-5 text-primary" /></div>
                <CardTitle className="text-xl">Data Handling</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2 flex-1">
                <p>Client‑side CSV parsing for demo uploads. No server persistence in this demo.</p>
                <p>No accounts or personal data are collected by this demo.</p>
              </CardContent>
            </Card>
            </div>
            <div className="flex">
            <Card className="flex flex-col h-full w-full">
              <CardHeader className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-primary/15"><Server className="w-5 h-5 text-primary" /></div>
                <CardTitle className="text-xl">App Security</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2 flex-1">
                <p>Next.js + TypeScript + Radix primitives for robust, accessible UI.</p>
                <p>Serve via HTTPS with hardened security headers and CSP in production.</p>
              </CardContent>
            </Card>
            </div>
            <div className="flex">
            <Card className="flex flex-col h-full w-full">
              <CardHeader className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-primary/15"><FileCheck2 className="w-5 h-5 text-primary" /></div>
                <CardTitle className="text-xl">Artifacts</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2 flex-1">
                <p>Use short‑lived, signed download URLs and keep artifact checksums.</p>
                <p>Maintain provenance: dataset version, config, metrics, and approvals.</p>
              </CardContent>
            </Card>
            </div>
          </div>

          {/* Detailed sections */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Data Handling</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-invert max-w-none text-muted-foreground leading-relaxed">
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Local demo uploads:</strong> CSVs are parsed in the browser. You can wire a backend if needed.</li>
                  <li><strong>Secret management:</strong> All sensitive keys live in server env vars; rotate regularly and scope least privilege.</li>
                  <li><strong>PII awareness:</strong> Mask or anonymize PII during profiling where appropriate.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Application Security</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-invert max-w-none text-muted-foreground leading-relaxed">
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Framework hardening:</strong> App Router, TypeScript, shadcn/ui (Radix) for accessible components.</li>
                  <li><strong>Dependencies:</strong> Keep lockfile updated; run <code>npm audit</code> and CI checks.</li>
                  <li><strong>Transport & headers:</strong> Enforce HTTPS, HSTS, X‑Content‑Type‑Options, X‑Frame‑Options and a strict CSP.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Model & Artifact Security</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-invert max-w-none text-muted-foreground leading-relaxed">
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Signed URLs:</strong> Use short‑lived, signed links for all artifact downloads.</li>
                  <li><strong>Integrity & provenance:</strong> Store checksums and full lineage (dataset/version/config/metrics).</li>
                  <li><strong>Promotion workflow:</strong> Require approvals to promote to production; keep audit trail.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Operations</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-invert max-w-none text-muted-foreground leading-relaxed">
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Logging:</strong> Prefer structured logs; avoid sensitive payloads. This demo does not persist logs.</li>
                  <li><strong>Monitoring:</strong> Track job durations, queue depth, worker health, storage usage if you add a backend.</li>
                  <li><strong>Backups & retention:</strong> If you add persistence later, define lifecycle policies.</li>
                </ul>
                <div className="mt-4 rounded-md border border-yellow-400/30 bg-yellow-400/10 p-3 text-sm flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 mt-0.5 text-yellow-400" />
                  <p>
                    Demo note: by default, this app does not persist uploaded datasets or personal data. If you connect a
                    backend, ensure encryption in transit and at rest, access controls, and appropriate DPAs.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}


