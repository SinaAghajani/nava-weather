import PageContainer from "@/components/layout/PageContainer";
import { FavoriteCities } from "@/components/favorites/FavoriteCities";

export const metadata = {
  title: "شهرهای موردعلاقه | Nava Weather",
  description: "مدیریت شهرهای موردعلاقه در Nava Weather",
};

export default function FavoritesPage() {
  return (
    <PageContainer size="wide">
      <div className="mb-8">
        <p className="text-sm font-medium text-primary">Nava Weather</p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          شهرهای موردعلاقه
        </h1>

        <p className="mt-3 text-sm text-muted-foreground">
          شهرهایی که برای دسترسی سریع ذخیره کرده‌اید.
        </p>
      </div>

      <FavoriteCities />
    </PageContainer>
  );
}
