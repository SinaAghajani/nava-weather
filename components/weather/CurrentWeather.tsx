"use client";

import { Heart, MapPin } from "lucide-react";
import { toast } from "sonner";
import { useFavorites } from "@/hooks/useFavorites";
import { formatTemperature } from "@/lib/weather/formatters";
import {
  getWeatherCondition,
  getWeatherConditionLabel,
  isDaytime,
} from "@/lib/weather/conditions";
import type { CurrentWeather as CurrentWeatherData } from "@/types/weather";
import type { DailyForecast } from "@/types/forecast";
import type { FavoriteCity } from "@/types/location";
import WeatherBackground from "./WeatherBackground";
import WeatherIcon from "./WeatherIcon";
import { Button } from "@/components/ui/Button";

interface CurrentWeatherProps {
  city: string;
  country?: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  weather: CurrentWeatherData;
  today?: DailyForecast;
}

export default function CurrentWeather({
  city,
  country,
  coordinates,
  weather,
  today,
}: CurrentWeatherProps) {
  const { toggleFavorite, isFavorite } = useFavorites();

  const condition = getWeatherCondition(weather.weatherCode);

  const daytime = today
    ? isDaytime(weather.time, today.sunrise, today.sunset)
    : true;

  const favoriteId = `${coordinates.latitude},${coordinates.longitude}`;

  const favorite = isFavorite(favoriteId);

  const favoriteCity: FavoriteCity = {
    id: favoriteId,
    name: city,
    country: country ?? "",
    countryCode: "",
    latitude: coordinates.latitude,
    longitude: coordinates.longitude,
    timezone: "",
  };

  const handleFavorite = () => {
    if (favorite) {
      toggleFavorite(favoriteCity);

      toast.success(`${city} از موردعلاقه‌ها حذف شد`);
      return;
    }

    toggleFavorite(favoriteCity);

    toast.success(`${city} به موردعلاقه‌ها اضافه شد`);
  };

  return (
    <WeatherBackground condition={condition} isDaytime={daytime}>
      <div className="p-6 text-white sm:p-8 lg:p-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-sm font-medium text-white/80">
              <MapPin className="size-4" />
              <span>{city}</span>

              {country && <span>، {country}</span>}
            </div>

            <p className="mt-2 text-sm text-white/70">وضعیت فعلی آب‌وهوا</p>
          </div>

          <Button
            type="button"
            variant="ghost"
            size="sm"
            aria-label={
              favorite
                ? "حذف شهر از موردعلاقه‌ها"
                : "افزودن شهر به موردعلاقه‌ها"
            }
            onClick={handleFavorite}
            className="size-10 rounded-full bg-white/10 p-0 text-white hover:bg-white/20 hover:text-white"
          >
            <Heart
              className="size-5"
              fill={favorite ? "currentColor" : "none"}
            />
          </Button>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-8 sm:flex-row sm:items-center">
          <div className="flex items-center gap-5">
            <WeatherIcon
              condition={condition}
              size={128}
              priority
              className="size-24 sm:size-32"
            />

            <div>
              <div className="flex items-start">
                <span className="text-6xl font-bold tracking-tighter sm:text-7xl">
                  {Math.round(weather.temperature)}
                </span>

                <span className="mt-1 text-2xl font-medium">°C</span>
              </div>

              <p className="mt-2 text-base font-medium text-white/90">
                {getWeatherConditionLabel(weather.weatherCode)}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm sm:min-w-52">
            <div>
              <p className="text-white/60">احساس واقعی</p>
              <p className="mt-1 font-semibold">
                {formatTemperature(weather.feelsLike)}
              </p>
            </div>

            <div>
              <p className="text-white/60">رطوبت</p>
              <p className="mt-1 font-semibold">{weather.humidity}%</p>
            </div>

            <div>
              <p className="text-white/60">باد</p>
              <p className="mt-1 font-semibold">
                {Math.round(weather.windSpeed)} km/h
              </p>
            </div>

            <div>
              <p className="text-white/60">دید</p>
              <p className="mt-1 font-semibold">
                {Math.round(weather.visibility / 1000)} km
              </p>
            </div>
          </div>
        </div>
      </div>
    </WeatherBackground>
  );
}
