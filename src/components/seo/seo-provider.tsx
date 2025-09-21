'use client';

import { SEOHead } from './seo-head';
import { StructuredData } from './structured-data';

interface SEOProviderProps {
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

export function SEOProvider({
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
}: SEOProviderProps) {
  return (
    <>
      <SEOHead
        title={title}
        description={description}
        keywords={keywords}
        url={url}
        image={image}
        type={type}
        noindex={noindex}
      />
      
      {/* Structured Data */}
      {structuredData.organization && (
        <StructuredData type="organization" />
      )}
      {structuredData.software && (
        <StructuredData type="software" />
      )}
      {structuredData.website && (
        <StructuredData type="website" />
      )}
      {structuredData.breadcrumb && (
        <StructuredData type="breadcrumb" data={structuredData.breadcrumb} />
      )}
      {structuredData.faq && (
        <StructuredData type="faq" data={structuredData.faq} />
      )}
    </>
  );
}
