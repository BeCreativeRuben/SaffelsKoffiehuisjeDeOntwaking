import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { Photo } from "@/components/Photo";
import { photos } from "@/lib/photos";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aanbod",
  description: `Koffie en gebak, pannenkoeken, ontbijt na reservatie en een beperkte lunch bij ${site.name} in ${site.place}. Prijzen volgen.`,
};

export default function AanbodPage() {
  return (
    <div className="shell">
      <PageIntro
        eyebrow="Koffie, gebak, eten"
        title="Aanbod"
        lede="Wat er op het bord aan de straat staat, en wat je op de foto’s ziet. Een vaste kaart met prijzen zetten we hier nog bij."
      />

      <p className="script-line">{site.signLine}</p>

      <div className="fact fact-placeholder" style={{ marginTop: "1.2rem" }}>
        <div className="fact-head">
          <span className="fact-label">Prijzen</span>
          <span className="fact-tag">Nog in te vullen</span>
        </div>
        <p className="fact-value">Prijzen volgen. Vraag ze gerust mee in je aanvraag.</p>
      </div>

      <div className="print-cluster" aria-label="Foto’s van koffie en gebak">
        <Photo photo={photos.mokken} caption="Koffie" tilt={-1.6} />
        <Photo
          photo={photos.baileys}
          caption="Met Baileys"
          tilt={1.5}
          steam
        />
        <Photo
          photo={photos.wafels}
          caption="Wafels"
          tilt={-1.1}
          className="cap-sm"
        />
        <Photo photo={photos.taart} caption="Chocoladetaart" tilt={1.3} />
      </div>

      <article className="offer-block">
        <Photo
          photo={photos.siropen}
          caption="Siroop aan de bar"
          tilt={-1}
          wash
          className="offer-photo"
        />
        <div className="offer-copy">
          <h2>Koffie &amp; gebak</h2>
          <p>
            Koffie, ook met siroop of met Baileys. Vruchtenthee. Brusselse
            wafels, appelcrumble en chocoladetaart. Pannenkoeken staan mee op
            het bord. Rond nieuwjaar zijn er oliebollen.
          </p>
        </div>
      </article>

      <div className="pair">
        <Photo
          photo={photos.crumble}
          caption="Appelcrumble"
          tilt={1.2}
          className="cap-sm"
        />
        <Photo photo={photos.oliebollen} caption="Oliebollen" tilt={-1.4} />
      </div>

      <article className="offer-block">
        <Photo
          photo={photos.ontbijt}
          caption="De lange tafel"
          tilt={0.8}
          kind="feature"
          className="offer-photo cap-lg"
        />
        <div className="offer-copy">
          <h2>Ontbijt na reservatie</h2>
          <p>
            Ontbijt of brunch aan de lange tafel. Alleen als je vooraf
            reserveert. Vraag je moment aan, dan stemmen we het af.
          </p>
        </div>
      </article>

      <article className="offer-block">
        <div className="pair">
          <Photo photo={photos.soep} caption="Soep" tilt={-1.2} />
          <Photo
            photo={photos.pannenkoek}
            caption="Hartige pannenkoek"
            tilt={1.3}
          />
        </div>
        <div className="offer-copy">
          <h2>Beperkte lunch</h2>
          <p>
            De lunch blijft beperkt. Op de foto’s zie je soep en hartige
            pannenkoeken, bijvoorbeeld met zalm. Vraag gerust wat er die dag
            kan.
          </p>
        </div>
      </article>

      <article className="offer-block">
        <Photo
          photo={photos.thee}
          caption="Thee op het terras"
          tilt={-0.9}
          className="offer-photo cap-sm"
        />
        <div className="offer-copy">
          <h2>Koffietafels &amp; privéfeestjes</h2>
          <p>
            Een koffietafel, ook na een afscheid, of een klein feest. Het
            zaaltje telt ongeveer {site.capacity} comfortabele plaatsen.
          </p>
        </div>
      </article>

      <article className="offer-block">
        <Photo
          photo={photos.soepTerras}
          caption="Buiten, als het weer het toelaat"
          tilt={1.2}
          className="offer-photo"
        />
        <div className="offer-copy">
          <h2>Vergaderingen &amp; workshops</h2>
          <p>
            Het zaaltje kan ook voor een vergadering of een workshop. Zeg in
            je aanvraag wat je van plan bent, dan zien we of het past.
          </p>
          <div className="actions">
            <Link className="btn" href="/aanvragen">
              Aanvraag sturen
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
