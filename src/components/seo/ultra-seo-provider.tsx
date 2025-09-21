'use client';

import { ultraSEOConfig, ultraSEOUtils } from '@/lib/ultra-seo-system';
import { allUltraSEOKeywords } from '@/lib/ultra-seo-keywords';

interface UltraSEOProviderProps {
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
    howTo?: any;
    article?: any;
    review?: any;
    product?: any;
    service?: any;
    event?: any;
    course?: any;
    jobPosting?: any;
    localBusiness?: any;
  };
  contentOptimization?: {
    headings?: boolean;
    internalLinking?: boolean;
    externalLinking?: boolean;
    keywordDensity?: boolean;
    semanticSEO?: boolean;
  };
  voiceSearch?: {
    enabled?: boolean;
    questions?: string[];
    conversationalKeywords?: string[];
  };
  featuredSnippets?: {
    enabled?: boolean;
    targetTypes?: string[];
    content?: any;
  };
  localSEO?: {
    enabled?: boolean;
    business?: any;
    services?: string[];
    areas?: string[];
  };
}

export function UltraSEOProvider({
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
  contentOptimization = {
    headings: true,
    internalLinking: true,
    externalLinking: true,
    keywordDensity: true,
    semanticSEO: true,
  },
  voiceSearch = {
    enabled: true,
    questions: [],
    conversationalKeywords: [],
  },
  featuredSnippets = {
    enabled: true,
    targetTypes: ['paragraph', 'list', 'table'],
    content: {},
  },
  localSEO = {
    enabled: true,
    business: {},
    services: [],
    areas: [],
  },
}: UltraSEOProviderProps) {
  const baseUrl = ultraSEOConfig.siteUrl;
  const fullTitle = ultraSEOUtils.generateTitle(title || ultraSEOConfig.defaultTitle);
  const fullDescription = ultraSEOUtils.generateDescription(description || ultraSEOConfig.defaultDescription);
  
  // Combine all keywords with ultra SEO keywords
  const allKeywords = [
    ...ultraSEOConfig.keywords,
    ...keywords,
    ...allUltraSEOKeywords
  ].slice(0, 50); // Limit to 50 keywords

  const keywordsString = allKeywords.join(', ');

  return (
    <>
      {/* ULTRA SEO META TAGS */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={keywordsString} />
      <meta name="author" content={ultraSEOConfig.author} />
      <meta name="creator" content={ultraSEOConfig.creator} />
      <meta name="publisher" content={ultraSEOConfig.publisher} />
      
      {/* ROBOTS */}
      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow"} />
      <meta name="googlebot" content={noindex ? "noindex,nofollow" : "index,follow"} />
      
      {/* OPEN GRAPH / FACEBOOK */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={`${baseUrl}${url}`} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:site_name" content={ultraSEOConfig.metaTags.openGraph.siteName} />
      <meta property="og:locale" content={ultraSEOConfig.metaTags.openGraph.locale} />
      {image && (
        <meta property="og:image" content={image} />
      )}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      
      {/* TWITTER */}
      <meta property="twitter:card" content={ultraSEOConfig.metaTags.twitter.card} />
      <meta property="twitter:url" content={`${baseUrl}${url}`} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={fullDescription} />
      <meta property="twitter:site" content={ultraSEOConfig.metaTags.twitter.site} />
      <meta property="twitter:creator" content={ultraSEOConfig.metaTags.twitter.creator} />
      {image && (
        <meta property="twitter:image" content={image} />
      )}
      
      {/* CANONICAL URL */}
      <link rel="canonical" href={`${baseUrl}${url}`} />
      
      {/* ULTRA SEO META TAGS */}
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="ForgeFlow" />
      <meta name="application-name" content="ForgeFlow" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* GEO TAGS */}
      <meta name="geo.region" content={ultraSEOConfig.localSEO.country} />
      <meta name="geo.placename" content={ultraSEOConfig.localSEO.region} />
      <meta name="ICBM" content={`${ultraSEOConfig.localSEO.coordinates.latitude}, ${ultraSEOConfig.localSEO.coordinates.longitude}`} />
      
      {/* LANGUAGE AND CONTENT */}
      <meta httpEquiv="content-language" content="en-US" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="1 days" />
      <meta name="rating" content="General" />
      <meta name="distribution" content="Global" />
      <meta name="target" content="all" />
      
      {/* CATEGORY AND CLASSIFICATION */}
      <meta name="category" content="Technology" />
      <meta name="classification" content="MLOps, AI, Machine Learning, Data Science" />
      
      {/* VERIFICATION TAGS */}
      <meta name="google-site-verification" content="your-google-verification-code" />
      <meta name="yandex-verification" content="your-yandex-verification-code" />
      <meta name="yahoo-verification" content="your-yahoo-verification-code" />
      
      {/* ULTRA SEO STRUCTURED DATA */}
      {structuredData.organization && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ForgeFlow",
              "alternateName": "ForgeFlow MLOps Platform",
              "url": baseUrl,
              "logo": `${baseUrl}/favicon_io/android-chrome-512x512.png`,
              "description": "Advanced MLOps platform for enterprise AI by Mehtab Rosul. Premier machine learning operations, data science automation, and AI infrastructure.",
              "founder": {
                "@type": "Person",
                "name": "Mehtab Rosul",
                "url": baseUrl
              },
              "foundingDate": "2024",
              "industry": "Artificial Intelligence, Machine Learning, Data Science",
              "numberOfEmployees": "10-50",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": ultraSEOConfig.localSEO.country
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "url": `${baseUrl}/get-in-touch`
              },
              "sameAs": [
                "https://twitter.com/forgeflow",
                "https://linkedin.com/company/forgeflow",
                "https://github.com/forgeflow"
              ],
              "knowsAbout": [
                "MLOps", "Machine Learning Operations", "AI Platform", "Data Science",
                "Model Deployment", "ML Infrastructure", "Artificial Intelligence",
                "Machine Learning", "Data Engineering", "AI Automation"
              ]
            })
          }}
        />
      )}
      
      {structuredData.software && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "ForgeFlow",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web Browser",
              "description": "Advanced MLOps platform for enterprise AI. Streamline your machine learning pipeline from dataset to deployment with ForgeFlow by Mehtab Rosul.",
              "url": baseUrl,
              "author": {
                "@type": "Organization",
                "name": "ForgeFlow",
                "founder": {
                  "@type": "Person",
                  "name": "Mehtab Rosul"
                }
              },
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "ratingCount": "100"
              },
              "featureList": [
                "MLOps Pipeline Management",
                "Model Training & Deployment",
                "Data Science Automation",
                "AI Infrastructure",
                "Model Versioning",
                "ML Monitoring",
                "Data Processing",
                "Feature Engineering"
              ]
            })
          }}
        />
      )}
      
      {structuredData.website && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "ForgeFlow",
              "alternateName": "ForgeFlow MLOps Platform",
              "url": baseUrl,
              "description": "Premier MLOps platform for enterprise AI by Mehtab Rosul. Advanced machine learning operations, data science automation, and AI infrastructure.",
              "publisher": {
                "@type": "Organization",
                "name": "ForgeFlow",
                "founder": {
                  "@type": "Person",
                  "name": "Mehtab Rosul"
                }
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": `${baseUrl}/search?q={search_term_string}`,
                "query-input": "required name=search_term_string"
              },
              "mainEntity": {
                "@type": "SoftwareApplication",
                "name": "ForgeFlow MLOps Platform"
              }
            })
          }}
        />
      )}
      
      {/* VOICE SEARCH OPTIMIZATION */}
      {voiceSearch.enabled && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": voiceSearch.questions?.map((question: string) => ({
                "@type": "Question",
                "name": question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `ForgeFlow by Mehtab Rosul is the premier MLOps platform for enterprise AI. ${fullDescription}`
                }
              })) || []
            })
          }}
        />
      )}
      
      {/* LOCAL SEO */}
      {localSEO.enabled && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "ForgeFlow",
              "description": "Advanced MLOps platform for enterprise AI by Mehtab Rosul",
              "url": baseUrl,
              "telephone": "+1-555-0123",
              "email": "contact@forgeflow.com",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": ultraSEOConfig.localSEO.country,
                "addressRegion": ultraSEOConfig.localSEO.region
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": ultraSEOConfig.localSEO.coordinates.latitude,
                "longitude": ultraSEOConfig.localSEO.coordinates.longitude
              },
              "openingHours": "Mo-Su 00:00-23:59",
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": ultraSEOConfig.localSEO.coordinates.latitude,
                  "longitude": ultraSEOConfig.localSEO.coordinates.longitude
                },
                "geoRadius": "1000000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "MLOps Services",
                "itemListElement": localSEO.services?.map((service: string, index: number) => ({
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": service
                  }
                })) || []
              }
            })
          }}
        />
      )}
      
      {/* FEATURED SNIPPETS OPTIMIZATION */}
      {featuredSnippets.enabled && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              "name": "How to Use ForgeFlow MLOps Platform",
              "description": "Step-by-step guide to using ForgeFlow, the premier MLOps platform by Mehtab Rosul",
              "image": image || `${baseUrl}/favicon_io/android-chrome-512x512.png`,
              "totalTime": "PT30M",
              "estimatedCost": {
                "@type": "MonetaryAmount",
                "currency": "USD",
                "value": "0"
              },
              "supply": [
                {
                  "@type": "HowToSupply",
                  "name": "ForgeFlow Account"
                }
              ],
              "tool": [
                {
                  "@type": "HowToTool",
                  "name": "ForgeFlow Platform"
                }
              ],
              "step": [
                {
                  "@type": "HowToStep",
                  "name": "Sign Up",
                  "text": "Create your ForgeFlow account to access the premier MLOps platform by Mehtab Rosul"
                },
                {
                  "@type": "HowToStep",
                  "name": "Upload Data",
                  "text": "Upload your datasets to the ForgeFlow platform for analysis and processing"
                },
                {
                  "@type": "HowToStep",
                  "name": "Train Models",
                  "text": "Use ForgeFlow's advanced AI infrastructure to train your machine learning models"
                },
                {
                  "@type": "HowToStep",
                  "name": "Deploy Models",
                  "text": "Deploy your trained models with confidence using ForgeFlow's deployment capabilities"
                }
              ]
            })
          }}
        />
      )}
    </>
  );
}
