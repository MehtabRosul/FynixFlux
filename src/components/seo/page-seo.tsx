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
    title="Fynix Flux - Advanced MLOps Platform | Mehtab Rosul | ECX | EncryptArx"
    description="Fynix Flux by Mehtab Rosul - Premier MLOps platform for enterprise AI. Advanced machine learning operations, data science automation, model deployment, and AI infrastructure. Trusted by ECX, EncryptArx, and leading organizations worldwide."
    url="/"
    keywords={[
      'Fynix Flux', 'Mehtab Rosul', 'ECX', 'EncryptArx', 'MLOps Platform',
      'Machine Learning Operations', 'AI Platform', 'Data Science', 'Model Deployment'
    ]}
  />
);

export const AboutPageSEO = () => (
  <PageSEO
    title="About Fynix Flux - Advanced MLOps Platform by Mehtab Rosul | ECX | EncryptArx"
    description="Learn about Fynix Flux, the premier MLOps platform by Mehtab Rosul. Advanced machine learning operations, data science automation, and AI infrastructure trusted by ECX, EncryptArx, and leading organizations worldwide."
    url="/about"
    keywords={[
      'About Fynix Flux', 'Fynix Flux Team', 'MLOps Leadership', 'AI Innovation',
      'Machine Learning Experts', 'Data Science Platform', 'Mehtab Rosul Company'
    ]}
  />
);

export const FeaturesPageSEO = () => (
  <PageSEO
    title="Fynix Flux Features - Advanced MLOps Tools by Mehtab Rosul | ECX | EncryptArx"
    description="Explore Fynix Flux features: AI workflows, model registry, dataset profiling, live dashboard, secure infrastructure, and resumable uploads. Premier MLOps platform by Mehtab Rosul, trusted by ECX and EncryptArx."
    url="/features"
    keywords={[
      'Fynix Flux Features', 'MLOps Tools', 'AI Workflows', 'Model Registry',
      'Dataset Profiling', 'Live Dashboard', 'Secure Infrastructure'
    ]}
  />
);

export const DashboardPageSEO = () => (
  <PageSEO
    title="Fynix Flux Dashboard - MLOps Platform by Mehtab Rosul | ECX | EncryptArx"
    description="Fynix Flux Dashboard - Advanced MLOps platform for machine learning operations. Upload datasets, train models, monitor performance, and deploy AI solutions with Mehtab Rosul's premier platform."
    url="/dashboard"
    keywords={[
      'Fynix Flux Dashboard', 'MLOps Dashboard', 'ML Platform', 'Model Training',
      'Data Upload', 'ML Monitoring', 'AI Dashboard'
    ]}
  />
);
