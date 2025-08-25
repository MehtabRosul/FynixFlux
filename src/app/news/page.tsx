
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Rss } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    title: "The Rise of Platform Engineering in MLOps",
    date: "October 26, 2023",
    source: "MLOps Community",
    excerpt: "Platform engineering is becoming essential for scaling machine learning operations. Discover how centralized platforms are empowering ML teams to deploy faster and more reliably.",
  },
  {
    id: 2,
    title: "Generative AI and Its Impact on Model Monitoring",
    date: "October 25, 2023",
    source: "AI Infrastructure Alliance",
    excerpt: "With the explosion of generative models, traditional monitoring techniques are no longer enough. Learn about the new challenges and solutions for monitoring LLMs in production.",
  },
  {
    id: 3,
    title: "FinOps for AI: Managing the Skyrocketing Costs of GPU-based Training",
    date: "October 24, 2023",
    source: "TechCrunch",
    excerpt: "As model complexity grows, so do the costs. FinOps principles are now being adapted for AI workloads to provide visibility and control over cloud spending.",
  }
]

export default function NewsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <Rss className="w-12 h-12 text-primary" />
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              MLOps News
            </h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The latest news, articles, and updates from the world of Machine Learning Operations, updated daily.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {newsItems.map((item) => (
              <Card key={item.id} className="flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>
                    <Link href="#" className="hover:text-primary transition-colors">
                      {item.title}
                    </Link>
                  </CardTitle>
                  <CardDescription>{item.date} - via {item.source}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.excerpt}</p>
                   <Link href="#" className="text-primary font-semibold mt-4 inline-block hover:underline">
                    Read More
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
