
'use client';
import { useEffect } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Copy } from 'lucide-react';
import { useToast } from "@/hooks/use-toast"

export default function TermsPage() {
    const { toast } = useToast()
    const lastUpdated = "2023-10-27";

    useEffect(() => {
        document.body.classList.add('legal-page');
        return () => {
          document.body.classList.remove('legal-page');
        };
      }, []);

      const copyToClipboard = (id: string) => {
        const url = `${window.location.href}#${id}`;
        navigator.clipboard.writeText(url);
        toast({
            title: "Link Copied",
            description: "The link to this section has been copied to your clipboard.",
          })
      }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
           <Card className="bg-card shadow-lg rounded-lg">
             <CardHeader className="p-6 md:p-8 border-b">
               <CardTitle className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground">Terms of Service</CardTitle>
               <CardDescription className="text-muted-foreground pt-2">
                Effective date: {lastUpdated} — Last updated: {lastUpdated}
              </CardDescription>
              <div className="mt-4 bg-secondary border border-border rounded-lg p-4 text-sm">
                 <p className="text-card-foreground">These Terms govern your use of ForgeFlow Pilot. By creating an account or using our services you agree to these Terms. If you do not agree, do not use the service.</p>
              </div>
            </CardHeader>
            <CardContent className="p-6 md:p-8 prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-h2:font-semibold prose-h2:text-2xl prose-h2:tracking-tight prose-h2:mb-4 prose-h2:mt-10 prose-h2:border-b prose-h2:pb-2 first:prose-h2:mt-0 prose-p:leading-relaxed prose-p:text-foreground/80 prose-li:text-foreground/80 prose-a:text-primary hover:prose-a:underline">

            <div id="definitions" className="scroll-mt-20">
              <h2 className="group flex items-center">
                1. Definitions
                 <button onClick={() => copyToClipboard('definitions')} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Copy className="h-4 w-4 text-muted-foreground" />
                  </button>
              </h2>
              <p>Key terms used in this document:</p>
              <ul>
                <li><strong>Service/Platform:</strong> The ForgeFlow Pilot application, APIs, and related services.</li>
                <li><strong>User/You/Customer:</strong> Any individual or entity using the Service.</li>
                <li><strong>Account:</strong> Your registered account to access the Service.</li>
                <li><strong>Content:</strong> Any data, text, or files you upload, create, or process.</li>
                <li><strong>Artifacts/Model:</strong> Outputs generated from using the Service, such as trained models.</li>
                <li><strong>We/Us/Company:</strong> The provider of ForgeFlow Pilot.</li>
              </ul>
            </div>

            <div id="acceptance-of-terms" className="scroll-mt-20">
              <h2 className="group flex items-center">
                2. Acceptance of Terms
                <button onClick={() => copyToClipboard('acceptance-of-terms')} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Copy className="h-4 w-4 text-muted-foreground" />
                </button>
              </h2>
              <p>By creating an account, clicking “Sign Up,” or using the Service, you confirm that you accept these Terms of Service. You must be of legal age to enter into this agreement.</p>
            </div>

            <div id="changes-to-terms" className="scroll-mt-20">
              <h2 className="group flex items-center">
                3. Changes to the Terms
                 <button onClick={() => copyToClipboard('changes-to-terms')} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Copy className="h-4 w-4 text-muted-foreground" />
                  </button>
              </h2>
              <p>We reserve the right to modify these Terms. We will notify you of significant changes via email or in-app notification. Your continued use of the Service after changes become effective constitutes your acceptance.</p>
            </div>

            <div id="account-responsibilities" className="scroll-mt-20">
              <h2 className="group flex items-center">
                4. Account Registration & Responsibilities
                 <button onClick={() => copyToClipboard('account-responsibilities')} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Copy className="h-4 w-4 text-muted-foreground" />
                  </button>
              </h2>
              <p>You must provide accurate information when creating your account and are solely responsible for all activities that occur under it. You must keep your password confidential and notify us immediately of any unauthorized use.</p>
            </div>
            
            <div id="acceptable-use" className="scroll-mt-20">
              <h2 className="group flex items-center">
                5. Acceptable Use / User Conduct
                 <button onClick={() => copyToClipboard('acceptable-use')} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Copy className="h-4 w-4 text-muted-foreground" />
                  </button>
              </h2>
              <p>You agree not to engage in prohibited conduct, including illegal activities, intellectual property infringement, reverse-engineering the Service, or uploading malicious content. You are responsible for ensuring you have the necessary rights to any data you upload.</p>
            </div>

            <div id="service-description" className="scroll-mt-20">
              <h2 className="group flex items-center">
                6. Service Description & Scope
                 <button onClick={() => copyToClipboard('service-description')} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Copy className="h-4 w-4 text-muted-foreground" />
                  </button>
              </h2>
              <p>Our Service provides tools for dataset uploading, profiling, model training, testing, and management. Features are provided “as-is” and may be modified or discontinued at our discretion.</p>
            </div>

            <div id="data-ip" className="scroll-mt-20">
              <h2 className="group flex items-center">
                7. Data, Content & Intellectual Property
                 <button onClick={() => copyToClipboard('data-ip')} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Copy className="h-4 w-4 text-muted-foreground" />
                  </button>
              </h2>
              <p>You retain ownership of the data you upload. You grant us a limited license to process and store your data solely to provide the Service. We retain all rights to our platform, code, and trademarks.</p>
            </div>
            
            <div id="model-disclaimers" className="scroll-mt-20">
              <h2 className="group flex items-center">
                8. Model Outputs & AI Disclaimers
                 <button onClick={() => copyToClipboard('model-disclaimers')} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Copy className="h-4 w-4 text-muted-foreground" />
                  </button>
              </h2>
              <p>AI-generated insights and model outputs are for informational purposes and may contain errors. You are responsible for validating all outputs before use in any production or high-stakes environment.</p>
            </div>
            
            <div id="confidentiality" className="scroll-mt-20">
              <h2 className="group flex items-center">
                9. Confidentiality
                 <button onClick={() => copyToClipboard('confidentiality')} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Copy className="h-4 w-4 text-muted-foreground" />
                  </button>
              </h2>
              <p>Both parties agree to treat confidential information with care and not disclose it to third parties, except as required by law or to provide the Service.</p>
            </div>
            
            <div id="warranties-disclaimers" className="scroll-mt-20">
              <h2 className="group flex items-center">
                10. Warranties & Disclaimers
                 <button onClick={() => copyToClipboard('warranties-disclaimers')} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Copy className="h-4 w-4 text-muted-foreground" />
                  </button>
              </h2>
              <p>The Service is provided “as is” and “as available” without any warranties, express or implied. We disclaim all warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>
            </div>

            <div id="liability-limitation" className="scroll-mt-20">
              <h2 className="group flex items-center">
                11. Limitation of Liability
                 <button onClick={() => copyToClipboard('liability-limitation')} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Copy className="h-4 w-4 text-muted-foreground" />
                  </button>
              </h2>
              <p>To the fullest extent permitted by law, our liability is limited. We are not liable for any indirect, incidental, or consequential damages arising from your use of the Service.</p>
            </div>

            <div id="indemnification" className="scroll-mt-20">
              <h2 className="group flex items-center">
                12. Indemnification
                 <button onClick={() => copyToClipboard('indemnification')} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Copy className="h-4 w-4 text-muted-foreground" />
                  </button>
              </h2>
              <p>You agree to indemnify and hold us harmless from any claims arising out of your violation of these Terms or your use of the Service.</p>
            </div>

            <div id="term-termination" className="scroll-mt-20">
              <h2 className="group flex items-center">
                13. Term and Termination
                 <button onClick={() => copyToClipboard('term-termination')} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Copy className="h-4 w-4 text-muted-foreground" />
                  </button>
              </h2>
              <p>These Terms are effective until terminated. You may terminate your account at any time. We reserve the right to suspend or terminate your account for any breach of these Terms.</p>
            </div>

            <div id="data-retention-export" className="scroll-mt-20">
              <h2 className="group flex items-center">
                14. Data Retention & Export
                <button onClick={() => copyToClipboard('data-retention-export')} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Copy className="h-4 w-4 text-muted-foreground" />
                  </button>
              </h2>
              <p>Upon termination, you may have a limited window to export your data. We may retain certain data for legal or compliance reasons. Refer to our Privacy Policy for more details.</p>
            </div>
            
            <div id="third-party" className="scroll-mt-20">
              <h2 className="group flex items-center">
                15. Third-Party Services & Links
                 <button onClick={() => copyToClipboard('third-party')} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Copy className="h-4 w-4 text-muted-foreground" />
                  </button>
              </h2>
              <p>The Service may integrate with third-party services. We are not responsible for the practices of third parties, and their terms will govern your use of their services.</p>
            </div>

            <div id="governing-law" className="scroll-mt-20">
              <h2 className="group flex items-center">
                16. Governing Law & Dispute Resolution
                <button onClick={() => copyToClipboard('governing-law')} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Copy className="h-4 w-4 text-muted-foreground" />
                  </button>
              </h2>
              <p>These Terms are governed by the laws of our jurisdiction. Any disputes will be resolved in the designated courts or through arbitration as specified herein.</p>
            </div>

            <div id="miscellaneous" className="scroll-mt-20">
              <h2 className="group flex items-center">
                17. Miscellaneous
                <button onClick={() => copyToClipboard('miscellaneous')} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Copy className="h-4 w-4 text-muted-foreground" />
                  </button>
              </h2>
              <p>These Terms constitute the entire agreement between you and us. If any part is found to be unenforceable, the remaining parts will continue in full effect.</p>
            </div>

            <div id="contact-reporting" className="scroll-mt-20">
              <h2 className="group flex items-center">
                18. Contact & Reporting
                <button onClick={() => copyToClipboard('contact-reporting')} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Copy className="h-4 w-4 text-muted-foreground" />
                  </button>
              </h2>
              <p>For any questions, or to report abuse or security issues, please contact us at the email address provided on our contact page.</p>
            </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
