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

  let title = "Link ongeldig";
  let body =
    "Deze goedkeuringslink is ongeldig of verlopen. Open de nieuwste e-mail of vraag de gast een nieuwe aanvraag te sturen.";

  if (status === "ok" && decision === "approved") {
    title = "Aanvraag goedgekeurd";
    body =
      "De gast heeft een bevestigingsmail ontvangen. Stem daarna zelf de laatste details af.";
  } else if (status === "ok" && decision === "declined") {
    title = "Aanvraag afgewezen";
    body = "De gast heeft een e-mail ontvangen dat deze datum niet kan.";
  } else if (status === "already") {
    title = "Al behandeld";
    body =
      decision === "approved"
        ? "Deze aanvraag was al goedgekeurd."
        : decision === "declined"
          ? "Deze aanvraag was al afgewezen."
          : "Deze aanvraag werd al eerder behandeld.";
  } else if (status === "error") {
    title = "Er ging iets mis";
    body =
      "De status kon niet worden bijgewerkt. Probeer de link opnieuw of kijk later nog eens.";
  }

  return (
    <div className="site-shell flex min-h-[60svh] items-center py-20">
      <div className="max-w-xl">
        <p className="section-label">Beheer</p>
        <hr className="section-rule mt-4" />
        <h1 className="display mt-6 text-5xl text-espresso sm:text-6xl">
          {title}
        </h1>
        <p className="mt-7 text-lg leading-relaxed text-ink-soft">{body}</p>
        <Link href="/" className="btn btn-primary mt-9">
          Naar de website
        </Link>
      </div>
    </div>
  );
}
