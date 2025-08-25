
'use client';
import { LegalLayout } from '@/components/layout/legal-layout';

export default function PrivacyPage() {

  const sections = [
    {
      id: "scope",
      title: "1. Scope & Applicability",
      content: "This policy applies to all services offered by ForgeFlow Pilot, including our website, platform, and APIs. We act as the data controller for your account information and a data processor for the content you upload."
    },
    {
      id: "definitions",
      title: "2. Definitions",
      content: "Key terms include \"Personal Data\" (information relating to an identified or identifiable person), \"Processing\" (any operation performed on personal data), \"Controller\" (determines the purposes and means of processing), and \"Processor\" (processes data on behalf of the controller)."
    },
    {
      id: "info-we-collect",
      title: "3. Information We Collect",
      content: "We collect account information (name, email), user content (datasets, model artifacts), usage data (IP address, logs), and communications. We use essential and analytics cookies to operate and improve the service."
    },
    {
      id: "how-we-use-info",
      title: "4. How We Use Your Information",
      content: "We use your information to provide and improve our services, communicate with you, ensure security, and comply with legal obligations. Our legal basis for processing is typically the performance of our contract with you or our legitimate interests."
    },
    {
      id: "user-provided-data",
      title: "5. Processing of User-Provided Data",
      content: "As a user, you are the controller of the data you upload. We act as a processor, using your datasets solely to perform the services you request, such as profiling and model training. We will never use your data for our own model improvement without your explicit consent."
    },
    {
      id: "sharing-disclosure",
      title: "6. Sharing & Disclosure",
      content: "We share data with trusted third-party processors like cloud infrastructure providers to operate our Service. We may also disclose data if required by law."
    },
    {
      id: "international-transfers",
      title: "7. International Data Transfers",
      content: "Your data may be transferred and stored in jurisdictions outside your own. We use legal safeguards like Standard Contractual Clauses to protect your data during such transfers."
    },
    {
      id: "data-retention",
      title: "8. Data Retention",
      content: "We retain your data for as long as your account is active or as needed to comply with our legal obligations. You can request data deletion at any time."
    },
    {
      id: "user-rights",
      title: "9. User Rights & How to Exercise Them",
      content: "You have the right to access, rectify, or erase your personal data, as well as restrict or object to its processing. To exercise these rights, please contact us via the email on our contact page."
    },
    {
      id: "data-security",
      title: "10. Data Security",
      content: "We implement robust security measures, including encryption and access controls, to protect your data. However, no system is perfectly secure."
    },
    {
      id: "cookies-tracking",
      title: "11. Cookies & Tracking",
      content: "We use cookies for essential functionality and analytics. You can manage your cookie preferences through your browser settings or our consent manager."
    },
    {
      id: "minors",
      title: "12. Minors",
      content: "Our service is not intended for individuals under the minimum legal age in their jurisdiction. We do not knowingly collect data from children."
    },
    {
      id: "data-processors",
      title: "15. Data Processors & Subprocessors",
      content: "A list of our subprocessors is available upon request. We will notify you of any changes to this list."
    },
    {
      id: "data-breach",
      title: "16. Data Breach Notification",
      content: "In the event of a data breach, we will notify affected users and relevant authorities as required by law."
    },
    {
      id: "contact-complaints",
      title: "18. Contact & Complaints",
      content: "If you have any questions or complaints about our privacy practices, please contact our Data Protection Officer at the email address on our contact page."
    },
  ];

  return (
    <LegalLayout
      title="Privacy Policy"
      lastUpdated="2023-10-27"
      sections={sections}
    />
  );
}
