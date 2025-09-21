import { Metadata } from 'next';
import { generatePageMetadata } from './seo-utils';

// Homepage SEO
export const homePageMetadata: Metadata = generatePageMetadata({
  title: 'Fynix Flux - Advanced MLOps Platform | Mehtab Rosul | ECX | EncryptArx',
  description: 'Fynix Flux by Mehtab Rosul - Premier MLOps platform for enterprise AI. Advanced machine learning operations, data science automation, model deployment, and AI infrastructure. Trusted by ECX, EncryptArx, and leading organizations worldwide.',
  url: '/',
});

// About Page SEO
export const aboutPageMetadata: Metadata = generatePageMetadata({
  title: 'About Fynix Flux - Advanced MLOps Platform by Mehtab Rosul | ECX | EncryptArx',
  description: 'Learn about Fynix Flux, the premier MLOps platform by Mehtab Rosul. Advanced machine learning operations, data science automation, and AI infrastructure trusted by ECX, EncryptArx, and leading organizations worldwide.',
  url: '/about',
  keywords: [
    'About Fynix Flux', 'Fynix Flux Team', 'MLOps Leadership', 'AI Innovation', 
    'Machine Learning Experts', 'Data Science Platform', 'Fynix Flux Company',
    'Mehtab Rosul Company', 'ECX Partnership', 'EncryptArx Collaboration'
  ],
});

// Features Page SEO
export const featuresPageMetadata: Metadata = generatePageMetadata({
  title: 'Fynix Flux Features - Advanced MLOps Tools by Mehtab Rosul | ECX | EncryptArx',
  description: 'Explore Fynix Flux features: AI workflows, model registry, dataset profiling, live dashboard, secure infrastructure, and resumable uploads. Premier MLOps platform by Mehtab Rosul, trusted by ECX and EncryptArx.',
  url: '/features',
  keywords: [
    'Fynix Flux Features', 'MLOps Tools', 'AI Workflows', 'Model Registry', 
    'Dataset Profiling', 'Live Dashboard', 'Secure Infrastructure', 'Resumable Uploads',
    'MLOps Platform Features', 'AI Platform Capabilities', 'Machine Learning Tools'
  ],
});

// Dashboard Page SEO
export const dashboardPageMetadata: Metadata = generatePageMetadata({
  title: 'Fynix Flux Dashboard - MLOps Platform by Mehtab Rosul | ECX | EncryptArx',
  description: 'Fynix Flux Dashboard - Advanced MLOps platform for machine learning operations. Upload datasets, train models, monitor performance, and deploy AI solutions with Mehtab Rosul\'s premier platform.',
  url: '/dashboard',
  keywords: [
    'Fynix Flux Dashboard', 'MLOps Dashboard', 'ML Platform', 'Model Training', 
    'Data Upload', 'ML Monitoring', 'AI Dashboard', 'Machine Learning Interface'
  ],
});

// How It Works Page SEO
export const howItWorksPageMetadata: Metadata = generatePageMetadata({
  title: 'How Fynix Flux Works - MLOps Platform by Mehtab Rosul | ECX | EncryptArx',
  description: 'How Fynix Flux Works - Step-by-step guide to using the premier MLOps platform by Mehtab Rosul. Learn about our advanced machine learning operations, data science automation, and AI infrastructure.',
  url: '/how-it-works',
  keywords: [
    'How Fynix Flux Works', 'MLOps Guide', 'ML Platform Tutorial', 'AI Workflow',
    'Fynix Flux Tutorial', 'MLOps Platform Guide', 'AI Platform Tutorial'
  ],
});

// Insight Hub Page SEO
export const insightHubPageMetadata: Metadata = generatePageMetadata({
  title: 'Fynix Flux Insight Hub - MLOps Analytics by Mehtab Rosul | ECX | EncryptArx',
  description: 'Fynix Flux Insight Hub - Advanced analytics and insights for your MLOps pipeline. Premier machine learning operations platform by Mehtab Rosul, trusted by ECX and EncryptArx.',
  url: '/insight-hub',
  keywords: [
    'Fynix Flux Insight Hub', 'MLOps Analytics', 'ML Insights', 'Data Analytics',
    'AI Analytics', 'Machine Learning Analytics', 'MLOps Insights'
  ],
});

// Export Page SEO
export const exportPageMetadata: Metadata = generatePageMetadata({
  title: 'Fynix Flux Export - Model Deployment by Mehtab Rosul | ECX | EncryptArx',
  description: 'Fynix Flux Export - Deploy your trained models with confidence. Advanced model deployment and artifact export capabilities by Mehtab Rosul\'s premier MLOps platform.',
  url: '/export',
  keywords: [
    'Fynix Flux Export', 'Model Deployment', 'ML Model Export', 'AI Deployment',
    'MLOps Export', 'Model Export', 'AI Model Deployment'
  ],
});

