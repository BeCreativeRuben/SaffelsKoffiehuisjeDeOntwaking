"use client";

import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import type { SiteContent } from "@/lib/content";

type Status = "idle" | "loading" | "saving" | "saved" | "error";

function LoginForm({ onLogin }: { onLogin: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setPending(true);
    setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        setError("Ongeldig wachtwoord");
        setPending(false);
        return;
      }
      onLogin();
    } catch {
      setError("Geen verbinding");
      setPending(false);
    }
  }

  return (
    <div className="flex min-h-[70svh] items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="tile w-full max-w-sm p-8 sm:p-10"
      >
        <h1 className="display text-2xl text-espresso">Beheer</h1>
        <p className="mt-2 text-sm text-ink-soft">
          Log in om de website-inhoud aan te passen.
        </p>
        <div className="field mt-6">
          <label htmlFor="password">Wachtwoord</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
            required
          />
        </div>
        {error && (
          <p className="mt-3 text-sm text-accent">{error}</p>
        )}
        <button
          type="submit"
          className="btn btn-primary mt-6 w-full"
          disabled={pending}
        >
          {pending ? "Even geduld…" : "Inloggen"}
        </button>
      </form>
    </div>
  );
}

function TextArea({
  label,
  value,
  onChange,
  rows = 3,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  rows?: number;
}) {
  return (
    <div className="field">
      <label>{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
      />
    </div>
  );
}

function TextInput({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="field">
      <label>{label}</label>
      <input value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

function ListEditor({
  label,
  items,
  onChange,
}: {
  label: string;
  items: { title: string; text: string }[];
  onChange: (items: { title: string; text: string }[]) => void;
}) {
  const update = (idx: number, key: "title" | "text", val: string) => {
    const next = items.map((item, i) =>
      i === idx ? { ...item, [key]: val } : item,
    );
    onChange(next);
  };
  const add = () => onChange([...items, { title: "", text: "" }]);
  const remove = (idx: number) => onChange(items.filter((_, i) => i !== idx));

  return (
    <fieldset className="space-y-4">
      <legend className="text-sm font-bold text-wood">{label}</legend>
      {items.map((item, i) => (
        <div
          key={i}
          className="rounded-xl border border-line/60 bg-paper/60 p-4 space-y-3"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-olive/60">
              #{i + 1}
            </span>
            {items.length > 1 && (
              <button
                type="button"
                onClick={() => remove(i)}
                className="text-xs text-accent/70 hover:text-accent"
              >
                Verwijder
              </button>
            )}
          </div>
          <TextInput
            label="Titel"
            value={item.title}
            onChange={(v) => update(i, "title", v)}
          />
          <TextArea
            label="Tekst"
            value={item.text}
            onChange={(v) => update(i, "text", v)}
            rows={2}
          />
        </div>
      ))}
      <button
        type="button"
        onClick={add}
        className="btn btn-ghost btn-sm"
      >
        + Toevoegen
      </button>
    </fieldset>
  );
}

function TagsEditor({
  label,
  items,
  onChange,
}: {
  label: string;
  items: string[];
  onChange: (items: string[]) => void;
}) {
  const [draft, setDraft] = useState("");
  const add = () => {
    const trimmed = draft.trim();
    if (trimmed && !items.includes(trimmed)) {
      onChange([...items, trimmed]);
      setDraft("");
    }
  };
  const remove = (idx: number) => onChange(items.filter((_, i) => i !== idx));

  return (
    <div className="space-y-3">
      <span className="text-sm font-bold text-wood">{label}</span>
      <div className="flex flex-wrap gap-2">
        {items.map((item, i) => (
          <span
            key={i}
            className="chip group cursor-pointer"
            onClick={() => remove(i)}
          >
            {item}
            <span className="text-accent/0 transition-colors group-hover:text-accent">
              ×
            </span>
          </span>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), add())}
          placeholder="bv. Babyborrels"
          className="flex-1 rounded-lg border border-line bg-white px-3 py-2 text-sm"
        />
        <button
          type="button"
          onClick={add}
          className="btn btn-ghost btn-sm"
        >
          +
        </button>
      </div>
    </div>
  );
}

function ContentEditor({
  content,
  onSave,
  status,
  revision,
}: {
  content: SiteContent;
  onSave: (data: SiteContent) => void;
  status: Status;
  revision: number;
}) {
  const initial = useMemo(() => content, [revision]); // eslint-disable-line react-hooks/exhaustive-deps
  const [data, setData] = useState<SiteContent>(initial);

  const set = useCallback(
    <K extends keyof SiteContent>(key: K, value: SiteContent[K]) => {
      setData((prev) => ({ ...prev, [key]: value }));
    },
    [],
  );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSave(data);
      }}
      className="space-y-10"
    >
      {/* Hero */}
      <section>
        <h2 className="display mb-4 text-xl text-wood">
          Startpagina — Hero
        </h2>
        <div className="space-y-4">
          <TextInput
            label="Titel"
            value={data.heroTitle}
            onChange={(v) => set("heroTitle", v)}
          />
          <TextArea
            label="Ondertitel"
            value={data.heroSubtitle}
            onChange={(v) => set("heroSubtitle", v)}
          />
        </div>
      </section>

      <hr className="border-line/40" />

      {/* Values */}
      <section>
        <h2 className="display mb-4 text-xl text-wood">
          Waar we voor staan
        </h2>
        <div className="space-y-4">
          <TextInput
            label="Koptekst"
            value={data.aboutIntro}
            onChange={(v) => set("aboutIntro", v)}
          />
          <ListEditor
            label="Waarden"
            items={data.values}
            onChange={(v) => set("values", v)}
          />
        </div>
      </section>

      <hr className="border-line/40" />

      {/* Quote */}
      <section>
        <h2 className="display mb-4 text-xl text-wood">Citaat</h2>
        <div className="space-y-4">
          <TextArea
            label="Citaattekst"
            value={data.quoteText}
            onChange={(v) => set("quoteText", v)}
            rows={2}
          />
          <TextInput
            label="Bron"
            value={data.quoteAttribution}
            onChange={(v) => set("quoteAttribution", v)}
          />
        </div>
      </section>

      <hr className="border-line/40" />

      {/* Steps */}
      <section>
        <h2 className="display mb-4 text-xl text-wood">Zo werkt het</h2>
        <ListEditor
          label="Stappen"
          items={data.steps}
          onChange={(v) => set("steps", v)}
        />
      </section>

      <hr className="border-line/40" />

      {/* Occasions */}
      <section>
        <h2 className="display mb-4 text-xl text-wood">Gelegenheden</h2>
        <TagsEditor
          label="Gelegenheden (klik om te verwijderen)"
          items={data.occasions}
          onChange={(v) => set("occasions", v)}
        />
      </section>

      <hr className="border-line/40" />

      {/* Opening hours */}
      <section>
        <h2 className="display mb-4 text-xl text-wood">
          Openingsuren
        </h2>
        <TextArea
          label="Openingsuren (wordt getoond op de contactpagina als ingevuld)"
          value={data.openingHours}
          onChange={(v) => set("openingHours", v)}
          rows={4}
        />
      </section>

      <hr className="border-line/40" />

      {/* De zaal */}
      <section>
        <h2 className="display mb-4 text-xl text-wood">
          De zaal — pagina
        </h2>
        <div className="space-y-4">
          <TextArea
            label="Intro"
            value={data.deZaalIntro}
            onChange={(v) => set("deZaalIntro", v)}
          />
          <ListEditor
            label="Kenmerken"
            items={data.deZaalFeatures}
            onChange={(v) => set("deZaalFeatures", v)}
          />
        </div>
      </section>

      <hr className="border-line/40" />

      {/* Contact */}
      <section>
        <h2 className="display mb-4 text-xl text-wood">
          Contact — pagina
        </h2>
        <TextArea
          label="Inleidende tekst"
          value={data.contactIntro}
          onChange={(v) => set("contactIntro", v)}
        />
      </section>

      {/* Save */}
      <div className="sticky bottom-0 flex items-center gap-4 border-t border-line/60 bg-cream/95 py-5 backdrop-blur-sm">
        <button
          type="submit"
          className="btn btn-primary"
          disabled={status === "saving"}
        >
          {status === "saving" ? "Opslaan…" : "Wijzigingen opslaan"}
        </button>
        {status === "saved" && (
          <span className="text-sm font-semibold text-olive">
            ✓ Opgeslagen
          </span>
        )}
        {status === "error" && (
          <span className="text-sm font-semibold text-accent">
            Fout bij opslaan
          </span>
        )}
      </div>
    </form>
  );
}

