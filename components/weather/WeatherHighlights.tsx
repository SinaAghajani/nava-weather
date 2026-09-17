import { Droplets, Eye, Gauge, Navigation, Sun, Wind } from "lucide-react";
import type { CurrentWeather } from "@/types/weather";
import WeatherHighlightCard from "./WeatherHighlightCard";

interface WeatherHighlightsProps {
  weather: CurrentWeather;
}

export default function WeatherHighlights({ weather }: WeatherHighlightsProps) {
  return (
    <section>
      <div className="mb-4">
        <h2 className="text-lg font-bold tracking-tight">جزئیات آب‌وهوا</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          اطلاعات دقیق شرایط فعلی
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        <WeatherHighlightCard
          icon={Droplets}
          label="رطوبت"
          value={`${Math.round(weather.humidity)}%`}
        />

        <WeatherHighlightCard
          icon={Wind}
          label="سرعت باد"
          value={`${Math.round(weather.windSpeed)} km/h`}
        />

        <WeatherHighlightCard
          icon={Navigation}
          label="جهت باد"
          value={`${Math.round(weather.windDirection)}°`}
        />

        <WeatherHighlightCard
          icon={Gauge}
          label="فشار"
          value={`${Math.round(weather.pressure)} hPa`}
        />

        <WeatherHighlightCard
          icon={Eye}
          label="دید"
          value={`${Math.round(weather.visibility / 1000)} km`}
        />

        <WeatherHighlightCard
          icon={Sun}
          label="UV"
          value={weather.uvIndex.toFixed(1)}
        />
      </div>
    </section>
  );
}
