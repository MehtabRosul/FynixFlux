import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function ModelsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Model Registry</h1>
      <Card>
        <CardHeader>
          <CardTitle>Registered Models</CardTitle>
          <CardDescription>Manage, version, and promote your trained models.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Model Name</TableHead>
                <TableHead>Latest Version</TableHead>
                <TableHead>Stage</TableHead>
                <TableHead>Last Modified</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">
                  <Link href="/dashboard/runs/1" className="text-primary hover:underline">ChurnPredictor</Link>
                </TableCell>
                <TableCell>v3</TableCell>
                <TableCell><Badge variant="secondary">Staging</Badge></TableCell>
                <TableCell>2023-10-25</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <Link href="/dashboard/runs/2" className="text-primary hover:underline">SentimentAnalyzer</Link>
                </TableCell>
                <TableCell>v12</TableCell>
                <TableCell><Badge>Production</Badge></TableCell>
                <TableCell>2023-10-20</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
