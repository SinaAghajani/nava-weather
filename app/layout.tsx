import type { Metadata, Viewport } from "next";
import { Toaster } from "sonner";
import Header from "@/components/layout/Header";
import MobileHeader from "@/components/layout/MobileHeader";
import Navigation from "@/components/layout/Navigation";
import { QueryProvider } from "@/components/providers/QueryProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { siteConfig } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [
    {
      name: siteConfig.creator,
    },
  ],
  creator: siteConfig.creator,
  applicationName: siteConfig.name,
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/icons/app/favicon.svg",
    shortcut: "/icons/app/favicon.svg",
    apple: "/icons/app/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider>
          <QueryProvider>
            <Header />
            <MobileHeader />

            <div className="min-h-[calc(100vh-4rem)] pb-20 md:pb-0">
              {children}
              <Toaster position="bottom-right" richColors closeButton />
            </div>

            <Navigation />
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
