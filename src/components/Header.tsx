"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/de-zaal", label: "De zaal" },
  { href: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="site-shell site-header-inner">
        <Link href="/" className="group flex min-w-0 items-baseline gap-2">
          <span className="display text-lg text-espresso transition-opacity group-hover:opacity-75 sm:text-xl">
            ’t Zaffels
          </span>
          <span className="display-italic hidden text-base text-olive sm:inline">
            Koffiehuisje
          </span>
        </Link>
        <nav
          aria-label="Hoofdnavigatie"
          className="flex items-center gap-2 sm:gap-6"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold tracking-wide text-wood/80 transition-colors hover:text-olive"
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
