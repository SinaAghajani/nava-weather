import Link from "next/link";
import { CloudOff, ArrowRight } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";

export default function NotFound() {
  return (
    <PageContainer>
      <div className="flex min-h-[65vh] items-center justify-center">
        <div className="max-w-md text-center">
          <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-muted">
            <CloudOff className="size-7 text-muted-foreground" />
          </div>

          <p className="mt-6 text-sm font-medium text-primary">Nava Weather</p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight">
            شهر پیدا نشد
          </h1>

          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            شهر موردنظر پیدا نشد یا اطلاعات آب‌وهوای آن در دسترس نیست.
          </p>

          <Link
            href="/search"
            className="mt-6 inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            جستجوی شهر
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </PageContainer>
  );
}
