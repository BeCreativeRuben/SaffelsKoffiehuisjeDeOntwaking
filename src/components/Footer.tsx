import Link from "next/link";
import { site } from "@/lib/site";
import { Heart, SteamCup } from "./Ornaments";

export function Footer() {
  return (
    <footer className="mt-24">
      <div aria-hidden className="gingham-strip" />
      <div className="band-dark">
        <div className="site-shell py-14">
          <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <SteamCup className="h-10 w-10 text-caramel" />
                <p className="display text-2xl text-cream">{site.name}</p>
              </div>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">
                Huiselijk &amp; familiaal. Iedereen mag er zijn wie die is —
                zonder teveel poespas.
              </p>
            </div>

            <div>
              <p className="script text-xl text-caramel">Ontdek</p>
              <ul className="mt-3 space-y-2.5 text-sm text-cream/80">
                <li>
                  <Link href="/de-zaal" className="transition-colors hover:text-cream">
                    De zaal
                  </Link>
                </li>
                <li>
                  <Link href="/aanvragen" className="transition-colors hover:text-cream">
                    Zaal aanvragen
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="transition-colors hover:text-cream">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="script text-xl text-caramel">Ook van ons</p>
              <p className="mt-3 text-sm leading-relaxed text-cream/80">
                <span className="display-italic text-base text-cream">
                  {site.nestName}
                </span>
                <br />
                Onze B&amp;B — website volgt binnenkort.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-2 border-t border-cream/15 pt-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {site.name}
            </p>
            <p className="flex items-center gap-1.5">
              Kleinschalig, met liefde
              <Heart className="h-3 w-3 text-tomato" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
