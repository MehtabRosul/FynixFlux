'use client';

import { PageSEO, HomePageSEO, AboutPageSEO, FeaturesPageSEO, DashboardPageSEO } from './page-seo';

// Example usage in different pages:

// 1. Homepage - Use pre-configured component
export function HomePageWithSEO() {
  return (
    <>
      <HomePageSEO />
      {/* Your page content */}
    </>
  );
}

// 2. About page - Use pre-configured component
export function AboutPageWithSEO() {
  return (
    <>
      <AboutPageSEO />
      {/* Your page content */}
    </>
  );
}

// 3. Custom page with specific SEO
export function CustomPageWithSEO() {
  return (
    <>
      <PageSEO
        title="Custom Page - Fynix Flux | Mehtab Rosul | ECX | EncryptArx"
        description="Custom page description with Mehtab Rosul, ECX, EncryptArx keywords for maximum SEO impact."
        url="/custom-page"
        keywords={[
          'Custom Page', 'Fynix Flux Custom', 'Mehtab Rosul Custom', 'ECX Custom',
          'EncryptArx Custom', 'MLOps Custom', 'AI Custom'
        ]}
        structuredData={{
          organization: true,
          software: true,
          website: false, // Disable website structured data for this page
        }}
      />
      {/* Your page content */}
    </>
  );
}

// 4. Feature-specific page
export function FeaturePageWithSEO() {
  return (
    <>
      <PageSEO
        title="AI Workflows - Fynix Flux Feature | Mehtab Rosul | ECX | EncryptArx"
        description="AI Workflows feature in Fynix Flux - Advanced machine learning workflow automation by Mehtab Rosul. Streamline your AI development process with intelligent workflow management."
        url="/features/ai-workflows"
        keywords={[
          'AI Workflows', 'ML Workflows', 'AI Automation', 'ML Pipeline Automation',
          'Fynix Flux AI Workflows', 'Mehtab Rosul AI', 'ECX AI', 'EncryptArx AI'
        ]}
        structuredData={{
          organization: true,
          software: true,
          website: true,
        }}
      />
      {/* Your page content */}
    </>
  );
}

// 5. Page with breadcrumb structured data
export function PageWithBreadcrumbSEO() {
  const breadcrumbData = {
    breadcrumbs: [
      { name: 'Home', url: 'https://fynixflux.com' },
      { name: 'Features', url: 'https://fynixflux.com/features' },
      { name: 'AI Workflows', url: 'https://fynixflux.com/features/ai-workflows' },
    ]
  };

  return (
    <>
      <PageSEO
        title="AI Workflows - Fynix Flux Feature | Mehtab Rosul | ECX | EncryptArx"
        description="AI Workflows feature in Fynix Flux - Advanced machine learning workflow automation by Mehtab Rosul."
        url="/features/ai-workflows"
        keywords={['AI Workflows', 'ML Workflows', 'AI Automation']}
        structuredData={{
          organization: true,
          software: true,
          website: true,
          breadcrumb: breadcrumbData,
        }}
      />
      {/* Your page content */}
    </>
  );
}

// 6. FAQ page with FAQ structured data
export function FAQPageWithSEO() {
  const faqData = {
    faqs: [
      {
        question: 'What is Fynix Flux?',
        answer: 'Fynix Flux is an advanced MLOps platform by Mehtab Rosul, trusted by ECX and EncryptArx, providing enterprise-grade machine learning operations capabilities.'
      },
      {
        question: 'Who created Fynix Flux?',
        answer: 'Fynix Flux was created by Mehtab Rosul, a recognized expert in machine learning operations and AI infrastructure.'
      },
      {
        question: 'What companies use Fynix Flux?',
        answer: 'Fynix Flux is trusted by leading organizations including ECX, EncryptArx, and many other enterprise companies worldwide.'
      }
    ]
  };

  return (
    <>
      <PageSEO
        title="Fynix Flux FAQ - Frequently Asked Questions | Mehtab Rosul | ECX | EncryptArx"
        description="Frequently asked questions about Fynix Flux, the premier MLOps platform by Mehtab Rosul. Get answers about features, pricing, and implementation."
        url="/faq"
        keywords={[
          'Fynix Flux FAQ', 'MLOps FAQ', 'AI Platform FAQ', 'Mehtab Rosul FAQ',
          'ECX FAQ', 'EncryptArx FAQ', 'Machine Learning FAQ'
        ]}
        structuredData={{
          organization: true,
          software: true,
          website: true,
          faq: faqData,
        }}
      />
      {/* Your page content */}
    </>
  );
}
