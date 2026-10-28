export const site = {
  name: "Saffels koffiehuisje – De Ontwaking",
  shortName: "Saffels koffiehuisje",
  subtitle: "De Ontwaking",
  place: "Zaffelare",
  municipality: "Lochristi",
  region: "Oost-Vlaanderen",
  country: "BE",
  /** Verified on the roadside sign. */
  phoneDisplay: "0493 64 35 15",
  phoneTel: "+32493643515",
  facebook: "https://www.facebook.com/profile.php?id=100083056306047",
  facebookName: "Saffels koffiehuisje - De ontwaking",
  capacity: 35,
  nestName: "’t Zaffels Nest",
  signLine: "Kleinschalig & in warme huiskamersfeer",
  description:
    "Kleinschalig koffiehuisje in een hoeve in Zaffelare (Lochristi). Een zaaltje voor ongeveer 35 personen, koffie en gebak, ontbijt na reservatie en een beperkte lunch.",
  /** Public contact details only. Never fall back to the private owner inbox. */
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() ?? "",
  address: process.env.NEXT_PUBLIC_ADDRESS?.trim() ?? "",
  hours: process.env.NEXT_PUBLIC_OPENING_HOURS?.trim() ?? "",
} as const;

export function absoluteSiteUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

export function buildJsonLd(url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "@id": `${url}#business`,
    name: site.name,
    alternateName: "’t Zaffels Koffiehuisje",
    description: site.description,
    url,
    telephone: site.phoneTel,
    email: site.email || "[e-mailadres volgt]",
    image: [`${url}/photos/hoeve-01.jpg`, `${url}/photos/interieur-08.jpg`],
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address || "[adres volgt]",
      addressLocality: site.place,
      addressRegion: site.region,
      addressCountry: site.country,
    },
    areaServed: [site.place, site.municipality, "Gent", "Waasland"],
    sameAs: [site.facebook],
    openingHours: site.hours || "[openingsuren volgen]",
    priceRange: "[prijzen volgen]",
    servesCuisine: ["Koffie", "Gebak", "Ontbijt", "Lunch"],
    maximumAttendeeCapacity: site.capacity,
    currenciesAccepted: "EUR",
    publicAccess: true,
    knowsLanguage: "nl-BE",
  };
}
