
"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Loader } from '@/components/ui/loader';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import { TestReport } from '@/components/dashboard/model-test-panel';
import { ModelDetails } from '@/components/dashboard/model-details-panel';

interface ExportData {
    model: ModelDetails;
    testReport: TestReport | null;
    exportFormat: string;
    useCaseAnswer: string;
}

const FORMAT_TO_EXTENSION: Record<string, string> = {
  pickle: "pkl",
  keras_h5: "h5",
  keras_savedmodel: "zip",
  tf_ckpt: "ckpt",
  pytorch: "pt",
  mxnet: "params",
  catboost: "cbm",
  lightgbm: "txt",
  xgboost: "model",
  onnx: "onnx",
  pmml: "pmml",
  pfa: "pfa",
  mlir: "mlir",
  torchscript: "pt",
  tensorrt: "plan",
  coreml: "mlmodel",
  tflite: "tflite",
  tfjs: "zip",
  openvino: "zip",
  mleap: "zip",
  h2o_mojo: "zip",
  h2o_pojo: "java",
  libsvm: "svm",
  caffe: "caffemodel",
  dlr: "dlr",
};

const generatePdfReport = (report: TestReport): Blob => {
    const doc = new jsPDF();
    const margin = 15;
    let y = margin;

    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text("Model Evaluation Report", doc.internal.pageSize.getWidth() / 2, y, { align: 'center' });
    y += 10;

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(`Model: ${report.modelDetails.name} (v${report.modelDetails.version})`, margin, y);
    doc.text(`Generated: ${new Date(report.metadata.generatedAt).toLocaleString()}`, doc.internal.pageSize.getWidth() - margin, y, { align: 'right' });
    y += 8;
    doc.setDrawColor(200);
    doc.line(margin, y, doc.internal.pageSize.getWidth() - margin, y);
    y += 10;
    
    const sectionTitle = (title: string) => {
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text(title, margin, y);
        doc.setDrawColor(180);
        y += 6;
        doc.line(margin, y, margin + 40, y);
        y += 8;
    }

    const metricItem = (label: string, value: string) => {
        doc.setFontSize(11);
        doc.setFont('helvetica', 'normal');
        doc.text(label, margin, y);
        doc.setFont('helvetica', 'bold');
        doc.text(value, doc.internal.pageSize.getWidth() - margin, y, { align: 'right' });
        y += 7;
    }
    
    sectionTitle("Performance");
    const { overall, confusionMatrix } = report.performanceMetrics;
    metricItem("Accuracy", overall.accuracy.toFixed(3));
    metricItem("Precision", overall.precision.toFixed(3));
    metricItem("Recall", overall.recall.toFixed(3));
    metricItem("F1-Score", overall.f1Score.toFixed(3));
    metricItem("AUC-ROC", overall.auc_roc.toFixed(3));
    y+= 5;

    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text("Confusion Matrix", margin, y);
    y+= 6;

    const boxWidth = (doc.internal.pageSize.getWidth() - margin * 2 - 10) / 2;
    const boxHeight = 20;
    doc.setFontSize(10);
    doc.setLineWidth(0.2);

    const drawBox = (x: number, y: number, title: string, value: string, titleColor: [number, number, number], valueColor: [number, number, number]) => {
      doc.setFillColor(248, 249, 250);
      doc.rect(x, y, boxWidth, boxHeight, 'F');
      doc.setTextColor(titleColor[0], titleColor[1], titleColor[2]);
      doc.setFont('helvetica', 'normal');
      doc.text(title, x + boxWidth / 2, y + 8, { align: 'center' });
      doc.setTextColor(valueColor[0], valueColor[1], valueColor[2]);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(16);
      doc.text(value, x + boxWidth / 2, y + 16, { align: 'center' });
    }

    drawBox(margin, y, "True Positive", String(confusionMatrix.truePositive), [100,100,100], [40, 167, 69]);
    drawBox(margin + boxWidth + 10, y, "False Positive", String(confusionMatrix.falsePositive), [100,100,100], [220, 53, 69]);
    y += boxHeight + 5;
    drawBox(margin, y, "False Negative", String(confusionMatrix.falseNegative), [100,100,100], [220, 53, 69]);
    drawBox(margin + boxWidth + 10, y, "True Negative", String(confusionMatrix.trueNegative), [100,100,100], [40, 167, 69]);
    y += boxHeight + 15;

    sectionTitle("Bias & Fairness");
    const { demographicParity, equalizedOdds } = report.biasAndFairness;
    metricItem("Demographic Parity", `${demographicParity.toFixed(3)} (lower is better)`);
    metricItem("Equalized Odds", `${equalizedOdds.toFixed(3)} (lower is better)`);
    y += 5;

    sectionTitle("Executive Summary");
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const summaryLines = doc.splitTextToSize(report.executiveSummary, doc.internal.pageSize.getWidth() - margin * 2);
    doc.setTextColor(108, 117, 125)
    doc.text(summaryLines, margin, y);

    return doc.output('blob');
  }

