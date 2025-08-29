
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
        // Return a mock object for UI development if no key is present
        return [
          {
            source: { id: 'the-verge', name: 'The Verge' },
            author: 'Jay Peters',
            title: 'Nvidia\'s stock is down — what went wrong?',
            description: 'Nvidia posted record Q2 earnings but its stock still sank — here\'s why data-center revenue, China chip bans, and slowing AI growth rattled Wall Street despite a huge beat.',
            url: 'https://www.theverge.com/2024/8/22/24183884/nvidia-stock-q2-2025-earnings',
            urlToImage: 'https://placehold.co/600x400.png',
            publishedAt: new Date().toISOString(),
            content: 'Nvidia posted record Q2 earnings but its stock still sank — here\'s why data-center revenue, China chip bans, and slowing AI growth rattled Wall Street despite a huge beat.'
          }
        ];
    }

    const query = "\"MLOps\" OR (\"Machine Learning\" AND \"Operations\") OR (\"AI\" AND \"Infrastructure\") -pypi.org -github.com";
    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&sortBy=publishedAt&pageSize=9&language=en`;

    try {
        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            },
            next: { revalidate: 86400 } 
        });

        if (!response.ok) {
            const errorBody = await response.json();
            console.error("Failed to fetch news:", response.status, errorBody);
            return [];
        }

        const data: NewsApiResponse = await response.json();
        
        return data.articles.filter(article => article.title && article.title !== "[Removed]" && article.description);

    } catch (error) {
        console.error("Error fetching news:", error);
        return [];
    }
}
