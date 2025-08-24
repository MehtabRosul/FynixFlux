"use client"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

const chartData = [
  { epoch: "1", loss: 0.65, val_loss: 0.55 },
  { epoch: "2", loss: 0.45, val_loss: 0.48 },
  { epoch: "3", loss: 0.35, val_loss: 0.42 },
  { epoch: "4", loss: 0.30, val_loss: 0.40 },
  { epoch: "5", loss: 0.28, val_loss: 0.39 },
  { epoch: "6", loss: 0.26, val_loss: 0.38 },
  { epoch: "7", loss: 0.25, val_loss: 0.38 },
]

const chartConfig = {
  loss: {
    label: "Training Loss",
    color: "hsl(var(--primary))",
  },
  val_loss: {
    label: "Validation Loss",
    color: "hsl(var(--accent))",
  },
}

export function LiveMetricsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Loss vs. Epoch</CardTitle>
        <CardDescription>Training and validation loss over time.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-64 w-full">
          <LineChart data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="epoch" tickLine={false} axisLine={false} tickMargin={8} />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line dataKey="loss" type="monotone" stroke="var(--color-loss)" strokeWidth={2} dot={false} />
            <Line dataKey="val_loss" type="monotone" stroke="var(--color-val_loss)" strokeWidth={2} dot={false} />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
