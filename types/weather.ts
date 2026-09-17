import type { DailyForecast, HourlyForecast } from "@/types/forecast";
import type { Coordinates } from "@/types/location";

export interface CurrentWeather {
    time: string;
    temperature: number;
    feelsLike: number;
    humidity: number;
    precipitation: number;
    rain: number;
    weatherCode: number;
    cloudCover: number;
    pressure: number;
    surfacePressure: number;
    windSpeed: number;
    windDirection: number;
    windGusts: number;
    visibility: number;
    uvIndex: number;
}

export interface WeatherData {
    coordinates: Coordinates;
    timezone: string;
    current: CurrentWeather;
    hourly: HourlyForecast[];
    daily: DailyForecast[];
}