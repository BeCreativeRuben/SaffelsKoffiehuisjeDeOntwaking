import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "De zaal",
  description: `Het zaaltje van ${site.name}: huiselijk, familiaal en comfortabel voor zo’n ${site.capacity} personen.`,
};

const occasions = [
  "Verjaardagen",
  "Communies & lentefeesten",
  "Familiefeesten",
  "Kleine bijeenkomsten",
];

export default function DeZaalPage() {
  return (
    <div className="site-shell py-14 sm:py-20">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-olive">
          De zaal
        </p>
        <h1 className="display mt-3 text-4xl text-coffee sm:text-5xl">
          Huiselijk, niet chique.
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-soft">
          {site.description} Comfortabel voor zo’n {site.capacity} personen —
          kleinschalig genoeg om het gezellig te houden.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div
          className="min-h-[280px] overflow-hidden rounded-[1.5rem] border border-line"
          style={{
            background: `
              linear-gradient(145deg, color-mix(in srgb, var(--paper) 40%, transparent), transparent 50%),
              radial-gradient(circle at 30% 20%, #8a9a72, transparent 45%),
              linear-gradient(160deg, #5a6b45, #3f2a1c)
            `,
          }}
        >
          <div className="flex h-full min-h-[280px] items-end p-6 sm:p-8">
            <p className="max-w-sm text-sm leading-relaxed text-paper/90">
              Foto’s van de zaal volgen. Tot dan: denk aan warme tinten, een
              tafel vol eerlijke producten, en ruimte om samen te zitten.
            </p>
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-line bg-paper/65 p-6 sm:p-8 backdrop-blur-sm">
          <h2 className="display text-2xl text-coffee">Wat past hier</h2>
          <ul className="mt-5 space-y-3 text-ink-soft">
            {occasions.map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-olive" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-ink-soft">
            Geen strakke eventzaal — wel een plek waar mensen zich thuis voelen.
          </p>
        </div>
      </div>

      <div className="mt-12 max-w-2xl">
        <h2 className="display text-3xl text-coffee">Praktisch</h2>
        <p className="mt-4 leading-relaxed text-ink-soft">
          Stuur een aanvraag met je gewenste datum en aantal personen. Wij
          bekijken of het past in de agenda en laten je weten of we kunnen
          bevestigen. Daarna stemmen we samen de details af.
        </p>
        <Link href="/aanvragen" className="btn btn-primary mt-8">
          Zaal aanvragen
        </Link>
      </div>
    </div>
  );
}
