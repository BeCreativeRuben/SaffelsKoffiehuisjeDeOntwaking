import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { photos, higgsfieldStills } from "@/lib/media";
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

const gallery = [
  photos.tafel,
  photos.servies,
  photos.zithoek,
  ...higgsfieldStills,
];

function MarqueeStrip() {
  const items = [...occasions, ...occasions];
  return (
    <div className="marquee border-y border-line/80 bg-paper/70 py-4">
      <div className="marquee-track items-center">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="display-italic flex items-center gap-8 pr-8 text-xl text-wood/75 sm:text-2xl"
          >
            {item}
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent/70" />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Full-bleed hero */}
      <section className="relative isolate min-h-[88svh] overflow-hidden">
        <Image
          src={photos.hero.src}
          alt={photos.hero.alt}
          fill
          priority
          sizes="100vw"
          className="hero-ken-burns object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-espresso/80 via-espresso/45 to-espresso/15"
        />
        <div className="site-shell relative flex min-h-[88svh] flex-col justify-end pb-16 pt-28 sm:pb-20">
          <div className="max-w-2xl text-cream">
            <p className="fade-up section-label !text-caramel">
              Zaaltje te huur · ±{site.capacity} personen
            </p>
            <h1 className="fade-up-delay display mt-5 text-5xl sm:text-6xl md:text-7xl">
              Een zaaltje dat voelt als{" "}
              <span className="display-italic">thuiskomen</span>.
            </h1>
            <p className="fade-up-delay-2 mt-6 max-w-lg text-lg leading-relaxed text-cream/85">
              Vier je verjaardag, communie of familiefeest in ons huiselijke
              koffiehuisje — kleinschalig genoeg om het écht gezellig te houden.
            </p>
            <div className="fade-up-delay-3 mt-9 flex flex-wrap gap-3">
              <Link href="/aanvragen" className="btn btn-primary">
                Zaal aanvragen
              </Link>
              <Link href="/de-zaal" className="btn btn-ghost !border-cream/35 !text-cream hover:!bg-cream/10">
                Bekijk de zaal
              </Link>
            </div>
          </div>
          <p className="fade-up-delay-3 mt-10 text-[0.7rem] tracking-wide text-cream/45">
            {photos.hero.credit}
          </p>
        </div>
      </section>

      <MarqueeStrip />

      {/* Values */}
      <section className="site-shell py-24 sm:py-28">
        <Reveal>
          <p className="section-label">Waar we voor staan</p>
          <h2 className="display mt-4 max-w-2xl text-4xl text-espresso sm:text-5xl">
            Klein gehouden, met opzet.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 100}>
              <div className="tile h-full p-8">
                <span className="display text-4xl text-olive/45">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display mt-5 text-2xl text-wood">{value.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{value.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Atmosphere gallery */}
      <section className="border-y border-line/80 bg-paper/60 py-24 sm:py-28">
        <div className="site-shell">
          <Reveal>
            <p className="section-label">De sfeer</p>
            <h2 className="display mt-4 max-w-2xl text-4xl text-espresso sm:text-5xl">
              Hout, olijfgroen en een lange tafel.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {gallery.slice(0, 3).map((shot, i) => (
              <Reveal key={shot.src} delay={i * 100}>
                <div className={`photo-frame ${i === 1 ? "sm:mt-8" : ""}`}>
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="band-olive">
        <div className="site-shell py-24 text-center sm:py-28">
          <Reveal>
            <blockquote className="display-italic mx-auto max-w-3xl text-3xl leading-snug text-cream sm:text-4xl md:text-5xl">
              “Iedereen mag er zijn wie die is — zonder teveel poespas.”
            </blockquote>
            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-caramel">
              {site.name}
            </p>
          </Reveal>
        </div>
      </section>

      {/* How it works */}
      <section className="site-shell py-24 sm:py-28">
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
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 100}>
              <div className="h-full rounded-[1.25rem] border border-line bg-paper/70 p-8">
                <span className="step-circle">{i + 1}</span>
                <h3 className="display mt-5 text-xl text-wood">{step.title}</h3>
                <p className="mt-2.5 leading-relaxed text-ink-soft">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="site-shell pb-8">
        <Reveal>
          <div className="band-wood overflow-hidden rounded-[1.75rem]">
            <div className="grid items-center gap-8 md:grid-cols-[1.1fr_0.9fr]">
              <div className="px-8 py-14 sm:px-12 sm:py-16">
                <h2 className="display max-w-md text-4xl text-cream sm:text-5xl">
                  Een datum in gedachten?
                </h2>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-cream/80">
                  Stuur je aanvraag door en we laten je snel weten of het
                  zaaltje vrij is.
                </p>
                <Link href="/aanvragen" className="btn btn-primary mt-8">
                  Zaal aanvragen
                </Link>
              </div>
              <div className="relative hidden min-h-[280px] md:block">
                <Image
                  src={photos.overzicht.src}
                  alt={photos.overzicht.alt}
                  fill
                  sizes="40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
