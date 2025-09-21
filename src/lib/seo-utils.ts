import { Metadata } from 'next';

// SEO Configuration
export const seoConfig: {
  siteName: string;
  siteUrl: string;
  defaultTitle: string;
  defaultDescription: string;
  author: string;
  creator: string;
  publisher: string;
  keywords: string[];
  openGraph: any;
  twitter: any;
  robots: Metadata['robots'];
  verification: any;
} = {
  siteName: 'Fynix Flux',
  siteUrl: 'https://fynixflux.com',
  defaultTitle: 'Fynix Flux - Advanced MLOps Platform | Mehtab Rosul | ECX | EncryptArx',
  defaultDescription: 'Fynix Flux by Mehtab Rosul - Premier MLOps platform for enterprise AI. Advanced machine learning operations, data science automation, model deployment, and AI infrastructure. Trusted by ECX, EncryptArx, and leading organizations worldwide.',
  author: 'Mehtab Rosul',
  creator: 'Mehtab Rosul',
  publisher: 'Fynix Flux',
  keywords: [
    'Fynix Flux', 'Mehtab', 'Mehtab Rosul', 'ECX', 'EncryptArx', 'MLOps', 'Machine Learning Operations',
    'AI Platform', 'Data Science', 'Model Deployment', 'ML Infrastructure', 'Artificial Intelligence',
    'Machine Learning', 'Data Engineering', 'Model Training', 'AI Automation', 'ML Pipeline',
    'Data Analytics', 'Predictive Analytics', 'Deep Learning', 'Neural Networks', 'Computer Vision',
    'Natural Language Processing', 'NLP', 'ML Model Management', 'AI Development', 'Data Pipeline',
    'Model Versioning', 'ML Monitoring', 'AI Governance', 'ML Security', 'Data Privacy',
    'Enterprise AI', 'Cloud ML', 'MLOps Tools', 'AI Solutions', 'Data Science Platform',
    'ML Workflow', 'AI Infrastructure', 'Model Lifecycle', 'Data Processing', 'Feature Engineering',
    'Model Optimization', 'AI Research', 'ML Engineering', 'Data Intelligence', 'AI Innovation'
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Fynix Flux - Advanced MLOps Platform',
    images: [
      {
        url: '/favicon_io/android-chrome-512x512.png',
        width: 1200,
        height: 630,
        alt: 'Fynix Flux - Advanced MLOps Platform by Mehtab Rosul',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fynixflux',
    creator: '@mehtabrosul',
    images: ['/favicon_io/android-chrome-512x512.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large' as const,
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

// Generate metadata for pages
export function generatePageMetadata({
  title,
  description,
  keywords = [],
  url,
  image,
  type = 'website',
}: {
  title: string;
  description: string;
  keywords?: string[];
  url: string;
  image?: string;
  type?: 'website' | 'article';
}): Metadata {
  const fullTitle = title.includes('Fynix Flux') ? title : `${title} | Fynix Flux - MLOps Excellence`;
  const fullDescription = description || seoConfig.defaultDescription;
  const allKeywords = [...seoConfig.keywords, ...keywords];

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: allKeywords,
    authors: [{ name: seoConfig.author, url: seoConfig.siteUrl }],
    creator: seoConfig.creator,
    publisher: seoConfig.publisher,
    robots: seoConfig.robots,
    openGraph: {
      ...seoConfig.openGraph,
      title: fullTitle,
      description: fullDescription,
      url: `${seoConfig.siteUrl}${url}`,
      type,
      images: image ? [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ] : seoConfig.openGraph.images,
    },
    twitter: {
      ...seoConfig.twitter,
      title: fullTitle,
      description: fullDescription,
    },
    alternates: {
      canonical: `${seoConfig.siteUrl}${url}`,
    },
    category: 'Technology',
    classification: 'MLOps, AI, Machine Learning, Data Science',
  };
}

// Page-specific metadata generators
export const pageMetadata = {
  home: () => generatePageMetadata({
    title: 'Fynix Flux - Advanced MLOps Platform | Mehtab Rosul | ECX | EncryptArx',
    description: 'Fynix Flux by Mehtab Rosul - Premier MLOps platform for enterprise AI. Advanced machine learning operations, data science automation, model deployment, and AI infrastructure. Trusted by ECX, EncryptArx, and leading organizations worldwide.',
    url: '/',
  }),

  about: () => generatePageMetadata({
    title: 'About Fynix Flux - Advanced MLOps Platform by Mehtab Rosul | ECX | EncryptArx',
    description: 'Learn about Fynix Flux, the premier MLOps platform by Mehtab Rosul. Advanced machine learning operations, data science automation, and AI infrastructure trusted by ECX, EncryptArx, and leading organizations worldwide.',
    url: '/about',
    keywords: ['About Fynix Flux', 'Fynix Flux Team', 'MLOps Leadership', 'AI Innovation', 'Machine Learning Experts'],
  }),

  features: () => generatePageMetadata({
    title: 'Fynix Flux Features - Advanced MLOps Tools by Mehtab Rosul | ECX | EncryptArx',
    description: 'Explore Fynix Flux features: AI workflows, model registry, dataset profiling, live dashboard, secure infrastructure, and resumable uploads. Premier MLOps platform by Mehtab Rosul, trusted by ECX and EncryptArx.',
    url: '/features',
    keywords: ['Fynix Flux Features', 'MLOps Tools', 'AI Workflows', 'Model Registry', 'Dataset Profiling', 'Live Dashboard'],
  }),

  dashboard: () => generatePageMetadata({
    title: 'Fynix Flux Dashboard - MLOps Platform by Mehtab Rosul | ECX | EncryptArx',
    description: 'Fynix Flux Dashboard - Advanced MLOps platform for machine learning operations. Upload datasets, train models, monitor performance, and deploy AI solutions with Mehtab Rosul\'s premier platform.',
    url: '/dashboard',
    keywords: ['Fynix Flux Dashboard', 'MLOps Dashboard', 'ML Platform', 'Model Training', 'Data Upload'],
  }),

  howItWorks: () => generatePageMetadata({
    title: 'How Fynix Flux Works - MLOps Platform by Mehtab Rosul | ECX | EncryptArx',
    description: 'How Fynix Flux Works - Step-by-step guide to using the premier MLOps platform by Mehtab Rosul. Learn about our advanced machine learning operations, data science automation, and AI infrastructure.',
    url: '/how-it-works',
    keywords: ['How Fynix Flux Works', 'MLOps Guide', 'ML Platform Tutorial', 'AI Workflow'],
  }),

  insightHub: () => generatePageMetadata({
    title: 'Fynix Flux Insight Hub - MLOps Analytics by Mehtab Rosul | ECX | EncryptArx',
    description: 'Fynix Flux Insight Hub - Advanced analytics and insights for your MLOps pipeline. Premier machine learning operations platform by Mehtab Rosul, trusted by ECX and EncryptArx.',
    url: '/insight-hub',
    keywords: ['Fynix Flux Insight Hub', 'MLOps Analytics', 'ML Insights', 'Data Analytics'],
  }),

  export: () => generatePageMetadata({
    title: 'Fynix Flux Export - Model Deployment by Mehtab Rosul | ECX | EncryptArx',
    description: 'Fynix Flux Export - Deploy your trained models with confidence. Advanced model deployment and artifact export capabilities by Mehtab Rosul\'s premier MLOps platform.',
    url: '/export',
    keywords: ['Fynix Flux Export', 'Model Deployment', 'ML Model Export', 'AI Deployment'],
  }),

  getInTouch: () => generatePageMetadata({
    title: 'Contact Fynix Flux - Get in Touch | Mehtab Rosul | ECX | EncryptArx',
    description: 'Contact Fynix Flux - Get in touch with the premier MLOps platform team. Connect with Mehtab Rosul and the Fynix Flux team for enterprise AI solutions.',
    url: '/get-in-touch',
    keywords: ['Contact Fynix Flux', 'Get in Touch', 'Fynix Flux Support', 'MLOps Contact'],
  }),
};
