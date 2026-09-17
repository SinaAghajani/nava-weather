"use client";

import { Loader2, LocateFixed } from "lucide-react";
import { useRouter } from "next/navigation";
import { useGeolocation } from "@/hooks/useGeolocation";

interface LocationButtonProps {
  className?: string;
}

export default function LocationButton({
  className = "",
}: LocationButtonProps) {
  const router = useRouter();
  const { requestLocation, isLoading, error } = useGeolocation();

  const handleLocation = async () => {
    const coordinates = await requestLocation();

    if (!coordinates) {
      return;
    }

    router.push(
      `/city/current?lat=${coordinates.latitude}&lon=${coordinates.longitude}`,
    );
  };

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <button
        type="button"
        onClick={handleLocation}
        disabled={isLoading}
        className="flex h-12 items-center justify-center gap-2 rounded-2xl border border-border/70 bg-card px-5 text-sm font-medium transition-all hover:border-primary/40 hover:bg-muted disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isLoading ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          <LocateFixed className="size-4" />
        )}

        {isLoading ? "در حال دریافت موقعیت..." : "موقعیت فعلی من"}
      </button>

      {error && <p className="text-center text-xs text-destructive">{error}</p>}
    </div>
  );
}
