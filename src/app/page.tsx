import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SteamCup, Squiggle, Sprig } from "@/components/Ornaments";
import { site } from "@/lib/site";

const occasions = [
  "Verjaardagen",
  "Communies",
  "Lentefeesten",
  "Familiefeesten",
  "Babyborrels",
  "Koffietafels",
  "Kleine vieringen",
];

const values = [
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
];

const steps = [
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
];

function MarqueeStrip() {
  const items = [...occasions, ...occasions];
  return (
    <div className="marquee border-y border-line/70 bg-paper/50 py-4">
      <div className="marquee-track items-center">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="display-italic flex items-center gap-8 pr-8 text-xl text-walnut/80 sm:text-2xl"
          >
            {item}
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-terracotta/70" />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden">
        <Sprig className="pointer-events-none absolute -right-6 top-10 h-40 w-40 rotate-12 text-sage/40 sm:h-56 sm:w-56" />
        <div className="site-shell grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="fade-up section-label">Zaaltje te huur, in alle gezelligheid</p>
            <h1 className="fade-up-delay display mt-5 text-5xl text-espresso sm:text-6xl md:text-7xl">
              Een zaaltje dat voelt als{" "}
              <span className="display-italic text-walnut">thuiskomen</span>.
            </h1>
            <p className="fade-up-delay-2 mt-6 max-w-lg text-lg leading-relaxed text-ink-soft">
              Vier je verjaardag, communie of familiefeest in ons huiselijke
              koffiehuisje. Comfortabel voor zo’n {site.capacity} personen —
              kleinschalig genoeg om het écht gezellig te houden.
            </p>
            <div className="fade-up-delay-3 mt-9 flex flex-wrap items-center gap-3">
              <Link href="/aanvragen" className="btn btn-primary">
                Zaal aanvragen
              </Link>
              <Link href="/de-zaal" className="btn btn-ghost">
                Bekijk de zaal
              </Link>
            </div>
            <div className="fade-up-delay-3 mt-8 flex flex-wrap gap-2.5">
              <span className="chip">±{site.capacity} personen</span>
              <span className="chip">Familiaal &amp; gezellig</span>
              <span className="chip">Eerlijke keuken</span>
            </div>
          </div>

          {/* Arch composition */}
          <div className="fade-up-delay-2 mx-auto grid w-full max-w-md grid-cols-[1.4fr_1fr] items-end gap-4">
            <div
              className="arch flex aspect-[3/4] items-center justify-center border border-line shadow-[0_30px_60px_-30px_rgba(42,26,15,0.5)]"
              style={{
                background:
                  "radial-gradient(120% 90% at 50% 0%, #58381d 0%, #3b2412 55%, #2a1a0f 100%)",
              }}
            >
              <SteamCup className="h-28 w-28 text-caramel sm:h-36 sm:w-36" />
            </div>
            <div className="grid gap-4">
              <div
                className="arch aspect-square border border-line"
                style={{
                  background:
                    "radial-gradient(100% 100% at 30% 20%, #a8b18e 0%, #7d8a63 55%, #5f6f47 100%)",
                }}
              />
              <div
                className="flex aspect-square items-center justify-center rounded-[1.25rem] border border-line bg-paper p-4 text-center"
              >
                <p className="display-italic text-lg leading-snug text-coffee">
                  mooie herinneringen maken
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MarqueeStrip />

      {/* ---------- Values ---------- */}
      <section className="site-shell py-20 sm:py-28">
        <Reveal>
          <p className="section-label">Waar we voor staan</p>
          <h2 className="display mt-4 max-w-2xl text-4xl text-espresso sm:text-5xl">
            Klein gehouden, met opzet.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 120}>
              <div className="tile h-full p-7">
                <span className="display text-4xl text-caramel/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display mt-4 text-2xl text-coffee">
                  {value.title}
                </h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{value.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Quote band ---------- */}
      <section className="band-dark">
        <div className="site-shell py-20 text-center sm:py-24">
          <Reveal>
            <Squiggle className="mx-auto h-3 w-40 text-caramel" />
            <blockquote className="display-italic mx-auto mt-8 max-w-3xl text-3xl leading-snug text-cream sm:text-4xl md:text-5xl">
              “Iedereen mag er zijn wie die is — zonder teveel poespas.”
            </blockquote>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-caramel">
              {site.name}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- How it works ---------- */}
      <section className="site-shell py-20 sm:py-28">
        <Reveal>
          <p className="section-label">Zo werkt het</p>
          <h2 className="display mt-4 max-w-2xl text-4xl text-espresso sm:text-5xl">
            Aangevraagd in twee minuten.
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">
            Geen account, geen gedoe. Jij stuurt je datum door, wij bekijken de
            agenda, en je hoort snel van ons.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 120}>
              <div className="relative h-full rounded-[1.25rem] border border-line bg-paper/60 p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-espresso font-bold text-cream">
                  {i + 1}
                </span>
                <h3 className="display mt-5 text-xl text-coffee">{step.title}</h3>
                <p className="mt-2.5 leading-relaxed text-ink-soft">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- CTA band ---------- */}
      <section className="site-shell pb-4">
        <Reveal>
          <div className="band-olive rounded-[2rem] px-7 py-14 text-center sm:px-12 sm:py-16">
            <h2 className="display mx-auto max-w-2xl text-4xl text-cream sm:text-5xl">
              Een datum in gedachten?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-cream/85">
              Stuur je aanvraag door en we laten je snel weten of het zaaltje
              vrij is.
            </p>
            <Link href="/aanvragen" className="btn btn-cream mt-8">
              Zaal aanvragen
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
