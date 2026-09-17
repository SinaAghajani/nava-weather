"use client";

import Link from "next/link";
import { ArrowUpRight, Heart, MapPin, Trash2 } from "lucide-react";
import type { FavoriteCity } from "@/types/location";
import { useFavoritesStore } from "@/store/favorites.store";
import { Card } from "@/components/ui/Card";

interface FavoriteCityCardProps {
  city: FavoriteCity;
}

export function FavoriteCityCard({ city }: FavoriteCityCardProps) {
  const removeCity = useFavoritesStore((state) => state.removeCity);

  const cityPath = encodeURIComponent(city.name.toLowerCase());

  const cityUrl = `/city/${cityPath}?lat=${city.latitude}&lon=${city.longitude}`;

  return (
    <Card className="group relative overflow-hidden p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <MapPin className="size-5" />
          </div>

          <div className="min-w-0">
            <h3 className="truncate font-semibold">{city.name}</h3>

            <p className="truncate text-sm text-muted-foreground">
              {city.country}
            </p>
          </div>
        </div>

        <button
          type="button"
          aria-label={`حذف ${city.name} از موردعلاقه‌ها`}
          onClick={() => {
            removeCity(city.id);
          }}
          className="flex size-9 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
        >
          <Trash2 className="size-4" />
        </button>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
        <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
          <Heart className="size-3.5 fill-current" />
          شهر موردعلاقه
        </span>

        <Link
          href={cityUrl}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-opacity hover:opacity-80"
        >
          مشاهده آب‌وهوا
          <ArrowUpRight className="size-4" />
        </Link>
      </div>
    </Card>
  );
}
