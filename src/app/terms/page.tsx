
'use client';
import { LegalLayout } from '@/components/layout/legal-layout';
import { Book, CheckCircle, UserCheck, ShieldOff, Server, BrainCircuit, ShieldCheck, AlertTriangle, FileText, Globe, Handshake, Info, Mail, Bot } from 'lucide-react';
import Link from 'next/link';
import { PageLoader } from '@/components/ui/page-loader';
import { useState, useEffect } from 'react';


export default function TermsPage() {
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isPageLoading) {
    return <PageLoader message="Loading Terms of Service..." showProgress={true} progress={70} />;
  }
    
  const sections = [
    { 
      id: "definitions", 
      title: "1. Definitions",
      summary: "Core terms used in these Terms.",
      content: (
        <>
          <p>For purposes of these Terms, the following capitalized terms have the meanings set forth below:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>“Service” or “Platform”</strong> means the ForgeFlow Pilot web application, APIs, user interfaces, and related services provided by the Company that enable dataset upload, model training, testing, artifact export, and other project management features described on the Site.</li>
            <li><strong>“Company”, “We”, “Us”, “Our”</strong> means the operator of the Platform.</li>
            <li><strong>“You”</strong> means any visitor who accesses or uses the Service. This demo does not provide Accounts.</li>
            <li><strong>“Project”</strong> means a workspace or logical container within the Service where a User stores datasets, configurations, runs, and artifacts.</li>
            <li><strong>“Content”</strong> means any data, text, files, images, or other information uploaded by or on behalf of Users, including datasets and test inputs.</li>
            <li><strong>“Artifact”</strong> means any output produced by the Service on the basis of Content, including trained models, packaged binaries, manifests, and model cards.</li>
            <li><strong>“Training Job”</strong> means a single execution within the Service that trains, evaluates, or exports a model.</li>
            <li><strong>“Documentation”</strong> means the user guides, API documentation, and help articles referenced from the Site.</li>
          </ul>
          <p className="mt-4">Terms not otherwise defined in these Terms will have the meanings assigned to them in the well-established practice of software-as-a-service agreements.</p>
        </>
      ),
      icon: <Book size={20} />
    },
    { 
      id: "acceptance-of-terms", 
      title: "2. Acceptance of Terms",
      summary: "By using the demo Service you agree to these Terms.",
      content: "By accessing or using the Service, you agree to be bound by these Terms. This demo does not include user registration or accounts.",
      icon: <CheckCircle size={20} />
    },
    { 
      id: "service-usage", 
      title: "3. Service Usage",
      summary: "No accounts or login are provided in this demo.",
      content: "The Service is accessible without authentication. Do not upload personal or confidential data.",
      icon: <Info size={20} />
    },
    { 
      id: "acceptable-use", 
      title: "4. Acceptable Use / User Conduct",
      summary: "Do not misuse the Service. Don’t upload illegal content, attack the service, or use it in ways that could hurt others or violate the law.",
      content: (
        <>
          <p>You will not, and will not permit any third party to, use the Service to:</p>
          <ol className="list-alpha pl-6 space-y-2 mt-2">
            <li>engage in any activity that violates applicable laws, rules, or regulations;</li>
            <li>upload or otherwise transmit content that infringes the rights of others, is defamatory, obscene, pornographic, harassing, abusive, or otherwise objectionable;</li>
            <li>interfere with or disrupt the integrity, security, or performance of the Service or its underlying infrastructure, including attempting to probe, scan, or test the vulnerability of any system or network;</li>
            <li>attempt to gain unauthorized access to accounts, systems, or networks;</li>
            <li>reverse engineer, decompile, or disassemble the Service except to the extent permitted by applicable law; or</li>
            <li>use the Service to develop, train, or deliver models intended to cause physical harm, endanger public safety, or violate human rights, where prohibited by law.</li>
          </ol>
          <p className="mt-4">The Company reserves the right to investigate and take appropriate legal action against anyone who, in its sole discretion, violates this Acceptable Use policy. Violations may result in suspension or termination of access and may be reported to law enforcement authorities.</p>
        </>
      ),
      icon: <ShieldOff size={20} />
    },
    { 
      id: "service-description", 
      title: "5. Service Description & Scope",
      summary: "What this demo provides and important limitations.",
      content: (
        <>
           <p><strong>Core Service.</strong> The Company provides an online demo that enables visitors to upload datasets locally (client-side parsing), configure mock training, view simulated metrics/logs, and export placeholder artifacts for demonstration.</p>
           <p><strong>Modifications.</strong> The Company may change, modify, or discontinue any aspect of the Service at any time, including features, APIs, integrations, and supported export formats. The Company will use commercially reasonable efforts to provide notice for material changes.</p>
           <p><strong>Service Availability.</strong> The Service is provided “as available” and “as is”.</p>
           <p><strong>Third-Party Tools.</strong> This demo does not include account, identity, or analytics integrations.</p>
        </>
      ),
      icon: <Server size={20} />
    },
    { 
      id: "data-ip", 
      title: "6. Data, Content & Intellectual Property",
      summary: "Ownership of content you upload; no personal data or accounts are used.",
      content: (
        <>
            <p><strong>Visitor Ownership.</strong> You retain rights to any non-personal content you load for demo purposes. Do not include personal or confidential data.</p>
            <p><strong>Company IP.</strong> The Company retains rights to the Platform and related intellectual property. No additional rights are granted.</p>
            <p><strong>Feedback.</strong> If you share feedback, you grant the Company a license to use it to improve the Service.</p>
        </>
      ),
      icon: <FileText size={20} />
    },
    { 
      id: "model-disclaimers", 
      title: "7. AI & Model Disclaimers",
      summary: "Model outputs and AI insights are helpful but not perfect. You must validate models before using them in production or high-stakes contexts.",
      content: (
        <>
            <p><strong>Informational Purpose.</strong> Any model outputs, metrics, or AI-generated insights delivered via the Service are provided for informational and convenience purposes only. Such outputs are inherently probabilistic and may contain inaccuracies, biases, or limitations.</p>
            <p><strong>Insight Hub.</strong> This includes plans, code, and narratives generated by the Insight Hub AI assistant. These outputs are intended to accelerate your workflow, but they are not a substitute for human oversight. You are responsible for reviewing and validating any plan or artifact before execution or use.</p>
            <p><strong>No Guarantees.</strong> The Company does not guarantee the correctness, accuracy, or fitness of any model or inference produced by the Service. You are responsible for validating model performance and suitability for your particular use case.</p>
            <p><strong>High-Risk Use.</strong> Models trained, tested, or exported via the Service must not be relied upon for decisions that affect public safety, medical treatment, legal determinations, or other high-risk use-cases without appropriate professional oversight and validation. The Company expressly disclaims liability for negligence arising from such use to the maximum extent permitted by law.</p>
            <p><strong>Bias & Fairness.</strong> Models may reflect biases present in training data. You are responsible for assessing fairness and taking mitigation steps as appropriate. The Service may provide explainability aids and fairness diagnostics, but these are advisory.</p>
        </>
      ),
      icon: <BrainCircuit size={20} />
    },
    {
      id: "confidentiality",
      title: "8. Confidentiality",
      summary: "We will treat your confidential information with care, and you must treat ours the same. There are common exclusions (public info, independently developed info, legal disclosures).",
      content: (
        <>
            <p><strong>Definition.</strong> “Confidential Information” means non-public information disclosed by one party to the other in connection with the Service that a reasonable person would consider confidential, including technical, commercial, or business information.</p>
            <p><strong>Obligations.</strong> Each party agrees to keep the other party’s Confidential Information confidential, to use it solely for the purposes of performing obligations under these Terms, and to protect it with reasonable care.</p>
            <p><strong>Exclusions.</strong> Confidential Information does not include information that:</p>
            <ol className="list-alpha pl-6 space-y-2 mt-2">
                <li>is or becomes generally known to the public through no fault of the receiving party;</li>
                <li>is rightfully known by the receiving party prior to disclosure;</li>
                <li>is independently developed without use of the disclosing party’s Confidential Information; or</li>
                <li>is rightfully obtained from a third party without a duty of confidentiality.</li>
            </ol>
            <p className="mt-4"><strong>Compelled Disclosure.</strong> If a receiving party is compelled by law to disclose Confidential Information, it will provide reasonable prior notice to the disclosing party and cooperate to seek a protective order, where possible.</p>
        </>
      ),
      icon: <ShieldCheck size={20} />
    },
    { 
      id: "warranties-disclaimers", 
      title: "9. Warranties & Disclaimers",
      summary: "We aim to provide a reliable service but offer it “as is” and disclaim most warranties — please validate models before using them in production.",
      content: (
        <>
            <p><strong>No Warranty.</strong> Except as expressly provided in writing, the Service is provided on an “AS IS” and “AS AVAILABLE” basis. The Company disclaims all warranties, whether express, implied, statutory, or otherwise, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement, to the extent permitted by applicable law.</p>
            <p><strong>Limited Representations.</strong> The Company represents that it will use commercially reasonable efforts to provide and maintain the Service, but does not warrant that the Service will be uninterrupted, error-free, or entirely secure.</p>
        </>
      ),
      icon: <AlertTriangle size={20} />
    },
    { 
      id: "liability-limitation", 
      title: "10. Limitation of Liability",
      summary: "This explains the limits of our legal exposure. It caps certain damages and excludes others — read it carefully.",
      content: (
        <>
            <p><strong>Cap on Liability.</strong> To the maximum extent permitted by law, the Company’s aggregate liability arising from or related to these Terms or your use of the Service will not exceed the greater of:</p>
            <ol className="list-alpha pl-6 space-y-2 mt-2">
                <li>direct damages up to an amount equal to three months’ average fees paid by You to the Company in the twelve months prior to the claim (if applicable), or</li>
                <li>a reasonable alternative cap if no fees were paid. (Note: remove or adapt monetary cap if free service.)</li>
            </ol>
            <p className="mt-4"><strong>Exclusion of Certain Damages.</strong> In no event will the Company be liable for indirect, incidental, consequential, special, exemplary, or punitive damages, including but not limited to loss of profits, loss of data, or loss of business opportunity, even if the Company has been advised of the possibility of such damages.</p>
            <p className="mt-4"><strong>Carve-Outs.</strong> Nothing in this section limits liability for gross negligence, willful misconduct, or other liabilities that cannot be limited under applicable law.</p>
        </>
      ),
      icon: <AlertTriangle size={20} />
    },
    { 
      id: "indemnification", 
      title: "11. Indemnification",
      summary: "If someone sues us because of how you used the Service or because of your content, you may need to defend and cover costs.",
      content: (
        <>
        <p>You will defend, indemnify, and hold harmless the Company and its officers, directors, employees and agents from and against any and all claims, liabilities, damages, losses and expenses (including reasonable attorneys’ fees and costs) arising from or in connection with:</p>
         <ol className="list-alpha pl-6 space-y-2 mt-2">
            <li>your violation of these Terms;</li>
            <li>your Content or Data;</li>
            <li>your negligence or willful misconduct; or</li>
            <li>your use of the Service in violation of applicable law.</li>
        </ol>
        <p className="mt-4">The Company will: (i) promptly notify you of any claim for which it seeks indemnity; (ii) give you sole control of the defense and settlement of the claim (provided that you do not settle a claim that admits liability or requires injunctive relief without the Company’s consent); and (iii) provide reasonable assistance, at your expense.</p>
        </>
      ),
      icon: <Handshake size={20} />
    },
    { 
      id: "term-termination", 
      title: "12. Term and Termination",
      summary: "These Terms continue until ended. You can close your account; we can suspend or close accounts if Terms are broken. Explains what happens to data and exports when an account ends.",
      content: (
         <>
            <p><strong>Term.</strong> These Terms will remain in effect until terminated as set forth herein.</p>
            <p><strong>Termination by User.</strong> You may terminate your Account at any time by following the account deletion procedures in the Service. Upon termination, subject to any retention requirements, the Company will make commercially reasonable efforts to allow you to export your Content within a defined grace period.</p>
            <p><strong>Termination by Company.</strong> The Company may suspend or terminate your Account or access to the Service for convenience or for cause, including breach of these Terms, failure to comply with applicable law, or misuse of the Service. The Company will provide notice in advance of termination for convenience where practicable.</p>
            <p><strong>Effects.</strong> Upon termination, your right to access the Service immediately ceases. The Company may delete your Content in accordance with its Data Retention policy, except where retention is required by law or pursuant to a separate agreement. Termination does not relieve the parties of obligations that expressly or by their nature survive termination (e.g., confidentiality, indemnity, limitation of liability).</p>
        </>
      ),
      icon: <FileText size={20} />
    },
    { 
      id: "governing-law", 
      title: "13. Governing Law & Dispute Resolution",
      summary: "This states which jurisdiction’s laws apply and how disputes will be resolved. You can tailor jurisdiction to your company location.",
      content: "These Terms will be governed by and construed in accordance with the laws of the jurisdiction in which the Company is incorporated, without regard to its conflict of law principles. Any disputes arising out of or in connection with these Terms will be resolved in the state or federal courts located within that jurisdiction, and each party consents to exclusive jurisdiction and venue in those courts. (Alternatively, the Company may elect to arbitration in lieu of court proceedings; if so, describe arbitration rules, venue, and any class action waivers.)",
      icon: <Globe size={20} />
    },
     {
      id: "changes-to-terms",
      title: "14. Changes to Terms",
      summary: "We may update these Terms. We’ll give notice for material changes and record the version and date.",
      content: "The Company may modify these Terms at any time. When we make material changes, we will provide advance notice by posting a prominent notice on the Site or sending an in-app or email notice to Users and will update the “Last updated” date at the top of the Terms. Continued use of the Service after the effective date of any revised Terms constitutes acceptance of those changes. The Company will maintain a revision history accessible from the Terms page.",
      icon: <Info size={20} />
    }
  ];

  return (
     <LegalLayout
      title="Terms of Service"
      lastUpdated="August 2025"
      sections={sections}
    />
  );
}
