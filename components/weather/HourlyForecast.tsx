import type { HourlyForecast as HourlyForecastType } from "@/types/forecast";
import HourlyForecastCard from "./HourlyForecastCard";

interface HourlyForecastProps {
  forecasts: HourlyForecastType[];
}

export default function HourlyForecast({ forecasts }: HourlyForecastProps) {
  if (!forecasts.length) return null;

  return (
    <section>
      <div className="mb-4">
        <h2 className="text-lg font-bold tracking-tight">پیش‌بینی ساعتی</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          وضعیت آب‌وهوا در ۲۴ ساعت آینده
        </p>
      </div>

      <div className="-mx-1 overflow-x-auto px-1 pb-3">
        <div className="flex min-w-max gap-3">
          {forecasts.map((forecast, index) => (
            <HourlyForecastCard
              key={`${forecast.time}-${index}`}
              forecast={forecast}
              active={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