// Get In Touch Page SEO
export const getInTouchPageMetadata: Metadata = generatePageMetadata({
  title: 'Contact Fynix Flux - Get in Touch | Mehtab Rosul | ECX | EncryptArx',
  description: 'Contact Fynix Flux - Get in touch with the premier MLOps platform team. Connect with Mehtab Rosul and the Fynix Flux team for enterprise AI solutions.',
  url: '/get-in-touch',
  keywords: [
    'Contact Fynix Flux', 'Get in Touch', 'Fynix Flux Support', 'MLOps Contact',
    'AI Platform Contact', 'Machine Learning Support', 'Fynix Flux Help'
  ],
});

// Feature-specific page metadata
export const featurePageMetadata = {
  aiWorkflows: generatePageMetadata({
    title: 'AI Workflows - Fynix Flux Feature | Mehtab Rosul | ECX | EncryptArx',
    description: 'AI Workflows feature in Fynix Flux - Advanced machine learning workflow automation by Mehtab Rosul. Streamline your AI development process with intelligent workflow management.',
    url: '/features/ai-workflows',
    keywords: ['AI Workflows', 'ML Workflows', 'AI Automation', 'ML Pipeline Automation'],
  }),

  artifactExport: generatePageMetadata({
    title: 'Artifact Export - Fynix Flux Feature | Mehtab Rosul | ECX | EncryptArx',
    description: 'Artifact Export feature in Fynix Flux - Export your trained models and artifacts with confidence. Advanced model deployment capabilities by Mehtab Rosul.',
    url: '/features/artifact-export',
    keywords: ['Artifact Export', 'Model Export', 'ML Artifacts', 'Model Deployment'],
  }),

  datasetProfiling: generatePageMetadata({
    title: 'Dataset Profiling - Fynix Flux Feature | Mehtab Rosul | ECX | EncryptArx',
    description: 'Dataset Profiling feature in Fynix Flux - Intelligent data analysis and profiling for your machine learning datasets. Advanced data insights by Mehtab Rosul.',
    url: '/features/dataset-profiling',
    keywords: ['Dataset Profiling', 'Data Analysis', 'ML Data Profiling', 'Data Insights'],
  }),

  liveDashboard: generatePageMetadata({
    title: 'Live Dashboard - Fynix Flux Feature | Mehtab Rosul | ECX | EncryptArx',
    description: 'Live Dashboard feature in Fynix Flux - Real-time MLOps monitoring and analytics. Advanced dashboard capabilities by Mehtab Rosul for enterprise AI.',
    url: '/features/live-dashboard',
    keywords: ['Live Dashboard', 'MLOps Dashboard', 'Real-time Monitoring', 'ML Analytics'],
  }),

  modelRegistry: generatePageMetadata({
    title: 'Model Registry - Fynix Flux Feature | Mehtab Rosul | ECX | EncryptArx',
    description: 'Model Registry feature in Fynix Flux - Comprehensive model lifecycle management and versioning. Advanced model management by Mehtab Rosul.',
    url: '/features/model-registry',
    keywords: ['Model Registry', 'Model Management', 'ML Model Versioning', 'Model Lifecycle'],
  }),

  modelSandbox: generatePageMetadata({
    title: 'Model Sandbox - Fynix Flux Feature | Mehtab Rosul | ECX | EncryptArx',
    description: 'Model Sandbox feature in Fynix Flux - Safe environment for testing and experimenting with ML models. Advanced sandbox capabilities by Mehtab Rosul.',
    url: '/features/model-sandbox',
    keywords: ['Model Sandbox', 'ML Testing', 'Model Experimentation', 'ML Sandbox'],
  }),

  resumableUploads: generatePageMetadata({
    title: 'Resumable Uploads - Fynix Flux Feature | Mehtab Rosul | ECX | EncryptArx',
    description: 'Resumable Uploads feature in Fynix Flux - Reliable data ingestion and processing with resumable upload capabilities. Advanced data handling by Mehtab Rosul.',
    url: '/features/resumable-uploads',
    keywords: ['Resumable Uploads', 'Data Upload', 'ML Data Ingestion', 'Data Processing'],
  }),

  secureInfrastructure: generatePageMetadata({
    title: 'Secure Infrastructure - Fynix Flux Feature | Mehtab Rosul | ECX | EncryptArx',
    description: 'Secure Infrastructure feature in Fynix Flux - Enterprise-grade security and compliance for your MLOps platform. Advanced security by Mehtab Rosul.',
    url: '/features/secure-infrastructure',
    keywords: ['Secure Infrastructure', 'MLOps Security', 'AI Security', 'Enterprise Security'],
  }),
};
