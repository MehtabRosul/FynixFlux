'use client';

import { UltraSEOProvider } from './ultra-seo-provider';
import { allUltraSEOKeywords } from '@/lib/ultra-seo-keywords';

interface UltraPageSEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  url?: string;
  image?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
  structuredData?: any;
  contentOptimization?: any;
  voiceSearch?: any;
  featuredSnippets?: any;
  localSEO?: any;
}

export function UltraPageSEO({
  title,
  description,
  keywords = [],
  url = '/',
  image,
  type = 'website',
  noindex = false,
  structuredData,
  contentOptimization,
  voiceSearch,
  featuredSnippets,
  localSEO,
}: UltraPageSEOProps) {
  return (
    <UltraSEOProvider
      title={title}
      description={description}
      keywords={keywords}
      url={url}
      image={image}
      type={type}
      noindex={noindex}
      structuredData={structuredData}
      contentOptimization={contentOptimization}
      voiceSearch={voiceSearch}
      featuredSnippets={featuredSnippets}
      localSEO={localSEO}
    />
  );
}

// ULTRA-POWERFUL PRE-CONFIGURED SEO COMPONENTS

export const UltraHomePageSEO = () => (
  <UltraPageSEO
    title="ForgeFlow - Advanced MLOps Platform | Mehtab Rosul | ECX | EncryptArx"
    description="ForgeFlow by Mehtab Rosul - Premier MLOps platform for enterprise AI. Advanced machine learning operations, data science automation, model deployment, and AI infrastructure. Trusted by ECX, EncryptArx, and leading organizations worldwide."
    url="/"
    keywords={[
      'ForgeFlow', 'Mehtab Rosul', 'ECX', 'EncryptArx', 'MLOps Platform',
      'Machine Learning Operations', 'AI Platform', 'Data Science', 'Model Deployment',
      'ML Infrastructure', 'Artificial Intelligence', 'Machine Learning', 'Data Engineering',
      'AI Automation', 'ML Pipeline', 'Data Analytics', 'Predictive Analytics',
      'Deep Learning', 'Neural Networks', 'Computer Vision', 'Natural Language Processing',
      'ML Model Management', 'AI Development', 'Data Pipeline', 'Model Versioning',
      'ML Monitoring', 'AI Governance', 'ML Security', 'Data Privacy',
      'Enterprise AI', 'Cloud ML', 'MLOps Tools', 'AI Solutions'
    ]}
    voiceSearch={{
      enabled: true,
      questions: [
        'What is ForgeFlow?',
        'How does ForgeFlow work?',
        'What is MLOps?',
        'Best MLOps platform?',
        'MLOps vs DevOps?',
        'MLOps best practices?',
        'MLOps implementation guide?',
        'MLOps platform features?',
        'MLOps platform benefits?',
        'MLOps platform pricing?'
      ],
      conversationalKeywords: [
        'how to use ForgeFlow',
        'what is MLOps platform',
        'best MLOps tools',
        'MLOps platform comparison',
        'MLOps implementation guide',
        'MLOps best practices',
        'MLOps platform features',
        'MLOps platform benefits',
        'MLOps platform pricing',
        'MLOps platform demo'
      ]
    }}
    featuredSnippets={{
      enabled: true,
      targetTypes: ['paragraph', 'list', 'table'],
      content: {
        definitions: true,
        lists: true,
        tables: true,
        steps: true,
        comparisons: true,
        prosAndCons: true,
        statistics: true,
        examples: true
      }
    }}
    localSEO={{
      enabled: true,
      business: {
        name: 'ForgeFlow',
        address: 'San Francisco, CA, USA',
        phone: '+1-555-0123',
        email: 'contact@forgeflow.com',
        hours: '24/7',
        website: 'https://forgeflow.com'
      },
      services: [
        'MLOps Platform',
        'AI Infrastructure',
        'Machine Learning Operations',
        'Data Science Platform',
        'Model Deployment',
        'AI Automation'
      ],
      areas: [
        'United States',
        'North America',
        'Global',
        'Enterprise',
        'Cloud',
        'On-Premise'
      ]
    }}
  />
);

