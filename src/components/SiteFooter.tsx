import Link from "next/link";
import { site } from "@/lib/site";

const links = [
  { href: "/de-zaal", label: "De zaal" },
  { href: "/aanbod", label: "Aanbod" },
  { href: "/aanvragen", label: "Aanvragen" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <p className="footer-name">{site.name}</p>
          <p className="footer-place">
            {site.place}, {site.municipality}
          </p>
        </div>
        <div>
          <p className="footer-label">Bellen</p>
          <a className="footer-phone" href={`tel:${site.phoneTel}`}>
            {site.phoneDisplay}
          </a>
          <p>
            <a href={site.facebook}>{site.facebookName} op Facebook</a>
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="footer-label">Op de site</p>
          <ul className="footer-links">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="footer-label">{site.nestName}</p>
          <p>Een B&B van dezelfde uitbater. De website volgt nog.</p>
          <p>Adres, openingsuren en e-mail volgen nog.</p>
        </div>
      </div>
    </footer>
  );
}
