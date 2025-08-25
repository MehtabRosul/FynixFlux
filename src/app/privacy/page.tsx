
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background">
        <div className="container mx-auto max-w-4xl py-12 px-4 md:px-6">
          <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold mb-4 font-headline">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
            <p className="mt-4 text-lg">
              This Privacy Policy explains what personal data we collect, how we use it, and your rights in relation to it. We are committed to protecting your privacy and handling your data in an open and transparent manner.
            </p>

            <h2 id="scope">1. Scope & Applicability</h2>
            <p>This policy applies to all services offered by ForgeFlow Pilot, including our website, platform, and APIs. We act as the data controller for your account information and a data processor for the content you upload.</p>

            <h2 id="definitions">2. Definitions</h2>
            <p>Key terms include "Personal Data" (information relating to an identified or identifiable person), "Processing" (any operation performed on personal data), "Controller" (determines the purposes and means of processing), and "Processor" (processes data on behalf of the controller).</p>

            <h2 id="collection">3. Information We Collect</h2>
            <ul>
              <li><strong>Account Information:</strong> Name, email address, and organization.</li>
              <li><strong>User Content:</strong> Datasets, project names, and model artifacts you provide.</li>
              <li><strong>Usage Data:</strong> IP address, browser type, device information, and logs of your activity.</li>
              <li><strong>Cookies & Tracking:</strong> We use essential and analytics cookies to operate and improve the service.</li>
              <li><strong>Communications:</strong> Any information you send us, such as support requests.</li>
            </ul>

            <h2 id="usage">4. How We Use Your Information</h2>
            <p>We use your information to provide and improve our services, communicate with you, ensure security, and comply with legal obligations. Our legal basis for processing is typically the performance of our contract with you or our legitimate interests.</p>
            
            <h2 id="user-data">5. Processing of User-Provided Data</h2>
            <p>As a user, you are the controller of the data you upload. We act as a processor, using your datasets solely to perform the services you request, such as profiling and model training. We will never use your data for our own model improvement without your explicit consent.</p>

            <h2 id="sharing">6. Sharing & Disclosure</h2>
            <p>We share data with trusted third-party processors like cloud infrastructure providers to operate our Service. We may also disclose data if required by law.</p>

            <h2 id="transfers">7. International Data Transfers</h2>
            <p>Your data may be transferred and stored in jurisdictions outside your own. We use legal safeguards like Standard Contractual Clauses to protect your data during such transfers.</p>

            <h2 id="retention">8. Data Retention</h2>
            <p>We retain your data for as long as your account is active or as needed to comply with our legal obligations. You can request data deletion at any time.</p>

            <h2 id="rights">9. User Rights & How to Exercise Them</h2>
            <p>You have the right to access, rectify, or erase your personal data, as well as restrict or object to its processing. To exercise these rights, please contact us via the email on our contact page.</p>

            <h2 id="security">10. Data Security</h2>
            <p>We implement robust security measures, including encryption and access controls, to protect your data. However, no system is perfectly secure.</p>

            <h2 id="cookies">11. Cookies & Tracking</h2>
            <p>We use cookies for essential functionality and analytics. You can manage your cookie preferences through your browser settings or our consent manager.</p>

            <h2 id="minors">12. Minors</h2>
            <p>Our service is not intended for individuals under the minimum legal age in their jurisdiction. We do not knowingly collect data from children.</p>
            
            <h2 id="marketing">13. Marketing Communications</h2>
            <p>We may send you promotional emails, which you can opt-out of at any time by clicking the "unsubscribe" link.</p>

            <h2 id="automated-decision">14. Automated Decision Making & Profiling</h2>
            <p>We may use automated processes for features like model suggestions. You have rights regarding such automated decisions, which you can exercise by contacting us.</p>
            
            <h2 id="processors">15. Data Processors & Subprocessors</h2>
            <p>A list of our subprocessors is available upon request. We will notify you of any changes to this list.</p>
            
            <h2 id="breach-notification">16. Data Breach Notification</h2>
            <p>In the event of a data breach, we will notify affected users and relevant authorities as required by law.</p>
            
            <h2 id="policy-changes">17. Changes to the Policy</h2>
            <p>We may update this policy from time to time. We will notify you of significant changes. Continued use of the Service constitutes acceptance of the new policy.</p>

            <h2 id="contact">18. Contact & Complaints</h2>
            <p>If you have any questions or complaints about our privacy practices, please contact our Data Protection Officer at the email address on our contact page.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
