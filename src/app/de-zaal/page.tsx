import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SteamCup, Squiggle } from "@/components/Ornaments";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "De zaal",
  description: `Het zaaltje van ${site.name}: huiselijk, familiaal en comfortabel voor zo’n ${site.capacity} personen.`,
};

const occasions = [
  "Verjaardagen",
  "Communies & lentefeesten",
  "Babyborrels",
  "Familiefeesten",
  "Koffietafels",
  "Kleine bijeenkomsten",
];

const features = [
  {
    title: `±${site.capacity} personen`,
    text: "Comfortabel zitten voor zo’n 35 gasten. Kleinschalig genoeg om iedereen bij het gesprek te houden.",
  },
  {
    title: "Eerlijke keuken",
    text: "Authentieke, eerlijke producten en een keuken die voedingsgewijs klopt. Geen franjes, wel smaak.",
  },
  {
    title: "Huiselijke sfeer",
    text: "Warme tinten, gezellige hoekjes en een tafel waar plaats is voor iedereen. Als thuis, maar dan met bediening.",
  },
  {
    title: "Familiaal onthaal",
    text: "We kennen onze gasten graag bij naam. Jij viert, wij zorgen dat alles loopt.",
  },
];

export default function DeZaalPage() {
  return (
    <>
      <section className="site-shell py-16 sm:py-20">
        <Reveal>
          <p className="section-label">De zaal</p>
          <h1 className="display mt-4 max-w-3xl text-5xl text-espresso sm:text-6xl">
            Huiselijk,{" "}
            <span className="display-italic text-walnut">niet chique</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {site.description} Comfortabel voor zo’n {site.capacity} personen —
            kleinschalig genoeg om het gezellig te houden.
          </p>
        </Reveal>

        {/* Arch mosaic */}
        <div className="mt-14 grid grid-cols-2 items-end gap-4 sm:grid-cols-[1fr_1.5fr_1fr] sm:gap-5">
          <Reveal>
            <div
              className="arch aspect-[3/4] border border-line"
              style={{
                background:
                  "radial-gradient(110% 90% at 40% 15%, #a8b18e 0%, #7d8a63 55%, #556340 100%)",
              }}
            />
          </Reveal>
          <Reveal delay={120}>
            <div
              className="arch flex aspect-[4/4.4] items-end justify-center border border-line p-6 shadow-[0_30px_60px_-30px_rgba(42,26,15,0.5)]"
              style={{
                background:
                  "radial-gradient(120% 100% at 50% 0%, #58381d 0%, #3b2412 60%, #2a1a0f 100%)",
              }}
            >
              <p className="pb-2 text-center text-sm leading-relaxed text-cream/75">
                Foto’s van de zaal volgen — warme tinten, een gedekte tafel en
                plaats voor iedereen.
              </p>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div
              className="arch aspect-[3/4] border border-line"
              style={{
                background:
                  "radial-gradient(110% 90% at 60% 20%, #d9b06f 0%, #b98a4e 55%, #8f6132 100%)",
              }}
            />
          </Reveal>
        </div>
      </section>

      {/* Occasions */}
      <section className="border-y border-line/70 bg-paper/50">
        <div className="site-shell py-14">
          <Reveal>
            <h2 className="display text-3xl text-espresso sm:text-4xl">
              Wat hier past
            </h2>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {occasions.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-6 max-w-xl leading-relaxed text-ink-soft">
              Geen strakke eventzaal — wel een plek waar mensen zich meteen
              thuis voelen en mooie herinneringen maken.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section className="site-shell py-20 sm:py-24">
        <div className="grid gap-5 sm:grid-cols-2">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={(i % 2) * 120}>
              <div className="tile h-full p-7">
                <h3 className="display text-2xl text-coffee">{feature.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">
                  {feature.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Praktisch + CTA */}
      <section className="site-shell pb-4">
        <Reveal>
          <div className="band-dark rounded-[2rem] px-7 py-14 sm:px-12 sm:py-16">
            <div className="grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">
              <div>
                <Squiggle className="h-3 w-32 text-caramel" />
                <h2 className="display mt-6 text-4xl text-cream sm:text-5xl">
                  Praktisch
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/85">
                  Stuur een aanvraag met je gewenste datum en aantal personen.
                  Wij bekijken of het past in de agenda en laten je snel weten
                  of we kunnen bevestigen. Daarna stemmen we samen alle details
                  af.
                </p>
                <Link href="/aanvragen" className="btn btn-cream mt-8">
                  Zaal aanvragen
                </Link>
              </div>
              <div className="hidden justify-center md:flex">
                <SteamCup className="h-40 w-40 text-caramel" />
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
