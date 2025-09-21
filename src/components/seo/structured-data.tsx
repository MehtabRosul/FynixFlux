'use client';

interface StructuredDataProps {
  type: 'organization' | 'software' | 'website' | 'breadcrumb' | 'faq';
  data?: any;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseUrl = 'https://fynixflux.com';
    
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Fynix Flux",
          "alternateName": "Fynix Flux MLOps Platform",
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
            "addressCountry": "US"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Service",
            "url": `${baseUrl}/get-in-touch`
          },
          "sameAs": [
            "https://twitter.com/fynixflux",
            "https://linkedin.com/company/fynixflux",
            "https://github.com/fynixflux"
          ],
          "knowsAbout": [
            "MLOps", "Machine Learning Operations", "AI Platform", "Data Science",
            "Model Deployment", "ML Infrastructure", "Artificial Intelligence",
            "Machine Learning", "Data Engineering", "AI Automation"
          ]
        };

      case 'software':
        return {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Fynix Flux",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web Browser",
          "description": "Advanced MLOps platform for enterprise AI. Streamline your machine learning pipeline from dataset to deployment with Fynix Flux by Mehtab Rosul.",
          "url": baseUrl,
          "author": {
            "@type": "Organization",
            "name": "Fynix Flux",
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
        };

      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Fynix Flux",
          "alternateName": "Fynix Flux MLOps Platform",
          "url": baseUrl,
          "description": "Premier MLOps platform for enterprise AI by Mehtab Rosul. Advanced machine learning operations, data science automation, and AI infrastructure.",
          "publisher": {
            "@type": "Organization",
            "name": "Fynix Flux",
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
            "name": "Fynix Flux MLOps Platform"
          }
        };

      case 'breadcrumb':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data?.breadcrumbs?.map((breadcrumb: any, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": breadcrumb.name,
            "item": breadcrumb.url
          })) || []
        };

      case 'faq':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": data?.faqs?.map((faq: any) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          })) || []
        };

      default:
        return null;
    }
  };

  const structuredData = getStructuredData();

  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
