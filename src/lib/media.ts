/**
 * Temporary media until Higgsfield Video Agent stills land.
 * Swap `higgsfield` paths in when those exports are ready.
 */
export const photos = {
  hero: {
    src: "/photos/lochristinaar-hero.jpg",
    alt: "Interieur van ’t Zaffels Koffiehuisje — lange tafels, hout en olijfgroene muren",
    credit: "Foto: Lochristinaar (tijdelijk)",
  },
  overzicht: {
    src: "/photos/zaal-overzicht.jpg",
    alt: "Overzicht van de zaal met houten tafels en bar",
  },
  tafel: {
    src: "/photos/sfeer-tafel.jpg",
    alt: "Gedekte tafel met koffieservies",
  },
  servies: {
    src: "/photos/sfeer-servies.jpg",
    alt: "Koffiekan en kopjes op de tafel",
  },
  zithoek: {
    src: "/photos/sfeer-zithoek.jpg",
    alt: "Zithoek en bar in de zaal",
  },
} as const;

/** Drop Higgsfield still paths here when Video Agent exports exist. */
export const higgsfieldStills: { src: string; alt: string }[] = [];
