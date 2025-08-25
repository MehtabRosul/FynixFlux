import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { UploadCloud, DatabaseZap, LayoutDashboard, Bot, Download, TestTube2, Library, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <UploadCloud className="w-8 h-8 text-primary" />,
    title: "Resumable Dataset Uploads",
    description: "Upload datasets of any size with our resilient, chunked uploader that can be resumed anytime.",
  },
  {
    icon: <DatabaseZap className="w-8 h-8 text-primary" />,
    title: "Automated Dataset Profiling",
    description: "Get instant insights with schema inference, PII detection, and data quality warnings.",
  },
  {
    icon: <LayoutDashboard className="w-8 h-8 text-primary" />,
    title: "Live Training Dashboard",
    description: "Monitor your model training in real-time with streaming metrics, logs, and progress updates.",
  },
  {
    icon: <Bot className="w-8 h-8 text-primary" />,
    title: "AI-Powered Insights",
    description: "Receive human-readable summaries of training performance, generated automatically by our AI.",
  },
  {
    icon: <Download className="w-8 h-8 text-primary" />,
    title: "Versatile Artifact Export",
    description: "Download your models and run artifacts in multiple formats like ONNX, TFLite, and Python wheels.",
  },
  {
    icon: <TestTube2 className="w-8 h-8 text-primary" />,
    title: "Model Test Sandbox",
    description: "Quickly validate your models with single-input tests, batch uploads, and version comparisons.",
  },
  {
    icon: <Library className="w-8 h-8 text-primary" />,
    title: "Central Model Registry",
    description: "Manage your entire model lifecycle with versioning, promotion workflows, and production tagging.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Secure & Scalable Infrastructure",
    description: "Built on a robust and secure foundation, ensuring your data is protected and operations can scale.",
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
              ForgeFlow Pilot is packed with powerful features designed to accelerate your MLOps workflow from start to finish.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-12">
          {features.map((feature, index) => (
            <Card key={index} className="flex flex-col items-start p-6 transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-2">
              <div className="p-3 rounded-full bg-primary/10 mb-4">{feature.icon}</div>
              <CardHeader className="p-0">
                <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                <CardDescription className="pt-2">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
