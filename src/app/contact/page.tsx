import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contacteer ${site.name} of vraag de zaal aan via het formulier.`,
};

export default function ContactPage() {
  return (
    <div className="site-shell py-14 sm:py-20">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-olive">
          Contact
        </p>
        <h1 className="display mt-3 text-4xl text-coffee sm:text-5xl">
          Zeg hallo
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-soft">
          Wil je de zaal huren? Het snelst via een aanvraag — zo staat alles
          meteen duidelijk.
        </p>

        <div className="mt-8 space-y-3 text-ink-soft">
          <p>
            <span className="font-semibold text-coffee">E-mail:</span>{" "}
            <a className="underline underline-offset-4" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
          {site.phone ? (
            <p>
              <span className="font-semibold text-coffee">Telefoon:</span>{" "}
              <a className="underline underline-offset-4" href={`tel:${site.phone}`}>
                {site.phone}
              </a>
            </p>
          ) : null}
          <p>
            <span className="font-semibold text-coffee">Adres:</span> {site.address}
          </p>
        </div>

        <p className="mt-8 text-sm leading-relaxed text-ink-soft">
          Ook{" "}
          <span className="font-semibold text-coffee">{site.nestName}</span>{" "}
          (B&amp;B) — website volgt later.
        </p>

        <Link href="/aanvragen" className="btn btn-primary mt-8">
          Zaal aanvragen
        </Link>
      </div>
    </div>
  );
}
