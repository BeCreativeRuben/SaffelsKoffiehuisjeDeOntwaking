import Link from "next/link";
import { HandNote } from "@/components/HandNote";
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
    <>
      <section className="atmosphere" aria-labelledby="home-title">
        <ShutterWindow
          photo={photos.hoeve}
          caption="De hoeve in Zaffelare, met blauwe luiken."
          variant="hero"
          preload
        />
        <div className="shell atmosphere-sheet">
          <div className="hero-prints">
            <Photo
              photo={photos.zaal}
              caption="Bloemen in de zaal"
              tilt={-2.2}
              kind="feature"
              sizes="(max-width: 899px) 30vw, 240px"
            />
            <Photo
              photo={photos.ontbijt}
              caption="De lange tafel"
              tilt={1.6}
              kind="feature"
              sizes="(max-width: 899px) 30vw, 240px"
            />
            <Photo
              photo={photos.terras}
              caption="Op het terras"
              tilt={-1.3}
              kind="feature"
              sizes="(max-width: 899px) 30vw, 240px"
            />
          </div>
          <div className="hero-copy">
            <p className="eyebrow">
              {site.place} · {site.municipality}
            </p>
            <h1 id="home-title">
              <span>Saffels </span>
              <span>koffiehuisje</span>
              <em>{site.subtitle}</em>
            </h1>
            <p className="script-line">plaats om te zijn</p>
            <p className="sign-line">{site.signLine}.</p>
            <p className="lede">
              Je stapt de hoeve binnen en je mag er zijn. Een tuin, een terras
              en een zaaltje waar je met ongeveer {site.capacity} mensen
              comfortabel zit. Eerlijk eten, zonder poespas.
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
        </div>
      </section>

      <div className="shell">
        <section className="spread" aria-labelledby="aan-tafel">
          <p className="eyebrow">Op de tafel</p>
          <h2 id="aan-tafel">Koffie, gebak en nog iets warms</h2>
          <p>
            Wat je op de foto’s ziet: koffie, taart, wafels, soep, het terras,
            en oliebollen rond nieuwjaar. Wat er die dag is, vraag je even.
          </p>
          <div className="table-spread">
            <Photo
              photo={photos.taart}
              caption="Chocoladetaart"
              tilt={-1.4}
              className="spread-taart"
              sizes="(max-width: 899px) 92vw, 480px"
            />
            <Photo
              photo={photos.baileys}
              caption="Koffie met Baileys"
              tilt={1.8}
              steam
              className="spread-koffie"
              sizes="(max-width: 899px) 46vw, 300px"
            />
            <Photo
              photo={photos.wafels}
              caption="Brusselse wafels"
              tilt={-1.1}
              className="spread-wafels"
              sizes="220px"
            />
            <Photo
              photo={photos.soep}
              caption="Soep"
              tilt={1.3}
              className="spread-soep"
              sizes="(max-width: 899px) 46vw, 260px"
            />
            <Photo
              photo={photos.terras}
              caption="Het terras"
              tilt={-0.8}
              className="spread-terras"
              kind="feature"
              sizes="(max-width: 899px) 92vw, 480px"
            />
            <Photo
              photo={photos.oliebollen}
              caption="Oliebollen, rond nieuwjaar"
              tilt={1.5}
              className="spread-olie"
              sizes="(max-width: 899px) 46vw, 240px"
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
              Blauwe luiken, blauweregen, een tuin en een terras. Op het bord
              in de tuin staat het gewoon zo.
            </p>
            <div className="house-note">
              <HandNote by="Katleen">
                Gene chique boel. Iedereen mag er zijn wie die is, zonder teveel
                poespas.
              </HandNote>
              <Photo
                photo={photos.tuinbord}
                caption="Plaats om te zijn"
                tilt={1.4}
                className="cap-sm"
                sizes="200px"
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
              Je stuurt een aanvraag. We kijken of de datum vrij is en mailen
              je terug. Op deze site betaal je niets.
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
    </>
  );
}
