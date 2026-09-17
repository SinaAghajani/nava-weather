import { format, parseISO } from "date-fns";

export const formatTemperature = (
    value: number,
    unit: "celsius" | "fahrenheit" = "celsius",
): string => {
    if (unit === "fahrenheit") {
        return `${Math.round((value * 9) / 5 + 32)}°`;
    }

    return `${Math.round(value)}°`;
};

export const formatTemperatureValue = (
    value: number,
    unit: "celsius" | "fahrenheit" = "celsius",
): number => {
    if (unit === "fahrenheit") {
        return Math.round((value * 9) / 5 + 32);
    }

    return Math.round(value);
};

export const formatHour = (date: string): string => {
    return format(parseISO(date), "HH:mm");
};

export const formatDay = (date: string): string => {
    return format(parseISO(date), "EEEE");
};

export const formatShortDate = (date: string): string => {
    return format(parseISO(date), "MMM d");
};

export const formatWindSpeed = (
    value: number,
    unit: "kmh" | "mph" = "kmh",
): string => {
    if (unit === "mph") {
        return `${Math.round(value * 0.621371)} mph`;
    }

    return `${Math.round(value)} km/h`;
};

export const formatVisibility = (
    value: number,
    unit: "km" | "mi" = "km",
): string => {
    if (unit === "mi") {
        return `${(value / 1609.344).toFixed(1)} mi`;
    }

    return `${(value / 1000).toFixed(1)} km`;
};

export const formatPressure = (value: number): string =>
    `${Math.round(value)} hPa`;

export const formatPercentage = (value: number): string =>
    `${Math.round(value)}%`;