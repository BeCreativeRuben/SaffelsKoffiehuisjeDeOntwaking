"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { SeatDots } from "@/components/SeatDots";
import { site } from "@/lib/site";

type FieldErrors = Partial<Record<string, string[]>>;

const occasions = [
  "Verjaardag",
  "Communie of lentefeest",
  "Koffietafel",
  "Baby shower",
  "Familiefeest",
  "Vergadering",
  "Workshop",
  "Ontbijt",
  "Lunch",
  "Koffie en gebak",
];

function todayInBrussels() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Brussels",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

export function RequestForm() {
  const router = useRouter();
  const dateRef = useRef<HTMLInputElement>(null);
  const [pending, setPending] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [guests, setGuests] = useState("");

  useEffect(() => {
    if (dateRef.current) {
      dateRef.current.min = todayInBrussels();
    }
  }, []);

  const guestCount = Number.parseInt(guests, 10);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setFormError(null);
    setFieldErrors({});

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as {
        error?: string;
        fieldErrors?: FieldErrors;
      };

      if (!response.ok) {
        const errors = data.fieldErrors ?? {};
        setFieldErrors(errors);
        setFormError(data.error ?? "Er ging iets mis. Probeer opnieuw.");
        const firstInvalid = Object.keys(errors)[0];
        if (firstInvalid) {
          document.getElementById(firstInvalid)?.focus();
        }
        setPending(false);
        return;
      }

      router.push("/bedankt");
    } catch {
      setFormError(
        `Geen verbinding. Probeer het zo opnieuw, of bel ${site.phoneDisplay}.`,
      );
      setPending(false);
    }
  }

  function errorFor(name: string) {
    return fieldErrors[name]?.[0];
  }

  return (
    <form className="request-form" onSubmit={onSubmit}>
      <p className="form-note">
        Alle velden zijn verplicht, behalve je bericht. We gebruiken je
        gegevens alleen om op deze aanvraag te antwoorden.
      </p>

      {formError ? (
        <div className="form-alert" role="alert">
          {formError}
        </div>
      ) : null}

      <fieldset>
        <legend>Je moment</legend>

        <div className={errorFor("date") ? "field has-error" : "field"}>
          <label htmlFor="date">Datum</label>
          <input
            ref={dateRef}
            id="date"
            name="date"
            type="date"
            lang="nl-BE"
            required
            aria-invalid={errorFor("date") ? true : undefined}
            aria-describedby={errorFor("date") ? "date-error" : undefined}
          />
          {errorFor("date") ? (
            <p className="field-error" id="date-error">
              {errorFor("date")}
            </p>
          ) : null}
        </div>

        <div className={errorFor("time") ? "field has-error" : "field"}>
          <label htmlFor="time">Tijdstip</label>
          <input
            id="time"
            name="time"
            type="text"
            required
            placeholder="bijvoorbeeld 14:00 tot 18:00"
            autoComplete="off"
            aria-invalid={errorFor("time") ? true : undefined}
            aria-describedby={errorFor("time") ? "time-error" : "time-hint"}
          />
          <p className="hint" id="time-hint">
            Een uur of een periode, zoals jij het in gedachten hebt.
          </p>
          {errorFor("time") ? (
            <p className="field-error" id="time-error">
              {errorFor("time")}
            </p>
          ) : null}
        </div>

        <div className={errorFor("guests") ? "field has-error" : "field"}>
          <label htmlFor="guests">Aantal personen</label>
          <input
            id="guests"
            name="guests"
            type="number"
            inputMode="numeric"
            min={1}
            max={50}
            required
            value={guests}
            onChange={(event) => setGuests(event.target.value)}
            aria-invalid={errorFor("guests") ? true : undefined}
            aria-describedby={
              errorFor("guests") ? "guests-hint guests-error" : "guests-hint"
            }
          />
          <p className="hint" id="guests-hint">
            {guestCount > site.capacity
              ? `De zaal zit comfortabel tot ongeveer ${site.capacity}. Zit je erboven, schrijf dan in je bericht hoe je het ziet.`
              : `De zaal zit comfortabel tot ongeveer ${site.capacity} personen.`}
          </p>
          <SeatDots filled={Number.isNaN(guestCount) ? 0 : guestCount} />
          {errorFor("guests") ? (
            <p className="field-error" id="guests-error">
              {errorFor("guests")}
            </p>
          ) : null}
        </div>

        <div className={errorFor("occasion") ? "field has-error" : "field"}>
          <label htmlFor="occasion">Gelegenheid</label>
          <input
            id="occasion"
            name="occasion"
            type="text"
            list="gelegenheden"
            required
            placeholder="verjaardag, koffietafel, workshop…"
            aria-invalid={errorFor("occasion") ? true : undefined}
            aria-describedby={
              errorFor("occasion") ? "occasion-error" : "occasion-hint"
            }
          />
          <datalist id="gelegenheden">
            {occasions.map((occasion) => (
              <option key={occasion} value={occasion} />
            ))}
          </datalist>
          <p className="hint" id="occasion-hint">
            Kies een voorstel of schrijf het in je eigen woorden.
          </p>
          {errorFor("occasion") ? (
            <p className="field-error" id="occasion-error">
              {errorFor("occasion")}
            </p>
          ) : null}
        </div>
      </fieldset>

      <fieldset>
        <legend>Jouw gegevens</legend>

        <div className={errorFor("name") ? "field has-error" : "field"}>
          <label htmlFor="name">Naam</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={errorFor("name") ? true : undefined}
            aria-describedby={errorFor("name") ? "name-error" : undefined}
          />
          {errorFor("name") ? (
            <p className="field-error" id="name-error">
              {errorFor("name")}
            </p>
          ) : null}
        </div>

        <div className={errorFor("email") ? "field has-error" : "field"}>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            aria-invalid={errorFor("email") ? true : undefined}
            aria-describedby={errorFor("email") ? "email-error" : undefined}
          />
          {errorFor("email") ? (
            <p className="field-error" id="email-error">
              {errorFor("email")}
            </p>
          ) : null}
        </div>

        <div className={errorFor("phone") ? "field has-error" : "field"}>
          <label htmlFor="phone">Telefoon</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            required
            aria-invalid={errorFor("phone") ? true : undefined}
            aria-describedby={errorFor("phone") ? "phone-error" : undefined}
          />
          {errorFor("phone") ? (
            <p className="field-error" id="phone-error">
              {errorFor("phone")}
            </p>
          ) : null}
        </div>

        <div className={errorFor("message") ? "field has-error" : "field"}>
          <label htmlFor="message">Bericht</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Iets wat we moeten weten, mag je hier kwijt."
            aria-invalid={errorFor("message") ? true : undefined}
            aria-describedby="message-hint"
          />
          <p className="hint" id="message-hint">
            Optioneel.
          </p>
          {errorFor("message") ? (
            <p className="field-error">{errorFor("message")}</p>
          ) : null}
        </div>
      </fieldset>

      <div className="form-submit">
        <button className="btn" type="submit" disabled={pending}>
          {pending ? "Bezig met versturen…" : "Aanvraag versturen"}
        </button>
        <p className="hint">
          Dit is een aanvraag, geen betaling en nog geen vaste boeking. We
          mailen je als we de datum bekeken hebben.
        </p>
      </div>
    </form>
  );
}
