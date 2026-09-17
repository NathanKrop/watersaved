import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: "variable",
  axes: ["opsz", "SOFT", "WONK"],
});

const workSans = Work_Sans({
  variable: "--font-worksans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Save Kenya Water Towers — Protecting the source",
    template: "%s — Save Kenya Water Towers",
  },
  description:
    "A Kenyan NGO restoring the montane forests of Uasin Gishu, Elgeyo Marakwet, Baringo, West Pokot, Trans Nzoia and Nakuru — the water towers that feed the rivers over seventy percent of Kenya depends on.",
  metadataBase: new URL("https://www.savekenyawatertowers.org"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${workSans.variable} antialiased`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-forest-900 focus:text-paper focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
