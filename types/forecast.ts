export interface HourlyForecast {
    time: string;
    temperature: number;
    feelsLike: number;
    precipitationProbability: number;
    precipitation: number;
    weatherCode: number;
    cloudCover: number;
    windSpeed: number;
    uvIndex: number;
}

export interface DailyForecast {
    date: string;
    weatherCode: number;
    maxTemperature: number;
    minTemperature: number;
    maxFeelsLike: number;
    minFeelsLike: number;
    sunrise: string;
    sunset: string;
    uvIndex: number;
    precipitation: number;
    precipitationProbability: number;
    windSpeed: number;
}