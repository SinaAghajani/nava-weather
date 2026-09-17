"use client";

import { useMemo } from "react";
import type { WeatherData } from "@/types/weather";
import type {
    DailyForecast,
    HourlyForecast,
} from "@/types/forecast";

interface UseForecastResult {
    hourly: HourlyForecast[];
    daily: DailyForecast[];
}

export function useForecast(
    weather: WeatherData | null | undefined,
): UseForecastResult {
    return useMemo(
        () => ({
            hourly: weather?.hourly ?? [],
            daily: weather?.daily ?? [],
        }),
        [weather],
    );
}