import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface WeatherHighlightCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  description?: string;
  className?: string;
}

export default function WeatherHighlightCard({
  icon: Icon,
  label,
  value,
  description,
  className,
}: WeatherHighlightCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border/70 bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-md",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm font-medium text-muted-foreground">
          {label}
        </span>

        <span className="flex size-9 items-center justify-center rounded-xl bg-muted">
          <Icon className="size-4" />
        </span>
      </div>

      <p className="mt-5 text-2xl font-bold tracking-tight">{value}</p>

      {description && (
        <p className="mt-1 text-xs text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
