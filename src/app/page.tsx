import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Sprig } from "@/components/Ornaments";
import { photos, higgsfieldStills } from "@/lib/media";
import { site } from "@/lib/site";
import { getContent } from "@/lib/content";

export const dynamic = "force-dynamic";

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
  photos.interieur,
  photos.taart,
  photos.terras,
  ...higgsfieldStills,
];

function MarqueeStrip({ occasions }: { occasions: string[] }) {
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

export default async function HomePage() {
  const content = await getContent();
  return (
    <>
      {/* Full-bleed hero — real zaal overview */}
      <section className="relative isolate min-h-[90svh] overflow-hidden grain">
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
          className="absolute inset-0 bg-gradient-to-r from-espresso/85 via-espresso/50 to-espresso/10"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-cream to-transparent"
        />
        <div className="site-shell relative flex min-h-[90svh] flex-col justify-end pb-20 pt-28 sm:pb-24">
          <div className="max-w-2xl text-cream">
            <p className="fade-up section-label !text-caramel-soft">
              Zaaltje te huur · ±{site.capacity} personen
            </p>
            <h1 className="fade-up-delay display mt-5 text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem]">
              {content.heroTitle.includes("thuiskomen") ? (
                <>
                  Een zaaltje dat voelt als{" "}
                  <span className="display-italic">thuiskomen</span>.
                </>
              ) : (
                content.heroTitle
              )}
            </h1>
            <p className="fade-up-delay-2 mt-7 max-w-lg text-[1.05rem] leading-[1.75] text-cream/80 sm:text-lg sm:leading-[1.8]">
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
        </div>
      </section>

      <MarqueeStrip occasions={content.occasions} />

      {/* Values */}
      <section className="site-shell py-28 sm:py-32">
        <Reveal>
          <p className="section-label">Waar we voor staan</p>
          <hr className="section-rule mt-4" />
          <h2 className="display mt-6 max-w-2xl text-4xl text-espresso sm:text-5xl">
            {content.aboutIntro}
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-0 md:grid-cols-3">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 120}>
              <article
                className={`py-8 md:px-8 lg:px-10 ${
                  i > 0
                    ? "border-t border-line md:border-t-0 md:border-l"
                    : "md:pl-0"
                } ${i === values.length - 1 ? "md:pr-0" : ""}`}
              >
                <h3 className="display text-[1.35rem] text-wood">{value.title}</h3>
                <p className="mt-3 max-w-sm text-[0.95rem] leading-relaxed text-ink-soft">
                  {value.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Full-width hoeve exterior */}
      <section className="relative overflow-hidden">
        <div className="site-shell-wide">
          <Reveal>
            <div className="photo-frame">
              <div className="relative aspect-[21/9] sm:aspect-[21/8]">
                <Image
                  src={photos.hoeve.src}
                  alt={photos.hoeve.alt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Atmosphere gallery — real shots + Higgsfield stills */}
      <section className="border-y border-line/60 bg-paper/60 py-28 sm:py-32 mt-28">
        <div className="site-shell">
          <Reveal>
            <p className="section-label">De sfeer</p>
            <hr className="section-rule mt-4" />
            <h2 className="display mt-6 max-w-2xl text-4xl text-espresso sm:text-5xl">
              Hier is de tafel het huis.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            {gallery.slice(0, 3).map((shot, i) => (
              <Reveal key={shot.src} delay={i * 120}>
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
      <section className="band-olive grain relative">
        <div className="site-shell relative py-28 text-center sm:py-32">
          <Reveal>
            <Sprig className="mx-auto mb-8 h-12 w-12 text-caramel/40" />
            <blockquote className="display-italic mx-auto max-w-2xl text-[1.75rem] leading-[1.35] text-cream sm:text-4xl sm:leading-[1.3] md:text-[2.75rem]">
              &ldquo;Aan deze tafel is iedereen thuis.&rdquo;
            </blockquote>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-caramel">
              {site.name}
            </p>
          </Reveal>
        </div>
      </section>

      {/* How it works */}
      <section className="site-shell py-28 sm:py-32">
        <Reveal>
          <p className="section-label">Zo werkt het</p>
          <hr className="section-rule mt-4" />
          <h2 className="display mt-6 max-w-2xl text-4xl text-espresso sm:text-5xl">
            Je vraagt aan, wij kijken of het past.
          </h2>
          <p className="mt-5 max-w-xl text-[1.05rem] leading-[1.75] text-ink-soft">
            Zet je datum in het formulier. Wij checken de agenda en mailen je
            terug.
          </p>
        </Reveal>
        <ol className="mt-16 grid gap-0 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 120}>
              <li
                className={`py-8 md:px-8 lg:px-10 ${
                  i > 0
                    ? "border-t border-line md:border-t-0 md:border-l"
                    : "md:pl-0"
                } ${i === steps.length - 1 ? "md:pr-0" : ""}`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-olive/70">
                  Stap {i + 1}
                </p>
                <h3 className="display mt-3 text-[1.35rem] text-wood">{step.title}</h3>
                <p className="mt-2 max-w-sm text-[0.95rem] leading-relaxed text-ink-soft">
                  {step.text}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* CTA */}
      <section className="site-shell pb-8">
        <Reveal>
          <div className="band-wood grain relative overflow-hidden rounded-[1.75rem]">
            <div className="relative grid items-center gap-8 md:grid-cols-[1.1fr_0.9fr]">
              <div className="px-8 py-16 sm:px-12 sm:py-20">
                <h2 className="display max-w-md text-4xl text-cream sm:text-5xl">
                  Een datum in gedachten?
                </h2>
                <p className="mt-5 max-w-md text-lg leading-relaxed text-cream/80">
                  Stuur je aanvraag door en we laten je snel weten of het
                  zaaltje vrij is.
                </p>
                <Link href="/aanvragen" className="btn btn-primary mt-9">
                  Zaal aanvragen
                </Link>
              </div>
              <div className="relative hidden min-h-[320px] md:block">
                <Image
                  src={photos.ontbijt.src}
                  alt={photos.ontbijt.alt}
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
