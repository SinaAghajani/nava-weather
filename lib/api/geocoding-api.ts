import type { LocationResult } from "@/types/location";

const GEOCODING_API_URL =
    "https://geocoding-api.open-meteo.com/v1/search";

interface OpenMeteoGeocodingResponse {
    results?: Array<{
        id: number;
        name: string;
        latitude: number;
        longitude: number;
        country?: string;
        country_code?: string;
        admin1?: string;
        admin2?: string;
        timezone?: string;
        population?: number;
    }>;
}

export const searchLocations = async (
    query: string,
): Promise<LocationResult[]> => {
    const normalizedQuery = query.trim();

    if (normalizedQuery.length < 2) {
        return [];
    }

    const params = new URLSearchParams({
        name: normalizedQuery,
        count: "10",
        language: "en",
        format: "json",
    });

    const response = await fetch(
        `${GEOCODING_API_URL}?${params.toString()}`,
        {
            next: {
                revalidate: 3600,
            },
        },
    );

    if (!response.ok) {
        throw new Error("Failed to search locations");
    }

    const data =
        (await response.json()) as OpenMeteoGeocodingResponse;

    return (data.results ?? []).map((result) => ({
        id: result.id.toString(),
        name: result.name,
        country: result.country ?? "",
        countryCode: result.country_code ?? "",
        region: result.admin1 ?? "",
        district: result.admin2 ?? "",
        admin1: result.admin1 ?? "",
        latitude: result.latitude,
        longitude: result.longitude,
        timezone: result.timezone ?? "",
        population: result.population ?? 0,
    }));
};