export const UltraAboutPageSEO = () => (
  <UltraPageSEO
    title="About ForgeFlow - Advanced MLOps Platform by Mehtab Rosul | ECX | EncryptArx"
    description="Learn about ForgeFlow, the premier MLOps platform by Mehtab Rosul. Advanced machine learning operations, data science automation, and AI infrastructure trusted by ECX, EncryptArx, and leading organizations worldwide."
    url="/about"
    keywords={[
      'About ForgeFlow', 'ForgeFlow Team', 'MLOps Leadership', 'AI Innovation',
      'Machine Learning Experts', 'Data Science Platform', 'Mehtab Rosul Company',
      'ECX Partnership', 'EncryptArx Collaboration', 'ForgeFlow Founder',
      'MLOps Company', 'AI Company', 'Machine Learning Company', 'Data Science Company',
      'ForgeFlow History', 'ForgeFlow Mission', 'ForgeFlow Vision', 'ForgeFlow Values',
      'ForgeFlow Culture', 'ForgeFlow Team', 'ForgeFlow Leadership', 'ForgeFlow Experts'
    ]}
    voiceSearch={{
      enabled: true,
      questions: [
        'Who created ForgeFlow?',
        'What is ForgeFlow company?',
        'Who is Mehtab Rosul?',
        'What is ECX?',
        'What is EncryptArx?',
        'ForgeFlow team?',
        'ForgeFlow mission?',
        'ForgeFlow vision?',
        'ForgeFlow values?',
        'ForgeFlow culture?'
      ],
      conversationalKeywords: [
        'who created ForgeFlow',
        'what is ForgeFlow company',
        'who is Mehtab Rosul',
        'what is ECX company',
        'what is EncryptArx company',
        'ForgeFlow team members',
        'ForgeFlow company mission',
        'ForgeFlow company vision',
        'ForgeFlow company values',
        'ForgeFlow company culture'
      ]
    }}
    featuredSnippets={{
      enabled: true,
      targetTypes: ['paragraph', 'list'],
      content: {
        definitions: true,
        lists: true,
        statistics: true,
        examples: true
      }
    }}
  />
);

export const UltraFeaturesPageSEO = () => (
  <UltraPageSEO
    title="ForgeFlow Features - Advanced MLOps Tools by Mehtab Rosul | ECX | EncryptArx"
    description="Explore ForgeFlow features: AI workflows, model registry, dataset profiling, live dashboard, secure infrastructure, and resumable uploads. Premier MLOps platform by Mehtab Rosul, trusted by ECX and EncryptArx."
    url="/features"
    keywords={[
      'ForgeFlow Features', 'MLOps Tools', 'AI Workflows', 'Model Registry',
      'Dataset Profiling', 'Live Dashboard', 'Secure Infrastructure', 'Resumable Uploads',
      'MLOps Platform Features', 'AI Platform Capabilities', 'Machine Learning Tools',
      'Data Science Tools', 'Model Management', 'ML Pipeline Tools', 'AI Infrastructure',
      'Enterprise MLOps', 'ML Automation Tools', 'AI Development Tools', 'ML Monitoring Tools',
      'Data Processing Tools', 'Feature Engineering Tools', 'Model Optimization Tools',
      'AI Research Tools', 'ML Engineering Tools', 'Data Intelligence Tools', 'AI Innovation Tools'
    ]}
    voiceSearch={{
      enabled: true,
      questions: [
        'What are ForgeFlow features?',
        'ForgeFlow platform features?',
        'MLOps platform features?',
        'AI platform features?',
        'Machine learning platform features?',
        'Data science platform features?',
        'MLOps tools features?',
        'AI tools features?',
        'Machine learning tools features?',
        'Data science tools features?'
      ],
      conversationalKeywords: [
        'what are ForgeFlow features',
        'ForgeFlow platform features list',
        'MLOps platform features comparison',
        'AI platform features benefits',
        'machine learning platform features',
        'data science platform features',
        'MLOps tools features list',
        'AI tools features comparison',
        'machine learning tools features',
        'data science tools features'
      ]
    }}
    featuredSnippets={{
      enabled: true,
      targetTypes: ['list', 'table'],
      content: {
        lists: true,
        tables: true,
        comparisons: true,
        prosAndCons: true,
        examples: true
      }
    }}
  />
);

