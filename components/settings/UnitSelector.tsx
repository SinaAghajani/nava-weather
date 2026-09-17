"use client";

import { useSettingsStore } from "@/store/settings.store";

export function UnitSelector() {
  const temperatureUnit = useSettingsStore((state) => state.temperatureUnit);
  const setTemperatureUnit = useSettingsStore(
    (state) => state.setTemperatureUnit,
  );

  return (
    <div className="space-y-3">
      <div>
        <h3 className="font-medium">Temperature unit</h3>
        <p className="text-sm text-muted-foreground">
          Choose how temperatures are displayed.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => setTemperatureUnit("celsius")}
          className={`rounded-xl border px-4 py-3 text-sm font-medium transition-colors ${
            temperatureUnit === "celsius"
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-background hover:bg-muted"
          }`}
        >
          Celsius (°C)
        </button>

        <button
          type="button"
          onClick={() => setTemperatureUnit("fahrenheit")}
          className={`rounded-xl border px-4 py-3 text-sm font-medium transition-colors ${
            temperatureUnit === "fahrenheit"
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-background hover:bg-muted"
          }`}
        >
          Fahrenheit (°F)
        </button>
      </div>
    </div>
  );
}
