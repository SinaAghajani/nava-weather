import type { CurrentWeather } from "@/types/weather";
import type { DailyForecast } from "@/types/forecast";
import { getWeatherConditionLabel } from "@/lib/weather/conditions";

interface WeatherSummaryProps {
  weather: CurrentWeather;
  today?: DailyForecast;
}

export default function WeatherSummary({
  weather,
  today,
}: WeatherSummaryProps) {
  const conditionLabel = getWeatherConditionLabel(weather.weatherCode);

  const temperatureRange = today
    ? `${Math.round(today.minTemperature)}° تا ${Math.round(today.maxTemperature)}°`
    : `${Math.round(weather.temperature)}°`;

  return (
    <section className="rounded-3xl border border-border/70 bg-card p-6 sm:p-7">
      <div className="flex items-start justify-between gap-6">
        <div>
          <h2 className="text-lg font-bold tracking-tight">خلاصه وضعیت</h2>

          <p className="mt-1 text-sm text-muted-foreground">
            شرایط فعلی و چشم‌انداز امروز
          </p>
        </div>

        <div className="rounded-2xl bg-muted px-4 py-2 text-sm font-semibold">
          {temperatureRange}
        </div>
      </div>

      <p className="mt-6 text-sm leading-7 text-muted-foreground">
        در حال حاضر هوا {conditionLabel.toLowerCase()} است و دما حدود{" "}
        <span className="font-semibold text-foreground">
          {Math.round(weather.temperature)} درجه
        </span>{" "}
        گزارش شده است. دمای محسوس{" "}
        <span className="font-semibold text-foreground">
          {Math.round(weather.feelsLike)} درجه
        </span>{" "}
        است و رطوبت هوا{" "}
        <span className="font-semibold text-foreground">
          {Math.round(weather.humidity)}٪
        </span>{" "}
        است.
      </p>
    </section>
  );
}
