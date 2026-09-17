"use client";

import { useQuery } from "@tanstack/react-query";
import type { LocationResult } from "@/types/location";

interface GeocodingApiResponse {
    success: boolean;
    data: LocationResult[];
    error?: string;
}

const fetchCitySearch = async (
    query: string,
): Promise<LocationResult[]> => {
    const response = await fetch(
        `/api/geocoding?query=${encodeURIComponent(query)}`,
    );

    const result =
        (await response.json()) as GeocodingApiResponse;

    if (!response.ok || !result.success) {
        throw new Error(
            result.error ?? "خطا در جستجوی شهر.",
        );
    }

    return result.data;
};

export function useCitySearch(query: string) {
    const normalizedQuery = query.trim();

    return useQuery({
        queryKey: ["city-search", normalizedQuery],
        queryFn: () => fetchCitySearch(normalizedQuery),
        enabled: normalizedQuery.length >= 2,
        staleTime: 30 * 60 * 1000,
        gcTime: 60 * 60 * 1000,
        retry: 1,
        refetchOnWindowFocus: false,
    });
}