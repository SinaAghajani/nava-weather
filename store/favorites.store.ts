import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { FavoriteCity } from "@/types/location";

interface FavoritesState {
    cities: FavoriteCity[];
    addCity: (city: FavoriteCity) => void;
    removeCity: (id: string) => void;
    toggleCity: (city: FavoriteCity) => void;
    isFavorite: (id: string) => boolean;
    clearCities: () => void;
}

export const useFavoritesStore = create<FavoritesState>()(
    persist(
        (set, get) => ({
            cities: [],

            addCity: (city) =>
                set((state) => {
                    if (state.cities.some((item) => item.id === city.id)) {
                        return state;
                    }

                    return {
                        cities: [...state.cities, city],
                    };
                }),

            removeCity: (id) =>
                set((state) => ({
                    cities: state.cities.filter((city) => city.id !== id),
                })),

            toggleCity: (city) => {
                if (get().isFavorite(city.id)) {
                    get().removeCity(city.id);
                    return;
                }

                get().addCity(city);
            },

            isFavorite: (id) =>
                get().cities.some((city) => city.id === id),

            clearCities: () =>
                set({
                    cities: [],
                }),
        }),
        {
            name: "nava-weather-favorites",
        },
    ),
);