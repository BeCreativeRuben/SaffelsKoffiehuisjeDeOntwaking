import type { Metadata } from "next";
import { RequestForm } from "@/components/RequestForm";
import { Squiggle } from "@/components/Ornaments";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Zaal aanvragen",
  description: `Vraag een datum aan bij ${site.name}. Je krijgt bericht zodra we je aanvraag bekeken hebben.`,
};

const steps = [
  { title: "Stuur je aanvraag", text: "Vul het formulier in — twee minuutjes." },
  { title: "Wij checken de agenda", text: "We bekijken of je datum past." },
  { title: "Je hoort van ons", text: "Bevestiging per mail, daarna stemmen we de details af." },
];

export default function AanvragenPage() {
  return (
    <div className="site-shell py-14 sm:py-20">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="section-label">Aanvragen</p>
          <h1 className="display mt-3 text-5xl text-espresso sm:text-6xl">
            Vraag je <span className="script text-tomato">datum</span> aan
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
            Comfortabel voor zo’n {site.capacity} personen. Geen account, geen
            gedoe.
          </p>

          <Squiggle className="mt-8 h-3 w-32 text-tomato/70" />

          <ol className="mt-8 space-y-5">
            {steps.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span className="step-circle text-base">{i + 1}</span>
                <div>
                  <p className="font-bold text-coffee">{step.title}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-ink-soft">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="tile p-6 sm:p-9">
          <RequestForm />
        </div>
      </div>
    </div>
  );
}
