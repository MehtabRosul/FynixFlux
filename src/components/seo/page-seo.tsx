'use client';

import { SEOProvider } from './seo-provider';

interface PageSEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  url?: string;
  image?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
  structuredData?: {
    organization?: boolean;
    software?: boolean;
    website?: boolean;
    breadcrumb?: any;
    faq?: any;
  };
}

export function PageSEO({
  title,
  description,
  keywords = [],
  url = '/',
  image,
  type = 'website',
  noindex = false,
  structuredData = {
    organization: true,
    software: true,
    website: true,
  },
}: PageSEOProps) {
  return (
    <SEOProvider
      title={title}
      description={description}
      keywords={keywords}
      url={url}
      image={image}
      type={type}
      noindex={noindex}
      structuredData={structuredData}
    />
  );
}

// Pre-configured SEO components for common pages
export const HomePageSEO = () => (
  <PageSEO
    title="ForgeFlow - Advanced MLOps Platform | Mehtab Rosul | ECX | EncryptArx"
    description="ForgeFlow by Mehtab Rosul - Premier MLOps platform for enterprise AI. Advanced machine learning operations, data science automation, model deployment, and AI infrastructure. Trusted by ECX, EncryptArx, and leading organizations worldwide."
    url="/"
    keywords={[
      'ForgeFlow', 'Mehtab Rosul', 'ECX', 'EncryptArx', 'MLOps Platform',
      'Machine Learning Operations', 'AI Platform', 'Data Science', 'Model Deployment'
    ]}
  />
);

export const AboutPageSEO = () => (
  <PageSEO
    title="About ForgeFlow - Advanced MLOps Platform by Mehtab Rosul | ECX | EncryptArx"
    description="Learn about ForgeFlow, the premier MLOps platform by Mehtab Rosul. Advanced machine learning operations, data science automation, and AI infrastructure trusted by ECX, EncryptArx, and leading organizations worldwide."
    url="/about"
    keywords={[
      'About ForgeFlow', 'ForgeFlow Team', 'MLOps Leadership', 'AI Innovation',
      'Machine Learning Experts', 'Data Science Platform', 'Mehtab Rosul Company'
    ]}
  />
);

export const FeaturesPageSEO = () => (
  <PageSEO
    title="ForgeFlow Features - Advanced MLOps Tools by Mehtab Rosul | ECX | EncryptArx"
    description="Explore ForgeFlow features: AI workflows, model registry, dataset profiling, live dashboard, secure infrastructure, and resumable uploads. Premier MLOps platform by Mehtab Rosul, trusted by ECX and EncryptArx."
    url="/features"
    keywords={[
      'ForgeFlow Features', 'MLOps Tools', 'AI Workflows', 'Model Registry',
      'Dataset Profiling', 'Live Dashboard', 'Secure Infrastructure'
    ]}
  />
);

export const DashboardPageSEO = () => (
  <PageSEO
    title="ForgeFlow Dashboard - MLOps Platform by Mehtab Rosul | ECX | EncryptArx"
    description="ForgeFlow Dashboard - Advanced MLOps platform for machine learning operations. Upload datasets, train models, monitor performance, and deploy AI solutions with Mehtab Rosul's premier platform."
    url="/dashboard"
    keywords={[
      'ForgeFlow Dashboard', 'MLOps Dashboard', 'ML Platform', 'Model Training',
      'Data Upload', 'ML Monitoring', 'AI Dashboard'
    ]}
  />
);
