
'use client';
import { LegalLayout } from '@/components/layout/legal-layout';
import { Book, CheckCircle, UserCheck, ShieldOff, Server, BrainCircuit, ShieldCheck, AlertTriangle, FileText, Globe, Link as LinkIcon, Handshake, Info, Mail } from 'lucide-react';


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
      id: "changes-to-terms",
      title: "3. Changes to the Terms",
      content: "We reserve the right to modify these Terms at any time. We will notify you of any changes through email or an in-app notification. Your continued use of the service after such changes constitutes your acceptance of the new Terms.",
      icon: <Info size={20} />
    },
    { 
      id: "account-responsibilities", 
      title: "4. Account Registration & Responsibilities",
      content: "You must provide accurate information when creating your account. You are responsible for all activities that occur under it and must keep your password confidential.",
      icon: <UserCheck size={20} />
    },
    { 
      id: "acceptable-use", 
      title: "5. Acceptable Use",
      content: "You agree not to engage in illegal activities, infringe on intellectual property rights, reverse-engineer the Service, or upload malicious content.",
      icon: <ShieldOff size={20} />
    },
    { 
      id: "service-description", 
      title: "6. Service Description & Scope",
      content: "Our Service provides tools for dataset uploading, profiling, model training, testing, and management. Features are provided “as-is”.",
      icon: <Server size={20} />
    },
    { 
      id: "data-ip", 
      title: "7. Data, Content & Intellectual Property",
      content: "You retain ownership of your data. You grant us a limited license to process it to provide the Service. We retain all rights to our platform.",
      icon: <FileText size={20} />
    },
    { 
      id: "model-disclaimers", 
      title: "8. Model Outputs & AI Disclaimers",
      content: "AI-generated insights and model outputs are for informational purposes and may contain errors. You are responsible for validating all outputs before use.",
      icon: <BrainCircuit size={20} />
    },
    {
      id: "confidentiality",
      title: "9. Confidentiality",
      content: "Both parties agree to treat all non-public information received from the other as confidential and not to disclose it to any third party without prior written consent, except as required by law.",
      icon: <ShieldCheck size={20} />
    },
    { 
      id: "warranties-disclaimers", 
      title: "10. Warranties & Disclaimers",
      content: "The Service is provided “as is” and “as available” without any warranties, express or implied.",
      icon: <AlertTriangle size={20} />
    },
    { 
      id: "liability-limitation", 
      title: "11. Limitation of Liability",
      content: "Our liability is limited. We are not liable for any indirect, incidental, or consequential damages arising from your use of the Service.",
      icon: <AlertTriangle size={20} />
    },
    { 
      id: "indemnification", 
      title: "12. Indemnification",
      content: "You agree to indemnify and hold us harmless from any claims arising out of your violation of these Terms.",
      icon: <Handshake size={20} />
    },
    { 
      id: "term-termination", 
      title: "13. Term and Termination",
      content: "These Terms are effective until terminated. You may terminate your account at any time. We may suspend or terminate your account for any breach.",
      icon: <FileText size={20} />
    },
     {
      id: "data-retention-export",
      title: "14. Data Retention & Export",
      content: "We retain your data as long as your account is active or as needed for legal compliance. You can export your data at any time. For more details, see our Privacy Policy.",
      icon: <FileText size={20} />
    },
    {
      id: "third-party-services",
      title: "15. Third-Party Services & Links",
      content: "Our Service may integrate with third-party services. We are not responsible for the practices of these third parties, and their own terms and policies will govern their use.",
      icon: <LinkIcon size={20} />
    },
    { 
      id: "governing-law", 
      title: "16. Governing Law & Dispute Resolution",
      content: "These Terms are governed by the laws of our jurisdiction. Any disputes will be resolved in the designated courts.",
      icon: <Globe size={20} />
    },
    {
      id: "miscellaneous",
      title: "17. Miscellaneous",
      content: "This document constitutes the entire agreement. If any part is found unenforceable, the rest remains in effect. We may assign our rights and obligations under these terms.",
      icon: <Info size={20} />
    },
    {
      id: "contact",
      title: "18. Contact & Reporting",
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
