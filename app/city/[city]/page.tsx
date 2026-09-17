import { notFound } from "next/navigation";
import PageContainer from "@/components/layout/PageContainer";
import CurrentWeather from "@/components/weather/CurrentWeather";
import HourlyForecast from "@/components/weather/HourlyForecast";
import DailyForecast from "@/components/weather/DailyForecast";
import WeatherHighlights from "@/components/weather/WeatherHighlights";
import TemperatureChart from "@/components/weather/TemperatureChart";
import SunriseSunset from "@/components/weather/SunriseSunset";
import WeatherSummary from "@/components/weather/WeatherSummary";
import { getWeather } from "@/services/weather.service";

interface CityPageProps {
  params: Promise<{
    city: string;
  }>;
  searchParams: Promise<{
    lat?: string;
    lon?: string;
  }>;
}

function parseCoordinates(latitude?: string, longitude?: string) {
  const lat = Number(latitude);
  const lon = Number(longitude);

  if (
    !Number.isFinite(lat) ||
    !Number.isFinite(lon) ||
    lat < -90 ||
    lat > 90 ||
    lon < -180 ||
    lon > 180
  ) {
    return null;
  }

  return {
    latitude: lat,
    longitude: lon,
  };
}

export default async function CityPage({
  params,
  searchParams,
}: CityPageProps) {
  const { city } = await params;
  const { lat, lon } = await searchParams;

  const cityName = decodeURIComponent(city);
  const coordinates = parseCoordinates(lat, lon);

  if (!coordinates) {
    notFound();
  }

  try {
    const weather = await getWeather(
      coordinates.latitude,
      coordinates.longitude,
    );

    return (
      <PageContainer size="wide">
        <div className="space-y-6">
          <CurrentWeather
            city={cityName}
            coordinates={coordinates}
            weather={weather.current}
            today={weather.daily[0]}
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
  } catch {
    notFound();
  }
}

export async function generateMetadata({
  params,
  searchParams,
}: CityPageProps) {
  const { city } = await params;
  const { lat, lon } = await searchParams;

  const cityName = decodeURIComponent(city);
  const coordinates = parseCoordinates(lat, lon);

  if (!coordinates) {
    return {
      title: "شهر پیدا نشد | Nava Weather",
    };
  }

  return {
    title: `${cityName} | Nava Weather`,
    description: `پیش‌بینی و اطلاعات آب‌وهوای ${cityName} در Nava Weather`,
  };
}
