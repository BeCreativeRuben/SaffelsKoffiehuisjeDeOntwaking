import Link from "next/link";
import { Photo } from "@/components/Photo";
import { ShutterWindow } from "@/components/ShutterWindow";
import { photos } from "@/lib/photos";
import { site } from "@/lib/site";

const offers = [
  {
    title: "Koffie & gebak, pannenkoeken",
    text: "Koffie, taart en pannenkoeken. Wat er die dag is, zie je op het bord of vraag je even.",
  },
  {
    title: "Ontbijt na reservatie",
    text: "Een ontbijt of brunch aan de lange tafel. Alleen als je vooraf reserveert.",
  },
  {
    title: "Beperkte lunch",
    text: "Geen lange kaart. Een kleine lunch, huiselijk en eerlijk.",
  },
  {
    title: "Koffietafels & privéfeestjes",
    text: "Voor een koffietafel of een klein feest met de mensen die erbij horen.",
  },
  {
    title: "Vergaderingen & workshops",
    text: "Het zaaltje kan ook voor een vergadering of een workshop.",
  },
];

export default function HomePage() {
  return (
    <div className="shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">
            {site.place} · {site.municipality}
          </p>
          <h1>
            <span>Saffels </span>
            <span>koffiehuisje</span>
            <em>{site.subtitle}</em>
          </h1>
          <p className="sign-line">{site.signLine}.</p>
          <p className="lede">
            Een hoeve met een tuin, een terras en een zaaltje waar je met
            ongeveer {site.capacity} mensen comfortabel zit. Eerlijk eten,
            zonder poespas.
          </p>
          <div className="actions">
            <Link className="btn" href="/aanvragen">
              Zaal aanvragen
            </Link>
            <a className="btn btn-secondary" href={`tel:${site.phoneTel}`}>
              Bel {site.phoneDisplay}
            </a>
          </div>
        </div>
        <div className="hero-photo">
          <ShutterWindow
            photo={photos.hoeve}
            caption="De hoeve in Zaffelare, met blauwe luiken."
          />
        </div>
      </section>

      <section className="band" aria-labelledby="het-huis">
        <div>
          <p className="band-num">01</p>
          <h2 id="het-huis">Het huis</h2>
        </div>
        <div className="band-body">
          <p>
            Je stapt de hoeve binnen en je mag er zijn. Blauwe luiken,
            blauweregen, een tuin en een terras. Op een bord in de tuin staat:
            plaats om te zijn.
          </p>
          <blockquote className="note">
            <p>
              Gene chique boel. Iedereen mag er zijn wie die is, zonder teveel
              poespas.
            </p>
            <footer>Katleen</footer>
          </blockquote>
          <div className="prints">
            <Photo
              photo={photos.terras}
              caption="Het terras"
              tilt={-1.2}
              kind="feature"
              sizes="(max-width: 899px) 92vw, 420px"
            />
            <Photo
              photo={photos.avond}
              caption="Avond aan tafel"
              tilt={1.15}
              wash
            />
            <Photo
              photo={photos.tuinbord}
              caption="Plaats om te zijn"
              tilt={-0.8}
              wash
            />
          </div>
        </div>
      </section>

      <section className="band" aria-labelledby="de-zaal-home">
        <div>
          <p className="band-num">02</p>
          <h2 id="de-zaal-home">De zaal</h2>
        </div>
        <div className="band-body">
          <p>
            Het zaaltje is er voor ongeveer {site.capacity} personen,
            comfortabel gezeten. Mensen vragen het voor een verjaardag, een
            communie of lentefeest, een koffietafel, een baby shower of de
            familie rond de tafel. Een vergadering of een workshop kan ook.
          </p>
          <p>
            Je stuurt een aanvraag. We kijken of de datum vrij is en mailen je
            terug. Op deze site betaal je niets.
          </p>
          <div className="actions">
            <Link className="btn" href="/de-zaal">
              Bekijk de zaal
            </Link>
          </div>
        </div>
      </section>

      <section className="band" aria-labelledby="op-het-bord">
        <div>
          <p className="band-num">03</p>
          <h2 id="op-het-bord">Op het bord</h2>
        </div>
        <div className="band-body">
          <p>Dit staat op het bord aan de straat.</p>
          <dl className="offer-list">
            {offers.map((offer) => (
              <div key={offer.title}>
                <dt>{offer.title}</dt>
                <dd>{offer.text}</dd>
              </div>
            ))}
          </dl>
          <p>
            <Link className="text-link" href="/aanbod">
              Meer over het aanbod
            </Link>
          </p>
        </div>
      </section>

      <section className="band" aria-labelledby="het-nest">
        <div>
          <p className="band-num">04</p>
          <h2 id="het-nest">{site.nestName}</h2>
        </div>
        <div className="band-body">
          <p>
            {site.nestName} is een B&amp;B van dezelfde uitbater. Die website
            komt later.
          </p>
        </div>
      </section>
    </div>
  );
}
