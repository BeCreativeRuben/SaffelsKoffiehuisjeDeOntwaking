import Link from "next/link";
import { site } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/de-zaal", label: "De zaal" },
  { href: "/aanvragen", label: "Aanvragen" },
  { href: "/contact", label: "Contact" },
] as const;

export function Header() {
  return (
    <header className="relative z-20 pt-5">
      <div className="site-shell flex items-center justify-between gap-4">
        <Link href="/" className="group min-w-0">
          <p className="display text-xl text-coffee sm:text-2xl group-hover:opacity-80 transition-opacity">
            {site.name}
          </p>
        </Link>
        <nav
          aria-label="Hoofdnavigatie"
          className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 text-sm font-semibold text-coffee/85"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-coffee transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
