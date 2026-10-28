export type PhotoMeta = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

/**
 * Real photos from the public Facebook page, via
 * github.com/BeCreativeRuben/saffels-koffiehuisje-assets.
 * Stored here resized (never enlarged) so low-resolution originals
 * stay small on the page and the site does not depend on GitHub at runtime.
 * No AI-generated hf-* images.
 */
export const photos = {
  hoeve: {
    src: "/photos/hoeve-01.jpg",
    alt: "Hoeve in Zaffelare met blauwe luiken, blauweregen, een grindpad en een tuin.",
    width: 1600,
    height: 1200,
  },
  zaal: {
    src: "/photos/interieur-08.jpg",
    alt: "De zaal, met gele rozen op een houten tafel, een houten kast en stoelen langs de muur.",
    width: 1280,
    height: 1280,
  },
  ontbijt: {
    src: "/photos/ontbijt-lange-tafel-01.jpg",
    alt: "Ontbijt of brunch, uitgestald over de lange tafel.",
    width: 1200,
    height: 1200,
  },
  terras: {
    src: "/photos/terras-tafel-01.jpg",
    alt: "Gedekte tafel op het terras, tegen een bakstenen muur met blauwe luiken.",
    width: 1100,
    height: 1100,
  },
  taart: {
    src: "/photos/taart-01.jpg",
    alt: "Een stuk chocoladetaart op een bord.",
    width: 1000,
    height: 1000,
  },
  kamer: {
    src: "/photos/interieur-07.jpg",
    alt: "Donkere, gezellige kamer met een kandelaar en witte bloemen.",
    width: 1000,
    height: 1000,
  },
  mokken: {
    src: "/photos/koffiemokken-01.jpg",
    alt: "Twee koffiemokken met de tekst Coffee First.",
    width: 900,
    height: 900,
  },
  avond: {
    src: "/photos/interieur-01.jpg",
    alt: "Avondtafel voor twee, met theepot, een lamp en planten.",
    width: 640,
    height: 640,
  },
  zaalBloemen: {
    src: "/photos/interieur-02.jpg",
    alt: "De zaal met bloemen op de tafel en stoelen errond.",
    width: 640,
    height: 640,
  },
  lamp: {
    src: "/photos/interieur-04.jpg",
    alt: "Lange tafel bij lamp- en kaarslicht.",
    width: 640,
    height: 640,
  },
  baileys: {
    src: "/photos/koffie-baileys-01.jpg",
    alt: "IJskoffie met slagroom, met Baileys.",
    width: 720,
    height: 720,
  },
  siropen: {
    src: "/photos/koffiebar-siropen-01.jpg",
    alt: "Flessen siroop en kopjes op de koffiebar.",
    width: 720,
    height: 720,
  },
  pannenkoek: {
    src: "/photos/lunch-pannenkoek-01.jpg",
    alt: "Hartige pannenkoek met zalm en salade.",
    width: 720,
    height: 720,
  },
  soep: {
    src: "/photos/soep-01.jpg",
    alt: "Kom soep met croutons.",
    width: 640,
    height: 640,
  },
  oliebollen: {
    src: "/photos/oliebollen-01.jpg",
    alt: "Oliebollen met sterretjes, rond nieuwjaar.",
    width: 720,
    height: 720,
  },
  wafels: {
    src: "/photos/gebak-wafels-01.jpg",
    alt: "Brusselse wafels met poedersuiker.",
    width: 472,
    height: 472,
  },
  crumble: {
    src: "/photos/dessert-crumble-01.jpg",
    alt: "Een potje appelcrumble.",
    width: 490,
    height: 490,
  },
  thee: {
    src: "/photos/theepot-terras-01.jpg",
    alt: "Glazen theepot met vruchtenthee en een stuk gebak, buiten.",
    width: 520,
    height: 520,
  },
  tuinbord: {
    src: "/photos/tuin-bord-01.jpg",
    alt: "Houten bord in de tuin met de tekst plaats om te zijn.",
    width: 520,
    height: 520,
  },
  straatbord: {
    src: "/photos/bord-buiten-01.jpg",
    alt: "Bord aan de straat met de naam, het telefoonnummer en het aanbod.",
    width: 700,
    height: 700,
  },
  kaars: {
    src: "/photos/interieur-kaarslicht-01.jpg",
    alt: "Hoek van de zaal bij kaarslicht.",
    width: 520,
    height: 520,
  },
  soepTerras: {
    src: "/photos/soep-terras-01.jpg",
    alt: "Kom soep op een bank op het terras.",
    width: 700,
    height: 700,
  },
} as const satisfies Record<string, PhotoMeta>;
