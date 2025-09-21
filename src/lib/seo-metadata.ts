import { Metadata } from 'next';
import { generatePageMetadata } from './seo-utils';

// Homepage SEO
export const homePageMetadata: Metadata = generatePageMetadata({
  title: 'ForgeFlow - Advanced MLOps Platform | Mehtab Rosul | ECX | EncryptArx',
  description: 'ForgeFlow by Mehtab Rosul - Premier MLOps platform for enterprise AI. Advanced machine learning operations, data science automation, model deployment, and AI infrastructure. Trusted by ECX, EncryptArx, and leading organizations worldwide.',
  url: '/',
});

// About Page SEO
export const aboutPageMetadata: Metadata = generatePageMetadata({
  title: 'About ForgeFlow - Advanced MLOps Platform by Mehtab Rosul | ECX | EncryptArx',
  description: 'Learn about ForgeFlow, the premier MLOps platform by Mehtab Rosul. Advanced machine learning operations, data science automation, and AI infrastructure trusted by ECX, EncryptArx, and leading organizations worldwide.',
  url: '/about',
  keywords: [
    'About ForgeFlow', 'ForgeFlow Team', 'MLOps Leadership', 'AI Innovation', 
    'Machine Learning Experts', 'Data Science Platform', 'ForgeFlow Company',
    'Mehtab Rosul Company', 'ECX Partnership', 'EncryptArx Collaboration'
  ],
});

// Features Page SEO
export const featuresPageMetadata: Metadata = generatePageMetadata({
  title: 'ForgeFlow Features - Advanced MLOps Tools by Mehtab Rosul | ECX | EncryptArx',
  description: 'Explore ForgeFlow features: AI workflows, model registry, dataset profiling, live dashboard, secure infrastructure, and resumable uploads. Premier MLOps platform by Mehtab Rosul, trusted by ECX and EncryptArx.',
  url: '/features',
  keywords: [
    'ForgeFlow Features', 'MLOps Tools', 'AI Workflows', 'Model Registry', 
    'Dataset Profiling', 'Live Dashboard', 'Secure Infrastructure', 'Resumable Uploads',
    'MLOps Platform Features', 'AI Platform Capabilities', 'Machine Learning Tools'
  ],
});

// Dashboard Page SEO
export const dashboardPageMetadata: Metadata = generatePageMetadata({
  title: 'ForgeFlow Dashboard - MLOps Platform by Mehtab Rosul | ECX | EncryptArx',
  description: 'ForgeFlow Dashboard - Advanced MLOps platform for machine learning operations. Upload datasets, train models, monitor performance, and deploy AI solutions with Mehtab Rosul\'s premier platform.',
  url: '/dashboard',
  keywords: [
    'ForgeFlow Dashboard', 'MLOps Dashboard', 'ML Platform', 'Model Training', 
    'Data Upload', 'ML Monitoring', 'AI Dashboard', 'Machine Learning Interface'
  ],
});

// How It Works Page SEO
export const howItWorksPageMetadata: Metadata = generatePageMetadata({
  title: 'How ForgeFlow Works - MLOps Platform by Mehtab Rosul | ECX | EncryptArx',
  description: 'How ForgeFlow Works - Step-by-step guide to using the premier MLOps platform by Mehtab Rosul. Learn about our advanced machine learning operations, data science automation, and AI infrastructure.',
  url: '/how-it-works',
  keywords: [
    'How ForgeFlow Works', 'MLOps Guide', 'ML Platform Tutorial', 'AI Workflow',
    'ForgeFlow Tutorial', 'MLOps Platform Guide', 'AI Platform Tutorial'
  ],
});

// Insight Hub Page SEO
export const insightHubPageMetadata: Metadata = generatePageMetadata({
  title: 'ForgeFlow Insight Hub - MLOps Analytics by Mehtab Rosul | ECX | EncryptArx',
  description: 'ForgeFlow Insight Hub - Advanced analytics and insights for your MLOps pipeline. Premier machine learning operations platform by Mehtab Rosul, trusted by ECX and EncryptArx.',
  url: '/insight-hub',
  keywords: [
    'ForgeFlow Insight Hub', 'MLOps Analytics', 'ML Insights', 'Data Analytics',
    'AI Analytics', 'Machine Learning Analytics', 'MLOps Insights'
  ],
});

// Export Page SEO
export const exportPageMetadata: Metadata = generatePageMetadata({
  title: 'ForgeFlow Export - Model Deployment by Mehtab Rosul | ECX | EncryptArx',
  description: 'ForgeFlow Export - Deploy your trained models with confidence. Advanced model deployment and artifact export capabilities by Mehtab Rosul\'s premier MLOps platform.',
  url: '/export',
  keywords: [
    'ForgeFlow Export', 'Model Deployment', 'ML Model Export', 'AI Deployment',
    'MLOps Export', 'Model Export', 'AI Model Deployment'
  ],
});

