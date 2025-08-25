
'use client';
import { LegalLayout } from '@/components/layout/legal-layout';
import { Book, CheckCircle, UserCheck, ShieldOff, Server, BrainCircuit, ShieldCheck, AlertTriangle, FileText, Globe, Link as LinkIcon, Handshake, Info, Mail, Users } from 'lucide-react';


export default function TermsPage() {
    
  const sections = [
    { 
      id: "definitions", 
      title: "1. Definitions",
      content: "Key terms include \"Service\", \"Platform\", \"User\", \"Account\", \"Project\", \"Content\", \"Artifacts\", \"Model\", \"Training Job\", \"We/Us/Company\", and \"You/Customer\".",
      icon: <Book size={20} />
    },
    { 
      id: "acceptance-of-terms", 
      title: "2. Acceptance of Terms",
      content: "By creating an account or using the Service, you confirm that you accept these Terms of Service. You must be of legal age to enter into this agreement.",
      icon: <CheckCircle size={20} />
    },
    { 
      id: "account-responsibilities", 
      title: "3. Account Responsibilities",
      content: "You must provide accurate information when creating your account. You are responsible for all activities that occur under it and must keep your password confidential.",
      icon: <UserCheck size={20} />
    },
    { 
      id: "acceptable-use", 
      title: "4. Acceptable Use",
      content: "You agree not to engage in illegal activities, infringe on intellectual property rights, reverse-engineer the Service, or upload malicious content.",
      icon: <ShieldOff size={20} />
    },
    { 
      id: "service-description", 
      title: "5. Service Description",
      content: "Our Service provides tools for dataset uploading, profiling, model training, testing, and management. Features are provided “as-is”. We reserve the right to modify the service at any time.",
      icon: <Server size={20} />
    },
    { 
      id: "data-ip", 
      title: "6. Data & IP",
      content: "You retain ownership of your data. You grant us a limited license to process it to provide the Service. We retain all rights to our platform.",
      icon: <FileText size={20} />
    },
    { 
      id: "model-disclaimers", 
      title: "7. AI & Model Disclaimers",
      content: "AI-generated insights and model outputs are for informational purposes and may contain errors. You are responsible for validating all outputs before use.",
      icon: <BrainCircuit size={20} />
    },
    {
      id: "confidentiality",
      title: "8. Confidentiality",
      content: "Both parties agree to treat all non-public information received from the other as confidential and not to disclose it to any third party without prior written consent, except as required by law.",
      icon: <ShieldCheck size={20} />
    },
    { 
      id: "warranties-disclaimers", 
      title: "9. Warranties & Disclaimers",
      content: "The Service is provided “as is” and “as available” without any warranties, express or implied.",
      icon: <AlertTriangle size={20} />
    },
    { 
      id: "liability-limitation", 
      title: "10. Limitation of Liability",
      content: "Our liability is limited. We are not liable for any indirect, incidental, or consequential damages arising from your use of the Service.",
      icon: <AlertTriangle size={20} />
    },
    { 
      id: "indemnification", 
      title: "11. Indemnification",
      content: "You agree to indemnify and hold us harmless from any claims arising out of your violation of these Terms.",
      icon: <Handshake size={20} />
    },
    { 
      id: "term-termination", 
      title: "12. Term and Termination",
      content: "These Terms are effective until terminated. You may terminate your account at any time. We may suspend or terminate your account for any breach.",
      icon: <FileText size={20} />
    },
    { 
      id: "governing-law", 
      title: "13. Governing Law",
      content: "These Terms are governed by the laws of our jurisdiction. Any disputes will be resolved in the designated courts.",
      icon: <Globe size={20} />
    },
     {
      id: "changes-to-terms",
      title: "14. Changes to Terms",
      content: "We reserve the right to modify these Terms at any time. We will notify you of any changes through email or an in-app notification. Your continued use of the service after such changes constitutes your acceptance of the new Terms.",
      icon: <Info size={20} />
    },
    {
      id: "contact",
      title: "15. Contact Information",
      content: "For any questions, security reports, or IP complaints, please contact us at the email provided on our contact page.",
      icon: <Mail size={20} />
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
