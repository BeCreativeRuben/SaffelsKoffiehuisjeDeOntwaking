import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line/70 py-10">
      <div className="site-shell flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="display text-2xl text-coffee">{site.name}</p>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-soft">
            Huiselijk &amp; familiaal. Iedereen mag er zijn wie die is — zonder
            teveel poespas.
          </p>
        </div>
        <div className="text-sm text-ink-soft">
          <p>
            Ook{" "}
            <span className="font-semibold text-coffee">{site.nestName}</span>{" "}
            (B&amp;B)
          </p>
          <p className="mt-2">
            <Link href="/aanvragen" className="underline underline-offset-4">
              Zaal aanvragen
            </Link>
            {" · "}
            <Link href="/contact" className="underline underline-offset-4">
              Contact
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
