import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contacteer ${site.name} of vraag de zaal aan via het formulier.`,
};

export default function ContactPage() {
  const hasDetails = Boolean(site.email || site.phone || site.address);

  return (
    <div className="site-shell py-16 sm:py-20">
      <p className="section-label">Contact</p>
      <h1 className="display mt-4 text-5xl text-espresso sm:text-6xl">
        Zeg <span className="display-italic text-olive">hallo</span>
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
        Wil je de zaal huren? Het snelst gaat het via een aanvraag — zo staat
        alles meteen duidelijk.
      </p>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        <div className="tile p-8 sm:p-10">
          <h2 className="display text-2xl text-wood">Gegevens</h2>
          {hasDetails ? (
            <div className="mt-6 space-y-5 text-ink-soft">
              {site.email ? (
                <p>
                  <span className="section-label">E-mail</span>
                  <a
                    className="mt-2 block font-semibold text-wood underline-offset-4 hover:underline"
                    href={`mailto:${site.email}`}
                  >
                    {site.email}
                  </a>
                </p>
              ) : null}
              {site.phone ? (
                <p>
                  <span className="section-label">Telefoon</span>
                  <a
                    className="mt-2 block font-semibold text-wood underline-offset-4 hover:underline"
                    href={`tel:${site.phone}`}
                  >
                    {site.phone}
                  </a>
                </p>
              ) : null}
              {site.address ? (
                <p>
                  <span className="section-label">Adres</span>
                  <span className="mt-2 block font-semibold text-wood">
                    {site.address}
                  </span>
                </p>
              ) : null}
            </div>
          ) : (
            <p className="mt-6 leading-relaxed text-ink-soft">
              Contactgegevens volgen. Tot dan: gebruik het aanvraagformulier —
              daarop reageren we persoonlijk.
            </p>
          )}
          <p className="mt-8 text-sm leading-relaxed text-ink-soft">
            Ook{" "}
            <span className="display-italic text-base text-wood">
              {site.nestName}
            </span>{" "}
            (B&amp;B) — website volgt later.
          </p>
        </div>

        <div className="band-wood flex flex-col justify-between rounded-[1.25rem] p-8 sm:p-10">
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
    </div>
  );
}