async function fetchContent(): Promise<
  | { authed: true; content: SiteContent }
  | { authed: false; content: null }
> {
  try {
    const res = await fetch("/api/admin/content");
    if (res.status === 401) return { authed: false, content: null };
    const data = await res.json();
    return { authed: true, content: data };
  } catch {
    return { authed: false, content: null };
  }
}

export function AdminEditor() {
  const [authed, setAuthed] = useState(false);
  const [content, setContent] = useState<SiteContent | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [revision, setRevision] = useState(0);

  useEffect(() => {
    let cancelled = false;
    fetchContent().then((result) => {
      if (cancelled) return;
      setAuthed(result.authed);
      setContent(result.content);
      setCheckingAuth(false);
    });
    return () => { cancelled = true; };
  }, []);

  const reloadContent = useCallback(() => {
    fetchContent().then((result) => {
      setAuthed(result.authed);
      setContent(result.content);
      setRevision((r) => r + 1);
    });
  }, []);

  const handleSave = useCallback(async (data: SiteContent) => {
    setStatus("saving");
    try {
      const res = await fetch("/api/admin/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      const updated = await res.json();
      setContent(updated);
      setRevision((r) => r + 1);
      setStatus("saved");
      setTimeout(() => setStatus("idle"), 2500);
    } catch {
      setStatus("error");
    }
  }, []);

  const handleLogout = useCallback(async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    setAuthed(false);
    setContent(null);
  }, []);

  if (checkingAuth) {
    return (
      <div className="flex min-h-[70svh] items-center justify-center">
        <p className="text-ink-soft">Laden…</p>
      </div>
    );
  }

  if (!authed) {
    return (
      <LoginForm
        onLogin={() => {
          setAuthed(true);
          reloadContent();
        }}
      />
    );
  }

  return (
    <div className="site-shell py-12 sm:py-16">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="display text-3xl text-espresso">Inhoud bewerken</h1>
          <p className="mt-1 text-sm text-ink-soft">
            Pas teksten, uren en gelegenheden aan. Wijzigingen zijn meteen
            zichtbaar op de site.
          </p>
        </div>
        <button
          onClick={handleLogout}
          className="btn btn-ghost btn-sm"
        >
          Uitloggen
        </button>
      </div>

      {content ? (
        <ContentEditor
          content={content}
          onSave={handleSave}
          status={status}
          revision={revision}
        />
      ) : (
        <p className="text-ink-soft">Inhoud laden…</p>
      )}
    </div>
  );
}
