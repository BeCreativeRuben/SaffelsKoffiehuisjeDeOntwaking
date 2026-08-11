"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type FieldErrors = Partial<Record<string, string[]>>;

export function RequestForm() {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

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
        setFieldErrors(data.fieldErrors ?? {});
        setFormError(data.error ?? "Er ging iets mis. Probeer opnieuw.");
        setPending(false);
        return;
      }

      router.push("/bedankt");
    } catch {
      setFormError("Geen verbinding. Probeer het zo opnieuw.");
      setPending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="field">
          <label htmlFor="name">Naam</label>
          <input id="name" name="name" autoComplete="name" required />
          {fieldErrors.name?.[0] ? (
            <p className="text-sm text-walnut">{fieldErrors.name[0]}</p>
          ) : null}
        </div>
        <div className="field">
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
          {fieldErrors.email?.[0] ? (
            <p className="text-sm text-walnut">{fieldErrors.email[0]}</p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="field">
          <label htmlFor="phone">Telefoon</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" required />
          {fieldErrors.phone?.[0] ? (
            <p className="text-sm text-walnut">{fieldErrors.phone[0]}</p>
          ) : null}
        </div>
        <div className="field">
          <label htmlFor="guests">Aantal personen</label>
          <input
            id="guests"
            name="guests"
            type="number"
            min={1}
            max={50}
            defaultValue={12}
            required
          />
          {fieldErrors.guests?.[0] ? (
            <p className="text-sm text-walnut">{fieldErrors.guests[0]}</p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="field">
          <label htmlFor="date">Gewenste datum</label>
          <input id="date" name="date" type="date" required />
          {fieldErrors.date?.[0] ? (
            <p className="text-sm text-walnut">{fieldErrors.date[0]}</p>
          ) : null}
        </div>
        <div className="field">
          <label htmlFor="time">Tijdstip</label>
          <input
            id="time"
            name="time"
            type="text"
            placeholder="bv. 14:00 – 18:00"
            required
          />
          {fieldErrors.time?.[0] ? (
            <p className="text-sm text-walnut">{fieldErrors.time[0]}</p>
          ) : null}
        </div>
      </div>

      <div className="field">
        <label htmlFor="occasion">Gelegenheid</label>
        <input
          id="occasion"
          name="occasion"
          placeholder="bv. verjaardag, communie, familiefeest…"
          required
        />
        {fieldErrors.occasion?.[0] ? (
          <p className="text-sm text-walnut">{fieldErrors.occasion[0]}</p>
        ) : null}
      </div>

      <div className="field">
        <label htmlFor="message">Opmerking (optioneel)</label>
        <textarea
          id="message"
          name="message"
          placeholder="Vertel kort wat je in gedachten hebt."
        />
      </div>

      <p className="text-sm leading-relaxed text-ink-soft">
        Na je aanvraag ontvang je een bevestiging van ontvangst. Zodra we je
        aanvraag bekeken hebben, laten we weten of de datum past. Daarna stemmen
        we samen de details af.
      </p>

      {formError ? (
        <p className="rounded-xl border border-walnut/30 bg-paper/70 px-4 py-3 text-sm text-walnut">
          {formError}
        </p>
      ) : null}

      <button type="submit" className="btn btn-primary w-full sm:w-auto" disabled={pending}>
        {pending ? "Even geduld…" : "Aanvraag versturen"}
      </button>
    </form>
  );
}
