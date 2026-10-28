import Link from "next/link";

export default function NotFound() {
  return (
    <div className="shell quiet-page">
      <p className="eyebrow">404</p>
      <h1>Deze pagina bestaat niet.</h1>
      <p className="lede">
        De link is stuk, of de pagina is er nooit geweest. Ga terug naar de
        start, of bel even.
      </p>
      <div className="actions">
        <Link className="btn" href="/">
          Naar de start
        </Link>
        <Link className="btn btn-secondary" href="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
}
