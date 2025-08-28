
"use client"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Area, AreaChart, CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

const chartData = [
  { epoch: "1", val_loss: 0.55 },
  { epoch: "2", val_loss: 0.48 },
  { epoch: "3", val_loss: 0.42 },
  { epoch: "4", val_loss: 0.40 },
  { epoch: "5", val_loss: 0.39 },
  { epoch: "6", val_loss: 0.38 },
  { epoch: "7", val_loss: 0.38 },
]

const chartConfig = {
  val_loss: {
    label: "Validation Loss",
    color: "hsl(var(--primary))",
  },
}

export function LiveMetricsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>live model training will be shown here (graph is a demo)</CardTitle>
        <CardDescription>Epoch 7/20 — val_auc = 0.842</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-64 w-full">
          <AreaChart
            data={chartData}
            margin={{ top: 5, right: 20, left: -10, bottom: -10 }}
          >
            <defs>
              <linearGradient id="colorLoss" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-val_loss)" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="var(--color-val_loss)" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsla(var(--border) / 0.5)" />
            <XAxis dataKey="epoch" tickLine={false} axisLine={false} tickMargin={8} />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} domain={['dataMin - 0.05', 'dataMax + 0.05']} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area type="monotone" dataKey="val_loss" stroke="var(--color-val_loss)" strokeWidth={2} fillOpacity={1} fill="url(#colorLoss)" />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
