"use client";

import { useCallback, useState } from "react";
import { getCurrentLocation } from "@/services/location.service";
import type { Coordinates } from "@/types/location";

interface UseGeolocationResult {
    location: Coordinates | null;
    isLoading: boolean;
    error: string | null;
    requestLocation: () => Promise<Coordinates | null>;
}

export function useGeolocation(): UseGeolocationResult {
    const [location, setLocation] = useState<Coordinates | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const requestLocation = useCallback(async () => {
        setIsLoading(true);
        setError(null);

        try {
            const coordinates = await getCurrentLocation();

            setLocation(coordinates);

            return coordinates;
        } catch (error) {
            const message =
                error instanceof GeolocationPositionError
                    ? getGeolocationErrorMessage(error.code)
                    : "Unable to determine your location.";

            setError(message);

            return null;
        } finally {
            setIsLoading(false);
        }
    }, []);

    return {
        location,
        isLoading,
        error,
        requestLocation,
    };
}

const getGeolocationErrorMessage = (
    code: number,
): string => {
    switch (code) {
        case 1:
            return "Location permission was denied.";

        case 2:
            return "Your location could not be determined.";

        case 3:
            return "Location request timed out.";

        default:
            return "Unable to determine your location.";
    }
};