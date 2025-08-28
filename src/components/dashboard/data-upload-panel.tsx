
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UploadCloud, FileUp } from "lucide-react";

export function DataUploadPanel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Dataset upload here</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border-2 border-dashed border-muted-foreground/30 p-12 text-center">
            <UploadCloud className="w-12 h-12 text-muted-foreground" />
            <p className="text-muted-foreground text-sm">Drag & drop data here or click to select. Supported: CSV, Parquet, JSONL, XLSX.</p>
            <Button variant="outline">
                <FileUp className="mr-2 h-4 w-4" />
                Select Files
            </Button>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary">How to prepare your data</a>
        </div>
      </CardContent>
    </Card>
  );
}
