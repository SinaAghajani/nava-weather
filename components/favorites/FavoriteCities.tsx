"use client";

import { Heart } from "lucide-react";
import { useFavoritesStore } from "@/store/favorites.store";
import { FavoriteCityCard } from "./FavoriteCityCard";
import { EmptyState } from "@/components/ui/EmptyState";

export function FavoriteCities() {
  const cities = useFavoritesStore((state) => state.cities);

  if (!cities.length) {
    return (
      <EmptyState
        icon={Heart}
        title="No favorite cities"
        description="Add your favorite cities to access their weather quickly."
      />
    );
  }

  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {cities.map((city) => (
        <FavoriteCityCard key={city.id} city={city} />
      ))}
    </section>
  );
}
