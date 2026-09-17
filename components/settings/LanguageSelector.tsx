"use client";

import { useSettingsStore } from "@/store/settings.store";

export function LanguageSelector() {
  const language = useSettingsStore((state) => state.language);
  const setLanguage = useSettingsStore((state) => state.setLanguage);

  return (
    <div className="space-y-3">
      <div>
        <h3 className="font-medium">Language</h3>
        <p className="text-sm text-muted-foreground">
          Select the application language.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => setLanguage("en")}
          className={`rounded-xl border px-4 py-3 text-sm font-medium transition-colors ${
            language === "en"
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-background hover:bg-muted"
          }`}
        >
          English
        </button>

        <button
          type="button"
          onClick={() => setLanguage("fa")}
          className={`rounded-xl border px-4 py-3 text-sm font-medium transition-colors ${
            language === "fa"
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-background hover:bg-muted"
          }`}
        >
          فارسی
        </button>
      </div>
    </div>
  );
}
