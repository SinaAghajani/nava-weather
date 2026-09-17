"use client";

import Link from "next/link";
import { CloudSun, Heart, Search, Settings } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navigation = [
  { href: "/", label: "خانه", icon: CloudSun },
  { href: "/search", label: "جستجو", icon: Search },
  { href: "/favorites", label: "موردعلاقه‌ها", icon: Heart },
  { href: "/settings", label: "تنظیمات", icon: Settings },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 hidden border-b border-border/60 bg-background/85 backdrop-blur-xl md:block">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-80"
        >
          <span className="flex size-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
            <CloudSun className="size-5" />
          </span>

          <div className="leading-none">
            <span className="block text-base font-bold tracking-tight">
              Nava
            </span>
            <span className="mt-1 block text-[11px] text-muted-foreground">
              Weather
            </span>
          </div>
        </Link>

        <nav className="flex items-center gap-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex h-10 items-center gap-2 rounded-xl px-4 text-sm font-medium transition-all",
                  active
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                <Icon className="size-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
