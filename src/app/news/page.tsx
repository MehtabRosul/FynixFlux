
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Rss } from 'lucide-react';
import { getNews } from '@/app/actions/news';

interface Article {
  source: {
    name: string;
  };
  title: string;
  description: string;
  url: string;
  publishedAt: string;
}

export default async function NewsPage() {
  const newsItems: Article[] = await getNews();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <Rss className="w-12 h-12 text-primary" />
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              News
            </h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The latest news, articles, and updates from the world of Machine Learning Operations, updated daily.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {newsItems.length > 0 ? (
              newsItems.map((item, index) => (
              <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      {item.title}
                    </a>
                  </CardTitle>
                  <CardDescription>{new Date(item.publishedAt).toLocaleDateString()} - via {item.source.name}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                   <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold mt-4 inline-block hover:underline">
                    Read More
                  </a>
                </CardContent>
              </Card>
            ))
            ) : (
              <p className="text-muted-foreground col-span-full text-center">Could not fetch news at the moment. Please try again later.</p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
