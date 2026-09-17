import { formatHour, formatTemperature } from "@/lib/weather/formatters";
import { getWeatherCondition } from "@/lib/weather/conditions";
import type { HourlyForecast } from "@/types/forecast";
import WeatherIcon from "./WeatherIcon";

interface HourlyForecastCardProps {
  forecast: HourlyForecast;
  active?: boolean;
}

export default function HourlyForecastCard({
  forecast,
  active = false,
}: HourlyForecastCardProps) {
  const condition = getWeatherCondition(forecast.weatherCode);

  return (
    <div
      className={`min-w-24 rounded-2xl border p-4 text-center transition-all ${
        active
          ? "border-primary bg-primary text-primary-foreground shadow-sm"
          : "border-border/70 bg-card hover:bg-muted/50"
      }`}
    >
      <p
        className={`text-xs font-medium ${
          active ? "text-primary-foreground/80" : "text-muted-foreground"
        }`}
      >
        {formatHour(forecast.time)}
      </p>

      <WeatherIcon
        condition={condition}
        size={48}
        className="mx-auto my-3 size-11"
      />

      <p className="text-sm font-bold">
        {formatTemperature(forecast.temperature)}
      </p>

      <p
        className={`mt-1 text-[11px] ${
          active ? "text-primary-foreground/70" : "text-muted-foreground"
        }`}
      >
        {forecast.precipitationProbability}٪ بارش
      </p>
    </div>
  );
}
