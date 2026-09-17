"use client";

import { SearchX } from "lucide-react";
import type { LocationResult } from "@/types/location";
import SearchResultItem from "./SearchResultItem";

interface SearchResultsProps {
  results: LocationResult[];
  loading?: boolean;
  query?: string;
  onSelect?: () => void;
}

export default function SearchResults({
  results,
  loading = false,
  query,
  onSelect,
}: SearchResultsProps) {
  if (loading) {
    return (
      <div className="space-y-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="h-18 animate-pulse rounded-2xl border border-border/60 bg-muted/50"
          />
        ))}
      </div>
    );
  }

  if (!results.length && query) {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-border p-10 text-center">
        <span className="flex size-12 items-center justify-center rounded-2xl bg-muted">
          <SearchX className="size-5 text-muted-foreground" />
        </span>

        <h3 className="mt-4 font-semibold">شهری پیدا نشد</h3>

        <p className="mt-1 max-w-sm text-sm text-muted-foreground">
          برای «{query}» نتیجه‌ای پیدا نشد. نام شهر را با املای دیگری امتحان
          کنید.
        </p>
      </div>
    );
  }

  if (!results.length) return null;

  return (
    <div className="space-y-2">
      {results.map((location) => (
        <SearchResultItem
          key={`${location.id}-${location.latitude}-${location.longitude}`}
          location={location}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