export default function ExportPage() {
    const router = useRouter();
    const [exportData, setExportData] = useState<ExportData | null>(null);
    const [isExporting, setIsExporting] = useState(false);
    const [showThankYou, setShowThankYou] = useState(false);
    const [exportCompleted, setExportCompleted] = useState(false);

    useEffect(() => {
        const data = localStorage.getItem('exportData');
        if (data) {
            setExportData(JSON.parse(data));
        } else {
            // Redirect back if no data is found
            router.replace('/');
        }
    }, [router]);

    const handleExport = async () => {
        if (!exportData) return;
        
        const { model, exportFormat, useCaseAnswer, testReport } = exportData;

        if (!model || !exportFormat) return;

        setIsExporting(true);

        try {
            const zip = new JSZip();
            const modelExtension = FORMAT_TO_EXTENSION[exportFormat] || 'bin';
            const modelFilename = `${model.modelName.replace(/\s+/g, "_")}_v${model.version}.${modelExtension}`;
            const folderName = `${model.modelName.replace(/\s+/g, "_")}_v${model.version}_export`;

            const modelArtifact = {
                info: "This is a placeholder artifact for the selected export format.",
                format: exportFormat,
                modelName: model.modelName,
                version: model.version,
                primaryMetric: model.primaryMetric,
                note: useCaseAnswer,
                generatedAt: new Date().toISOString(),
            };

            const folder = zip.folder(folderName);
            if (folder) {
                folder.file(modelFilename, JSON.stringify(modelArtifact, null, 2));
                if (testReport) {
                    folder.file("test_report.pdf", generatePdfReport(testReport));
                }
            }
            
            const zipBlob = await zip.generateAsync({ type: 'blob' });
            saveAs(zipBlob, `${folderName}.zip`);
            setShowThankYou(true);
            setExportCompleted(true);

        } catch (e) {
            console.error("Export process failed:", e);
        } finally {
            setIsExporting(false);
            localStorage.removeItem('exportData');
        }
    };
    
    if (!exportData) {
        return (
            <div className="flex h-screen w-full items-center justify-center">
                <Loader />
            </div>
        );
    }

    return (
        <>
            <div className="container mx-auto py-10 flex justify-center">
                <Card className="w-full max-w-lg">
                    <CardHeader>
                        <CardTitle>Export model artifacts?</CardTitle>
                        <CardDescription>
                            This will export the current model in the <strong>{exportData.exportFormat}</strong> format. Choose Export to continue or Back to return to the dashboard.
                        </CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-end gap-2">
                        <Button variant="outline" onClick={() => router.back()} disabled={isExporting}>
                            Back
                        </Button>
                        <Button onClick={handleExport} disabled={isExporting || exportCompleted}>
                            {isExporting ? <Loader /> : null}
                            Export
                        </Button>
                    </CardFooter>
                </Card>
            </div>

            <Dialog open={showThankYou} onOpenChange={setShowThankYou}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Thank You!</DialogTitle>
                        <DialogDescription>
                            Your model artifacts have been successfully downloaded.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button onClick={() => setShowThankYou(false)}>Close</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
}
