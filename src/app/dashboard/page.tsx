import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader>
          <CardTitle>Welcome to ForgeFlow Pilot</CardTitle>
          <CardDescription>Your central hub for managing ML projects.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Navigate using the sidebar to manage your datasets, models, and training runs.</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Start a New Project</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Go to the <Link href="/dashboard/datasets" className="text-primary underline">Datasets</Link> page to upload your first dataset.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
