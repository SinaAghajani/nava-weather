"use client";

import { ArrowUpRight, MapPin } from "lucide-react";
import Link from "next/link";
import type { LocationResult } from "@/types/location";

interface SearchResultItemProps {
  location: LocationResult;
  onSelect?: () => void;
}

export default function SearchResultItem({
  location,
  onSelect,
}: SearchResultItemProps) {
  const cityPath = encodeURIComponent(location.name.toLowerCase());

  const cityUrl = `/city/${cityPath}?lat=${location.latitude}&lon=${location.longitude}`;

  return (
    <Link
      href={cityUrl}
      onClick={onSelect}
      className="group flex items-center gap-4 rounded-2xl border border-border/70 bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
    >
      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-muted">
        <MapPin className="size-4 text-muted-foreground" />
      </span>

      <div className="min-w-0 flex-1">
        <p className="truncate font-semibold">{location.name}</p>

        <p className="mt-1 truncate text-xs text-muted-foreground">
          {[location.admin1, location.country].filter(Boolean).join("، ")}
        </p>
      </div>

      <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </Link>
  );
}
