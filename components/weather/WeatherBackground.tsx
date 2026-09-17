import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  getWeatherTheme,
  weatherBackgroundImages,
  weatherThemeClasses,
} from "@/lib/weather/background";
import type { WeatherCondition } from "@/lib/weather/conditions";

interface WeatherBackgroundProps {
  condition: WeatherCondition;
  isDaytime?: boolean;
  children: ReactNode;
  className?: string;
}

export default function WeatherBackground({
  condition,
  isDaytime = true,
  children,
  className,
}: WeatherBackgroundProps) {
  const theme = getWeatherTheme(condition, isDaytime);
  const backgroundImage = weatherBackgroundImages[theme];

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden rounded-3xl border border-white/20 shadow-sm",
        weatherThemeClasses[theme],
        className,
      )}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-black/20" />

      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/15 via-transparent to-black/20" />

      <div className="relative">{children}</div>
    </section>
  );
}
