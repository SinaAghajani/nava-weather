"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { formatHour } from "@/lib/weather/formatters";
import type { HourlyForecast } from "@/types/forecast";

interface TemperatureChartProps {
  forecasts: HourlyForecast[];
}

export default function TemperatureChart({ forecasts }: TemperatureChartProps) {
  const data = forecasts.map((forecast) => ({
    time: formatHour(forecast.time),
    temperature: Math.round(forecast.temperature),
  }));

  if (!data.length) return null;

  return (
    <section className="rounded-3xl border border-border/70 bg-card p-5 sm:p-6">
      <div className="mb-5">
        <h2 className="text-lg font-bold tracking-tight">نمودار دما</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          تغییرات دما در ۲۴ ساعت آینده
        </p>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 8, left: -20, bottom: 0 }}
          >
            <CartesianGrid
              stroke="currentColor"
              strokeOpacity={0.08}
              vertical={false}
            />

            <XAxis
              dataKey="time"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11 }}
              interval="preserveStartEnd"
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11 }}
              width={42}
              tickFormatter={(value) => `${value}°`}
            />

            <Tooltip
              cursor={{ stroke: "currentColor", strokeOpacity: 0.12 }}
              formatter={(value) => [`${value}°C`, "دما"]}
              labelFormatter={(label) => `ساعت ${label}`}
              contentStyle={{
                borderRadius: 14,
                border: "1px solid hsl(var(--border))",
                background: "hsl(var(--card))",
                color: "hsl(var(--foreground))",
              }}
            />

            <Line
              type="monotone"
              dataKey="temperature"
              stroke="currentColor"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
