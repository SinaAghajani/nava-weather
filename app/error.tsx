"use client";

import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ErrorPageProps {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}

export default function ErrorPage({ reset }: ErrorPageProps) {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4 py-12">
      <div className="w-full max-w-md text-center">
        <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-destructive/10 text-destructive">
          <AlertTriangle className="size-7" />
        </div>

        <h1 className="mt-6 text-2xl font-bold">مشکلی پیش آمده است</h1>

        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          هنگام دریافت اطلاعات یا نمایش این صفحه خطایی رخ داد. دوباره تلاش کنید.
        </p>

        <Button type="button" onClick={reset} className="mt-6 gap-2">
          <RefreshCw className="size-4" />
          تلاش دوباره
        </Button>
      </div>
    </main>
  );
}
