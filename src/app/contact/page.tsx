import type { Metadata } from "next";
import Link from "next/link";
import { Fact } from "@/components/Fact";
import { PageIntro } from "@/components/PageIntro";
import { Photo } from "@/components/Photo";
import { photos } from "@/lib/photos";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Bel ${site.name} in ${site.place} op ${site.phoneDisplay} of stuur een bericht via Facebook. Adres, openingsuren en e-mail volgen.`,
};

export default function ContactPage() {
  return (
    <div className="shell">
      <PageIntro
        eyebrow={site.place}
        title="Contact"
        lede={`Het koffiehuisje ligt in ${site.place} (${site.municipality}). Het straatadres, de openingsuren en het e-mailadres zetten we hier nog bij.`}
      />

      <a className="phone-block" href={`tel:${site.phoneTel}`}>
        <span className="eyebrow">Telefoon</span>
        <span className="phone-number">{site.phoneDisplay}</span>
      </a>

      <p>
        <a className="text-link" href={site.facebook}>
          {site.facebookName} op Facebook
        </a>
      </p>

      <div className="facts" style={{ marginTop: "1.4rem" }}>
        <Fact
          label="Adres"
          value={site.address}
          placeholder={`Adres volgt. ${site.place}, ${site.municipality}.`}
        />
        <Fact
          label="Openingsuren"
          value={site.hours}
          placeholder="Openingsuren volgen."
        />
        <Fact
          label="E-mail"
          value={site.email}
          placeholder="E-mailadres volgt."
        />
      </div>

      <Photo
        photo={photos.straatbord}
        caption="Het bord aan de straat."
        tilt={-0.8}
        className="print-medium"
        sizes="260px"
      />

      <section className="band" aria-labelledby="nest-contact">
        <div>
          <p className="band-num">B&amp;B</p>
          <h2 id="nest-contact">{site.nestName}</h2>
        </div>
        <div className="band-body">
          <p>
            {site.nestName} is een B&amp;B van dezelfde uitbater. Er is nog
            geen website. Die volgt later.
          </p>
          <p>
            Voor het koffiehuisje zelf stuur je een{" "}
            <Link className="text-link" href="/aanvragen">
              aanvraag
            </Link>{" "}
            of bel je {site.phoneDisplay}.
          </p>
        </div>
      </section>
    </div>
  );
}
