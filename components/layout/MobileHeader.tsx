"use client";

import Link from "next/link";
import { CloudSun, Heart, Menu, Search, Settings, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navigation = [
  { href: "/", label: "خانه", icon: CloudSun },
  { href: "/search", label: "جستجوی شهر", icon: Search },
  { href: "/favorites", label: "موردعلاقه‌ها", icon: Heart },
  { href: "/settings", label: "تنظیمات", icon: Settings },
];

export default function MobileHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-xl md:hidden">
      <div className="flex h-16 items-center justify-between px-4">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2.5"
        >
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <CloudSun className="size-5" />
          </span>

          <div className="leading-none">
            <span className="block text-sm font-bold">Nava</span>
            <span className="mt-0.5 block text-[10px] text-muted-foreground">
              Weather
            </span>
          </div>
        </Link>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "بستن منو" : "باز کردن منو"}
          aria-expanded={open}
          className="flex size-10 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/60 px-4 py-3">
          <div className="space-y-1">
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
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex h-11 items-center gap-3 rounded-xl px-4 text-sm font-medium transition-colors",
                    active
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  )}
                >
                  <Icon className="size-4" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
