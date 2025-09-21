
'use client';

import { DocsLayout } from '@/components/layout/docs-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageLoader } from '@/components/ui/page-loader';
import { useState, useEffect } from 'react';

const CodeBlock = ({ children }: { children: React.ReactNode }) => (
  <pre className="bg-muted rounded-md p-4 text-sm font-mono overflow-x-auto">
    <code>{children}</code>
  </pre>
);

export default function DocsPage() {
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (isPageLoading) {
    return <PageLoader message="Loading Documentation..." showProgress={true} progress={85} />;
  }

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'quickstart', title: 'Quickstart' },
    { id: 'core-features', title: 'Core Features' },
    { id: 'dashboard-walkthrough', title: 'Dashboard Walkthrough' },
    { id: 'ai-capabilities', title: 'AI Capabilities' },
    { id: 'configuration', title: 'Configuration' },
    { id: 'api-reference', title: 'API Reference (text-only)' },
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
              <p>Welcome to the ForgeFlow Pilot documentation. This is the single source of truth for operating the platform to ship reliable ML — from dataset upload to artifact export — with a modern, accessible UI built on Next.js and shadcn/ui.</p>
              <p>The demo experience mirrors a production MLOps workflow: upload a dataset, configure a run, observe live metrics, generate a test report, and export artifacts. AI assistance is available via Genkit + Google AI to draft narratives and explanation summaries.</p>
              <h3 className="text-xl font-semibold text-foreground mt-6">Core Concepts</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Dataset:</strong> CSV upload and preview with lightweight inference to enable the flow.</li>
                <li><strong>Run:</strong> Training configured through top‑level controls, with live metrics and event feed.</li>
                <li><strong>Artifact:</strong> What you deploy — export flows represent ONNX, TFLite, wheel, etc.</li>
                <li><strong>Insight Hub:</strong> AI‑assisted narratives and model explanations powered by Genkit.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section id="quickstart">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold font-headline">Quickstart</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none text-muted-foreground leading-relaxed space-y-4">
              <h3 className="text-xl font-semibold text-foreground">1) Get Started on the Web</h3>
              <p>Open the application in your browser to get started—everything runs online.</p>
              <ul className="list-disc pl-6">
                <li>Open the site in a modern browser (Chrome, Edge, Safari, or Firefox).</li>
                <li>Use the navigation to explore <strong>Dashboard</strong>, <strong>Docs</strong>, and <strong>Security</strong>.</li>
                <li>For the best experience, enable JavaScript and do not block third‑party fonts.</li>
              </ul>
              <h3 className="text-xl font-semibold text-foreground">2) Open the Dashboard</h3>
              <p>Upload a CSV, set <em>Problem</em>, <em>Model</em>, <em>Split</em>, <em>Tuning</em>, and <em>Metric</em>, then start training. Live metrics and feed will animate to reflect progress.</p>
              <CodeBlock>
{`TrainingConfig
- problem: classification | regression | time-series | clustering
- model: AutoML | RandomForest | XGBoost | LightGBM | CatBoost | SVM | Prophet
- split: train/test | k-fold | time-based
- tuning: grid | random | bayesian | hyperband | ASHA
- metric: accuracy | F1 | AUC-ROC | MAE | MSE | R2`}
              </CodeBlock>
              <h3 className="text-xl font-semibold text-foreground">3) Test & Export</h3>
              <p>Use <strong>Test Model</strong> for a quick performance/bias snapshot, review <strong>Model Details</strong>, and export artifacts for deployment.</p>
            </CardContent>
          </Card>
        </section>

        <section id="core-features">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold font-headline">Core Features</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none text-muted-foreground leading-relaxed">
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Dataset Upload & Preview:</strong> Client‑side CSV parsing and preview.</li>
                <li><strong>Configurable Training:</strong> Problem, model, split, tuning, and metric.</li>
                <li><strong>Live Metrics:</strong> Real‑time charting of validation loss.</li>
                <li><strong>Event Feed:</strong> Human‑readable training updates and tips.</li>
                <li><strong>Model Testing:</strong> Compact performance and bias summary.</li>
                <li><strong>Artifacts:</strong> Export flows representing ONNX, TFLite, wheel, etc.</li>
                <li><strong>AI Assistance:</strong> Genkit flows for narrative and explanation authoring.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section id="dashboard-walkthrough">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold font-headline">Dashboard Walkthrough</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none text-muted-foreground leading-relaxed space-y-2">
              <ol className="list-decimal pl-6 space-y-2">
                <li><strong>Top Controls</strong> — configure the training run.</li>
                <li><strong>Upload Panel</strong> — provide dataset to enable training.</li>
                <li><strong>Live Metrics</strong> — observe validation loss per epoch.</li>
                <li><strong>Event Feed</strong> — friendly log of progress and checkpoints.</li>
                <li><strong>Model Details</strong> — name, version, and metric summary.</li>
                <li><strong>Test Model</strong> — quick health‑check before export.</li>
              </ol>
            </CardContent>
          </Card>
        </section>

        <section id="ai-capabilities">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold font-headline">AI Capabilities</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none text-muted-foreground leading-relaxed space-y-4">
              <p>ForgeFlow Pilot integrates <strong>Genkit</strong> with Google AI (Gemini). Two demo flows are available:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>ai-narrative-tool</strong> — converts metrics + logs into concise narratives.</li>
                <li><strong>model-test-explanation</strong> — drafts an explanation summary for a test input.</li>
              </ul>
              <p>Flows execute via Next.js Server Actions. Provide valid credentials to call real models.</p>
            </CardContent>
          </Card>
        </section>

        <section id="configuration">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold font-headline">Configuration</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none text-muted-foreground leading-relaxed space-y-4">
              <p>Before starting a training run on the Dashboard, configure these settings in the top control bar:</p>
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  <span className="font-semibold text-foreground">Problem Categorization</span>
                  <br />Choose the task that matches your outcome variable: classification, regression, time‑series forecasting, or clustering. This determines available models and metrics.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Model Selection</span>
                  <br />Pick a baseline to start (e.g., AutoML, RandomForest, XGBoost, LightGBM, CatBoost, SVM, Prophet for time‑series). You can iterate and compare later.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Data Splitting</span>
                  <br />Define how data is partitioned for training and validation: simple train/test split, k‑fold cross‑validation, or time‑based split for temporal data.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Hyperparameter Tuning</span>
                  <br />Select a strategy: grid, random, Bayesian, Hyperband, or ASHA. Set budget/iterations as needed. For quick runs, keep tuning off or minimal.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Evaluation Metric</span>
                  <br />Choose the metric used to optimize and report results (e.g., Accuracy, F1, AUC‑ROC for classification; MAE/MSE/R² for regression). Ensure it aligns with your business goal.
                </li>
              </ol>
              <p className="mt-2">After configuring these, click <strong>Start Training</strong>. Live charts and the event feed will reflect progress in real‑time.</p>
            </CardContent>
          </Card>
        </section>

        

        <section id="api-reference">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold font-headline">API Reference (text-only)</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none text-muted-foreground leading-relaxed space-y-4">
              <p>Our REST API provides programmatic access to manage your resources. All endpoints require authentication via an API key, which you can generate in your account settings.</p>
              <h3 className="text-xl font-semibold text-foreground">Base URL</h3>
              <CodeBlock>https://api.forgeflow.pilot/v1</CodeBlock>
              <h3 className="text-xl font-semibold text-foreground">Authentication</h3>
              <p>Authenticate your API requests by providing your secret key in the <code>Authorization</code> header. All API requests must be made over HTTPS.</p>
              <CodeBlock>
{`Authorization: Bearer YOUR_API_KEY`}
              </CodeBlock>
              <h3 className="text-xl font-semibold text-foreground">Endpoints</h3>
              <h4>List Datasets</h4>
              <p>To get a list of your datasets for a specific project, make a GET request to the <code>/datasets</code> endpoint.</p>
              <CodeBlock>
{`# Request
curl -X GET "https://api.forgeflow.pilot/v1/projects/{projectId}/datasets" \
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
              <p>To start a new training run, make a POST request to the <code>/runs</code> endpoint with your configuration.</p>
              <CodeBlock>
{`# Request
curl -X POST "https://api.forgeflow.pilot/v1/projects/{projectId}/runs" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
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
              <p>This section contains in‑depth guides for specific use cases. More guides are being added regularly.</p>
              <ul className="list-disc pl-6">
                <li><span className="font-semibold text-foreground">Best Practices for Data Preparation:</span> Format your data for optimal model performance.</li>
                <li><span className="font-semibold text-foreground">Interpreting Model Evaluation Metrics:</span> A deep dive into classification and regression metrics.</li>
                <li><span className="font-semibold text-foreground">Integrating Exported Models:</span> Deploy a downloaded artifact in a Python web service.</li>
                <li><span className="font-semibold text-foreground">Mastering the Insight Hub:</span> Advanced tips for getting the most out of the AI assistant.</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>
    </DocsLayout>
  );
}
