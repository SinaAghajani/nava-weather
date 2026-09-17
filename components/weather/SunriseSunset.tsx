import { Moon, Sun } from "lucide-react";
import type { DailyForecast } from "@/types/forecast";
import { formatHour } from "@/lib/weather/formatters";

interface SunriseSunsetProps {
  forecast: DailyForecast;
}

export default function SunriseSunset({ forecast }: SunriseSunsetProps) {
  return (
    <section className="rounded-3xl border border-border/70 bg-card p-5 sm:p-6">
      <div className="mb-5">
        <h2 className="text-lg font-bold tracking-tight">طلوع و غروب</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          زمان طلوع و غروب خورشید امروز
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-2xl bg-muted/60 p-4">
          <div className="flex size-10 items-center justify-center rounded-xl bg-background">
            <Sun className="size-5" />
          </div>

          <p className="mt-4 text-xs text-muted-foreground">طلوع</p>
          <p className="mt-1 text-xl font-bold">
            {formatHour(forecast.sunrise)}
          </p>
        </div>

        <div className="rounded-2xl bg-muted/60 p-4">
          <div className="flex size-10 items-center justify-center rounded-xl bg-background">
            <Moon className="size-5" />
          </div>

          <p className="mt-4 text-xs text-muted-foreground">غروب</p>
          <p className="mt-1 text-xl font-bold">
            {formatHour(forecast.sunset)}
          </p>
        </div>
      </div>
    </section>
  );
}
