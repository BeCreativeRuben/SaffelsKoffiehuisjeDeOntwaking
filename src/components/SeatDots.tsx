import { site } from "@/lib/site";

type Props = {
  filled: number;
};

export function SeatDots({ filled }: Props) {
  const max = site.capacity;
  const safe = Number.isFinite(filled) ? Math.floor(filled) : 0;
  const on = Math.max(0, Math.min(max, safe));
  const label =
    safe <= 0
      ? `Schema van ${max} comfortabele plaatsen. Nog geen aantal gekozen.`
      : safe > max
        ? `Alle ${max} comfortabele plaatsen zijn aangeduid. ${safe} personen is krapper dan dat.`
        : `${on} van ${max} comfortabele plaatsen aangeduid.`;

  return (
    <div className="seats" role="img" aria-label={label}>
      {Array.from({ length: max }, (_, index) => (
        <span key={index} className={index < on ? "seat is-on" : "seat"} />
      ))}
    </div>
  );
}
