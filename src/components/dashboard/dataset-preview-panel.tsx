
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileSearch } from "lucide-react";


export function DatasetPreviewPanel() {
  const schema = [
      { name: "age", type: "numeric", nulls: "0%", unique: 50 },
      { name: "job", type: "categorical", nulls: "1%", unique: 12 },
      { name: "marital", type: "categorical", nulls: "0%", unique: 3 },
      { name: "education", type: "categorical", nulls: "2%", unique: 4 },
      { name: "balance", type: "numeric", nulls: "0%", unique: 1204 },
      { name: "churn", type: "binary", nulls: "0%", unique: 2 },
  ];

  const data = [
    { age: 30, job: "management", marital: "married", education: "tertiary", balance: 1787, churn: "no" },
    { age: 33, job: "services", marital: "married", education: "secondary", balance: 4789, churn: "yes" },
    { age: 35, job: "management", marital: "single", education: "tertiary", balance: 1350, churn: "no" },
  ];


  return (
    <Card>
        <CardHeader>
            <div className="flex items-center gap-2">
                <FileSearch className="w-6 h-6 text-primary" />
                <CardTitle>Dataset Preview & Schema</CardTitle>
            </div>
            <CardDescription>Review your data and manage features before training.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="space-y-4">
                <div>
                    <h4 className="font-semibold mb-2">Data Preview (First 3 Rows)</h4>
                    <Card>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    {Object.keys(data[0]).map(key => <TableHead key={key}>{key}</TableHead>)}
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {data.map((row, rowIndex) => (
                                <TableRow key={rowIndex}>
                                    {Object.values(row).map((val, cellIndex) => <TableCell key={cellIndex}>{String(val)}</TableCell>)}
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Card>
                </div>
                 <div>
                    <h4 className="font-semibold mb-2">Inferred Schema</h4>
                    <Card>
                        <ScrollArea className="h-48">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Column</TableHead>
                                        <TableHead>Type</TableHead>
                                        <TableHead>Nulls</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {schema.map(col => (
                                        <TableRow key={col.name}>
                                            <TableCell className="font-medium">{col.name}</TableCell>
                                            <TableCell><Badge variant="outline">{col.type}</Badge></TableCell>
                                            <TableCell>{col.nulls}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </ScrollArea>
                    </Card>
                </div>
            </div>
        </CardContent>
    </Card>
  );
}
