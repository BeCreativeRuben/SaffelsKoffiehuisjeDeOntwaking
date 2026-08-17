/**
 * Venue photos.
 *
 * "real" photos (hoeve, interieur, ontbijt, terras) are the owner's own shots.
 * "sfeer" photos are close-up crops sourced from editorial photography.
 * "hf" photos are Higgsfield Video Agent stills (supporting / atmosphere only).
 *
 * To swap in the owner's originals, drop the files listed below into
 * public/images/ and they will be picked up automatically:
 *   hoeve-01.jpg, interieur-08.jpg, ontbijt-lange-tafel-01.jpg,
 *   terras-tafel-01.jpg, taart-01.jpg, hf-01-table.jpg
 */
export const photos = {
  /** Full zaal overview — long communal table, olive walls, chandelier. */
  hero: {
    src: "/images/hf-01-table.jpg",
    alt: "Overzicht van de zaal met lange houten tafel, olijfgroene muren en smeedijzeren kroonluchter",
  },
  /** Farmhouse exterior — brick building, blue shutters, garden path. */
  hoeve: {
    src: "/images/hoeve-01.jpg",
    alt: "De hoeve van 't Zaffels Koffiehuisje — bakstenen gevel met blauwe luiken en tuin",
  },
  /** Warm interior — wooden table, vintage furniture, striped door. */
  interieur: {
    src: "/images/interieur-08.jpg",
    alt: "Huiselijk interieur met houten tafel, antiek servies en olijfgroene muren",
  },
  /** Breakfast setting on the long table. */
  ontbijt: {
    src: "/images/ontbijt-lange-tafel-01.jpg",
    alt: "Ontbijttafel met koffie, broodjes en vers beleg",
  },
  /** Terrace table set for coffee — china, building in background. */
  terras: {
    src: "/images/terras-tafel-01.jpg",
    alt: "Gedekte terrastafel met bloemig servies en de hoeve op de achtergrond",
  },
  /** Homemade cake / chocolate tart close-up. */
  taart: {
    src: "/images/taart-01.jpg",
    alt: "Huisgemaakt taartje — eerlijk en met smaak",
  },
  /** Zaal overview from table angle — same room, different perspective. */
  overzicht: {
    src: "/photos/zaal-overzicht.jpg",
    alt: "Overzicht van de zaal met houten tafels en bar",
  },
  /** Close-up of tables with floral china. */
  tafel: {
    src: "/photos/sfeer-tafel.jpg",
    alt: "Gedekte tafel met koffieservies",
  },
  /** Tables and china from wider angle. */
  servies: {
    src: "/photos/sfeer-servies.jpg",
    alt: "Koffiekan en kopjes op de tafel",
  },
  /** Zithoek — lounge area with paintings and vintage sofa. */
  zithoek: {
    src: "/photos/sfeer-zithoek.jpg",
    alt: "Zithoek met schilderij, retro sofa en kopjes",
  },
  /** Lounge detail — paintings, plant, leather seating. */
  lounge: {
    src: "/images/sfeer-detail.jpg",
    alt: "Gezellige zithoek met schilderijen, plant en vintage radio",
  },
  /** Garden / tuin view — picnic bench, trees, farmhouse behind. */
  tuin: {
    src: "/images/hoeve-tuin.jpg",
    alt: "Tuin van de hoeve met notenboom en picknickbank",
  },
} as const;

/** Higgsfield Video Agent stills used as supporting atmosphere images. */
export const higgsfieldStills: { src: string; alt: string }[] = [];
