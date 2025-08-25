
import { DocsLayout } from '@/components/layout/docs-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CodeBlock = ({ children }: { children: React.ReactNode }) => (
  <pre className="bg-muted rounded-md p-4 text-sm font-mono overflow-x-auto">
    <code>{children}</code>
  </pre>
);

export default function DocsPage() {
  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'getting-started', title: 'Getting Started' },
    { id: 'api-reference', title: 'API Reference' },
    { id: 'guides', title: 'Guides' },
  ];

  return (
    <DocsLayout sections={sections}>
      <div className="space-y-12">
        <section id="introduction">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold font-headline">Introduction</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none text-muted-foreground leading-relaxed">
              <p>Welcome to the ForgeFlow Pilot documentation. This is your central resource for understanding how to use our platform to streamline your entire machine learning workflow, from uploading your first dataset to deploying a production-ready model.</p>
              <p>Our goal is to provide a powerful, intuitive, and secure environment that empowers you to build, test, and manage models with confidence. Whether you are a solo developer or part of a large team, ForgeFlow Pilot is designed to accelerate your MLOps cycle.</p>
            </CardContent>
          </Card>
        </section>

        <section id="getting-started">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold font-headline">Getting Started</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none text-muted-foreground leading-relaxed space-y-4">
              <h3 className="text-xl font-semibold text-foreground">1. Sign Up for an Account</h3>
              <p>First, create an account to get access to your personal dashboard. This is where you'll manage all your projects, datasets, and models.</p>
              
              <h3 className="text-xl font-semibold text-foreground">2. Upload Your First Dataset</h3>
              <p>Navigate to the "Datasets" section in your dashboard and click "Upload Dataset". We support various formats, including CSV, JSONL, and Parquet. Once uploaded, we'll automatically profile your data for schema, quality, and potential PII.</p>
              
              <h3 className="text-xl font-semibold text-foreground">3. Start a Training Run</h3>
              <p>With a dataset ready, you can configure and start a training run. Select your dataset, choose a model type, and configure hyperparameters. You can monitor the progress live from the "Runs" dashboard.</p>
              <CodeBlock>
{`# Example of a training configuration (in-app UI)
{
  "model_type": "classification",
  "dataset_id": "customer_churn_v1.csv",
  "hyperparameters": {
    "learning_rate": 0.001,
    "epochs": 10
  }
}`}
              </CodeBlock>

              <h3 className="text-xl font-semibold text-foreground">4. Test and Export</h3>
              <p>After a run completes, you can test the generated model in the sandbox and export the artifacts for use in your own applications. We provide artifacts in common formats like ONNX and TFLite.</p>
            </CardContent>
          </Card>
        </section>

        <section id="api-reference">
           <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold font-headline">API Reference</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none text-muted-foreground leading-relaxed space-y-4">
               <p>Our REST API provides programmatic access to manage your resources. All endpoints require authentication via an API key, which you can generate in your account settings.</p>
                <h3 className="text-xl font-semibold text-foreground">Base URL</h3>
                <CodeBlock>https://api.forgeflow.pilot/v1</CodeBlock>

                 <h3 className="text-xl font-semibold text-foreground">Example: List Datasets</h3>
                 <p>To get a list of your datasets, make a GET request to the `/datasets` endpoint.</p>
                 <CodeBlock>
{`curl -X GET "https://api.forgeflow.pilot/v1/datasets" \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
                 </CodeBlock>
            </CardContent>
          </Card>
        </section>

        <section id="guides">
            <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold font-headline">Guides</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none text-muted-foreground leading-relaxed">
                <p>This section will contain in-depth guides for specific use cases, such as:</p>
                <ul className="list-disc pl-6">
                    <li>Best practices for data preparation.</li>
                    <li>Interpreting model evaluation metrics.</li>
                    <li>Integrating exported models into a production environment.</li>
                </ul>
                <p>Check back soon for more content!</p>
            </CardContent>
          </Card>
        </section>
      </div>
    </DocsLayout>
  );
}
