import type { Metadata } from "next";
import Link from "next/link";
import { Squiggle } from "@/components/Ornaments";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contacteer ${site.name} of vraag de zaal aan via het formulier.`,
};

export default function ContactPage() {
  return (
    <div className="site-shell py-14 sm:py-20">
      <p className="section-label">Contact</p>
      <h1 className="display mt-3 text-5xl text-espresso sm:text-6xl">
        Zeg <span className="script text-tomato">hallo</span>
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
        Wil je de zaal huren? Het snelst gaat het via een aanvraag — zo staat
        alles meteen duidelijk op papier.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="tile p-7 sm:p-9">
          <h2 className="display text-2xl text-coffee">Gegevens</h2>
          <Squiggle className="mt-4 h-3 w-24 text-tomato/70" />
          <div className="mt-6 space-y-4 text-ink-soft">
            <p>
              <span className="script block text-xl text-tomato">E-mail</span>
              <a
                className="mt-1 inline-block font-semibold text-coffee underline-offset-4 hover:underline"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
            </p>
            {site.phone ? (
              <p>
                <span className="script block text-xl text-tomato">
                  Telefoon
                </span>
                <a
                  className="mt-1 inline-block font-semibold text-coffee underline-offset-4 hover:underline"
                  href={`tel:${site.phone}`}
                >
                  {site.phone}
                </a>
              </p>
            ) : null}
            <p>
              <span className="script block text-xl text-tomato">Adres</span>
              <span className="mt-1 inline-block font-semibold text-coffee">
                {site.address}
              </span>
            </p>
          </div>
          <p className="mt-8 text-sm leading-relaxed text-ink-soft">
            Ook{" "}
            <span className="display-italic text-base text-coffee">
              {site.nestName}
            </span>{" "}
            (B&amp;B) — website volgt later.
          </p>
        </div>

        <div className="band-dark flex flex-col justify-between rounded-[1rem] p-7 sm:p-9">
          <div>
            <h2 className="display text-2xl text-cream">
              Liever meteen aanvragen?
            </h2>
            <p className="mt-4 leading-relaxed text-cream/80">
              Stuur je gewenste datum, tijdstip en aantal personen door. Wij
              checken de agenda en je hoort snel van ons.
            </p>
          </div>
          <Link href="/aanvragen" className="btn btn-cream mt-8 self-start">
            Zaal aanvragen
          </Link>
        </div>
      </div>
    </div>
  );
}
