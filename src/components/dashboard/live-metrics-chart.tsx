
"use client"
import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { Rocket } from "lucide-react";

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
  const [chartData, setChartData] = useState<{ epoch: string; val_loss: number | null }[]>([]);
  const [currentEpoch, setCurrentEpoch] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isTraining) {
      // Reset previous data and start "streaming" new data
      setChartData([]);
      setCurrentEpoch(0);

      // Simulate a real-time data feed, like from a WebSocket
      intervalRef.current = setInterval(() => {
        setCurrentEpoch(prevEpoch => {
          const newEpoch = prevEpoch + 1;
          if (newEpoch > 20) { // Let's say we have 20 epochs
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
            }
            return prevEpoch;
          }

          // Simulate a decreasing loss value
          const newLoss = 0.6 / Math.log(newEpoch + 2) + (Math.random() - 0.5) * 0.05;

          setChartData(prevData => [
            ...prevData,
            { epoch: String(newEpoch), val_loss: parseFloat(newLoss.toFixed(4)) },
          ]);
          return newEpoch;
        });
      }, 1500); // New data point every 1.5 seconds

    } else {
        // If training is stopped or hasn't started, clear any running interval.
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    }

    // Cleanup on component unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isTraining]);
  
  const isFinished = isTraining && currentEpoch >= 20;

  return (
    <Card className="min-h-[450px]">
      <CardHeader>
        <CardTitle>Live Training Metrics</CardTitle>
        {isTraining && !isFinished && <CardDescription>Epoch {currentEpoch}/20 — Training in progress...</CardDescription>}
        {isFinished && <CardDescription>Training complete. Final validation loss: {chartData.at(-1)?.val_loss}</CardDescription>}
      </CardHeader>
      <CardContent>
        {isTraining || chartData.length > 0 ? (
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
              <YAxis tickLine={false} axisLine={false} tickMargin={8} domain={['dataMin - 0.05', 'dataMax + 0.05']} allowDataOverflow />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area type="monotone" dataKey="val_loss" stroke="var(--color-val_loss)" strokeWidth={2} fillOpacity={1} fill="url(#colorLoss)" isAnimationActive={false}/>
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