export const UltraDashboardPageSEO = () => (
  <UltraPageSEO
    title="ForgeFlow Dashboard - MLOps Platform by Mehtab Rosul | ECX | EncryptArx"
    description="ForgeFlow Dashboard - Advanced MLOps platform for machine learning operations. Upload datasets, train models, monitor performance, and deploy AI solutions with Mehtab Rosul's premier platform."
    url="/dashboard"
    keywords={[
      'ForgeFlow Dashboard', 'MLOps Dashboard', 'ML Platform', 'Model Training',
      'Data Upload', 'ML Monitoring', 'AI Dashboard', 'Machine Learning Interface',
      'Data Science Dashboard', 'AI Platform Dashboard', 'MLOps Interface',
      'Machine Learning Dashboard', 'AI Operations Dashboard', 'Data Analytics Dashboard',
      'Model Management Dashboard', 'ML Pipeline Dashboard', 'AI Workflow Dashboard',
      'Data Processing Dashboard', 'Feature Engineering Dashboard', 'Model Optimization Dashboard',
      'AI Research Dashboard', 'ML Engineering Dashboard', 'Data Intelligence Dashboard'
    ]}
    voiceSearch={{
      enabled: true,
      questions: [
        'How to use ForgeFlow dashboard?',
        'ForgeFlow dashboard features?',
        'MLOps dashboard features?',
        'AI dashboard features?',
        'Machine learning dashboard features?',
        'Data science dashboard features?',
        'How to upload data to ForgeFlow?',
        'How to train models in ForgeFlow?',
        'How to monitor ML models?',
        'How to deploy AI models?'
      ],
      conversationalKeywords: [
        'how to use ForgeFlow dashboard',
        'ForgeFlow dashboard features list',
        'MLOps dashboard features comparison',
        'AI dashboard features benefits',
        'machine learning dashboard features',
        'data science dashboard features',
        'how to upload data to ForgeFlow',
        'how to train models in ForgeFlow',
        'how to monitor ML models',
        'how to deploy AI models'
      ]
    }}
    featuredSnippets={{
      enabled: true,
      targetTypes: ['list', 'steps'],
      content: {
        lists: true,
        steps: true,
        examples: true
      }
    }}
  />
);

export const UltraHowItWorksPageSEO = () => (
  <UltraPageSEO
    title="How ForgeFlow Works - MLOps Platform by Mehtab Rosul | ECX | EncryptArx"
    description="How ForgeFlow Works - Step-by-step guide to using the premier MLOps platform by Mehtab Rosul. Learn about our advanced machine learning operations, data science automation, and AI infrastructure."
    url="/how-it-works"
    keywords={[
      'How ForgeFlow Works', 'MLOps Guide', 'ML Platform Tutorial', 'AI Workflow',
      'ForgeFlow Tutorial', 'MLOps Platform Guide', 'AI Platform Tutorial',
      'Machine Learning Tutorial', 'Data Science Tutorial', 'MLOps Implementation Guide',
      'AI Implementation Guide', 'Machine Learning Implementation Guide', 'Data Science Implementation Guide',
      'MLOps Best Practices', 'AI Best Practices', 'Machine Learning Best Practices', 'Data Science Best Practices',
      'MLOps Workflow', 'AI Workflow', 'Machine Learning Workflow', 'Data Science Workflow',
      'MLOps Process', 'AI Process', 'Machine Learning Process', 'Data Science Process'
    ]}
    voiceSearch={{
      enabled: true,
      questions: [
        'How does ForgeFlow work?',
        'How to use ForgeFlow?',
        'How to implement MLOps?',
        'How to use MLOps platform?',
        'How to use AI platform?',
        'How to use machine learning platform?',
        'How to use data science platform?',
        'MLOps implementation steps?',
        'AI implementation steps?',
        'Machine learning implementation steps?'
      ],
      conversationalKeywords: [
        'how does ForgeFlow work',
        'how to use ForgeFlow platform',
        'how to implement MLOps',
        'how to use MLOps platform',
        'how to use AI platform',
        'how to use machine learning platform',
        'how to use data science platform',
        'MLOps implementation steps',
        'AI implementation steps',
        'machine learning implementation steps'
      ]
    }}
    featuredSnippets={{
      enabled: true,
      targetTypes: ['steps', 'list'],
      content: {
        steps: true,
        lists: true,
        examples: true
      }
    }}
  />
);

export const UltraInsightHubPageSEO = () => (
  <UltraPageSEO
    title="ForgeFlow Insight Hub - MLOps Analytics by Mehtab Rosul | ECX | EncryptArx"
    description="ForgeFlow Insight Hub - Advanced analytics and insights for your MLOps pipeline. Premier machine learning operations platform by Mehtab Rosul, trusted by ECX and EncryptArx."
    url="/insight-hub"
    keywords={[
      'ForgeFlow Insight Hub', 'MLOps Analytics', 'ML Insights', 'Data Analytics',
      'AI Analytics', 'Machine Learning Analytics', 'MLOps Insights',
      'Data Science Analytics', 'AI Platform Analytics', 'ML Platform Analytics',
      'Machine Learning Insights', 'AI Insights', 'Data Science Insights',
      'MLOps Reporting', 'AI Reporting', 'Machine Learning Reporting', 'Data Science Reporting',
      'MLOps Metrics', 'AI Metrics', 'Machine Learning Metrics', 'Data Science Metrics',
      'MLOps KPIs', 'AI KPIs', 'Machine Learning KPIs', 'Data Science KPIs'
    ]}
    voiceSearch={{
      enabled: true,
      questions: [
        'What is ForgeFlow Insight Hub?',
        'ForgeFlow analytics features?',
        'MLOps analytics features?',
        'AI analytics features?',
        'Machine learning analytics features?',
        'Data science analytics features?',
        'MLOps insights features?',
        'AI insights features?',
        'Machine learning insights features?',
        'Data science insights features?'
      ],
      conversationalKeywords: [
        'what is ForgeFlow Insight Hub',
        'ForgeFlow analytics features list',
        'MLOps analytics features comparison',
        'AI analytics features benefits',
        'machine learning analytics features',
        'data science analytics features',
        'MLOps insights features list',
        'AI insights features comparison',
        'machine learning insights features',
        'data science insights features'
      ]
    }}
    featuredSnippets={{
      enabled: true,
      targetTypes: ['list', 'table'],
      content: {
        lists: true,
        tables: true,
        examples: true
      }
    }}
  />
);

