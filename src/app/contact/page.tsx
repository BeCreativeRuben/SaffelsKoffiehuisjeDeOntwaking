import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { photos } from "@/lib/media";
import { site } from "@/lib/site";
import { getContent } from "@/lib/content";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contacteer ${site.name} of vraag de zaal aan via het formulier.`,
};

export default async function ContactPage() {
  const content = await getContent();
  const hasDetails = Boolean(site.email || site.phone || site.address);

  return (
    <div className="site-shell py-20 sm:py-24">
      <Reveal>
        <p className="section-label">Contact</p>
        <hr className="section-rule mt-4" />
        <h1 className="display mt-6 text-5xl text-espresso sm:text-6xl">
          Zeg <span className="display-italic text-olive">hallo</span>
        </h1>
        <p className="mt-7 max-w-xl text-[1.05rem] leading-[1.75] text-ink-soft">
          Wil je de zaal huren? Het snelst gaat het via een aanvraag — zo staat
          alles meteen duidelijk.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        <Reveal>
          <div className="tile h-full p-8 sm:p-10">
            <h2 className="display text-2xl text-wood">Gegevens</h2>
            {hasDetails ? (
              <div className="mt-7 space-y-6 text-ink-soft">
                {site.email ? (
                  <div>
                    <span className="section-label">E-mail</span>
                    <a
                      className="mt-2 block font-semibold text-wood underline-offset-4 hover:underline"
                      href={`mailto:${site.email}`}
                    >
                      {site.email}
                    </a>
                  </div>
                ) : null}
                {site.phone ? (
                  <div>
                    <span className="section-label">Telefoon</span>
                    <a
                      className="mt-2 block font-semibold text-wood underline-offset-4 hover:underline"
                      href={`tel:${site.phone}`}
                    >
                      {site.phone}
                    </a>
                  </div>
                ) : null}
                {site.address ? (
                  <div>
                    <span className="section-label">Adres</span>
                    <span className="mt-2 block font-semibold text-wood">
                      {site.address}
                    </span>
                  </div>
                ) : null}
              </div>
            ) : (
              <p className="mt-7 leading-relaxed text-ink-soft">
                Contactgegevens volgen. Tot dan: gebruik het aanvraagformulier —
                daarop reageren we persoonlijk.
              </p>
            )}
            {content.openingHours && (
              <div className="mt-7 border-t border-line pt-6">
                <span className="section-label">Openingsuren</span>
                <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-ink-soft">
                  {content.openingHours}
                </p>
              </div>
            )}
            <div className="mt-7 border-t border-line pt-6">
              <p className="text-sm leading-relaxed text-ink-soft">
                Ook{" "}
                <span className="display-italic text-base text-wood">
                  {site.nestName}
                </span>{" "}
                (B&amp;B) — website volgt later.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="band-wood grain relative flex h-full flex-col overflow-hidden rounded-[1.25rem]">
            <div className="relative flex flex-1 flex-col justify-between p-8 sm:p-10">
              <div>
                <h2 className="display text-2xl text-cream">
                  Liever meteen aanvragen?
                </h2>
                <p className="mt-4 leading-relaxed text-cream/80">
                  Stuur je gewenste datum, tijdstip en aantal personen door. Wij
                  checken de agenda en je hoort snel van ons.
                </p>
              </div>
              <Link href="/aanvragen" className="btn btn-primary mt-8 self-start">
                Zaal aanvragen
              </Link>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Hoeve exterior */}
      <div className="mt-16">
        <Reveal>
          <div className="photo-frame">
            <div className="relative aspect-[21/9]">
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
    </div>
  );
}
