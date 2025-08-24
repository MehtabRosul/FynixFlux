import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Upload } from "lucide-react";

export default function DatasetsPage() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Datasets</h1>
        <Button>
          <Upload className="mr-2 h-4 w-4" />
          Upload Dataset
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Your Datasets</CardTitle>
          <CardDescription>A list of all datasets in your current project.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Rows</TableHead>
                <TableHead>Created At</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">customer_churn_v1.csv</TableCell>
                <TableCell>10,000</TableCell>
                <TableCell>2023-10-26</TableCell>
                <TableCell>Profiled</TableCell>
              </TableRow>
               <TableRow>
                <TableCell className="font-medium">product_reviews_v3.json</TableCell>
                <TableCell>54,231</TableCell>
                <TableCell>2023-10-22</TableCell>
                <TableCell>Profiled</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
