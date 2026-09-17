"use client";

import { useQuery } from "@tanstack/react-query";
import { getWeather } from "@/services/weather.service";
import type { WeatherData } from "@/types/weather";

interface UseWeatherOptions {
    latitude?: number;
    longitude?: number;
    enabled?: boolean;
}

export function useWeather({
    latitude,
    longitude,
    enabled = true,
}: UseWeatherOptions = {}) {
    return useQuery<WeatherData>({
        queryKey: ["weather", latitude, longitude],
        queryFn: () => {
            if (latitude === undefined || longitude === undefined) {
                throw new Error("Coordinates are required");
            }

            return getWeather(latitude, longitude);
        },
        enabled:
            enabled &&
            latitude !== undefined &&
            longitude !== undefined,
    });
}