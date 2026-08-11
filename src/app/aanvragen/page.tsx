import type { Metadata } from "next";
import { RequestForm } from "@/components/RequestForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Zaal aanvragen",
  description: `Vraag een datum aan bij ${site.name}. Je krijgt bericht zodra we je aanvraag bekeken hebben.`,
};

export default function AanvragenPage() {
  return (
    <div className="site-shell py-14 sm:py-20">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-olive">
            Aanvragen
          </p>
          <h1 className="display mt-3 text-4xl text-coffee sm:text-5xl">
            Vraag je datum aan
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            Vul het formulier in. Je ontvangt eerst een bevestiging van
            ontvangst. Zodra we gecontroleerd hebben of de datum past, krijg je
            bericht.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
            Comfortabel voor zo’n {site.capacity} personen.
          </p>
        </div>

        <div className="rounded-[1.5rem] border border-line bg-paper/70 p-5 sm:p-8 backdrop-blur-sm">
          <RequestForm />
        </div>
      </div>
    </div>
  );
}
