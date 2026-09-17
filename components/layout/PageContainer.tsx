import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
  size?: "default" | "wide" | "full";
}

const sizes = {
  default: "max-w-6xl",
  wide: "max-w-7xl",
  full: "max-w-none",
};

export default function PageContainer({
  children,
  className,
  size = "default",
}: PageContainerProps) {
  return (
    <main
      className={cn(
        "mx-auto w-full px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10",
        sizes[size],
        className,
      )}
    >
      {children}
    </main>
  );
}
