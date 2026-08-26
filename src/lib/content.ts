import { neon } from "@neondatabase/serverless";

export type SiteContent = {
  heroTitle: string;
  heroSubtitle: string;
  quoteText: string;
  quoteAttribution: string;
  aboutIntro: string;
  aboutHeading: string;
  values: { title: string; text: string }[];
  steps: { title: string; text: string }[];
  occasions: string[];
  openingHours: string;
  deZaalIntro: string;
  deZaalFeatures: { title: string; text: string }[];
  contactIntro: string;
};

export const defaultContent: SiteContent = {
  heroTitle: "Een zaaltje dat voelt als thuiskomen.",
  heroSubtitle:
    "Vier je verjaardag, communie of familiefeest in ons huiselijke koffiehuisje — kleinschalig genoeg om het écht gezellig te houden.",
  quoteText:
    "Iedereen mag er zijn wie die is — zonder teveel poespas.",
  quoteAttribution: "'t Zaffels Koffiehuisje",
  aboutIntro: "Klein gehouden, met opzet.",
  aboutHeading: "Waar we voor staan",
  values: [
    {
      title: "Huiselijk & familiaal",
      text: "Geen chique boel, wel warmte. Een plek waar je meteen je jas uitdoet en je thuis voelt.",
    },
    {
      title: "Eerlijke keuken",
      text: "Authentieke producten en goed eten, voedingsgewijs zoals het hoort. Zonder franjes, met smaak.",
    },
    {
      title: "Iedereen welkom",
      text: "Iedereen mag er zijn wie die is — zonder teveel poespas. Dat is het hele idee.",
    },
  ],
  steps: [
    {
      title: "Stuur je aanvraag",
      text: "Kies je datum, tijdstip en aantal personen via het formulier. Twee minuutjes werk.",
    },
    {
      title: "Wij checken de agenda",
      text: "We bekijken of je datum past en komen zo snel mogelijk bij je terug.",
    },
    {
      title: "Je krijgt bevestiging",
      text: "Past het? Dan krijg je een bevestiging per mail en stemmen we samen de details af.",
    },
  ],
  occasions: [
    "Verjaardagen",
    "Communies",
    "Lentefeesten",
    "Familiefeesten",
    "Babyborrels",
    "Koffietafels",
    "Kleine vieringen",
  ],
  openingHours: "",
  deZaalIntro:
    "Familiaal, gezellig en zonder poespas. Eerlijke producten, een goede keuken, en ruimte om mooie herinneringen te maken.",
  deZaalFeatures: [
    {
      title: "±35 personen",
      text: "Comfortabel zitten voor zo'n 35 gasten. Kleinschalig genoeg om iedereen bij het gesprek te houden.",
    },
    {
      title: "Eerlijke keuken",
      text: "Authentieke, eerlijke producten en een keuken die voedingsgewijs klopt. Geen franjes, wel smaak.",
    },
    {
      title: "Huiselijke sfeer",
      text: "Olijfgroene muren, houten tafels en een zithoek. Als thuis, maar dan met bediening.",
    },
    {
      title: "Familiaal onthaal",
      text: "We kennen onze gasten graag bij naam. Jij viert, wij zorgen dat alles loopt.",
    },
  ],
  contactIntro:
    "Wil je de zaal huren? Het snelst gaat het via een aanvraag — zo staat alles meteen duidelijk.",
};

function getSql() {
  const url = process.env.DATABASE_URL;
  if (!url) return null;
  return neon(url);
}

async function ensureContentTable() {
  const sql = getSql();
  if (!sql) return;
  await sql`
    CREATE TABLE IF NOT EXISTS site_content (
      id INTEGER PRIMARY KEY DEFAULT 1 CHECK (id = 1),
      data JSONB NOT NULL DEFAULT '{}',
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;
}

export async function getContent(): Promise<SiteContent> {
  try {
    const sql = getSql();
    if (!sql) return defaultContent;
    await ensureContentTable();
    const rows = await sql`SELECT data FROM site_content WHERE id = 1`;
    if (!rows[0]) return defaultContent;
    const stored = rows[0].data as Partial<SiteContent>;
    return { ...defaultContent, ...stored };
  } catch {
    return defaultContent;
  }
}

export async function updateContent(
  data: Partial<SiteContent>,
): Promise<SiteContent> {
  const sql = getSql();
  if (!sql) throw new Error("DATABASE_URL ontbreekt");
  await ensureContentTable();

  const current = await getContent();
  const merged = { ...current, ...data };

  await sql`
    INSERT INTO site_content (id, data, updated_at)
    VALUES (1, ${JSON.stringify(merged)}::jsonb, NOW())
    ON CONFLICT (id)
    DO UPDATE SET data = ${JSON.stringify(merged)}::jsonb, updated_at = NOW()
  `;

  return merged;
}
