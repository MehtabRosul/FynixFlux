
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
              <p>Our goal is to provide a powerful, intuitive, and secure environment that empowers you to build, test, and manage models with confidence. Whether you are a solo developer or part of a large team, ForgeFlow Pilot is designed to accelerate your MLOps cycle by focusing on key principles: reproducibility, security, and velocity.</p>
               <h3 className="text-xl font-semibold text-foreground mt-6">Core Concepts</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Projects:</strong> A project is a dedicated workspace for your ML initiatives, containing datasets, training runs, and models.</li>
                    <li><strong>Datasets:</strong> The starting point for any project. Upload your data, and we'll automatically version and profile it for quality and security.</li>
                    <li><strong>Runs:</strong> A single, reproducible training job. Every run tracks code, hyperparameters, and artifacts to ensure full lineage.</li>
                    <li><strong>Artifacts:</strong> The output of a run, including trained models, model cards, and evaluation metrics, ready for testing and deployment.</li>
                </ul>
            </CardContent>
          </Card>
        </section>

        <section id="getting-started">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold font-headline">Getting Started</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none text-muted-foreground leading-relaxed space-y-4">
              <h3 className="text-xl font-semibold text-foreground">1. Sign Up & Create a Project</h3>
              <p>First, create an account to get access to your personal dashboard. Once inside, create your first project. This will be the home for your datasets, models, and experiments.</p>
              
              <h3 className="text-xl font-semibold text-foreground">2. Upload Your First Dataset</h3>
              <p>Navigate to the "Datasets" section in your project dashboard and click "Upload Dataset". We support various formats, including CSV, JSONL, and Parquet. Once uploaded, we automatically profile your data, providing schema inference, data quality warnings, and PII detection to ensure your data is clean and secure before training.</p>
              
              <h3 className="text-xl font-semibold text-foreground">3. Configure and Start a Training Run</h3>
              <p>With a dataset ready, you can configure and start a training run. Select your dataset, choose a model type (e.g., classification, regression), and configure hyperparameters through our intuitive UI or by uploading a configuration file. You can monitor the progress live from the "Runs" dashboard.</p>
              <CodeBlock>
{`# Example of a training configuration (config.yaml)
model_type: "classification"
dataset_id: "ds_a1b2c3d4"
target_column: "churn"
feature_columns: ["age", "plan_type", "monthly_spend"]

hyperparameters:
  learning_rate: 0.001
  epochs: 20
  batch_size: 32
  optimizer: "adam"

validation_split: 0.2`}
              </CodeBlock>

              <h3 className="text-xl font-semibold text-foreground">4. Test, Promote, and Export</h3>
              <p>After a run completes, you can inspect its performance and test the generated model in our sandbox. If you're happy with the results, promote the model to your project's registry. From the registry, you can export artifacts for use in your own applications. We provide artifacts in common formats like ONNX, TFLite, and versioned Python wheels.</p>
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

                <h3 className="text-xl font-semibold text-foreground">Authentication</h3>
                <p>Authenticate your API requests by providing your secret key in the `Authorization` header. All API requests must be made over HTTPS.</p>
                 <CodeBlock>
{`Authorization: Bearer YOUR_API_KEY`}
                 </CodeBlock>

                 <h3 className="text-xl font-semibold text-foreground">Endpoints</h3>

                 <h4>List Datasets</h4>
                 <p>To get a list of your datasets for a specific project, make a GET request to the `/datasets` endpoint.</p>
                 <CodeBlock>
{`# Request
curl -X GET "https://api.forgeflow.pilot/v1/projects/{projectId}/datasets" \\
  -H "Authorization: Bearer YOUR_API_KEY"

# Response (200 OK)
{
  "data": [
    {
      "id": "ds_a1b2c3d4",
      "name": "customer_churn_v1.csv",
      "status": "profiled",
      "created_at": "2023-10-26T10:00:00Z"
    }
  ]
}`}
                 </CodeBlock>

                  <h4 className="mt-4">Create Training Run</h4>
                 <p>To start a new training run, make a POST request to the `/runs` endpoint with your configuration.</p>
                 <CodeBlock>
{`# Request
curl -X POST "https://api.forgeflow.pilot/v1/projects/{projectId}/runs" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "dataset_id": "ds_a1b2c3d4",
    "config": {
      "model_type": "classification",
      "hyperparameters": { "epochs": 20 }
    }
  }'

# Response (202 Accepted)
{
  "run_id": "run_e5f6g7h8",
  "status": "queued",
  "dashboard_url": "https://app.forgeflow.pilot/runs/run_e5f6g7h8"
}`}
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
                <p>This section contains in-depth guides for specific use cases. More guides are being added regularly.</p>
                <ul className="list-disc pl-6">
                    <li><span className="font-semibold text-foreground">Best Practices for Data Preparation:</span> Learn how to format your data for optimal model performance.</li>
                    <li><span className="font-semibold text-foreground">Interpreting Model Evaluation Metrics:</span> A deep dive into classification and regression metrics.</li>
                    <li><span className="font-semibold text-foreground">Integrating Exported Models:</span> Step-by-step instructions for deploying a downloaded artifact in a Python web service.</li>
                </ul>
            </CardContent>
          </Card>
        </section>
      </div>
    </DocsLayout>
  );
}
