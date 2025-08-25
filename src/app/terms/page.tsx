
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export default function TermsPage() {
    const lastUpdated = "2023-10-27";
  return (
    <div className="flex flex-col min-h-screen bg-secondary/20">
      <Header />
      <main className="flex-grow py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
           <Card className="bg-card/80 backdrop-blur-sm">
             <CardHeader className="border-b">
               <CardTitle className="text-3xl lg:text-4xl font-bold tracking-tighter font-headline">Terms of Service</CardTitle>
               <CardDescription className="text-muted-foreground pt-2">
                Effective date: {lastUpdated} — Last updated: {lastUpdated}
              </CardDescription>
              <div className="mt-4 bg-secondary/50 border border-border rounded-lg p-4 text-sm">
                 <p className="text-card-foreground">These Terms govern your use of ForgeFlow Pilot. By creating an account or using our services you agree to these Terms. If you do not agree, do not use the service.</p>
              </div>
            </CardHeader>
            <CardContent className="py-8 prose prose-invert max-w-none prose-h2:font-headline prose-h2:text-2xl prose-h2:tracking-tight prose-h2:mb-4 prose-h2:mt-10 first:prose-h2:mt-0 prose-p:text-muted-foreground prose-li:text-muted-foreground">

            <h2>1. Definitions</h2>
            <p>Key terms used in this document:</p>
            <ul>
              <li><strong>Service/Platform:</strong> The ForgeFlow Pilot application, APIs, and related services.</li>
              <li><strong>User/You/Customer:</strong> Any individual or entity using the Service.</li>
              <li><strong>Account:</strong> Your registered account to access the Service.</li>
              <li><strong>Content:</strong> Any data, text, or files you upload, create, or process.</li>
              <li><strong>Artifacts/Model:</strong> Outputs generated from using the Service, such as trained models.</li>
              <li><strong>We/Us/Company:</strong> The provider of ForgeFlow Pilot.</li>
            </ul>

            <h2>2. Acceptance of Terms</h2>
            <p>By creating an account, clicking “Sign Up,” or using the Service, you confirm that you accept these Terms of Service. You must be of legal age to enter into this agreement.</p>

            <h2>3. Changes to the Terms</h2>
            <p>We reserve the right to modify these Terms. We will notify you of significant changes via email or in-app notification. Your continued use of the Service after changes become effective constitutes your acceptance.</p>

            <h2>4. Account Registration & Responsibilities</h2>
            <p>You must provide accurate information when creating your account and are solely responsible for all activities that occur under it. You must keep your password confidential and notify us immediately of any unauthorized use.</p>

            <h2>5. Acceptable Use / User Conduct</h2>
            <p>You agree not to engage in prohibited conduct, including illegal activities, intellectual property infringement, reverse-engineering the Service, or uploading malicious content. You are responsible for ensuring you have the necessary rights to any data you upload.</p>

            <h2>6. Service Description & Scope</h2>
            <p>Our Service provides tools for dataset uploading, profiling, model training, testing, and management. Features are provided “as-is” and may be modified or discontinued at our discretion.</p>

            <h2>7. Data, Content & Intellectual Property</h2>
            <p>You retain ownership of the data you upload. You grant us a limited license to process and store your data solely to provide the Service. We retain all rights to our platform, code, and trademarks.</p>

            <h2>8. Model Outputs & AI Disclaimers</h2>
            <p>AI-generated insights and model outputs are for informational purposes and may contain errors. You are responsible for validating all outputs before use in any production or high-stakes environment.</p>
            
            <h2>9. Confidentiality</h2>
            <p>Both parties agree to treat confidential information with care and not disclose it to third parties, except as required by law or to provide the Service.</p>
            
            <h2>10. Warranties & Disclaimers</h2>
            <p>The Service is provided “as is” and “as available” without any warranties, express or implied. We disclaim all warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>

            <h2>11. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, our liability is limited. We are not liable for any indirect, incidental, or consequential damages arising from your use of the Service.</p>

            <h2>12. Indemnification</h2>
            <p>You agree to indemnify and hold us harmless from any claims arising out of your violation of these Terms or your use of the Service.</p>

            <h2>13. Term and Termination</h2>
            <p>These Terms are effective until terminated. You may terminate your account at any time. We reserve the right to suspend or terminate your account for any breach of these Terms.</p>

            <h2>14. Data Retention & Export</h2>
            <p>Upon termination, you may have a limited window to export your data. We may retain certain data for legal or compliance reasons. Refer to our Privacy Policy for more details.</p>

            <h2>15. Third-Party Services & Links</h2>
            <p>The Service may integrate with third-party services. We are not responsible for the practices of third parties, and their terms will govern your use of their services.</p>

            <h2>16. Governing Law & Dispute Resolution</h2>
            <p>These Terms are governed by the laws of our jurisdiction. Any disputes will be resolved in the designated courts or through arbitration as specified herein.</p>

            <h2>17. Miscellaneous</h2>
            <p>These Terms constitute the entire agreement between you and us. If any part is found to be unenforceable, the remaining parts will continue in full effect.</p>

            <h2>18. Contact & Reporting</h2>
            <p>For any questions, or to report abuse or security issues, please contact us at the email address provided on our contact page.</p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
