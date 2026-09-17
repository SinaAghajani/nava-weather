import type { WeatherData } from "@/types/weather";

const WEATHER_API_URL = "https://api.open-meteo.com/v1/forecast";

interface OpenMeteoResponse {
    latitude: number;
    longitude: number;
    timezone: string;
    current: {
        time: string;
        temperature_2m: number;
        relative_humidity_2m: number;
        apparent_temperature: number;
        precipitation: number;
        rain: number;
        weather_code: number;
        cloud_cover: number;
        pressure_msl: number;
        surface_pressure: number;
        wind_speed_10m: number;
        wind_direction_10m: number;
        wind_gusts_10m: number;
        visibility: number;
        uv_index: number;
    };
    hourly: {
        time: string[];
        temperature_2m: number[];
        apparent_temperature: number[];
        precipitation_probability: number[];
        precipitation: number[];
        weather_code: number[];
        cloud_cover: number[];
        wind_speed_10m: number[];
        uv_index: number[];
    };
    daily: {
        time: string[];
        weather_code: number[];
        temperature_2m_max: number[];
        temperature_2m_min: number[];
        apparent_temperature_max: number[];
        apparent_temperature_min: number[];
        sunrise: string[];
        sunset: string[];
        uv_index_max: number[];
        precipitation_sum: number[];
        precipitation_probability_max: number[];
        wind_speed_10m_max: number[];
    };
}

const buildUrl = (latitude: number, longitude: number) => {
    const params = new URLSearchParams({
        latitude: latitude.toString(),
        longitude: longitude.toString(),
        timezone: "auto",
        forecast_days: "7",
        current: [
            "temperature_2m",
            "relative_humidity_2m",
            "apparent_temperature",
            "precipitation",
            "rain",
            "weather_code",
            "cloud_cover",
            "pressure_msl",
            "surface_pressure",
            "wind_speed_10m",
            "wind_direction_10m",
            "wind_gusts_10m",
            "visibility",
            "uv_index",
        ].join(","),
        hourly: [
            "temperature_2m",
            "apparent_temperature",
            "precipitation_probability",
            "precipitation",
            "weather_code",
            "cloud_cover",
            "wind_speed_10m",
            "uv_index",
        ].join(","),
        daily: [
            "weather_code",
            "temperature_2m_max",
            "temperature_2m_min",
            "apparent_temperature_max",
            "apparent_temperature_min",
            "sunrise",
            "sunset",
            "uv_index_max",
            "precipitation_sum",
            "precipitation_probability_max",
            "wind_speed_10m_max",
        ].join(","),
    });

    return `${WEATHER_API_URL}?${params.toString()}`;
};

const getHourlyForecast = (
    data: OpenMeteoResponse,
    currentTime: string,
) => {
    const currentIndex = data.hourly.time.findIndex(
        (time) => time >= currentTime,
    );

    const startIndex = currentIndex === -1 ? 0 : currentIndex;

    return data.hourly.time.slice(startIndex, startIndex + 24).map((time, index) => {
        const sourceIndex = startIndex + index;

        return {
            time,
            temperature: data.hourly.temperature_2m[sourceIndex],
            feelsLike: data.hourly.apparent_temperature[sourceIndex],
            precipitationProbability:
                data.hourly.precipitation_probability[sourceIndex],
            precipitation: data.hourly.precipitation[sourceIndex],
            weatherCode: data.hourly.weather_code[sourceIndex],
            cloudCover: data.hourly.cloud_cover[sourceIndex],
            windSpeed: data.hourly.wind_speed_10m[sourceIndex],
            uvIndex: data.hourly.uv_index[sourceIndex],
        };
    });
};

const getDailyForecast = (data: OpenMeteoResponse) =>
    data.daily.time.map((date, index) => ({
        date,
        weatherCode: data.daily.weather_code[index],
        maxTemperature: data.daily.temperature_2m_max[index],
        minTemperature: data.daily.temperature_2m_min[index],
        maxFeelsLike: data.daily.apparent_temperature_max[index],
        minFeelsLike: data.daily.apparent_temperature_min[index],
        sunrise: data.daily.sunrise[index],
        sunset: data.daily.sunset[index],
        uvIndex: data.daily.uv_index_max[index],
        precipitation: data.daily.precipitation_sum[index],
        precipitationProbability:
            data.daily.precipitation_probability_max[index],
        windSpeed: data.daily.wind_speed_10m_max[index],
    }));

export const fetchWeatherByCoordinates = async (
    latitude: number,
    longitude: number,
): Promise<WeatherData> => {
    const response = await fetch(buildUrl(latitude, longitude), {
        next: {
            revalidate: 600,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch weather data");
    }

    const data = (await response.json()) as OpenMeteoResponse;

    return {
        coordinates: {
            latitude: data.latitude,
            longitude: data.longitude,
        },
        timezone: data.timezone,
        current: {
            time: data.current.time,
            temperature: data.current.temperature_2m,
            feelsLike: data.current.apparent_temperature,
            humidity: data.current.relative_humidity_2m,
            precipitation: data.current.precipitation,
            rain: data.current.rain,
            weatherCode: data.current.weather_code,
            cloudCover: data.current.cloud_cover,
            pressure: data.current.pressure_msl,
            surfacePressure: data.current.surface_pressure,
            windSpeed: data.current.wind_speed_10m,
            windDirection: data.current.wind_direction_10m,
            windGusts: data.current.wind_gusts_10m,
            visibility: data.current.visibility,
            uvIndex: data.current.uv_index,
        },
        hourly: getHourlyForecast(data, data.current.time),
        daily: getDailyForecast(data),
    };
};