import Image from "next/image";
import { getWeatherIcon } from "@/lib/weather/icons";
import type { WeatherCondition } from "@/lib/weather/conditions";
import { cn } from "@/lib/utils";

interface WeatherIconProps {
  condition: WeatherCondition;
  size?: number;
  className?: string;
  priority?: boolean;
}

export default function WeatherIcon({
  condition,
  size = 96,
  className,
  priority = false,
}: WeatherIconProps) {
  return (
    <Image
      src={getWeatherIcon(condition)}
      alt={condition}
      width={size}
      height={size}
      priority={priority}
      className={cn("object-contain", className)}
    />
  );
}
