
'use client';
import { LegalLayout } from '@/components/layout/legal-layout';

export default function TermsPage() {
    
  const sections = [
    { 
      id: "definitions", 
      title: "1. Definitions",
      content: "Key terms include \"Service\", \"Platform\", \"User\", \"Account\", \"Content\", \"Artifacts\", and \"We/Us/Company\"."
    },
    { 
      id: "acceptance-of-terms", 
      title: "2. Acceptance of Terms",
      content: "By creating an account or using the Service, you confirm that you accept these Terms of Service. You must be of legal age to enter into this agreement."
    },
    { 
      id: "account-responsibilities", 
      title: "4. Account Registration & Responsibilities",
      content: "You must provide accurate information when creating your account. You are responsible for all activities that occur under it and must keep your password confidential."
    },
    { 
      id: "acceptable-use", 
      title: "5. Acceptable Use",
      content: "You agree not to engage in illegal activities, infringe on intellectual property rights, reverse-engineer the Service, or upload malicious content."
    },
    { 
      id: "service-description", 
      title: "6. Service Description & Scope",
      content: "Our Service provides tools for dataset uploading, profiling, model training, testing, and management. Features are provided “as-is”."
    },
    { 
      id: "data-ip", 
      title: "7. Data, Content & Intellectual Property",
      content: "You retain ownership of your data. You grant us a limited license to process it to provide the Service. We retain all rights to our platform."
    },
    { 
      id: "model-disclaimers", 
      title: "8. Model Outputs & AI Disclaimers",
      content: "AI-generated insights and model outputs are for informational purposes and may contain errors. You are responsible for validating all outputs before use."
    },
    { 
      id: "warranties-disclaimers", 
      title: "10. Warranties & Disclaimers",
      content: "The Service is provided “as is” and “as available” without any warranties, express or implied."
    },
    { 
      id: "liability-limitation", 
      title: "11. Limitation of Liability",
      content: "Our liability is limited. We are not liable for any indirect, incidental, or consequential damages arising from your use of the Service."
    },
    { 
      id: "indemnification", 
      title: "12. Indemnification",
      content: "You agree to indemnify and hold us harmless from any claims arising out of your violation of these Terms."
    },
    { 
      id: "term-termination", 
      title: "13. Term and Termination",
      content: "These Terms are effective until terminated. You may terminate your account at any time. We may suspend or terminate your account for any breach."
    },
    { 
      id: "governing-law", 
      title: "16. Governing Law & Dispute Resolution",
      content: "These Terms are governed by the laws of our jurisdiction. Any disputes will be resolved in the designated courts."
    }
  ];

  return (
     <LegalLayout
      title="Terms of Service"
      lastUpdated="2023-10-27"
      sections={sections}
    />
  );
}
