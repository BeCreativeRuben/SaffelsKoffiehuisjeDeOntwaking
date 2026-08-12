import type { CSSProperties } from "react";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import {
  Bunting,
  CakeSlice,
  CoffeePot,
  Heart,
  Home,
  SteamCup,
  Squiggle,
} from "@/components/Ornaments";
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

const polaroids = [
  {
    caption: "Huisgemaakt met liefde",
    icon: CakeSlice,
    bg: "radial-gradient(120% 100% at 30% 20%, #b9c2a2 0%, #8a9a72 60%, #6d7d57 100%)",
  },
  {
    caption: "Koffie zoals ’t vroeger was",
    icon: CoffeePot,
    bg: "radial-gradient(120% 100% at 40% 15%, #d9b06f 0%, #b98a4e 60%, #96692f 100%)",
  },
  {
    caption: "Samen is ’t gezelligst",
    icon: Heart,
    bg: "radial-gradient(120% 100% at 50% 20%, #cf7f6c 0%, #b25341 60%, #93392a 100%)",
  },
];

const features = [
  {
    icon: Home,
    title: "Warm & huiselijk",
    text: "Een zaal die voelt als thuis, voor kleine en grote gezelschappen.",
  },
  {
    icon: CakeSlice,
    title: "Taartjes om van te dromen",
    text: "Vers en huisgemaakt, met eerlijke producten.",
  },
  {
    icon: CoffeePot,
    title: "Gastvrijheid met een glimlach",
    text: "Zoals het hoort — jij viert, wij zorgen.",
  },
  {
    icon: Bunting,
    title: "Voor elke gelegenheid",
    text: "Verjaardag, familiefeest, vereniging en meer.",
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
    <div className="marquee border-y border-line/70 bg-paper/60 py-3.5">
      <div className="marquee-track items-center">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="script flex items-center gap-7 pr-7 text-2xl text-walnut"
          >
            {item}
            <Heart className="h-3.5 w-3.5 text-tomato/70" />
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
        <div className="site-shell grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="fade-up section-label">Grootmoeders gezelligheid, zonder poespas</p>
            <h1 className="fade-up-delay display mt-4 text-5xl text-espresso sm:text-6xl md:text-7xl">
              Een zaaltje dat voelt als{" "}
              <span className="script text-tomato">thuiskomen</span>
            </h1>
            <p className="fade-up-delay-2 mt-6 max-w-lg text-lg leading-relaxed text-ink-soft">
              Schuif bij aan onze lange tafel. Goede koffie, huisgemaakte taart
              en verhalen die blijven hangen — comfortabel voor zo’n{" "}
              {site.capacity} personen.
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

          {/* Framed photo + polaroid */}
          <div className="fade-up-delay-2 relative mx-auto w-full max-w-md pb-10">
            <div className="frame rotate-1">
              <div
                className="frame-inner flex aspect-[4/5] flex-col items-center justify-center gap-5 p-6 text-center"
                style={{
                  background:
                    "radial-gradient(120% 100% at 50% 0%, #6d5138 0%, #4a3220 55%, #38261a 100%)",
                }}
              >
                <SteamCup className="h-24 w-24 text-caramel sm:h-32 sm:w-32" />
                <p className="text-sm leading-relaxed text-cream/75">
                  Hier komt binnenkort een foto van onze zaal —
                  <br />
                  met de lange tafel gedekt.
                </p>
              </div>
            </div>
            <div className="polaroid absolute -bottom-2 -left-4 w-40 -rotate-6 sm:-left-8 sm:w-48">
              <div className="polaroid-inner flex aspect-square items-center justify-center bg-cream-deep">
                <p className="script px-3 text-center text-xl leading-tight text-coffee">
                  mooie herinneringen maken
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MarqueeStrip />

      {/* ---------- Polaroid moments ---------- */}
      <section className="site-shell py-20 sm:py-24">
        <Reveal className="text-center">
          <p className="section-label">Koffie, taart &amp; mooie momenten</p>
          <h2 className="display mx-auto mt-3 max-w-2xl text-4xl text-espresso sm:text-5xl">
            Klein gehouden, met opzet.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-8 sm:grid-cols-3 sm:gap-5">
          {polaroids.map((card, i) => {
            const Icon = card.icon;
            const rotations = ["-rotate-2", "rotate-1", "-rotate-1"];
            return (
              <Reveal key={card.caption} delay={i * 120}>
                <div className={`polaroid mx-auto w-full max-w-xs ${rotations[i]}`}>
                  <div
                    className="polaroid-inner flex aspect-[5/4] items-center justify-center"
                    style={{ background: card.bg }}
                  >
                    <Icon className="h-16 w-16 text-cream/90" />
                  </div>
                  <p className="script pt-3 text-center text-2xl text-coffee">
                    {card.caption}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ---------- Feature row ---------- */}
      <section className="border-y border-line/70 bg-paper/60">
        <div className="site-shell py-14">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <Reveal key={feature.title} delay={i * 100}>
                  <div className="flex gap-4">
                    <Icon className="h-10 w-10 shrink-0 text-tomato" />
                    <div>
                      <h3 className="font-bold text-coffee">{feature.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                        {feature.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- Quote band ---------- */}
      <div aria-hidden className="scallop scallop-flip" style={{ "--scallop-c": "var(--espresso)" } as CSSProperties} />
      <section className="band-dark">
        <div className="site-shell py-18 text-center sm:py-20">
          <Reveal>
            <Squiggle className="mx-auto h-3 w-40 text-caramel" />
            <blockquote className="script mx-auto mt-8 max-w-3xl text-4xl leading-snug text-cream sm:text-5xl">
              “Iedereen mag er zijn wie die is — zonder teveel poespas.”
            </blockquote>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-caramel">
              {site.name}
            </p>
          </Reveal>
        </div>
      </section>
      <div aria-hidden className="scallop" style={{ "--scallop-c": "var(--espresso)" } as CSSProperties} />

      {/* ---------- How it works ---------- */}
      <section className="site-shell py-20 sm:py-24">
        <Reveal>
          <p className="section-label">Zo werkt het</p>
          <h2 className="display mt-3 max-w-2xl text-4xl text-espresso sm:text-5xl">
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
              <div className="tile h-full p-7">
                <span className="step-circle">{i + 1}</span>
                <h3 className="display mt-5 text-xl text-coffee">{step.title}</h3>
                <p className="mt-2.5 leading-relaxed text-ink-soft">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- CTA on the tablecloth ---------- */}
      <section className="gingham">
        <div className="site-shell py-16 sm:py-20">
          <Reveal>
            <div className="tile mx-auto max-w-2xl p-10 text-center sm:p-12">
              <p className="section-label">Een datum in gedachten?</p>
              <h2 className="display mt-3 text-4xl text-espresso sm:text-5xl">
                Schuif bij aan tafel.
              </h2>
              <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-ink-soft">
                Stuur je aanvraag door en we laten je snel weten of het zaaltje
                vrij is.
              </p>
              <Link href="/aanvragen" className="btn btn-primary mt-8">
                Zaal aanvragen
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
