# **App Name**: Fynix Flux Pilot

## Core Features:

- Parallax Landing Page: A visually engaging, single-page website with smooth parallax scrolling and subtle layered motion to showcase Fynix Flux Pilot's value. The landing page is long-form and narrative-driven, contains strategic image/GIF placeholders, and is optimized for a cinematic, professional first impression.
- Dataset Profiling Display: After upload, display a profiling summary that includes inferred schema, data types, row count, null rates, cardinalities, histograms or top-value summaries, and PII detection flags. Also show a preview of the first N rows and a compact suggestions panel (data quality warnings and quick-fix tips).
- Live Training Dashboard: Real-time streaming dashboard that displays training metrics (loss, accuracy, AUC, custom metrics), realtime charts, epoch/batch updates, a progress/timeline bar for pipeline stages, and structured streaming logs. The feed is resilient, supports reconnect replay, and plugs into worker-published events.
- AI Narrative Tool (AI Insights): An automated narrative builder that reads training metrics and logs and produces short, human-readable insights. Examples: “Validation AUC improved steadily after epoch 3; possible overfitting signs at epoch 12.” These summaries are shown inline with the dashboard and included in exported run reports.
- Artifact Download: Provide clickable options to download model artifacts and run artifacts by version. Support multiple export formats (dependency-light Python wheel, ONNX, TFLite, TorchScript, joblib/pickle). For each artifact, provide plaintext copy-paste instructions for immediate use in applications.
- Model Test Panel: On-demand inference testing UI for artifacts: single-input testing with explanation (e.g., SHAP or short narrative), batch testing via CSV import, and quick comparison between multiple artifact versions. A test-run summary is stored with the run as validation evidence.
- Model Registry Display: Central registry listing all model runs and artifacts with metadata (project, dataset version, config, metrics, created-by, tags). Support v1/v2 comparisons, pinning/production tagging, and a simple promotion/rollback workflow.
- Authentication & Account Scoping: Implement sign up / sign in and per-project scoping.
- Resumable Uploads (any-size datasets): Use multipart presigned uploads or resumable protocol. Client shows chunk progress + resume.
- Dataset Profiling & PII Detection: Produce schema, types, row count, null rates, cardinality, histograms/top-values, and PII flags (email/SSN/phone). Provide quick suggestions (e.g., “high-cardinality” notice).
- Versioned Live Feed Event Contract & Replay Buffer: Define event types (progress, metric, log, artifact, explain_ready, error). Each event must include version, timestamp, stage, optional progress (0–100), metrics map, and optional artifact metadata. Store last N events server-side (Redis list) for replay on reconnect.
- Background Training Worker + Event Publishing: Worker enqueues training job, checkpointing, publishes events to pub/sub. Worker must write artifacts to object store and metadata to DB.
- Artifact Packaging & Download (multiple formats): Implement at least Wheel and ONNX export pipelines; attach model card + usage snippet (plaintext). Signed time-limited URLs for downloads.
- Model Test Sandbox & Explainability: Single-input inference + explanation (SHAP summary) UI. Batch test via CSV import and summary report. Save test-run as evidence.
- Model Registry & Promotion Workflow: Store runs with dataset version, config, metrics, artifacts; support pin/promote/rollback and show lineage.
- Security & Privacy Controls: TLS, JWT for API/WS, signed/expiring artifact URLs, server-side PII masking options, audit logs of key actions.
- Monitoring & Alerts: Metrics: queue length, worker health, job durations, artifact storage usage. Alerts for backlog threshold and worker failures.
- Mobile & Reduced-Motion Fallbacks: degrade parallax to simple fades/translates on mobile or when user requests reduced motion.
- Performance Budget & Optimized Media: specify image formats, lazy-load, max sizes, and TT1P targets.
- Accessibility (A11Y) Implementation: explicit ARIA roles, keyboard navigation, focus states, color contrast.
- Detailed API Contracts (text-only): endpoints for upload-init, upload-complete, train, task-status, artifacts, WS subscribe. Provide request/response field descriptions.
- Logging & Structured Tracing: structured JSON logs, request IDs, and optional distributed tracing for long jobs.
- Retention & Quotas: default artifact retention policy and per-user quotas to limit storage/costs.
- Dataset profiling detail & suggestions: histograms, sample percentiles, correlation hints, suggested fixes (impute/drop/encode), and PII confidence scores.
- Testing sandbox & explainability pipeline: SHAP snapshot generation or lightweight local explanation; single-case + batch test UI; store test-run evidence.
- Model registry & promotion/rollback workflow: registry UI, tags, production pin, audit trail for promote/rollback.
- Retention, quotas & cost control: default retention policy, per-user storage quota, notification when approaching quota.
- API contract documentation (text-only) for devs: request/response details for upload-init/complete, train, artifacts, ws.
- Mobile & reduced-motion fallbacks: disable heavy parallax on mobile or respect reduced-motion preference and provide simpler transitions.
- Performance & media guidelines: image formats to use (AVIF/WebP), max sizes for hero/GIF placeholders, lazy loading rules, target Lighthouse scores.
- Accessibility details: ARIA attributes for interactive widgets, keyboard focus states, color contrast targets (WCAG AA).

## Style Guidelines:

- Primary color: Indigo (#4F46E5) — authoritative and modern; used for primary CTAs, active states, and headline accents.
- Background color: Light Gray (#F9FAFB) — soft neutral base for content sections and cards.
- Accent color: Teal (#14B8A6) — used for highlights, interactive elements, success states, and subtle emphasis.
- Font: Inter (sans-serif) — use variable weights for hierarchy; Inter for both headings and body to maintain clarity and a contemporary aesthetic.
- Clean, minimalist line icons with simple fills for active states; use consistent stroke weight and rounded corners to match the Inter typefeel.
- Generous spacing, card-based sections, strong visual rhythm; landing page is long, narrative, and broken into clear content bands with image/GIF placeholders.
- Parallax scrolling is the defining effect on the landing page; layers (background, midground, foreground) move at different speeds to create depth.
- Animations are subtle and smooth; prefer easing curves that feel natural (soft cubic or exponential easing).
- Micro-interactions: button hover lifts, soft shadow on CTA press, small icon bounces for attention. Avoid noisy or distracting motion.
- Ensure color contrast meets WCAG AA at minimum for text; keyboard navigation for interactive controls; provide reduced-motion preference respects for users who opt out.