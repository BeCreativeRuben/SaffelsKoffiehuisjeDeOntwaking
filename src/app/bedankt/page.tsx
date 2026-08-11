import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aanvraag ontvangen",
};

export default function BedanktPage() {
  return (
    <div className="site-shell flex min-h-[60svh] items-center py-16">
      <div className="max-w-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-olive">
          Bedankt
        </p>
        <h1 className="display mt-3 text-4xl text-coffee sm:text-5xl">
          Aanvraag ontvangen
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-soft">
          We hebben je aanvraag goed ontvangen. Je hoort van ons zodra we
          gekeken hebben of de datum past.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-primary">
            Terug naar home
          </Link>
          <Link href="/de-zaal" className="btn btn-ghost">
            Meer over de zaal
          </Link>
        </div>
        <p className="mt-8 text-sm text-ink-soft">{site.name}</p>
      </div>
    </div>
  );
}
