import type { DailyForecast as DailyForecastType } from "@/types/forecast";
import DailyForecastCard from "./DailyForecastCard";

interface DailyForecastProps {
  forecasts: DailyForecastType[];
}

export default function DailyForecast({ forecasts }: DailyForecastProps) {
  if (!forecasts.length) return null;

  return (
    <section>
      <div className="mb-4">
        <h2 className="text-lg font-bold tracking-tight">پیش‌بینی هفتگی</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          چشم‌انداز آب‌وهوا برای روزهای آینده
        </p>
      </div>

      <div className="space-y-2">
        {forecasts.map((forecast, index) => (
          <DailyForecastCard
            key={`${forecast.date}-${index}`}
            forecast={forecast}
            active={index === 0}
          />
        ))}
      </div>
    </section>
  );
}
