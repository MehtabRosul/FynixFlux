import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: "The Future of MLOps is Here",
    date: "October 27, 2023",
    excerpt: "Discover how ForgeFlow Pilot is revolutionizing the machine learning lifecycle, from data ingestion to model deployment and monitoring.",
  },
  {
    id: 2,
    title: "5 Tips for Effective Model Monitoring",
    date: "October 20, 2023",
    excerpt: "Learn best practices for monitoring your models in production to ensure they are performing as expected and delivering value.",
  },
  {
    id: 3,
    title: "Understanding Data Drift and How to Detect It",
    date: "October 15, 2023",
    excerpt: "A deep dive into the concept of data drift, why it's a problem for machine learning models, and how ForgeFlow Pilot can help you detect it early.",
  }
]

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              Our Blog
            </h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Insights, news, and best practices from the ForgeFlow Pilot team.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.id} className="flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>
                    <Link href="#" className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription>{post.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{post.excerpt}</p>
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
