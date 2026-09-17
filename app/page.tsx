import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";
import CurrentWeather from "@/components/weather/CurrentWeather";
import HourlyForecast from "@/components/weather/HourlyForecast";
import DailyForecast from "@/components/weather/DailyForecast";
import WeatherHighlights from "@/components/weather/WeatherHighlights";
import TemperatureChart from "@/components/weather/TemperatureChart";
import SunriseSunset from "@/components/weather/SunriseSunset";
import WeatherSummary from "@/components/weather/WeatherSummary";
import { getWeather } from "@/services/weather.service";
import { DEFAULT_CITY } from "@/lib/constants";

export const revalidate = 600;

export const metadata = {
  title: "آب‌وهوای امروز",
  description:
    "مشاهده وضعیت فعلی، پیش‌بینی ساعتی و هفتگی آب‌وهوا در Nava Weather",
};

export default async function HomePage() {
  const weather = await getWeather(
    DEFAULT_CITY.latitude,
    DEFAULT_CITY.longitude,
  );

  return (
    <PageContainer size="wide">
      <div className="space-y-6">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-medium text-primary">Nava Weather</p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              وضعیت آب‌وهوای امروز
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
              اطلاعات دقیق و به‌روز آب‌وهوا را در یک نگاه مشاهده کنید.
            </p>
          </div>

          <Link
            href="/search"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border/70 bg-card px-5 text-sm font-semibold transition-all hover:border-primary/40 hover:bg-muted"
          >
            <Search className="size-4" />
            جستجوی شهر
            <ArrowLeft className="size-4" />
          </Link>
        </div>

        <CurrentWeather
          city={DEFAULT_CITY.name}
          country={DEFAULT_CITY.country}
          coordinates={{
            latitude: DEFAULT_CITY.latitude,
            longitude: DEFAULT_CITY.longitude,
          }}
          weather={weather.current}
        />

        <WeatherSummary weather={weather.current} today={weather.daily[0]} />

        <HourlyForecast forecasts={weather.hourly} />

        <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
          <TemperatureChart forecasts={weather.hourly} />

          {weather.daily[0] && <SunriseSunset forecast={weather.daily[0]} />}
        </div>

        <WeatherHighlights weather={weather.current} />

        <DailyForecast forecasts={weather.daily} />
      </div>
    </PageContainer>
  );
}
