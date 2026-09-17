import { create } from "zustand";

export type TemperatureUnit = "celsius" | "fahrenheit";
export type WindUnit = "kmh" | "mph";
export type VisibilityUnit = "km" | "mi";

interface SettingsState {
    temperatureUnit: TemperatureUnit;
    windUnit: WindUnit;
    visibilityUnit: VisibilityUnit;
    language: "en" | "fa";
    setTemperatureUnit: (unit: TemperatureUnit) => void;
    setWindUnit: (unit: WindUnit) => void;
    setVisibilityUnit: (unit: VisibilityUnit) => void;
    setLanguage: (language: "en" | "fa") => void;
    reset: () => void;
}

const initialState = {
    temperatureUnit: "celsius" as TemperatureUnit,
    windUnit: "kmh" as WindUnit,
    visibilityUnit: "km" as VisibilityUnit,
    language: "en" as const,
};

export const useSettingsStore = create<SettingsState>((set) => ({
    ...initialState,

    setTemperatureUnit: (temperatureUnit) =>
        set({ temperatureUnit }),

    setWindUnit: (windUnit) =>
        set({ windUnit }),

    setVisibilityUnit: (visibilityUnit) =>
        set({ visibilityUnit }),

    setLanguage: (language) =>
        set({ language }),

    reset: () =>
        set(initialState),
}));