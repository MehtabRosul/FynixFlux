import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { UploadCloud, DatabaseZap, LayoutDashboard, Bot, Download, TestTube2, Library, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: <UploadCloud className="w-8 h-8 text-primary" />,
    title: "Resumable Dataset Uploads",
    description: "Upload datasets of any size with our resilient, chunked uploader that can be resumed anytime.",
    href: "/features/resumable-uploads",
  },
  {
    icon: <DatabaseZap className="w-8 h-8 text-primary" />,
    title: "Automated Dataset Profiling",
    description: "Get instant insights with schema inference, PII detection, and data quality warnings.",
    href: "/features/dataset-profiling",
  },
  {
    icon: <LayoutDashboard className="w-8 h-8 text-primary" />,
    title: "Live Training Dashboard",
    description: "Monitor your model training in real-time with streaming metrics, logs, and progress updates.",
    href: "/features/live-dashboard",
  },
  {
    icon: <Bot className="w-8 h-8 text-primary" />,
    title: "AI-Powered Workflows",
    description: "Use natural language to command the entire MLOps workflow from data prep to model evaluation with the Insight Hub.",
    href: "/features/ai-workflows",
  },
  {
    icon: <Download className="w-8 h-8 text-primary" />,
    title: "Versatile Artifact Export",
    description: "Download your models and run artifacts in multiple formats like ONNX, TFLite, and Python wheels.",
    href: "/features/artifact-export",
  },
  {
    icon: <TestTube2 className="w-8 h-8 text-primary" />,
    title: "Model Test Sandbox",
    description: "Quickly validate your models with single-input tests, batch uploads, and version comparisons.",
    href: "/features/model-sandbox",
  },
  {
    icon: <Library className="w-8 h-8 text-primary" />,
    title: "Central Model Registry",
    description: "Manage your entire model lifecycle with versioning, promotion workflows, and production tagging.",
    href: "/features/model-registry",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Secure & Scalable Infrastructure",
    description: "Built on a robust and secure foundation, ensuring your data is protected and operations can scale.",
    href: "/features/secure-infrastructure",
  }
];


export function FeaturesSection() {
  return (
    <section id="features" className="py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Key Features</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Everything You Need to Ship with Confidence</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Fynix Flux Pilot is packed with powerful features designed to accelerate your MLOps workflow from start to finish.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-12">
          {features.map((feature) => (
             <Link key={feature.title} href={feature.href} passHref>
                <Card className="flex flex-col h-full items-start p-6 transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-2 group">
                  <div className="p-3 rounded-full bg-primary/10 mb-4">{feature.icon}</div>
                  <CardHeader className="p-0">
                    <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 pt-2 flex-grow">
                     <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                  <div className="mt-4 font-semibold text-primary flex items-center gap-1 group-hover:underline">
                      Read More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Card>
             </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
