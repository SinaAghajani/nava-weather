import { searchLocations } from "@/lib/api/geocoding-api";
import { citySearchSchema } from "@/lib/validations";
import type { LocationResult } from "@/types/location";

export const searchCities = async (
    query: string,
): Promise<LocationResult[]> => {
    const validatedQuery = citySearchSchema.parse(query);

    return searchLocations(validatedQuery);
};