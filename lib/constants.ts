export const APP_NAME = "Nava Weather";

export const APP_DESCRIPTION =
    "A modern weather application with real-time forecasts, hourly conditions, and detailed weather insights.";

export const DEFAULT_CITY = {
    name: "Tehran",
    country: "Iran",
    latitude: 35.6892,
    longitude: 51.389,
};

export const WEATHER_CACHE_TTL = 10 * 60 * 1000;

export const SEARCH_DEBOUNCE = 400;

export const FORECAST_DAYS = 7;

export const HOURLY_FORECAST_HOURS = 24;

export const DEFAULT_TEMPERATURE_UNIT = "celsius" as const;

export const DEFAULT_WIND_UNIT = "kmh" as const;

export const DEFAULT_VISIBILITY_UNIT = "km" as const;

export const STORAGE_KEYS = {
    favorites: "nava-weather-favorites",
    settings: "nava-weather-settings",
    lastLocation: "nava-weather-last-location",
} as const;