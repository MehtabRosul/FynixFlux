
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UploadCloud, FileUp } from "lucide-react";

export function DataUploadPanel() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
            <UploadCloud className="w-6 h-6 text-primary" />
            <CardTitle>Dataset Upload & Sources</CardTitle>
        </div>
        <CardDescription>Drop dataset(s) or paste a URL to begin.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border-2 border-dashed border-muted-foreground/30 p-12 text-center">
            <UploadCloud className="w-12 h-12 text-muted-foreground" />
            <p className="text-muted-foreground">Drop files here or click below</p>
            <Button variant="outline">
                <FileUp className="mr-2 h-4 w-4" />
                Select Files
            </Button>
        </div>
        
      </CardContent>
    </Card>
  );
}
