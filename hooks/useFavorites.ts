"use client";

import { useCallback } from "react";
import { useFavoritesStore } from "@/store/favorites.store";
import type { FavoriteCity } from "@/types/location";

export function useFavorites() {
    const cities = useFavoritesStore((state) => state.cities);
    const addCity = useFavoritesStore((state) => state.addCity);
    const removeCity = useFavoritesStore(
        (state) => state.removeCity,
    );
    const toggleCity = useFavoritesStore(
        (state) => state.toggleCity,
    );
    const isFavorite = useFavoritesStore(
        (state) => state.isFavorite,
    );

    const addFavorite = useCallback(
        (city: FavoriteCity) => {
            addCity(city);
        },
        [addCity],
    );

    const removeFavorite = useCallback(
        (id: string) => {
            removeCity(id);
        },
        [removeCity],
    );

    const toggleFavorite = useCallback(
        (city: FavoriteCity) => {
            toggleCity(city);
        },
        [toggleCity],
    );

    const checkFavorite = useCallback(
        (id: string) => isFavorite(id),
        [isFavorite],
    );

    return {
        cities,
        addFavorite,
        removeFavorite,
        toggleFavorite,
        isFavorite: checkFavorite,
    };
}