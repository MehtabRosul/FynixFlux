
'use client';
import { LegalLayout } from '@/components/layout/legal-layout';
import { Book, User, Database, Globe, Archive, Shield, Cookie, UserX, UserCheck, Bell, Info, Mail, Users, Server } from 'lucide-react';


export default function PrivacyPage() {

  const sections = [
    {
      id: "scope",
      title: "1. Scope & Applicability",
      summary: "This policy explains what information we collect and why, how we use it, and how to review and update it.",
      content: "This policy applies to all services offered by ForgeFlow Pilot, including our website, platform, and APIs. We act as the data controller for your account information and a data processor for the content you upload.",
      icon: <Book size={20} />
    },
    {
      id: "info-we-collect",
      title: "2. Information We Collect",
      summary: "We collect basic account information and data you provide to make our services work for you.",
      content: "We collect account information (name, email), user content (datasets, model artifacts), usage data (IP address, logs), and communications. We use essential and analytics cookies to operate and improve the service.",
      icon: <Database size={20} />
    },
    {
      id: "how-we-use-info",
      title: "3. How We Use Information",
      summary: "We use your data to provide, improve, and secure our services.",
      content: "We use your information to provide and improve our services, communicate with you, ensure security, and comply with legal obligations. Our legal basis for processing is typically the performance of our contract with you or our legitimate interests.",
      icon: <Info size={20} />
    },
    {
      id: "user-provided-data",
      title: "4. Your Uploaded Data",
      summary: "You own your data. We only use it to provide the services you request.",
      content: "As a user, you are the controller of the data you upload. We act as a processor, using your datasets solely to perform the services you request, such as profiling and model training. We will never use your data for our own model improvement without your explicit consent.",
      icon: <UserCheck size={20} />
    },
    {
      id: "sharing-disclosure",
      title: "5. Sharing & Disclosure",
      summary: "We only share your information with your consent or for legal reasons.",
      content: "We share data with trusted third-party processors like cloud infrastructure providers to operate our Service. We may also disclose data if required by law.",
      icon: <Users size={20} />
    },
    {
      id: "international-transfers",
      title: "6. International Transfers",
      summary: "Your data may be processed on servers located outside of the country where you live.",
      content: "Your data may be transferred and stored in jurisdictions outside your own. We use legal safeguards like Standard Contractual Clauses to protect your data during such transfers.",
      icon: <Globe size={20} />
    },
    {
      id: "data-retention",
      title: "7. Data Retention",
      summary: "We keep your data as long as your account is active or as needed to provide you services.",
      content: "We retain your data for as long as your account is active or as needed to comply with our legal obligations. You can request data deletion at any time.",
      icon: <Archive size={20} />
    },
    {
      id: "user-rights",
      title: "8. Your Rights",
      summary: "You have rights over your personal data, including access, correction, and deletion.",
      content: "You have the right to access, rectify, or erase your personal data, as well as restrict or object to its processing. To exercise these rights, please contact us via the email on our contact page.",
      icon: <UserCheck size={20} />
    },
    {
      id: "data-security",
      title: "9. Data Security",
      summary: "We work hard to protect your data from unauthorized access.",
      content: "We implement robust security measures, including encryption and access controls, to protect your data. However, no system is perfectly secure.",
      icon: <Shield size={20} />
    },
    {
      id: "cookies-tracking",
      title: "10. Cookies & Tracking",
      summary: "We use cookies to operate and improve our services.",
      content: "We use cookies for essential functionality and analytics. You can manage your cookie preferences through your browser settings or our consent manager.",
      icon: <Cookie size={20} />
    },
    {
      id: "minors",
      title: "11. Minors",
      summary: "Our service is not for children under the age of 13.",
      content: "Our service is not intended for individuals under the minimum legal age in their jurisdiction. We do not knowingly collect data from children.",
      icon: <UserX size={20} />
    },
     {
      id: "marketing-communications",
      title: "12. Marketing Communications",
      summary: "You can opt-out of marketing communications at any time.",
      content: "You can opt-out of receiving promotional communications from us at any time by following the unsubscribe link in our emails or contacting us directly.",
      icon: <Mail size={20} />
    },
    {
      id: "data-breach",
      title: "13. Data Breach Notification",
      summary: "We will notify you if a data breach occurs that is likely to result in a high risk to your rights.",
      content: "In the event of a data breach, we will notify affected users and relevant authorities as required by law.",
      icon: <Bell size={20} />
    },
    {
      id: "policy-changes",
      title: "14. Changes to the Policy",
      summary: "We may change this policy, and we’ll notify you of significant updates.",
      content: "We may update this Privacy Policy from time to time. We will notify you of any significant changes and update the 'last updated' date at the top of this policy.",
      icon: <Info size={20} />
    }
  ];

  return (
    <LegalLayout
      title="Privacy Policy"
      lastUpdated="August 2025"
      sections={sections}
    />
  );
}
