"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";

const themes = [
  {
    value: "light" as const,
    label: "Light",
    icon: Sun,
  },
  {
    value: "dark" as const,
    label: "Dark",
    icon: Moon,
  },
  {
    value: "system" as const,
    label: "System",
    icon: Monitor,
  },
];

export function ThemeSelector() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="space-y-3">
      <div>
        <h3 className="font-medium">Appearance</h3>
        <p className="text-sm text-muted-foreground">
          Choose your preferred appearance.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {themes.map(({ value, label, icon: Icon }) => (
          <button
            key={value}
            type="button"
            onClick={() => setTheme(value)}
            className={`flex flex-col items-center gap-2 rounded-xl border px-3 py-4 text-sm font-medium transition-colors ${
              theme === value
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-background hover:bg-muted"
            }`}
          >
            <Icon className="size-5" />
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
