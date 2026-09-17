import type { WeatherData } from "@/types/weather";

const WEATHER_CACHE_PREFIX = "nava-weather";
const DEFAULT_TTL = 10 * 60 * 1000;

interface WeatherCacheEntry {
    data: WeatherData;
    timestamp: number;
}

const getCacheKey = (latitude: number, longitude: number) =>
    `${WEATHER_CACHE_PREFIX}:${latitude.toFixed(3)}:${longitude.toFixed(3)}`;

export const getCachedWeather = (
    latitude: number,
    longitude: number,
    ttl = DEFAULT_TTL,
): WeatherData | null => {
    if (typeof window === "undefined") {
        return null;
    }

    try {
        const raw = localStorage.getItem(getCacheKey(latitude, longitude));

        if (!raw) {
            return null;
        }

        const entry = JSON.parse(raw) as WeatherCacheEntry;

        if (Date.now() - entry.timestamp > ttl) {
            localStorage.removeItem(getCacheKey(latitude, longitude));
            return null;
        }

        return entry.data;
    } catch {
        return null;
    }
};

export const setCachedWeather = (
    latitude: number,
    longitude: number,
    data: WeatherData,
) => {
    if (typeof window === "undefined") {
        return;
    }

    try {
        const entry: WeatherCacheEntry = {
            data,
            timestamp: Date.now(),
        };

        localStorage.setItem(
            getCacheKey(latitude, longitude),
            JSON.stringify(entry),
        );
    } catch {
        return;
    }
};

export const clearWeatherCache = () => {
    if (typeof window === "undefined") {
        return;
    }

    Object.keys(localStorage)
        .filter((key) => key.startsWith(`${WEATHER_CACHE_PREFIX}:`))
        .forEach((key) => localStorage.removeItem(key));
};