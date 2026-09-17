import { LocateFixed } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";
import SearchBar from "@/components/search/SearchBar";
import LocationButton from "@/components/search/LocationButton";

export const metadata = {
  title: "جستجوی شهر | Nava Weather",
  description: "جستجوی شهر و مشاهده وضعیت آب‌وهوا",
};

export default function SearchPage() {
  return (
    <PageContainer>
      <div className="mx-auto max-w-2xl">
        <div className="mb-8">
          <p className="text-sm font-medium text-primary">Nava Weather</p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            جستجوی شهر
          </h1>

          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            نام شهر موردنظر خود را جستجو کنید و وضعیت آب‌وهوای آن را ببینید.
          </p>
        </div>

        <div className="space-y-4">
          <SearchBar autoFocus />

          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs text-muted-foreground">یا</span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <LocationButton />

          <div className="flex items-start gap-3 rounded-2xl border border-border/70 bg-muted/40 p-4">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-background">
              <LocateFixed className="size-4 text-muted-foreground" />
            </span>

            <div>
              <p className="text-sm font-medium">استفاده از موقعیت فعلی</p>

              <p className="mt-1 text-xs leading-5 text-muted-foreground">
                با اجازه شما، موقعیت فعلی دستگاه برای نمایش دقیق‌تر آب‌وهوا
                استفاده می‌شود.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
