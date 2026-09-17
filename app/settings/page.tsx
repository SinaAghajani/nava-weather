import PageContainer from "@/components/layout/PageContainer";
import { UnitSelector } from "@/components/settings/UnitSelector";
import { ThemeSelector } from "@/components/settings/ThemeSelector";
import { LanguageSelector } from "@/components/settings/LanguageSelector";

export const metadata = {
  title: "تنظیمات | Nava Weather",
  description: "تنظیمات نمایش و واحدهای Nava Weather",
};

export default function SettingsPage() {
  return (
    <PageContainer>
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <p className="text-sm font-medium text-primary">Nava Weather</p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            تنظیمات
          </h1>

          <p className="mt-3 text-sm text-muted-foreground">
            تجربه Nava Weather را مطابق سلیقه خود تنظیم کنید.
          </p>
        </div>

        <div className="space-y-4">
          <section className="rounded-3xl border border-border/70 bg-card p-5 sm:p-6">
            <div className="mb-5">
              <h2 className="text-base font-bold">واحدها</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                واحد نمایش دما، سرعت باد و سایر اطلاعات
              </p>
            </div>

            <UnitSelector />
          </section>

          <section className="rounded-3xl border border-border/70 bg-card p-5 sm:p-6">
            <div className="mb-5">
              <h2 className="text-base font-bold">ظاهر</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                نحوه نمایش رابط کاربری را انتخاب کنید.
              </p>
            </div>

            <ThemeSelector />
          </section>

          <section className="rounded-3xl border border-border/70 bg-card p-5 sm:p-6">
            <div className="mb-5">
              <h2 className="text-base font-bold">زبان</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                زبان رابط کاربری برنامه
              </p>
            </div>

            <LanguageSelector />
          </section>
        </div>
      </div>
    </PageContainer>
  );
}
