import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-28 band-wood">
      <div className="site-shell py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="display text-3xl text-cream">{site.name}</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">
              Huiselijk &amp; familiaal. Iedereen mag er zijn wie die is —
              zonder teveel poespas.
            </p>
          </div>

          <div>
            <p className="section-label !text-caramel">Ontdek</p>
            <ul className="mt-4 space-y-2.5 text-sm text-cream/80">
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
            <p className="section-label !text-caramel">Ook van ons</p>
            <p className="mt-4 text-sm leading-relaxed text-cream/80">
              <span className="display-italic text-lg text-cream">
                {site.nestName}
              </span>
              <br />
              Onze B&amp;B — website volgt binnenkort.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-cream/15 pt-6 text-xs text-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p>Kleinschalig, met liefde.</p>
        </div>
      </div>
    </footer>
  );
}
