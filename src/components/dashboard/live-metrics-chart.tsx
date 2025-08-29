"use client"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { Rocket } from "lucide-react";

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

interface LiveMetricsChartProps {
  isTraining: boolean;
}

export function LiveMetricsChart({ isTraining }: LiveMetricsChartProps) {
  return (
    <Card className="min-h-[465px]">
      <CardHeader>
        <CardTitle>Live Training Metrics</CardTitle>
        {isTraining && <CardDescription>Epoch 7/20 — val_auc = 0.842</CardDescription>}
      </CardHeader>
      <CardContent>
        {isTraining ? (
          <ChartContainer config={chartConfig} className="h-80 w-full">
            <AreaChart
              data={chartData}
              margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
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
        ) : (
          <div className="flex flex-col items-center justify-center h-80 text-center">
            <Rocket className="w-16 h-16 text-muted-foreground/50 mb-4" />
            <h3 className="text-xl font-semibold text-foreground">Ready to Train</h3>
            <p className="text-muted-foreground mt-2">
              Once you've uploaded a dataset and configured your settings, <br />
              click 'Start Model Training' to see your live metrics here.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
