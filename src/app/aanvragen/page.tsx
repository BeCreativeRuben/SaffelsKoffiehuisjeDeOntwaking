import type { Metadata } from "next";
import Image from "next/image";
import { RequestForm } from "@/components/RequestForm";
import { photos } from "@/lib/media";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Zaal aanvragen",
  description: `Vraag een datum aan bij ${site.name}. Je krijgt bericht zodra we je aanvraag bekeken hebben.`,
};

const steps = [
  { title: "Stuur je aanvraag", text: "Vul het formulier in — twee minuutjes." },
  { title: "Wij checken de agenda", text: "We bekijken of je datum past." },
  {
    title: "Je hoort van ons",
    text: "Bevestiging per mail, daarna stemmen we de details af.",
  },
];

export default function AanvragenPage() {
  return (
    <div className="site-shell py-20 sm:py-24">
      <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="section-label">Aanvragen</p>
          <hr className="section-rule mt-4" />
          <h1 className="display mt-6 text-5xl text-espresso sm:text-6xl">
            Vraag je{" "}
            <span className="display-italic text-olive">datum</span> aan
          </h1>
          <p className="mt-7 max-w-md text-[1.05rem] leading-[1.75] text-ink-soft">
            Comfortabel voor zo&apos;n {site.capacity} personen. Geen account, geen
            online betaling — jij vraagt aan, wij bevestigen.
          </p>

          <ol className="mt-10 space-y-6 border-l border-line pl-6">
            {steps.map((step) => (
              <li key={step.title}>
                <p className="font-bold text-wood">{step.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-12 hidden lg:block">
            <div className="photo-frame">
              <div className="relative aspect-[4/3]">
                <Image
                  src={photos.terras.src}
                  alt={photos.terras.alt}
                  fill
                  sizes="35vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="tile p-6 sm:p-10">
          <h2 className="display mb-8 text-2xl text-wood">Je gegevens</h2>
          <RequestForm />
        </div>
      </div>
    </div>
  );
}
