"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

const links = [
  { href: "/de-zaal", label: "De zaal" },
  { href: "/aanbod", label: "Aanbod" },
  { href: "/aanvragen", label: "Aanvragen" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <a className="skip" href="#inhoud">
        Naar de inhoud
      </a>
      <div className="shell header-bar">
        <Link
          href="/"
          className="wordmark"
          aria-current={pathname === "/" ? "page" : undefined}
        >
          <span className="wordmark-title">{site.shortName}</span>
          <span className="wordmark-sub">{site.subtitle}</span>
        </Link>
        <a className="header-call" href={`tel:${site.phoneTel}`}>
          <span className="header-call-kicker">Bel</span>
          <span>{site.phoneDisplay}</span>
        </a>
        <nav className="site-nav" aria-label="Hoofdmenu">
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