export const UltraExportPageSEO = () => (
  <UltraPageSEO
    title="ForgeFlow Export - Model Deployment by Mehtab Rosul | ECX | EncryptArx"
    description="ForgeFlow Export - Deploy your trained models with confidence. Advanced model deployment and artifact export capabilities by Mehtab Rosul's premier MLOps platform."
    url="/export"
    keywords={[
      'ForgeFlow Export', 'Model Deployment', 'ML Model Export', 'AI Deployment',
      'MLOps Export', 'Model Export', 'AI Model Deployment', 'Machine Learning Deployment',
      'Data Science Export', 'AI Platform Export', 'ML Platform Export',
      'Model Artifacts', 'AI Artifacts', 'Machine Learning Artifacts', 'Data Science Artifacts',
      'Model Packaging', 'AI Packaging', 'Machine Learning Packaging', 'Data Science Packaging',
      'Model Distribution', 'AI Distribution', 'Machine Learning Distribution', 'Data Science Distribution',
      'Model Sharing', 'AI Sharing', 'Machine Learning Sharing', 'Data Science Sharing'
    ]}
    voiceSearch={{
      enabled: true,
      questions: [
        'How to export models from ForgeFlow?',
        'ForgeFlow export features?',
        'MLOps export features?',
        'AI export features?',
        'Machine learning export features?',
        'Data science export features?',
        'How to deploy ML models?',
        'How to deploy AI models?',
        'How to package ML models?',
        'How to distribute ML models?'
      ],
      conversationalKeywords: [
        'how to export models from ForgeFlow',
        'ForgeFlow export features list',
        'MLOps export features comparison',
        'AI export features benefits',
        'machine learning export features',
        'data science export features',
        'how to deploy ML models',
        'how to deploy AI models',
        'how to package ML models',
        'how to distribute ML models'
      ]
    }}
    featuredSnippets={{
      enabled: true,
      targetTypes: ['steps', 'list'],
      content: {
        steps: true,
        lists: true,
        examples: true
      }
    }}
  />
);

export const UltraGetInTouchPageSEO = () => (
  <UltraPageSEO
    title="Contact ForgeFlow - Get in Touch | Mehtab Rosul | ECX | EncryptArx"
    description="Contact ForgeFlow - Get in touch with the premier MLOps platform team. Connect with Mehtab Rosul and the ForgeFlow team for enterprise AI solutions."
    url="/get-in-touch"
    keywords={[
      'Contact ForgeFlow', 'Get in Touch', 'ForgeFlow Support', 'MLOps Contact',
      'AI Platform Contact', 'Machine Learning Support', 'ForgeFlow Help',
      'ForgeFlow Contact', 'MLOps Support', 'AI Support', 'Machine Learning Support',
      'Data Science Support', 'ForgeFlow Sales', 'MLOps Sales', 'AI Sales',
      'Machine Learning Sales', 'Data Science Sales', 'ForgeFlow Consulting',
      'MLOps Consulting', 'AI Consulting', 'Machine Learning Consulting', 'Data Science Consulting',
      'ForgeFlow Training', 'MLOps Training', 'AI Training', 'Machine Learning Training', 'Data Science Training'
    ]}
    voiceSearch={{
      enabled: true,
      questions: [
        'How to contact ForgeFlow?',
        'ForgeFlow contact information?',
        'MLOps support contact?',
        'AI support contact?',
        'Machine learning support contact?',
        'Data science support contact?',
        'ForgeFlow sales contact?',
        'MLOps sales contact?',
        'AI sales contact?',
        'Machine learning sales contact?'
      ],
      conversationalKeywords: [
        'how to contact ForgeFlow',
        'ForgeFlow contact information',
        'MLOps support contact',
        'AI support contact',
        'machine learning support contact',
        'data science support contact',
        'ForgeFlow sales contact',
        'MLOps sales contact',
        'AI sales contact',
        'machine learning sales contact'
      ]
    }}
    featuredSnippets={{
      enabled: true,
      targetTypes: ['list'],
      content: {
        lists: true,
        examples: true
      }
    }}
  />
);
