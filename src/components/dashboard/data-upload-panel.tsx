
'use client';

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UploadCloud, FileUp, CheckCircle, XCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState, useCallback } from "react";
import type { Dataset } from "@/app/dashboard/page";
import { useToast } from "@/hooks/use-toast";
import { ingestFile, Row } from "@/app/actions/ingest";

interface DataUploadPanelProps {
  onDatasetUpload: (data: Dataset) => void;
}

// Generic delimited-text parser (CSV/TSV/pipe/semicolon)
const parseDelimited = (text: string, delimiter: string): Dataset => {
    const lines = text.trim().split(/\r?\n/);
    const headers = lines[0].split(delimiter).map(h => h.trim());
    const rows: Dataset = [];
    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(delimiter).map(v => v.trim());
        const row: Record<string, string | number> = {};
        headers.forEach((header, j) => {
            const value = values[j];
            // Naive check for number
            if (value && !isNaN(Number(value))) {
                row[header] = Number(value);
            } else {
                row[header] = value || '';
            }
        });
        rows.push(row);
    }
    return rows;
};

const sniffDelimiter = (text: string): string => {
  const sample = text.split(/\r?\n/).slice(0, 5).join('\n');
  const counts: Record<string, number> = { ',': 0, '\t': 0, '|': 0, ';': 0 };
  for (const ch of Object.keys(counts)) {
    counts[ch] = (sample.match(new RegExp(escapeRegExp(ch), 'g')) || []).length;
  }
  const best = Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] || ',';
  return best;
};

const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const parseJSON = (text: string): Dataset => {
  const data = JSON.parse(text);
  if (Array.isArray(data)) return data as Dataset;
  if (typeof data === 'object') return [data as Record<string, string | number>];
  throw new Error('Unsupported JSON structure');
};

const parseJSONL = (text: string): Dataset => {
  const lines = text.trim().split(/\r?\n/);
  return lines.filter(Boolean).map(l => JSON.parse(l));
};


export function DataUploadPanel({ onDatasetUpload }: DataUploadPanelProps) {
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [fileName, setFileName] = useState<string | null>(null);
  const { toast } = useToast();

  const handleFileChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        try {
          const text = e.target?.result as string;
          const lower = file.name.toLowerCase();
          let parsedData: Dataset = [];
          if (lower.endsWith('.csv') || lower.endsWith('.tsv') || lower.endsWith('.txt') || lower.endsWith('.psv') || lower.endsWith('.ssv')) {
            const delimiter = lower.endsWith('.tsv') ? '\t' : lower.endsWith('.psv') ? '|' : lower.endsWith('.ssv') ? ';' : sniffDelimiter(text);
            parsedData = parseDelimited(text, delimiter);
          } else if (lower.endsWith('.json')) {
            parsedData = parseJSON(text);
          } else if (lower.endsWith('.jsonl') || lower.endsWith('.ndjson')) {
            parsedData = parseJSONL(text);
          } else {
            // Offload to server action for heavy formats
            const rows = await ingestFile(file as unknown as File);
            if (!rows || rows.length === 0) {
              throw new Error('This file format is not supported in-browser.');
            }
            parsedData = rows as unknown as Dataset;
          }
          if (parsedData.length > 0 && Object.keys(parsedData[0]).length > 0) {
              onDatasetUpload(parsedData);
              setFileName(file.name);
              setUploadStatus('success');
              toast({
                  title: "Upload Successful",
                  description: `${file.name} has been processed and is ready for preview.`,
              });
          } else {
              throw new Error("Failed to parse data or file is empty.");
          }
        } catch (error) {
          console.error("Error parsing file:", error);
          setUploadStatus('error');
          setFileName(file.name);
           toast({
                variant: "destructive",
                title: "Upload Failed",
                description: `There was an error parsing ${file.name}. Supported in-browser: CSV/TSV/JSON/JSONL.`,
            });
        }
      };
      reader.onerror = () => {
          setUploadStatus('error');
          setFileName(file.name);
          toast({
              variant: "destructive",
              title: "Read Error",
              description: `Could not read the file ${file.name}.`,
          });
      };
      reader.readAsText(file);
    }
  }, [onDatasetUpload, toast]);
  
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle>Dataset Upload</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-center">
        <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border-2 border-dashed border-muted-foreground/30 p-10 text-center relative">
            {uploadStatus === 'idle' && <UploadCloud className="w-12 h-12 text-muted-foreground" />}
            {uploadStatus === 'success' && <CheckCircle className="w-12 h-12 text-green-500" />}
            {uploadStatus === 'error' && <XCircle className="w-12 h-12 text-destructive" />}
            
            <p className="text-muted-foreground text-sm">
                {uploadStatus === 'success' ? `${fileName} uploaded successfully!` : 
                 uploadStatus === 'error' ? `Failed to upload ${fileName}.` : 
                 'Drag & drop data here or click to select.'}
            </p>

            <Button asChild variant="outline">
                <label htmlFor="file-upload">
                    <FileUp className="mr-2 h-4 w-4" />
                    {uploadStatus === 'idle' ? 'Select File' : 'Select Another File'}
                </label>
            </Button>
            <Input id="file-upload" type="file" className="sr-only" onChange={handleFileChange} accept=".csv,.tsv,.txt,.json,.jsonl,.ndjson,.psv,.ssv" />
            <a href="#" className="text-xs text-muted-foreground hover:text-primary">How to prepare your data</a>
        </div>
      </CardContent>
    </Card>
  );
}