// Get In Touch Page SEO
export const getInTouchPageMetadata: Metadata = generatePageMetadata({
  title: 'Contact ForgeFlow - Get in Touch | Mehtab Rosul | ECX | EncryptArx',
  description: 'Contact ForgeFlow - Get in touch with the premier MLOps platform team. Connect with Mehtab Rosul and the ForgeFlow team for enterprise AI solutions.',
  url: '/get-in-touch',
  keywords: [
    'Contact ForgeFlow', 'Get in Touch', 'ForgeFlow Support', 'MLOps Contact',
    'AI Platform Contact', 'Machine Learning Support', 'ForgeFlow Help'
  ],
});

// Feature-specific page metadata
export const featurePageMetadata = {
  aiWorkflows: generatePageMetadata({
    title: 'AI Workflows - ForgeFlow Feature | Mehtab Rosul | ECX | EncryptArx',
    description: 'AI Workflows feature in ForgeFlow - Advanced machine learning workflow automation by Mehtab Rosul. Streamline your AI development process with intelligent workflow management.',
    url: '/features/ai-workflows',
    keywords: ['AI Workflows', 'ML Workflows', 'AI Automation', 'ML Pipeline Automation'],
  }),

  artifactExport: generatePageMetadata({
    title: 'Artifact Export - ForgeFlow Feature | Mehtab Rosul | ECX | EncryptArx',
    description: 'Artifact Export feature in ForgeFlow - Export your trained models and artifacts with confidence. Advanced model deployment capabilities by Mehtab Rosul.',
    url: '/features/artifact-export',
    keywords: ['Artifact Export', 'Model Export', 'ML Artifacts', 'Model Deployment'],
  }),

  datasetProfiling: generatePageMetadata({
    title: 'Dataset Profiling - ForgeFlow Feature | Mehtab Rosul | ECX | EncryptArx',
    description: 'Dataset Profiling feature in ForgeFlow - Intelligent data analysis and profiling for your machine learning datasets. Advanced data insights by Mehtab Rosul.',
    url: '/features/dataset-profiling',
    keywords: ['Dataset Profiling', 'Data Analysis', 'ML Data Profiling', 'Data Insights'],
  }),

  liveDashboard: generatePageMetadata({
    title: 'Live Dashboard - ForgeFlow Feature | Mehtab Rosul | ECX | EncryptArx',
    description: 'Live Dashboard feature in ForgeFlow - Real-time MLOps monitoring and analytics. Advanced dashboard capabilities by Mehtab Rosul for enterprise AI.',
    url: '/features/live-dashboard',
    keywords: ['Live Dashboard', 'MLOps Dashboard', 'Real-time Monitoring', 'ML Analytics'],
  }),

  modelRegistry: generatePageMetadata({
    title: 'Model Registry - ForgeFlow Feature | Mehtab Rosul | ECX | EncryptArx',
    description: 'Model Registry feature in ForgeFlow - Comprehensive model lifecycle management and versioning. Advanced model management by Mehtab Rosul.',
    url: '/features/model-registry',
    keywords: ['Model Registry', 'Model Management', 'ML Model Versioning', 'Model Lifecycle'],
  }),

  modelSandbox: generatePageMetadata({
    title: 'Model Sandbox - ForgeFlow Feature | Mehtab Rosul | ECX | EncryptArx',
    description: 'Model Sandbox feature in ForgeFlow - Safe environment for testing and experimenting with ML models. Advanced sandbox capabilities by Mehtab Rosul.',
    url: '/features/model-sandbox',
    keywords: ['Model Sandbox', 'ML Testing', 'Model Experimentation', 'ML Sandbox'],
  }),

  resumableUploads: generatePageMetadata({
    title: 'Resumable Uploads - ForgeFlow Feature | Mehtab Rosul | ECX | EncryptArx',
    description: 'Resumable Uploads feature in ForgeFlow - Reliable data ingestion and processing with resumable upload capabilities. Advanced data handling by Mehtab Rosul.',
    url: '/features/resumable-uploads',
    keywords: ['Resumable Uploads', 'Data Upload', 'ML Data Ingestion', 'Data Processing'],
  }),

  secureInfrastructure: generatePageMetadata({
    title: 'Secure Infrastructure - ForgeFlow Feature | Mehtab Rosul | ECX | EncryptArx',
    description: 'Secure Infrastructure feature in ForgeFlow - Enterprise-grade security and compliance for your MLOps platform. Advanced security by Mehtab Rosul.',
    url: '/features/secure-infrastructure',
    keywords: ['Secure Infrastructure', 'MLOps Security', 'AI Security', 'Enterprise Security'],
  }),
};
