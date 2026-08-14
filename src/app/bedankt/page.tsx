import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { photos } from "@/lib/media";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aanvraag ontvangen",
};

export default function BedanktPage() {
  return (
    <div className="site-shell flex min-h-[65svh] items-center py-16">
      <div className="grid w-full items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="section-label">Bedankt</p>
          <h1 className="display mt-4 text-5xl text-espresso sm:text-6xl">
            Aanvraag{" "}
            <span className="display-italic text-olive">ontvangen</span>
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
        <div className="photo-frame hidden md:block">
          <div className="relative aspect-[4/5]">
            <Image
              src={photos.servies.src}
              alt={photos.servies.alt}
              fill
              sizes="40vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
