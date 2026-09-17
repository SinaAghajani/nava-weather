import { fetchWeatherByCoordinates } from "@/lib/api/weather-api";
import { coordinatesSchema } from "@/lib/validations";
import type { WeatherData } from "@/types/weather";

export const getWeather = async (
    latitude: number,
    longitude: number,
): Promise<WeatherData> => {
    const coordinates = coordinatesSchema.parse({
        latitude,
        longitude,
    });

    return fetchWeatherByCoordinates(
        coordinates.latitude,
        coordinates.longitude,
    );
};