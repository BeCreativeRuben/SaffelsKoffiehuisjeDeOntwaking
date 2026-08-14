export const site = {
  name: "’t Zaffels Koffiehuisje",
  nestName: "’t Zaffels Nest",
  tagline: "Een huiselijk zaaltje om samen te komen.",
  capacity: 35,
  description:
    "Familiaal, gezellig en zonder poespas. Eerlijke producten, een goede keuken, en ruimte om mooie herinneringen te maken.",
  /** Only set via env — never invent contact details in code. */
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? process.env.OWNER_EMAIL ?? "",
  phone: process.env.NEXT_PUBLIC_PHONE ?? "",
  address: process.env.NEXT_PUBLIC_ADDRESS ?? "",
} as const;
