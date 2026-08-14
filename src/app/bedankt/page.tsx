import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "@/components/Ornaments";
import { photos } from "@/lib/media";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aanvraag ontvangen",
};

export default function BedanktPage() {
  return (
    <div className="site-shell flex min-h-[65svh] items-center py-20">
      <div className="grid w-full items-center gap-14 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Heart className="mb-4 h-8 w-8 text-accent/50" />
          <p className="section-label">Bedankt</p>
          <hr className="section-rule mt-4" />
          <h1 className="display mt-6 text-5xl text-espresso sm:text-6xl">
            Aanvraag{" "}
            <span className="display-italic text-olive">ontvangen</span>
          </h1>
          <p className="mt-7 max-w-lg text-lg leading-relaxed text-ink-soft">
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
          <p className="mt-12 text-sm font-semibold uppercase tracking-[0.16em] text-olive/60">
            {site.name}
          </p>
        </div>
        <div className="photo-frame hidden md:block">
          <div className="relative aspect-[4/5]">
            <Image
              src={photos.interieur.src}
              alt={photos.interieur.alt}
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
