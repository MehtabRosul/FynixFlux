'use client';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  url?: string;
  image?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
}

export function SEOHead({
  title,
  description,
  keywords = [],
  url = '/',
  image,
  type = 'website',
  noindex = false,
}: SEOHeadProps) {
  const baseUrl = 'https://fynixflux.com';
  const fullTitle = title || 'Fynix Flux - Advanced MLOps Platform | Mehtab Rosul | ECX | EncryptArx';
  const fullDescription = description || 'Fynix Flux by Mehtab Rosul - Premier MLOps platform for enterprise AI. Advanced machine learning operations, data science automation, model deployment, and AI infrastructure. Trusted by ECX, EncryptArx, and leading organizations worldwide.';
  
  const allKeywords = [
    'Fynix Flux', 'Mehtab', 'Mehtab Rosul', 'ECX', 'EncryptArx', 'MLOps', 'Machine Learning Operations',
    'AI Platform', 'Data Science', 'Model Deployment', 'ML Infrastructure', 'Artificial Intelligence',
    'Machine Learning', 'Data Engineering', 'Model Training', 'AI Automation', 'ML Pipeline',
    ...keywords
  ].join(', ');

  return (
    <>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={allKeywords} />
      <meta name="author" content="Mehtab Rosul" />
      <meta name="creator" content="Mehtab Rosul" />
      <meta name="publisher" content="Fynix Flux" />
      
      {/* Robots */}
      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow"} />
      <meta name="googlebot" content={noindex ? "noindex,nofollow" : "index,follow"} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={`${baseUrl}${url}`} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:site_name" content="Fynix Flux - Advanced MLOps Platform" />
      <meta property="og:locale" content="en_US" />
      {image && (
        <meta property="og:image" content={image} />
      )}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`${baseUrl}${url}`} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={fullDescription} />
      <meta property="twitter:site" content="@fynixflux" />
      <meta property="twitter:creator" content="@mehtabrosul" />
      {image && (
        <meta property="twitter:image" content={image} />
      )}
      
      {/* Canonical URL */}
      <link rel="canonical" href={`${baseUrl}${url}`} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Fynix Flux" />
      <meta name="application-name" content="Fynix Flux" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />
      <meta name="ICBM" content="39.8283, -98.5795" />
      
      {/* Language and Content */}
      <meta httpEquiv="content-language" content="en-US" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="1 days" />
      <meta name="rating" content="General" />
      <meta name="distribution" content="Global" />
      <meta name="target" content="all" />
      
      {/* Category and Classification */}
      <meta name="category" content="Technology" />
      <meta name="classification" content="MLOps, AI, Machine Learning, Data Science" />
      
      {/* Verification Tags */}
      <meta name="google-site-verification" content="your-google-verification-code" />
      <meta name="yandex-verification" content="your-yandex-verification-code" />
      <meta name="yahoo-verification" content="your-yahoo-verification-code" />
    </>
  );
}
