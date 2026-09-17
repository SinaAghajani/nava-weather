export interface Coordinates {
    latitude: number;
    longitude: number;
}

export interface LocationResult extends Coordinates {
    id: string;
    name: string;
    country: string;
    countryCode: string;
    region: string;
    district: string;
    admin1: string;
    timezone: string;
    population: number;
}

export interface FavoriteCity extends Coordinates {
    id: string;
    name: string;
    country: string;
    countryCode: string;
    timezone: string;
}