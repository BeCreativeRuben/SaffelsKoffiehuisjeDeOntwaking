import Link from "next/link";

const links = [
  { href: "/de-zaal", label: "De zaal" },
  { href: "/contact", label: "Contact" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-cream/85 backdrop-blur-md">
      <div className="site-shell flex items-center justify-between gap-4 py-3">
        <Link href="/" className="group flex min-w-0 items-baseline gap-2">
          <span className="display text-lg text-espresso transition-opacity group-hover:opacity-75 sm:text-xl">
            ’t Zaffels
          </span>
          <span className="script hidden text-xl text-tomato sm:inline">
            Koffiehuisje
          </span>
        </Link>
        <nav
          aria-label="Hoofdnavigatie"
          className="flex items-center gap-2 sm:gap-5"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-coffee/80 transition-colors hover:text-tomato"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/aanvragen" className="btn btn-primary btn-sm">
            Zaal aanvragen
          </Link>
        </nav>
      </div>
    </header>
  );
}
