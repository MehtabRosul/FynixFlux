
'use client';
import { useEffect } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Copy } from 'lucide-react';
import { useToast } from "@/hooks/use-toast"

export default function PrivacyPage() {
  const { toast } = useToast()

  useEffect(() => {
    document.body.classList.add('legal-page');
    return () => {
      document.body.classList.remove('legal-page');
    };
  }, []);
  
  const lastUpdated = "2023-10-27";

  const copyToClipboard = (id: string) => {
    const url = `${window.location.href}#${id}`;
    navigator.clipboard.writeText(url);
    toast({
        title: "Link Copied",
        description: "The link to this section has been copied to your clipboard.",
      })
  }

  const sections = [
    { id: "scope", title: "1. Scope & Applicability" },
    { id: "definitions", title: "2. Definitions" },
    { id: "info-we-collect", title: "3. Information We Collect" },
    { id: "how-we-use-info", title: "4. How We Use Your Information" },
    { id: "user-provided-data", title: "5. Processing of User-Provided Data" },
    { id: "sharing-disclosure", title: "6. Sharing & Disclosure" },
    { id: "international-transfers", title: "7. International Data Transfers" },
    { id: "data-retention", title: "8. Data Retention" },
    { id: "user-rights", title: "9. User Rights & How to Exercise Them" },
    { id: "data-security", title: "10. Data Security" },
    { id: "cookies-tracking", title: "11. Cookies & Tracking" },
    { id: "minors", title: "12. Minors" },
    { id: "marketing-comms", title: "13. Marketing Communications" },
    { id: "automated-decision-making", title: "14. Automated Decision Making & Profiling" },
    { id: "data-processors", title: "15. Data Processors & Subprocessors" },
    { id: "data-breach", title: "16. Data Breach Notification" },
    { id: "policy-changes", title: "17. Changes to the Policy" },
    { id: "contact-complaints", title: "18. Contact & Complaints" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <Card className="bg-card shadow-lg rounded-lg">
            <CardHeader className="p-6 md:p-8 border-b">
               <CardTitle className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground">Privacy Policy</CardTitle>
              <CardDescription className="text-muted-foreground pt-2">
                Effective date: {lastUpdated} — Last updated: {lastUpdated}
              </CardDescription>
              <div className="mt-4 bg-secondary border border-border rounded-lg p-4 text-sm">
                 <p className="text-card-foreground">We collect and process data necessary to provide ForgeFlow Pilot. You control the datasets you upload. This page explains what we collect, why, and how you can manage it.</p>
              </div>
            </CardHeader>
            <CardContent className="p-6 md:p-8 prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-h2:font-semibold prose-h2:text-2xl prose-h2:tracking-tight prose-h2:mb-4 prose-h2:mt-10 prose-h2:border-b prose-h2:pb-2 first:prose-h2:mt-0 prose-p:leading-relaxed prose-p:text-foreground/80 prose-li:text-foreground/80 prose-a:text-primary hover:prose-a:underline">
              
              <div id="scope" className="scroll-mt-20">
                <h2 className="group flex items-center">
                  1. Scope & Applicability
                  <button onClick={() => copyToClipboard('scope')} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Copy className="h-4 w-4 text-muted-foreground" />
                  </button>
                </h2>
                <p>This policy applies to all services offered by ForgeFlow Pilot, including our website, platform, and APIs. We act as the data controller for your account information and a data processor for the content you upload.</p>
              </div>

              <div id="definitions" className="scroll-mt-20">
                 <h2 className="group flex items-center">
                  2. Definitions
                  <button onClick={() => copyToClipboard('definitions')} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Copy className="h-4 w-4 text-muted-foreground" />
                  </button>
                </h2>
                <p>Key terms include "Personal Data" (information relating to an identified or identifiable person), "Processing" (any operation performed on personal data), "Controller" (determines the purposes and means of processing), and "Processor" (processes data on behalf of the controller).</p>
              </div>

              <div id="info-we-collect" className="scroll-mt-20">
                <h2 className="group flex items-center">
                  3. Information We Collect
                  <button onClick={() => copyToClipboard('info-we-collect')} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Copy className="h-4 w-4 text-muted-foreground" />
                  </button>
                </h2>
                <ul>
                  <li><strong>Account Information:</strong> Name, email address, and organization.</li>
                  <li><strong>User Content:</strong> Datasets, project names, and model artifacts you provide.</li>
                  <li><strong>Usage Data:</strong> IP address, browser type, device information, and logs of your activity.</li>
                  <li><strong>Cookies & Tracking:</strong> We use essential and analytics cookies to operate and improve the service.</li>
                  <li><strong>Communications:</strong> Any information you send us, such as support requests.</li>
                </ul>
              </div>

              <div id="how-we-use-info" className="scroll-mt-20">
                <h2 className="group flex items-center">
                  4. How We Use Your Information
                   <button onClick={() => copyToClipboard('how-we-use-info')} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Copy className="h-4 w-4 text-muted-foreground" />
                  </button>
                </h2>
                <p>We use your information to provide and improve our services, communicate with you, ensure security, and comply with legal obligations. Our legal basis for processing is typically the performance of our contract with you or our legitimate interests.</p>
              </div>
              
              <div id="user-provided-data" className="scroll-mt-20">
                 <h2 className="group flex items-center">
                  5. Processing of User-Provided Data
                   <button onClick={() => copyToClipboard('user-provided-data')} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Copy className="h-4 w-4 text-muted-foreground" />
                  </button>
                </h2>
                <p>As a user, you are the controller of the data you upload. We act as a processor, using your datasets solely to perform the services you request, such as profiling and model training. We will never use your data for our own model improvement without your explicit consent.</p>
              </div>

              <div id="sharing-disclosure" className="scroll-mt-20">
                <h2 className="group flex items-center">
                  6. Sharing & Disclosure
                  <button onClick={() => copyToClipboard('sharing-disclosure')} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Copy className="h-4 w-4 text-muted-foreground" />
                  </button>
                </h2>
                <p>We share data with trusted third-party processors like cloud infrastructure providers to operate our Service. We may also disclose data if required by law.</p>
              </div>

              <div id="international-transfers" className="scroll-mt-20">
                <h2 className="group flex items-center">
                  7. International Data Transfers
                  <button onClick={() => copyToClipboard('international-transfers')} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Copy className="h-4 w-4 text-muted-foreground" />
                  </button>
                </h2>
                <p>Your data may be transferred and stored in jurisdictions outside your own. We use legal safeguards like Standard Contractual Clauses to protect your data during such transfers.</p>
              </div>

              <div id="data-retention" className="scroll-mt-20">
                <h2 className="group flex items-center">
                  8. Data Retention
                   <button onClick={() => copyToClipboard('data-retention')} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Copy className="h-4 w-4 text-muted-foreground" />
                  </button>
                </h2>
                <p>We retain your data for as long as your account is active or as needed to comply with our legal obligations. You can request data deletion at any time.</p>
              </div>

              <div id="user-rights" className="scroll-mt-20">
                <h2 className="group flex items-center">
                  9. User Rights & How to Exercise Them
                  <button onClick={() => copyToClipboard('user-rights')} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Copy className="h-4 w-4 text-muted-foreground" />
                  </button>
                </h2>
                <p>You have the right to access, rectify, or erase your personal data, as well as restrict or object to its processing. To exercise these rights, please contact us via the email on our contact page.</p>
              </div>

              <div id="data-security" className="scroll-mt-20">
                <h2 className="group flex items-center">
                  10. Data Security
                   <button onClick={() => copyToClipboard('data-security')} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Copy className="h-4 w-4 text-muted-foreground" />
                  </button>
                </h2>
                <p>We implement robust security measures, including encryption and access controls, to protect your data. However, no system is perfectly secure.</p>
              </div>

              <div id="cookies-tracking" className="scroll-mt-20">
                <h2 className="group flex items-center">
                  11. Cookies & Tracking
                   <button onClick={() => copyToClipboard('cookies-tracking')} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Copy className="h-4 w-4 text-muted-foreground" />
                  </button>
                </h2>
                <p>We use cookies for essential functionality and analytics. You can manage your cookie preferences through your browser settings or our consent manager.</p>
              </div>

              <div id="minors" className="scroll-mt-20">
                <h2 className="group flex items-center">
                  12. Minors
                   <button onClick={() => copyToClipboard('minors')} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Copy className="h-4 w-4 text-muted-foreground" />
                  </button>
                </h2>
                <p>Our service is not intended for individuals under the minimum legal age in their jurisdiction. We do not knowingly collect data from children.</p>
              </div>
              
              <div id="marketing-comms" className="scroll-mt-20">
                <h2 className="group flex items-center">
                  13. Marketing Communications
                   <button onClick={() => copyToClipboard('marketing-comms')} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Copy className="h-4 w-4 text-muted-foreground" />
                  </button>
                </h2>
                <p>We may send you promotional emails, which you can opt-out of at any time by clicking the "unsubscribe" link.</p>
              </div>

              <div id="automated-decision-making" className="scroll-mt-20">
                <h2 className="group flex items-center">
                  14. Automated Decision Making & Profiling
                   <button onClick={() => copyToClipboard('automated-decision-making')} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Copy className="h-4 w-4 text-muted-foreground" />
                  </button>
                </h2>
                <p>We may use automated processes for features like model suggestions. You have rights regarding such automated decisions, which you can exercise by contacting us.</p>
              </div>
              
              <div id="data-processors" className="scroll-mt-20">
                <h2 className="group flex items-center">
                  15. Data Processors & Subprocessors
                  <button onClick={() => copyToClipboard('data-processors')} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Copy className="h-4 w-4 text-muted-foreground" />
                  </button>
                </h2>
                <p>A list of our subprocessors is available upon request. We will notify you of any changes to this list.</p>
              </div>
              
              <div id="data-breach" className="scroll-mt-20">
                <h2 className="group flex items-center">
                  16. Data Breach Notification
                   <button onClick={() => copyToClipboard('data-breach')} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Copy className="h-4 w-4 text-muted-foreground" />
                  </button>
                </h2>
                <p>In the event of a data breach, we will notify affected users and relevant authorities as required by law.</p>
              </div>
              
              <div id="policy-changes" className="scroll-mt-20">
                <h2 className="group flex items-center">
                  17. Changes to the Policy
                  <button onClick={() => copyToClipboard('policy-changes')} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Copy className="h-4 w-4 text-muted-foreground" />
                  </button>
                </h2>
                <p>We may update this policy from time to time. We will notify you of significant changes. Continued use of the Service constitutes acceptance of the new policy.</p>
              </div>

              <div id="contact-complaints" className="scroll-mt-20">
                <h2 className="group flex items-center">
                  18. Contact & Complaints
                  <button onClick={() => copyToClipboard('contact-complaints')} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Copy className="h-4 w-4 text-muted-foreground" />
                  </button>
                </h2>
                <p>If you have any questions or complaints about our privacy practices, please contact our Data Protection Officer at the email address on our contact page.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
