import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { Photo } from "@/components/Photo";
import { SeatDots } from "@/components/SeatDots";
import { photos } from "@/lib/photos";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "De zaal",
  description: `Zaaltje van ${site.name} in ${site.place}, voor ongeveer ${site.capacity} personen. Verjaardag, communie, koffietafel, vergadering of workshop. Aanvraag, geen online betaling.`,
};

const occasions = [
  "Verjaardag",
  "Communie of lentefeest",
  "Koffietafel",
  "Baby shower",
  "Familiefeest",
  "Vergadering",
  "Workshop",
];

export default function DeZaalPage() {
  return (
    <div className="shell">
      <PageIntro
        eyebrow={`Ongeveer ${site.capacity} personen`}
        title="De zaal"
        lede="Een klein zaaltje in de hoeve. Huiselijk en familiaal. Iedereen mag er zijn wie die is, zonder teveel poespas."
      />

      <Photo
        photo={photos.zaal}
        caption="De zaal, met de lange tafel."
        kind="feature"
        tilt={-0.6}
        className="feature-print"
        sizes="(max-width: 899px) calc(100vw - 2.5rem), 560px"
      />

      <div className="split">
        <div>
          <h2 className="section-title">Hoe het zit</h2>
          <ul className="plain-list">
            <li>Ongeveer {site.capacity} personen, comfortabel gezeten.</li>
            <li>{site.signLine}.</li>
            <li>Je vraagt een datum aan. We mailen of het past.</li>
            <li>Geen betaling via de site.</li>
          </ul>
          <SeatDots filled={site.capacity} />
          <p className="hint" style={{ marginTop: "0.7rem" }}>
            Elke stip is een comfortabele plaats.
          </p>
        </div>
        <div>
          <h2 className="section-title">Waarvoor je de zaal kan vragen</h2>
          <ul className="plain-list">
            {occasions.map((occasion) => (
              <li key={occasion}>{occasion}</li>
            ))}
          </ul>
          <p>
            Vergaderingen en workshops staan ook op het bord aan de straat.
            Voor de rest: schrijf in je aanvraag wat je viert of wat je van
            plan bent.
          </p>
        </div>
      </div>

      <div className="print-cluster">
        <Photo photo={photos.kamer} caption="Bij kaarslicht" tilt={-1.2} wash />
        <Photo photo={photos.zaalBloemen} caption="Bloemen op tafel" tilt={1} wash />
        <Photo photo={photos.kaars} caption="Een stille hoek" tilt={-0.7} wash />
        <Photo photo={photos.lamp} caption="De lange tafel" tilt={1.2} wash />
      </div>

      <div className="actions">
        <Link className="btn" href="/aanvragen">
          Datum aanvragen
        </Link>
        <a className="btn btn-secondary" href={`tel:${site.phoneTel}`}>
          Bel {site.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
