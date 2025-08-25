
'use client';
import { useEffect } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Scale, Fingerprint, Database, Rocket, Globe, ShieldCheck, FileClock, Users, Lock, Cookie, CircleAlert, Mail, BookUser, Server, BellRing } from 'lucide-react';


export default function PrivacyPage() {

  const sections = [
    { 
      id: "scope", 
      title: "1. Scope & Applicability",
      icon: <Scale className="h-5 w-5 text-primary" />,
      content: "This policy applies to all services offered by ForgeFlow Pilot, including our website, platform, and APIs. We act as the data controller for your account information and a data processor for the content you upload."
    },
    { 
      id: "definitions", 
      title: "2. Definitions",
      icon: <BookUser className="h-5 w-5 text-primary" />,
      content: "Key terms include \"Personal Data\" (information relating to an identified or identifiable person), \"Processing\" (any operation performed on personal data), \"Controller\" (determines the purposes and means of processing), and \"Processor\" (processes data on behalf of the controller)."
    },
    { 
      id: "info-we-collect", 
      title: "3. Information We Collect",
      icon: <Database className="h-5 w-5 text-primary" />,
      content: "We collect account information (name, email), user content (datasets, model artifacts), usage data (IP address, logs), and communications. We use essential and analytics cookies to operate and improve the service."
    },
    { 
      id: "how-we-use-info", 
      title: "4. How We Use Your Information",
      icon: <Rocket className="h-5 w-5 text-primary" />,
      content: "We use your information to provide and improve our services, communicate with you, ensure security, and comply with legal obligations. Our legal basis for processing is typically the performance of our contract with you or our legitimate interests."
    },
    { 
      id: "user-provided-data", 
      title: "5. Processing of User-Provided Data",
      icon: <Users className="h-5 w-5 text-primary" />,
      content: "As a user, you are the controller of the data you upload. We act as a processor, using your datasets solely to perform the services you request, such as profiling and model training. We will never use your data for our own model improvement without your explicit consent."
    },
    { 
      id: "sharing-disclosure", 
      title: "6. Sharing & Disclosure",
      icon: <Users className="h-5 w-5 text-primary" />,
      content: "We share data with trusted third-party processors like cloud infrastructure providers to operate our Service. We may also disclose data if required by law."
    },
    { 
      id: "international-transfers", 
      title: "7. International Data Transfers",
      icon: <Globe className="h-5 w-5 text-primary" />,
      content: "Your data may be transferred and stored in jurisdictions outside your own. We use legal safeguards like Standard Contractual Clauses to protect your data during such transfers."
    },
    { 
      id: "data-retention", 
      title: "8. Data Retention",
      icon: <FileClock className="h-5 w-5 text-primary" />,
      content: "We retain your data for as long as your account is active or as needed to comply with our legal obligations. You can request data deletion at any time."
    },
    { 
      id: "user-rights", 
      title: "9. User Rights & How to Exercise Them",
      icon: <Fingerprint className="h-5 w-5 text-primary" />,
      content: "You have the right to access, rectify, or erase your personal data, as well as restrict or object to its processing. To exercise these rights, please contact us via the email on our contact page."
    },
    { 
      id: "data-security", 
      title: "10. Data Security",
      icon: <ShieldCheck className="h-5 w-5 text-primary" />,
      content: "We implement robust security measures, including encryption and access controls, to protect your data. However, no system is perfectly secure."
    },
    { 
      id: "cookies-tracking", 
      title: "11. Cookies & Tracking",
      icon: <Cookie className="h-5 w-5 text-primary" />,
      content: "We use cookies for essential functionality and analytics. You can manage your cookie preferences through your browser settings or our consent manager."
    },
    { 
      id: "minors", 
      title: "12. Minors",
      icon: <CircleAlert className="h-5 w-5 text-primary" />,
      content: "Our service is not intended for individuals under the minimum legal age in their jurisdiction. We do not knowingly collect data from children."
    },
     { 
      id: "data-processors", 
      title: "15. Data Processors & Subprocessors",
      icon: <Server className="h-5 w-5 text-primary" />,
      content: "A list of our subprocessors is available upon request. We will notify you of any changes to this list."
    },
    { 
      id: "data-breach", 
      title: "16. Data Breach Notification",
      icon: <BellRing className="h-5 w-5 text-primary" />,
      content: "In the event of a data breach, we will notify affected users and relevant authorities as required by law."
    },
    { 
      id: "contact-complaints", 
      title: "18. Contact & Complaints",
      icon: <Mail className="h-5 w-5 text-primary" />,
      content: "If you have any questions or complaints about our privacy practices, please contact our Data Protection Officer at the email address on our contact page."
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <Card className="bg-card shadow-2xl rounded-xl border-border/50">
            <CardHeader className="p-6 md:p-8 text-center">
               <CardTitle className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground">Privacy Policy</CardTitle>
              <CardDescription className="text-muted-foreground pt-2">
                Last updated: 2023-10-27
              </CardDescription>
              <div className="mt-4 bg-secondary/50 border border-border rounded-lg p-4 text-sm text-center max-w-2xl mx-auto">
                 <p className="text-card-foreground">We collect and process data necessary to provide ForgeFlow Pilot. You control the datasets you upload. This page explains what we collect, why, and how you can manage it.</p>
              </div>
            </CardHeader>
            <CardContent className="p-6 md:p-8">
              <Accordion type="single" collapsible className="w-full">
                {sections.map((section, index) => (
                   <AccordionItem value={`item-${index}`} key={section.id}>
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                        <div className="flex items-center gap-4">
                            {section.icon}
                            <span>{section.title}</span>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground pt-2 pl-12">
                        {section.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
