import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { photos } from "@/lib/media";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "De zaal",
  description: `Het zaaltje van ${site.name}: huiselijk, familiaal en comfortabel voor zo'n ${site.capacity} personen.`,
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
];

export default function DeZaalPage() {
  return (
    <>
      {/* Hero with heading */}
      <section className="site-shell py-20 sm:py-24">
        <Reveal>
          <p className="section-label">De zaal</p>
          <hr className="section-rule mt-4" />
          <h1 className="display mt-6 max-w-3xl text-5xl text-espresso sm:text-6xl lg:text-7xl">
            Huiselijk,{" "}
            <span className="display-italic text-olive">niet chique</span>.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl sm:leading-relaxed">
            {site.description} Comfortabel voor zo&apos;n {site.capacity}{" "}
            personen — kleinschalig genoeg om het gezellig te houden.
          </p>
        </Reveal>

        {/* Photo triptych: interieur / hero overview / terras */}
        <div className="mt-16 grid items-end gap-4 sm:grid-cols-[1fr_1.35fr_1fr]">
          <Reveal>
            <div className="photo-frame">
              <div className="relative aspect-[3/4]">
                <Image
                  src={photos.interieur.src}
                  alt={photos.interieur.alt}
                  fill
                  sizes="30vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="photo-frame">
              <div className="relative aspect-[4/3.6]">
                <Image
                  src={photos.hero.src}
                  alt={photos.hero.alt}
                  fill
                  sizes="40vw"
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="photo-frame">
              <div className="relative aspect-[3/4]">
                <Image
                  src={photos.terras.src}
                  alt={photos.terras.alt}
                  fill
                  sizes="30vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Occasions strip */}
      <section className="border-y border-line/60 bg-paper/60">
        <div className="site-shell py-16 sm:py-20">
          <Reveal>
            <h2 className="display text-3xl text-espresso sm:text-4xl">
              Wat hier past
            </h2>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {occasions.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-7 max-w-xl leading-relaxed text-ink-soft">
              Geen strakke eventzaal — wel een plek waar mensen zich meteen
              thuis voelen en mooie herinneringen maken.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Full-width hoeve exterior */}
      <section className="py-16 sm:py-20">
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

      {/* Features */}
      <section className="site-shell py-12 sm:py-16">
        <Reveal>
          <p className="section-label">Wat je kunt verwachten</p>
          <hr className="section-rule mt-4" />
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={(i % 2) * 120}>
              <div className="tile tile-hover h-full p-8 sm:p-10">
                <span className="display text-3xl text-olive/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display mt-3 text-2xl text-wood">{feature.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">
                  {feature.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="site-shell pb-8 pt-12">
        <Reveal>
          <div className="band-olive grain relative overflow-hidden rounded-[1.75rem]">
            <div className="relative grid items-center md:grid-cols-[1.15fr_0.85fr]">
              <div className="px-8 py-16 sm:px-12 sm:py-20">
                <p className="section-label !text-caramel">Praktisch</p>
                <h2 className="display mt-4 text-4xl text-cream sm:text-5xl">
                  Vraag je datum aan
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/85">
                  Stuur een aanvraag met je gewenste datum en aantal personen.
                  Wij bekijken of het past in de agenda en laten je snel weten
                  of we kunnen bevestigen. Daarna stemmen we samen alle details
                  af.
                </p>
                <Link href="/aanvragen" className="btn btn-cream mt-9">
                  Zaal aanvragen
                </Link>
              </div>
              <div className="relative hidden min-h-[360px] md:block">
                <Image
                  src={photos.taart.src}
                  alt={photos.taart.alt}
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
