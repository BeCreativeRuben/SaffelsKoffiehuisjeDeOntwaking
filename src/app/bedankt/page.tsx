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
      <div className="grid w-full items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="section-label">Bedankt!</p>
          <h1 className="display mt-3 text-5xl text-espresso sm:text-6xl">
            Aanvraag <span className="script text-tomato">ontvangen</span>
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
          <p className="script mt-10 text-2xl text-walnut">{site.name}</p>
        </div>
        <div className="hidden justify-center md:flex">
          <div className="polaroid w-full max-w-xs rotate-2">
            <div
              className="polaroid-inner flex aspect-[4/5] items-center justify-center"
              style={{
                background:
                  "radial-gradient(120% 100% at 50% 0%, #6d5138 0%, #4a3220 55%, #38261a 100%)",
              }}
            >
              <SteamCup className="h-24 w-24 text-caramel" />
            </div>
            <p className="script pt-2.5 text-center text-xl text-coffee">
              tot binnenkort!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
