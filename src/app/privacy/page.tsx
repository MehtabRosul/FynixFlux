
'use client';
import { LegalLayout } from '@/components/layout/legal-layout';
import { Book, User, Database, Globe, Archive, Shield, Cookie, UserX, UserCheck, Bell, Info, Mail, Users, Server, Bot } from 'lucide-react';
import { PageLoader } from '@/components/ui/page-loader';
import { useState, useEffect } from 'react';


export default function PrivacyPage() {
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isPageLoading) {
    return <PageLoader message="Loading Privacy Policy..." showProgress={true} progress={70} />;
  }

  const sections = [
    {
      id: "scope",
      title: "1. Scope & Applicability",
      summary: "No accounts. No personal data collection.",
      content: "ForgeFlow Pilot (demo) does not provide user accounts and does not collect or store personal data such as names, emails, or profile information.",
      icon: <Book size={20} />
    },
    {
      id: "processing",
      title: "2. Data Processing Model",
      summary: "Uploads are processed locally in your browser.",
      content: "Demo uploads (e.g., CSV preview) are parsed client‑side in your browser for display only. No datasets or personal information are transmitted to or persisted on a server by default.",
      icon: <Database size={20} />
    },
    {
      id: "telemetry",
      title: "3. Cookies & Tracking",
      summary: "No analytics cookies or tracking pixels.",
      content: "We do not use analytics, marketing cookies, or tracking pixels in this demo experience.",
      icon: <Cookie size={20} />
    },
    {
      id: "communications",
      title: "4. Communications",
      summary: "Contact links only.",
      content: "Links on the contact page open your own email or LinkedIn client. We do not collect or store those details on this site.",
      icon: <Mail size={20} />
    },
    {
      id: "changes",
      title: "5. Changes to the Policy",
      summary: "If a backend is added later, this page will be updated.",
      content: "If in the future we add optional server features (e.g., accounts, persistence), we will update this policy before such features go live.",
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
