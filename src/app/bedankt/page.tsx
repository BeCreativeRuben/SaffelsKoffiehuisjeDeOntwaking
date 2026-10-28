import type { Metadata } from "next";
import Link from "next/link";
import { Photo } from "@/components/Photo";
import { photos } from "@/lib/photos";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aanvraag ontvangen",
  description: `Je aanvraag bij ${site.name} is ontvangen. We mailen je zodra we de datum bekeken hebben.`,
};

export default function BedanktPage() {
  return (
    <div className="shell quiet-page">
      <p className="eyebrow">Aanvraag ontvangen</p>
      <h1>We hebben je bericht.</h1>
      <p className="lede">
        Kijk straks in je mailbox. Daarin bevestigen we dat je aanvraag
        aangekomen is. Of de datum past, hoor je zodra we de agenda bekeken
        hebben.
      </p>
      <p>
        Niets gekregen, of heb je toch nog een vraag? Bel{" "}
        <a className="text-link" href={`tel:${site.phoneTel}`}>
          {site.phoneDisplay}
        </a>
        .
      </p>
      <Photo
        photo={photos.tuinbord}
        caption="Plaats om te zijn."
        tilt={-1}
        wash
      />
      <div className="actions">
        <Link className="btn" href="/">
          Terug naar de start
        </Link>
        <Link className="btn btn-secondary" href="/de-zaal">
          De zaal
        </Link>
      </div>
    </div>
  );
}
