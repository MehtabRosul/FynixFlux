import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { AlertCircle, CheckCircle, GitCommitVertical, AlertTriangle } from "lucide-react";

const issues = [
    {
        icon: <AlertTriangle className="text-destructive" />,
        title: "High Cardinality",
        description: "Feature 'user_id' has 9,854 unique values.",
        action: "Drop Feature"
    },
    {
        icon: <AlertCircle className="text-yellow-500" />,
        title: "Missing Values",
        description: "Feature 'last_login_date' has 12% missing values.",
        action: "Impute Mean"
    },
    {
        icon: <CheckCircle className="text-green-500" />,
        title: "No PII Detected",
        description: "Scanned 15 columns for PII. No issues found.",
        action: "View Report"
    }
];


export function DataHealthPanel() {
    const healthScore = 82;

    return (
        <Card className="border-none">
            <CardHeader>
                <CardTitle>Dataset Health & Auto-Diagnosis</CardTitle>
                <CardDescription>customer_churn_v1.csv (version <GitCommitVertical className="inline-block h-4 w-4" /> a1b2c3d)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div>
                    <div className="flex justify-between items-center mb-2">
                         <h3 className="text-sm font-medium">Health Score</h3>
                         <span className="text-lg font-bold text-primary">{healthScore}/100</span>
                    </div>
                    <Progress value={healthScore} />
                    <p className="text-xs text-muted-foreground mt-2">Looks good, but some improvements possible.</p>
                </div>

                <div>
                    <h3 className="text-sm font-medium mb-3">Prioritized Issues</h3>
                    <div className="space-y-3">
                        {issues.map((issue, index) => (
                            <div key={index} className="flex items-start gap-4 p-3 rounded-lg bg-muted/50">
                                <div className="flex-shrink-0">{issue.icon}</div>
                                <div className="flex-grow">
                                    <p className="font-semibold text-sm">{issue.title}</p>
                                    <p className="text-xs text-muted-foreground">{issue.description}</p>
                                </div>
                                <Button variant="ghost" size="sm" className="text-xs">{issue.action}</Button>
                            </div>
                        ))}
                    </div>
                </div>

            </CardContent>
            <CardFooter>
                 <Button className="w-full">Apply 1 Fix & Create New Version</Button>
            </CardFooter>
        </Card>
    );
}
