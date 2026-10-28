import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { RequestForm } from "@/components/RequestForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aanvragen",
  description: `Vraag de zaal of een tafel aan bij ${site.name} in ${site.place}. Kies een datum, een tijdstip en het aantal personen. Je krijgt antwoord per e-mail. Geen betaling online.`,
};

export default function AanvragenPage() {
  return (
    <div className="shell request-layout">
      <div>
        <PageIntro
          eyebrow="Geen betaling"
          title="Vraag een datum aan"
          lede="Voor de zaal, een ontbijt, de lunch of koffie met gebak. Dit is nog geen vaste boeking. We kijken of het past en mailen je terug."
        />
        <p>
          Je kiest een datum, een tijdstip en het aantal personen, en je
          vertelt de gelegenheid. Katleen kijkt in de agenda. Online betalen
          hoeft niet.
        </p>
        <p style={{ marginTop: "0.9rem" }}>
          Liever bellen?{" "}
          <a className="text-link" href={`tel:${site.phoneTel}`}>
            {site.phoneDisplay}
          </a>
        </p>
      </div>
      <RequestForm />
    </div>
  );
}
