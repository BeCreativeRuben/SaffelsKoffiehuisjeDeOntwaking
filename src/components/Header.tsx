"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/de-zaal", label: "De zaal" },
  { href: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
            &apos;t Zaffels
          </span>
          <span className="display-italic hidden text-base text-olive sm:inline">
            Koffiehuisje
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Hoofdnavigatie"
          className="hidden items-center gap-6 sm:flex"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.82rem] font-semibold uppercase tracking-[0.08em] text-wood/70 transition-colors hover:text-olive"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/aanvragen" className="btn btn-primary btn-sm">
            Zaal aanvragen
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-wood transition-colors hover:bg-paper sm:hidden"
          aria-label={menuOpen ? "Menu sluiten" : "Menu openen"}
          aria-expanded={menuOpen}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {menuOpen ? (
              <>
                <line x1="4" y1="4" x2="16" y2="16" />
                <line x1="16" y1="4" x2="4" y2="16" />
              </>
            ) : (
              <>
                <line x1="3" y1="5" x2="17" y2="5" />
                <line x1="3" y1="10" x2="17" y2="10" />
                <line x1="3" y1="15" x2="17" y2="15" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-line/60 bg-paper/95 pb-6 pt-4 backdrop-blur-sm sm:hidden">
          <nav className="site-shell flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-wood/80 transition-colors hover:bg-cream-deep/50 hover:text-olive"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/aanvragen"
              onClick={() => setMenuOpen(false)}
              className="btn btn-primary mt-2"
            >
              Zaal aanvragen
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
