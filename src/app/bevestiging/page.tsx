import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bevestiging",
  robots: { index: false, follow: false },
};

type SearchParams = Promise<{
  status?: string;
  decision?: string;
}>;

export default async function BevestigingPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const status = params.status ?? "invalid";
  const decision = params.decision;

  let title = "Deze link werkt niet";
  let body =
    "De link is ongeldig of al gebruikt. Open de nieuwste e-mail, of vraag om een nieuwe aanvraag.";

  if (status === "ok" && decision === "approved") {
    title = "Aanvraag goedgekeurd";
    body =
      "De gast heeft een mail gekregen. Spreek daarna zelf de laatste dingen af.";
  } else if (status === "ok" && decision === "declined") {
    title = "Aanvraag afgewezen";
    body = "De gast heeft een mail gekregen dat deze datum niet kan.";
  } else if (status === "already") {
    title = "Al behandeld";
    body =
      decision === "approved"
        ? "Deze aanvraag was al goedgekeurd."
        : decision === "declined"
          ? "Deze aanvraag was al afgewezen."
          : "Deze aanvraag is al eerder behandeld.";
  } else if (status === "error") {
    title = "Er ging iets mis";
    body =
      "De status is niet bijgewerkt. Probeer de link nog eens, of kijk later opnieuw.";
  }

  return (
    <div className="shell quiet-page">
      <p className="eyebrow">Agenda</p>
      <h1>{title}</h1>
      <p className="lede">{body}</p>
      <div className="actions">
        <Link className="btn" href="/">
          Naar de website
        </Link>
      </div>
    </div>
  );
}
