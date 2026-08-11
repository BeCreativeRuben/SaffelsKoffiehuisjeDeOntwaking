import Link from "next/link";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <section className="relative isolate min-h-[calc(100svh-5.5rem)] overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `
            linear-gradient(105deg, color-mix(in srgb, var(--bg) 88%, transparent) 0%, color-mix(in srgb, var(--bg) 35%, transparent) 42%, transparent 68%),
            radial-gradient(ellipse 70% 60% at 70% 45%, color-mix(in srgb, #2a1a12 55%, transparent), transparent 70%),
            linear-gradient(160deg, #6f7d5c 0%, #4a3220 48%, #2a1a12 100%)
          `,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-[58%] opacity-40 mix-blend-soft-light"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, transparent 0 14px, color-mix(in srgb, white 8%, transparent) 14px 15px)",
        }}
      />

      <div className="site-shell flex min-h-[calc(100svh-5.5rem)] flex-col justify-center py-16">
        <div className="max-w-2xl">
          <p className="fade-up display text-4xl leading-none text-coffee sm:text-6xl md:text-7xl">
            {site.name}
          </p>
          <h1 className="fade-up-delay mt-6 max-w-xl text-xl font-medium leading-snug text-ink sm:text-2xl">
            {site.tagline}
          </h1>
          <p className="fade-up-delay-2 mt-5 max-w-lg text-base leading-relaxed text-ink-soft sm:text-lg">
            Een plek voor verjaardagen, communies en warme samenkomsten —
            comfortabel voor zo’n {site.capacity} personen.
          </p>
          <div className="fade-up-delay-2 mt-9 flex flex-wrap gap-3">
            <Link href="/aanvragen" className="btn btn-primary">
              Zaal aanvragen
            </Link>
            <Link href="/de-zaal" className="btn btn-ghost">
              Bekijk de zaal
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
