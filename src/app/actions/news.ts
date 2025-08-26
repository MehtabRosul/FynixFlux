
"use server";

interface Article {
  source: {
    id: string | null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

interface NewsApiResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

export async function getNews(): Promise<Article[]> {
    const apiKey = process.env.NEWS_API_KEY;
    if (!apiKey) {
        console.error("News API key is missing.");
        return [];
    }

    const query = "MLOps OR \"Machine Learning Operations\" OR \"AI Infrastructure\"";
    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&sortBy=publishedAt&pageSize=9&language=en&apiKey=${apiKey}`;

    try {
        const response = await fetch(url, {
            // Revalidate every day (24 * 60 * 60 = 86400 seconds)
            next: { revalidate: 86400 } 
        });

        if (!response.ok) {
            const errorBody = await response.json();
            console.error("Failed to fetch news:", response.status, errorBody);
            return [];
        }

        const data: NewsApiResponse = await response.json();
        
        // Filter out articles with removed content or no title
        return data.articles.filter(article => article.title && article.title !== "[Removed]" && article.description);

    } catch (error) {
        console.error("Error fetching news:", error);
        return [];
    }
}
