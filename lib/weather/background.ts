import type { WeatherCondition } from "@/lib/weather/conditions";

export type WeatherTheme =
    | "clear-day"
    | "clear-night"
    | "cloudy-day"
    | "cloudy-night"
    | "rain"
    | "heavy-rain"
    | "snow"
    | "thunderstorm"
    | "fog";

export const getWeatherTheme = (
    condition: WeatherCondition,
    isDaytime: boolean = true,
): WeatherTheme => {
    if (condition === "clear") {
        return isDaytime ? "clear-day" : "clear-night";
    }

    if (condition === "partly-cloudy" || condition === "cloudy") {
        return isDaytime ? "cloudy-day" : "cloudy-night";
    }

    if (condition === "fog") {
        return "fog";
    }

    if (condition === "rain") {
        return "rain";
    }

    if (condition === "heavy-rain") {
        return "heavy-rain";
    }

    if (condition === "snow") {
        return "snow";
    }

    return "thunderstorm";
};

export const weatherThemeClasses: Record<WeatherTheme, string> = {
    "clear-day":
        "bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600",
    "clear-night":
        "bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900",
    "cloudy-day":
        "bg-gradient-to-br from-slate-400 via-slate-500 to-slate-700",
    "cloudy-night":
        "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950",
    rain:
        "bg-gradient-to-br from-slate-600 via-blue-700 to-slate-900",
    "heavy-rain":
        "bg-gradient-to-br from-slate-700 via-blue-900 to-slate-950",
    snow:
        "bg-gradient-to-br from-slate-300 via-blue-200 to-slate-500",
    thunderstorm:
        "bg-gradient-to-br from-slate-900 via-purple-950 to-slate-950",
    fog:
        "bg-gradient-to-br from-slate-400 via-slate-500 to-slate-600",
};

export const weatherBackgroundImages: Record<WeatherTheme, string> = {
    "clear-day": "/images/weather/day.webp",
    "clear-night": "/images/weather/night.webp",
    "cloudy-day": "/images/weather/day.webp",
    "cloudy-night": "/images/weather/night.webp",
    rain: "/images/weather/rain.webp",
    "heavy-rain": "/images/weather/rain.webp",
    snow: "/images/weather/snow.webp",
    thunderstorm: "/images/weather/storm.webp",
    fog: "/images/weather/day.webp",
};