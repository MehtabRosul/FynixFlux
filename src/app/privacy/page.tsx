
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export default function PrivacyPage() {
  const lastUpdated = "2023-10-27";
  return (
    <div className="flex flex-col min-h-screen bg-secondary/20">
      <Header />
      <main className="flex-grow py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <Card className="bg-card/80 backdrop-blur-sm">
            <CardHeader className="border-b">
               <CardTitle className="text-3xl lg:text-4xl font-bold tracking-tighter font-headline">Privacy Policy</CardTitle>
              <CardDescription className="text-muted-foreground pt-2">
                Effective date: {lastUpdated} — Last updated: {lastUpdated}
              </CardDescription>
              <div className="mt-4 bg-secondary/50 border border-border rounded-lg p-4 text-sm">
                 <p className="text-card-foreground">We collect and process data necessary to provide ForgeFlow Pilot. You control the datasets you upload. This page explains what we collect, why, and how you can manage it.</p>
              </div>
            </CardHeader>
            <CardContent className="py-8 prose prose-invert max-w-none prose-h2:font-headline prose-h2:text-2xl prose-h2:tracking-tight prose-h2:mb-4 prose-h2:mt-10 first:prose-h2:mt-0 prose-p:text-muted-foreground prose-li:text-muted-foreground">
              
              <h2>1. Scope & Applicability</h2>
              <p>This policy applies to all services offered by ForgeFlow Pilot, including our website, platform, and APIs. We act as the data controller for your account information and a data processor for the content you upload.</p>

              <h2>2. Definitions</h2>
              <p>Key terms include "Personal Data" (information relating to an identified or identifiable person), "Processing" (any operation performed on personal data), "Controller" (determines the purposes and means of processing), and "Processor" (processes data on behalf of the controller).</p>

              <h2>3. Information We Collect</h2>
              <ul>
                <li><strong>Account Information:</strong> Name, email address, and organization.</li>
                <li><strong>User Content:</strong> Datasets, project names, and model artifacts you provide.</li>
                <li><strong>Usage Data:</strong> IP address, browser type, device information, and logs of your activity.</li>
                <li><strong>Cookies & Tracking:</strong> We use essential and analytics cookies to operate and improve the service.</li>
                <li><strong>Communications:</strong> Any information you send us, such as support requests.</li>
              </ul>

              <h2>4. How We Use Your Information</h2>
              <p>We use your information to provide and improve our services, communicate with you, ensure security, and comply with legal obligations. Our legal basis for processing is typically the performance of our contract with you or our legitimate interests.</p>
              
              <h2>5. Processing of User-Provided Data</h2>
              <p>As a user, you are the controller of the data you upload. We act as a processor, using your datasets solely to perform the services you request, such as profiling and model training. We will never use your data for our own model improvement without your explicit consent.</p>

              <h2>6. Sharing & Disclosure</h2>
              <p>We share data with trusted third-party processors like cloud infrastructure providers to operate our Service. We may also disclose data if required by law.</p>

              <h2>7. International Data Transfers</h2>
              <p>Your data may be transferred and stored in jurisdictions outside your own. We use legal safeguards like Standard Contractual Clauses to protect your data during such transfers.</p>

              <h2>8. Data Retention</h2>
              <p>We retain your data for as long as your account is active or as needed to comply with our legal obligations. You can request data deletion at any time.</p>

              <h2>9. User Rights & How to Exercise Them</h2>
              <p>You have the right to access, rectify, or erase your personal data, as well as restrict or object to its processing. To exercise these rights, please contact us via the email on our contact page.</p>

              <h2>10. Data Security</h2>
              <p>We implement robust security measures, including encryption and access controls, to protect your data. However, no system is perfectly secure.</p>

              <h2>11. Cookies & Tracking</h2>
              <p>We use cookies for essential functionality and analytics. You can manage your cookie preferences through your browser settings or our consent manager.</p>

              <h2>12. Minors</h2>
              <p>Our service is not intended for individuals under the minimum legal age in their jurisdiction. We do not knowingly collect data from children.</p>
              
              <h2>13. Marketing Communications</h2>
              <p>We may send you promotional emails, which you can opt-out of at any time by clicking the "unsubscribe" link.</p>

              <h2>14. Automated Decision Making & Profiling</h2>
              <p>We may use automated processes for features like model suggestions. You have rights regarding such automated decisions, which you can exercise by contacting us.</p>
              
              <h2>15. Data Processors & Subprocessors</h2>
              <p>A list of our subprocessors is available upon request. We will notify you of any changes to this list.</p>
              
              <h2>16. Data Breach Notification</h2>
              <p>In the event of a data breach, we will notify affected users and relevant authorities as required by law.</p>
              
              <h2>17. Changes to the Policy</h2>
              <p>We may update this policy from time to time. We will notify you of significant changes. Continued use of the Service constitutes acceptance of the new policy.</p>

              <h2>18. Contact & Complaints</h2>
              <p>If you have any questions or complaints about our privacy practices, please contact our Data Protection Officer at the email address on our contact page.</p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
