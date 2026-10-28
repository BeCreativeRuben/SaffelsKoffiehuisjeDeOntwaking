import type { Metadata, Viewport } from "next";
import { Atkinson_Hyperlegible, Lora, Patrick_Hand } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { absoluteSiteUrl, buildJsonLd, site } from "@/lib/site";
import "./globals.css";

const display = Lora({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: "500",
  variable: "--font-display",
});

const sans = Atkinson_Hyperlegible({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-sans",
});

const note = Patrick_Hand({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-note",
});

const siteUrl = absoluteSiteUrl();

export const viewport: Viewport = {
  themeColor: "#2c241c",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} | ${site.place}`,
    template: `%s · ${site.shortName}`,
  },
  description: site.description,
  applicationName: site.shortName,
  keywords: [
    "Saffels koffiehuisje",
    "De Ontwaking",
    "Zaffelare",
    "Lochristi",
    "koffiehuisje",
    "zaal huren",
    "koffietafel",
    "ontbijt",
  ],
  authors: [{ name: site.shortName }],
  robots: { index: false, follow: false },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: "nl_BE",
    siteName: site.name,
    title: `${site.name} | ${site.place}`,
    description: site.description,
    images: [
      {
        url: "/photos/hoeve-01.jpg",
        width: 1600,
        height: 1200,
        alt: "Hoeve in Zaffelare met blauwe luiken, blauweregen en een tuin.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.place}`,
    description: site.description,
    images: ["/photos/hoeve-01.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = buildJsonLd(siteUrl);

  return (
    <html
      lang="nl-BE"
      className={`${display.variable} ${sans.variable} ${note.variable} h-full`}
    >
      <body className="flex min-h-full flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <SiteHeader />
        <main id="inhoud" tabIndex={-1} className="page flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
