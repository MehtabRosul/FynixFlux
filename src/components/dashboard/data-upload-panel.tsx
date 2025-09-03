
'use client';

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UploadCloud, FileUp, CheckCircle, XCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState, useCallback } from "react";
import type { Dataset } from "@/app/dashboard/page";
import { useToast } from "@/hooks/use-toast";

interface DataUploadPanelProps {
  onDatasetUpload: (data: Dataset) => void;
}

// A simple CSV parser
const parseCSV = (csvText: string): Dataset => {
    const lines = csvText.trim().split('\n');
    const headers = lines[0].split(',').map(h => h.trim());
    const rows: Dataset = [];
    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(',').map(v => v.trim());
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


export function DataUploadPanel({ onDatasetUpload }: DataUploadPanelProps) {
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [fileName, setFileName] = useState<string | null>(null);
  const { toast } = useToast();

  const handleFileChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const text = e.target?.result as string;
          const parsedData = parseCSV(text);
          if (parsedData.length > 0 && Object.keys(parsedData[0]).length > 0) {
              onDatasetUpload(parsedData);
              setFileName(file.name);
              setUploadStatus('success');
              toast({
                  title: "Upload Successful",
                  description: `${file.name} has been processed and is ready for preview.`,
              });
          } else {
              throw new Error("Failed to parse CSV or CSV is empty.");
          }
        } catch (error) {
          console.error("Error parsing file:", error);
          setUploadStatus('error');
          setFileName(file.name);
           toast({
                variant: "destructive",
                title: "Upload Failed",
                description: `There was an error parsing ${file.name}. Please check the file format.`,
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
            <Input id="file-upload" type="file" className="sr-only" onChange={handleFileChange} accept=".csv" />
            <a href="#" className="text-xs text-muted-foreground hover:text-primary">How to prepare your data</a>
        </div>
      </CardContent>
    </Card>
  );
}
