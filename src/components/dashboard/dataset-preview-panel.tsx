
'use client';

import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { Dataset } from "@/app/dashboard/page";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface DatasetPreviewPanelProps {
  dataset: Dataset | null;
}

export function DatasetPreviewPanel({ dataset }: DatasetPreviewPanelProps) {
  const [rowsToShow, setRowsToShow] = useState('5');
  
  if (!dataset) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Dataset Preview</CardTitle>
          <CardDescription>Upload a dataset to see a preview of its contents here.</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center h-48">
          <p className="text-muted-foreground">No dataset uploaded.</p>
        </CardContent>
      </Card>
    );
  }
  
  const headers = Object.keys(dataset[0] || {});
  const visibleData = dataset.slice(0, parseInt(rowsToShow, 10));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Dataset Preview</CardTitle>
        <CardDescription>A snapshot of the first few rows from your uploaded data.</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="w-full h-48">
          <Table>
            <TableHeader className="sticky top-0 bg-card">
              <TableRow>
                {headers.map(key => <TableHead key={key}>{key}</TableHead>)}
              </TableRow>
            </TableHeader>
            <TableBody>
              {visibleData.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {headers.map(header => (
                    <TableCell key={`${rowIndex}-${header}`}>{String(row[header])}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </CardContent>
      <CardFooter className="justify-end space-x-2">
         <span className="text-sm text-muted-foreground">Rows to show:</span>
         <Select value={rowsToShow} onValueChange={setRowsToShow}>
            <SelectTrigger className="w-[80px]">
                <SelectValue placeholder="Rows" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="5">5</SelectItem>
                <SelectItem value="10">10</SelectItem>
            </SelectContent>
        </Select>
      </CardFooter>
    </Card>
  );
}
