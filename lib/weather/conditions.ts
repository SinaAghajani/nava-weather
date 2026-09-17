export type WeatherCondition =
    | "clear"
    | "partly-cloudy"
    | "cloudy"
    | "fog"
    | "rain"
    | "heavy-rain"
    | "snow"
    | "thunderstorm";

export const getWeatherCondition = (
    weatherCode: number,
): WeatherCondition => {
    if (weatherCode === 0) {
        return "clear";
    }

    if ([1, 2].includes(weatherCode)) {
        return "partly-cloudy";
    }

    if (weatherCode === 3) {
        return "cloudy";
    }

    if ([45, 48].includes(weatherCode)) {
        return "fog";
    }

    if (
        [51, 53, 55, 56, 57, 61, 63, 66, 67, 80, 81].includes(
            weatherCode,
        )
    ) {
        return "rain";
    }

    if ([65, 82].includes(weatherCode)) {
        return "heavy-rain";
    }

    if ([71, 73, 75, 77, 85, 86].includes(weatherCode)) {
        return "snow";
    }

    if ([95, 96, 99].includes(weatherCode)) {
        return "thunderstorm";
    }

    return "cloudy";
};

export const getWeatherConditionLabel = (
    weatherCode: number,
): string => {
    const labels: Record<WeatherCondition, string> = {
        clear: "صاف",
        "partly-cloudy": "نیمه‌ابری",
        cloudy: "ابری",
        fog: "مه‌آلود",
        rain: "بارانی",
        "heavy-rain": "بارانی شدید",
        snow: "برفی",
        thunderstorm: "طوفانی",
    };

    return labels[getWeatherCondition(weatherCode)];
};

export const isDaytime = (
    currentTime: string,
    sunrise: string,
    sunset: string,
): boolean => currentTime >= sunrise && currentTime <= sunset;