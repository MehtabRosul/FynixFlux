
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Download, Sparkles } from "lucide-react";
import { useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { db } from "@/lib/firebase";
import { ref, push, set } from "firebase/database";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";

export interface ModelDetails {
  modelName: string;
  version: string;
  primaryMetric: {
    name: string;
    value: number;
  };
}

interface ModelDetailsPanelProps {
  className?: string;
  model: ModelDetails | null;
  isTraining: boolean;
  isTrainingComplete: boolean;
  testReport?: any | null;
  onUpdate?: (changes: Partial<ModelDetails>) => void;
}

export function ModelDetailsPanel({ className, model, isTraining, isTrainingComplete, testReport, onUpdate }: ModelDetailsPanelProps) {
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingVersion, setIsEditingVersion] = useState(false);
  const [draftName, setDraftName] = useState("");
  const [draftVersion, setDraftVersion] = useState("");
  const [exportFormat, setExportFormat] = useState<string>("");
  const [isExporting, setIsExporting] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [useCaseAnswer, setUseCaseAnswer] = useState("");
  const [questionnaireOpen, setQuestionnaireOpen] = useState(false);
  const [isPersisted, setIsPersisted] = useState(false);

  const commitName = () => {
    if (!onUpdate) return setIsEditingName(false);
    const value = draftName.trim();
    if (value && model) onUpdate({ modelName: value });
    setIsEditingName(false);
  };

  const commitVersion = () => {
    if (!onUpdate) return setIsEditingVersion(false);
    const value = draftVersion.trim();
    if (value && model) onUpdate({ version: value });
    setIsEditingVersion(false);
  };

  const renderContent = () => {
    if (isTraining) {
      return (
        <div className="space-y-3">
          <Skeleton className="h-5 w-3/4" />
          <Skeleton className="h-5 w-1/2" />
          <Skeleton className="h-5 w-2/3" />
        </div>
      );
    }
    
    if (model) {
      return (
        <div className="space-y-2 text-sm">
          <p className="flex items-center gap-2">
            <strong>Model Name:</strong>
            {!isEditingName ? (
              <button
                type="button"
                className="underline decoration-dotted underline-offset-2 hover:text-primary"
                onClick={() => { setDraftName(model.modelName); setIsEditingName(true); }}
                aria-label="Edit model name"
              >
                {model.modelName}
              </button>
            ) : (
              <input
                autoFocus
                className="px-2 py-0.5 rounded border bg-background/80"
                value={draftName}
                onChange={(e) => setDraftName(e.target.value)}
                onBlur={commitName}
                onKeyDown={(e) => { if (e.key === 'Enter') commitName(); if (e.key === 'Escape') setIsEditingName(false); }}
              />
            )}
          </p>
          <p className="flex items-center gap-2">
            <strong>Version:</strong>
            {!isEditingVersion ? (
              <button
                type="button"
                className="underline decoration-dotted underline-offset-2 hover:text-primary"
                onClick={() => { setDraftVersion(model.version); setIsEditingVersion(true); }}
                aria-label="Edit version"
              >
                {model.version}
              </button>
            ) : (
              <input
                autoFocus
                className="px-2 py-0.5 rounded border bg-background/80 w-28"
                value={draftVersion}
                onChange={(e) => setDraftVersion(e.target.value)}
                onBlur={commitVersion}
                onKeyDown={(e) => { if (e.key === 'Enter') commitVersion(); if (e.key === 'Escape') setIsEditingVersion(false); }}
              />
            )}
          </p>
          <p>
            <strong>Primary Metric ({model.primaryMetric.name}):</strong> 
            <span className="font-bold text-primary ml-2">{model.primaryMetric.value}</span>
          </p>
        </div>
      );
    }

    return <p className="text-sm text-muted-foreground">Train a model to see its details here.</p>;
  };

  const charCount = (text: string) => text.trim().length;

  return (
    <Card className={cn("flex flex-col", className)}>
      <CardHeader>
        <CardTitle>Model Details</CardTitle>
        <CardDescription>
          {isTraining ? "Generating model details..." : "Summary of the best performing model."}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        {renderContent()}
        {isTrainingComplete && (
          <div className="grid gap-2">
            <label className="text-sm font-medium">Export Format</label>
            <Select onValueChange={setExportFormat} value={exportFormat}>
              <SelectTrigger aria-label="Choose export format">
                <SelectValue placeholder="Select a format" />
              </SelectTrigger>
              <SelectContent className="max-h-80">
                <SelectGroup>
                  <SelectLabel>Framework-specific</SelectLabel>
                  <SelectItem value="pickle">Pickle / Joblib (.pkl/.joblib)</SelectItem>
                  <SelectItem value="keras_h5">Keras HDF5 (.h5)</SelectItem>
                  <SelectItem value="keras_savedmodel">Keras SavedModel (folder)</SelectItem>
                  <SelectItem value="tf_ckpt">TensorFlow Checkpoint (.ckpt)</SelectItem>
                  <SelectItem value="pytorch">PyTorch (.pt/.pth)</SelectItem>
                  <SelectItem value="mxnet">MXNet (.params/.json)</SelectItem>
                  <SelectItem value="catboost">CatBoost (.cbm)</SelectItem>
                  <SelectItem value="lightgbm">LightGBM (.txt/.bin)</SelectItem>
                  <SelectItem value="xgboost">XGBoost (.model/.json)</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>Cross-framework / Interchange</SelectLabel>
                  <SelectItem value="onnx">ONNX (.onnx)</SelectItem>
                  <SelectItem value="pmml">PMML (.pmml)</SelectItem>
                  <SelectItem value="pfa">PFA (.pfa)</SelectItem>
                  <SelectItem value="mlir">MLIR</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>Deployment / Inference</SelectLabel>
                  <SelectItem value="torchscript">TorchScript (.pt)</SelectItem>
                  <SelectItem value="tensorrt">TensorRT (.plan)</SelectItem>
                  <SelectItem value="coreml">CoreML (.mlmodel)</SelectItem>
                  <SelectItem value="tflite">TensorFlow Lite (.tflite)</SelectItem>
                  <SelectItem value="tfjs">TensorFlow.js (.json + .bin)</SelectItem>
                  <SelectItem value="openvino">OpenVINO IR (.xml + .bin)</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>Big Data / Enterprise</SelectLabel>
                  <SelectItem value="mleap">MLeap (.zip)</SelectItem>
                  <SelectItem value="h2o_mojo">H2O MOJO (.zip)</SelectItem>
                  <SelectItem value="h2o_pojo">H2O POJO (.java)</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>Specialized / Niche</SelectLabel>
                  <SelectItem value="libsvm">LibSVM model</SelectItem>
                  <SelectItem value="caffe">Caffe (.caffemodel/.prototxt)</SelectItem>
                  <SelectItem value="dlr">DLR (.dlr)</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        )}
      </CardContent>
      {isTrainingComplete && (
        <CardFooter>
            <Button className="w-full" disabled={!exportFormat || isExporting} onClick={() => setQuestionnaireOpen(true)}>
                <Download className="mr-2 h-4 w-4" />
                {isExporting ? "Exporting..." : "Export Artifacts"}
            </Button>
        </CardFooter>
      )}
      {/* Pre-export questionnaire as dialog */}
      <Dialog open={questionnaireOpen} onOpenChange={setQuestionnaireOpen}>
        <DialogContent hideClose>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              Before we package your model…
            </DialogTitle>
            <DialogDescription>
              In one short note, what will you use this model for—and how will it help?
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-2">
            <Textarea
              value={useCaseAnswer}
              onChange={(e) => setUseCaseAnswer(e.target.value)}
              placeholder="Example: Detect churn weekly and trigger tailored retention offers in our CRM."
              rows={4}
            />
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Aim for 50–150 characters.</span>
              <span>{charCount(useCaseAnswer)} chars</span>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setQuestionnaireOpen(false)}>Cancel</Button>
            <Button
              onClick={async () => {
                const cc = charCount(useCaseAnswer);
                if (cc < 50 || cc > 150 || !model || !exportFormat) return;
                // Immediately proceed to confirmation and run the pre-save in the background
                setQuestionnaireOpen(false);
                setConfirmOpen(true);
                (async () => {
                  try {
                    const res = await fetch("/api/export", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ format: exportFormat, model, useCase: useCaseAnswer })
                    });
                    if (!res.ok) throw new Error("Export prepare failed");
                    const blob = await res.blob();
                    const disposition = res.headers.get("Content-Disposition") || "attachment; filename=model.artifact";
                    const fileMatch = /filename=([^;]+)/.exec(disposition || "");
                    const filename = fileMatch ? fileMatch[1] : `model.${exportFormat}`;
                    const storage = getStorage();
                    const path = `models/${Date.now()}-${Math.random().toString(36).slice(2)}/${filename}`;
                    const sref = storageRef(storage, path);
                    await uploadBytes(sref, blob, {
                      contentType: res.headers.get("Content-Type") || "application/octet-stream",
                      contentDisposition: `attachment; filename="${filename}"`
                    });
                    const downloadURL = await getDownloadURL(sref);

                    const exportRoot = ref(db, `exports`);
                    const newRef = push(exportRoot);
                    const payload = {
                      createdAt: new Date().toISOString(),
                      format: exportFormat,
                      model: {
                        ...model,
                        storage: {
                          path,
                          downloadURL,
                          contentType: res.headers.get("Content-Type") || "application/octet-stream",
                          size: blob.size,
                          format: exportFormat,
                        },
                      },
                      testReport: testReport ?? null,
                      note: useCaseAnswer,
                    };
                    await set(newRef, payload);
                    setIsPersisted(true);
                  } catch (e) {
                    console.error("Pre-save failed:", e);
                  }
                })();
              }}
              disabled={(() => { const cc = charCount(useCaseAnswer); return cc < 50 || cc > 150 || !exportFormat || !model; })()}
            >
              Continue
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <DialogContent hideClose>
          <DialogHeader>
            <DialogTitle>Export model artifacts?</DialogTitle>
            <DialogDescription>
              This will export the current model in the selected format. Choose Export to continue or Cancel to go back.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setConfirmOpen(false)}>Cancel</Button>
            <Button
              onClick={async () => {
                if (!model || !exportFormat) return;
                try {
                  setIsExporting(true);
                  const res = await fetch("/api/export", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ format: exportFormat, model, useCase: useCaseAnswer })
                  });
                  if (!res.ok) throw new Error("Export failed");
                  const blob = await res.blob();
                  // If background persist didn't happen, persist now (best-effort)
                  if (!isPersisted) {
                    try {
                      const dispositionPersist = res.headers.get("Content-Disposition") || "attachment; filename=model.artifact";
                      const fileMatchPersist = /filename=([^;]+)/.exec(dispositionPersist || "");
                      const filenamePersist = fileMatchPersist ? fileMatchPersist[1] : `model.${exportFormat}`;
                      const storage = getStorage();
                      const path = `models/${Date.now()}-${Math.random().toString(36).slice(2)}/${filenamePersist}`;
                      const sref = storageRef(storage, path);
                      await uploadBytes(sref, blob, { contentType: res.headers.get("Content-Type") || "application/octet-stream", contentDisposition: `attachment; filename=\"${filenamePersist}\"` });
                      const downloadURL = await getDownloadURL(sref);
                      const exportRoot = ref(db, `exports`);
                      const newRef = push(exportRoot);
                      const payload = {
                        createdAt: new Date().toISOString(),
                        format: exportFormat,
                        model: {
                          ...model,
                          storage: { path, downloadURL, contentType: res.headers.get("Content-Type") || "application/octet-stream", size: blob.size, format: exportFormat },
                        },
                        testReport: testReport ?? null,
                        note: useCaseAnswer,
                      };
                      await set(newRef, payload);
                      setIsPersisted(true);
                    } catch (e) {
                      console.error("Persist-on-export failed:", e);
                    }
                  }
                  const disposition = res.headers.get("Content-Disposition") || "attachment; filename=model.artifact";
                  const fileMatch = /filename=([^;]+)/.exec(disposition || "");
                  const filename = fileMatch ? fileMatch[1] : `model.artifact`;
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement("a");
                  a.href = url;
                  a.download = filename;
                  document.body.appendChild(a);
                  a.click();
                  a.remove();
                  URL.revokeObjectURL(url);
                  setConfirmOpen(false);
                } catch (e) {
                  console.error("Export click failed:", e);
                } finally {
                  setIsExporting(false);
                }
              }}
              disabled={isExporting}
            >
              Export
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  );
}
