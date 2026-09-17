import { formatDay, formatTemperature } from "@/lib/weather/formatters";
import { getWeatherCondition } from "@/lib/weather/conditions";
import type { DailyForecast } from "@/types/forecast";
import WeatherIcon from "./WeatherIcon";

interface DailyForecastCardProps {
  forecast: DailyForecast;
  active?: boolean;
}

export default function DailyForecastCard({
  forecast,
  active = false,
}: DailyForecastCardProps) {
  const condition = getWeatherCondition(forecast.weatherCode);

  return (
    <div
      className={`grid grid-cols-[1fr_auto_auto] items-center gap-4 rounded-2xl border p-4 ${
        active ? "border-primary/30 bg-primary/5" : "border-border/70 bg-card"
      }`}
    >
      <div>
        <p className="font-semibold">
          {active ? "امروز" : formatDay(forecast.date)}
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          {forecast.precipitationProbability}٪ احتمال بارش
        </p>
      </div>

      <WeatherIcon condition={condition} size={42} className="size-10" />

      <div className="flex items-center gap-2 text-sm">
        <span className="font-bold">
          {formatTemperature(forecast.maxTemperature)}
        </span>
        <span className="text-muted-foreground">
          {formatTemperature(forecast.minTemperature)}
        </span>
      </div>
    </div>
  );
}
