import type { Metadata } from "next";
import Link from "next/link";
import { SteamCup } from "@/components/Ornaments";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aanvraag ontvangen",
};

export default function BedanktPage() {
  return (
    <div className="site-shell flex min-h-[65svh] items-center py-16">
      <div className="grid w-full items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="section-label">Bedankt</p>
          <h1 className="display mt-4 text-5xl text-espresso sm:text-6xl">
            Aanvraag{" "}
            <span className="display-italic text-walnut">ontvangen</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-soft">
            We hebben je aanvraag goed ontvangen en checken de agenda. Je hoort
            van ons zodra we weten of de datum past — hou je mailbox in de
            gaten.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/" className="btn btn-primary">
              Terug naar home
            </Link>
            <Link href="/de-zaal" className="btn btn-ghost">
              Meer over de zaal
            </Link>
          </div>
          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.16em] text-olive">
            {site.name}
          </p>
        </div>
        <div className="hidden justify-center md:flex">
          <div
            className="arch flex aspect-[3/4] w-full max-w-xs items-center justify-center border border-line"
            style={{
              background:
                "radial-gradient(120% 90% at 50% 0%, #58381d 0%, #3b2412 55%, #2a1a0f 100%)",
            }}
          >
            <SteamCup className="h-28 w-28 text-caramel" />
          </div>
        </div>
      </div>
    </div>
  );
}
