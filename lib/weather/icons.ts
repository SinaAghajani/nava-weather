import type { WeatherCondition } from "@/lib/weather/conditions";

export const weatherIcons: Record<WeatherCondition, string> = {
    clear: "/icons/weather/clear.svg",
    "partly-cloudy": "/icons/weather/partly-cloudy.svg",
    cloudy: "/icons/weather/cloudy.svg",
    fog: "/icons/weather/fog.svg",
    rain: "/icons/weather/rain.svg",
    "heavy-rain": "/icons/weather/heavy-rain.svg",
    snow: "/icons/weather/snow.svg",
    thunderstorm: "/icons/weather/thunderstorm.svg",
};

export const getWeatherIcon = (condition: WeatherCondition): string =>
    weatherIcons[condition];