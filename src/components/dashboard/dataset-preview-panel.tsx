
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function DatasetPreviewPanel() {
  const data = [
    { feature1: 0.23, feature2: 'A', feature3: 145 },
    { feature1: 0.54, feature2: 'B', feature3: 198 },
    { feature1: 0.19, feature2: 'A', feature3: 112 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Uploaded dataset will get previewed here</CardTitle>
        <CardDescription>Preview of the first rows.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              {Object.keys(data[0]).map(key => <TableHead key={key}>{key}</TableHead>)}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {Object.values(row).map((val, cellIndex) => (
                  <TableCell key={cellIndex}>{String(val)}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
