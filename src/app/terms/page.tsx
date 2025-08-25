
'use client';
import { useEffect } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FileText, UserCheck, ShieldAlert, Database, BrainCircuit, ShieldCheck, Scale, Handshake, FileClock, Users, Server, Globe, Ban } from 'lucide-react';

export default function TermsPage() {
    
  const sections = [
    { 
      id: "definitions", 
      title: "1. Definitions",
      icon: <FileText className="h-5 w-5 text-primary" />,
      content: "Key terms include \"Service\", \"Platform\", \"User\", \"Account\", \"Content\", \"Artifacts\", and \"We/Us/Company\"."
    },
    { 
      id: "acceptance-of-terms", 
      title: "2. Acceptance of Terms",
      icon: <UserCheck className="h-5 w-5 text-primary" />,
      content: "By creating an account or using the Service, you confirm that you accept these Terms of Service. You must be of legal age to enter into this agreement."
    },
    { 
      id: "account-responsibilities", 
      title: "4. Account Registration & Responsibilities",
      icon: <Users className="h-5 w-5 text-primary" />,
      content: "You must provide accurate information when creating your account. You are responsible for all activities that occur under it and must keep your password confidential."
    },
    { 
      id: "acceptable-use", 
      title: "5. Acceptable Use",
      icon: <ShieldCheck className="h-5 w-5 text-primary" />,
      content: "You agree not to engage in illegal activities, infringe on intellectual property rights, reverse-engineer the Service, or upload malicious content."
    },
    { 
      id: "service-description", 
      title: "6. Service Description & Scope",
      icon: <Server className="h-5 w-5 text-primary" />,
      content: "Our Service provides tools for dataset uploading, profiling, model training, testing, and management. Features are provided “as-is”."
    },
    { 
      id: "data-ip", 
      title: "7. Data, Content & Intellectual Property",
      icon: <Database className="h-5 w-5 text-primary" />,
      content: "You retain ownership of your data. You grant us a limited license to process it to provide the Service. We retain all rights to our platform."
    },
    { 
      id: "model-disclaimers", 
      title: "8. Model Outputs & AI Disclaimers",
      icon: <BrainCircuit className="h-5 w-5 text-primary" />,
      content: "AI-generated insights and model outputs are for informational purposes and may contain errors. You are responsible for validating all outputs before use."
    },
    { 
      id: "warranties-disclaimers", 
      title: "10. Warranties & Disclaimers",
      icon: <ShieldAlert className="h-5 w-5 text-primary" />,
      content: "The Service is provided “as is” and “as available” without any warranties, express or implied."
    },
    { 
      id: "liability-limitation", 
      title: "11. Limitation of Liability",
      icon: <Ban className="h-5 w-5 text-primary" />,
      content: "Our liability is limited. We are not liable for any indirect, incidental, or consequential damages arising from your use of the Service."
    },
    { 
      id: "indemnification", 
      title: "12. Indemnification",
      icon: <Handshake className="h-5 w-5 text-primary" />,
      content: "You agree to indemnify and hold us harmless from any claims arising out of your violation of these Terms."
    },
    { 
      id: "term-termination", 
      title: "13. Term and Termination",
      icon: <FileClock className="h-5 w-5 text-primary" />,
      content: "These Terms are effective until terminated. You may terminate your account at any time. We may suspend or terminate your account for any breach."
    },
    { 
      id: "governing-law", 
      title: "16. Governing Law & Dispute Resolution",
      icon: <Scale className="h-5 w-5 text-primary" />,
      content: "These Terms are governed by the laws of our jurisdiction. Any disputes will be resolved in the designated courts."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
           <Card className="bg-card shadow-2xl rounded-xl border-border/50">
             <CardHeader className="p-6 md:p-8 text-center">
               <CardTitle className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground">Terms of Service</CardTitle>
               <CardDescription className="text-muted-foreground pt-2">
                Last updated: 2023-10-27
              </CardDescription>
              <div className="mt-4 bg-secondary/50 border border-border rounded-lg p-4 text-sm text-center max-w-2xl mx-auto">
                 <p className="text-card-foreground">These Terms govern your use of ForgeFlow Pilot. By creating an account or using our services you agree to these Terms. If you do not agree, do not use the service.</p>
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
