"use client";

import { Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useCitySearch } from "@/hooks/useCitySearch";
import SearchResults from "./SearchResults";

interface SearchBarProps {
  autoFocus?: boolean;
  showResults?: boolean;
  onSelect?: () => void;
}

export default function SearchBar({
  autoFocus = false,
  showResults = true,
  onSelect,
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setDebouncedQuery(query.trim());
    }, 350);

    return () => window.clearTimeout(timeout);
  }, [query]);

  const { data, isLoading } = useCitySearch(debouncedQuery);

  const clear = () => {
    setQuery("");
    setDebouncedQuery("");
  };

  return (
    <div className="relative w-full">
      <div className="flex h-14 items-center gap-3 rounded-2xl border border-border/70 bg-card px-4 shadow-sm transition-all focus-within:border-primary/50 focus-within:ring-4 focus-within:ring-primary/10">
        <Search className="size-5 shrink-0 text-muted-foreground" />

        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          autoFocus={autoFocus}
          placeholder="جستجوی شهر..."
          aria-label="جستجوی شهر"
          className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
        />

        {query && (
          <button
            type="button"
            onClick={clear}
            aria-label="پاک کردن جستجو"
            className="flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="size-4" />
          </button>
        )}
      </div>

      {showResults && debouncedQuery.length >= 2 && (
        <div className="mt-3">
          <SearchResults
            results={data ?? []}
            loading={isLoading}
            query={debouncedQuery}
            onSelect={onSelect}
          />
        </div>
      )}
    </div>
  );
}
