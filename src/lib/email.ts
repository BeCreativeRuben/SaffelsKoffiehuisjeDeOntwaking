import { Resend } from "resend";
import { site } from "./site";
import type { BookingRequest } from "./db";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    throw new Error("RESEND_API_KEY ontbreekt");
  }
  return new Resend(key);
}

function fromAddress() {
  return process.env.FROM_EMAIL ?? "’t Zaffels Koffiehuisje <onboarding@resend.dev>";
}

function ownerEmail() {
  const email = process.env.OWNER_EMAIL;
  if (!email) {
    throw new Error("OWNER_EMAIL ontbreekt");
  }
  return email;
}

function siteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
}

function formatDate(isoDate: string) {
  const date = new Date(`${isoDate}T12:00:00`);
  return new Intl.DateTimeFormat("nl-BE", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

function bookingDetails(booking: BookingRequest) {
  return [
    `Naam: ${booking.name}`,
    `E-mail: ${booking.email}`,
    `Telefoon: ${booking.phone}`,
    `Datum: ${formatDate(booking.date)}`,
    `Tijdstip: ${booking.time}`,
    `Personen: ${booking.guests}`,
    `Gelegenheid: ${booking.occasion}`,
    booking.message ? `Opmerking: ${booking.message}` : null,
  ]
    .filter(Boolean)
    .join("\n");
}

export async function sendOwnerNewRequestEmail(booking: BookingRequest) {
  const resend = getResend();
  const approveUrl = `${siteUrl()}/api/booking/respond?token=${booking.approve_token}`;
  const declineUrl = `${siteUrl()}/api/booking/respond?token=${booking.decline_token}`;

  await resend.emails.send({
    from: fromAddress(),
    to: ownerEmail(),
    subject: `Nieuwe zaalaanvraag — ${booking.name} (${formatDate(booking.date)})`,
    text: `Er is een nieuwe aanvraag voor ${site.name}.

${bookingDetails(booking)}

Past dit in je agenda?

Goedkeuren: ${approveUrl}
Afwijzen: ${declineUrl}

Na je keuze krijgt de gast automatisch een e-mail.`,
  });
}

export async function sendGuestReceivedEmail(booking: BookingRequest) {
  const resend = getResend();
  await resend.emails.send({
    from: fromAddress(),
    to: booking.email,
    subject: `Aanvraag ontvangen — ${site.name}`,
    text: `Hallo ${booking.name},

Bedankt voor je aanvraag bij ${site.name}.

We hebben je vraag goed ontvangen voor ${formatDate(booking.date)} om ${booking.time} (${booking.guests} personen).
Je hoort van ons zodra we je aanvraag bekeken hebben.

Met warme groet,
${site.name}`,
  });
}

export async function sendGuestDecisionEmail(booking: BookingRequest) {
  const resend = getResend();
  const approved = booking.status === "approved";

  await resend.emails.send({
    from: fromAddress(),
    to: booking.email,
    subject: approved
      ? `Bevestiging — ${site.name}`
      : `Update over je aanvraag — ${site.name}`,
    text: approved
      ? `Hallo ${booking.name},

Goed nieuws: je aanvraag voor ${formatDate(booking.date)} om ${booking.time} is goedgekeurd.

We nemen contact met je op om de laatste details af te stemmen.

Met warme groet,
${site.name}`
      : `Hallo ${booking.name},

Bedankt voor je interesse in ${site.name}.
Helaas kunnen we je aanvraag voor ${formatDate(booking.date)} om ${booking.time} niet bevestigen.

Heb je een andere datum in gedachten? Stuur gerust een nieuwe aanvraag via de website.

Met warme groet,
${site.name}`,
  });
}

export async function sendOwnerDecisionCopy(booking: BookingRequest) {
  const resend = getResend();
  const label = booking.status === "approved" ? "goedgekeurd" : "afgewezen";

  await resend.emails.send({
    from: fromAddress(),
    to: ownerEmail(),
    subject: `Aanvraag ${label} — ${booking.name}`,
    text: `De aanvraag is ${label}.

${bookingDetails(booking)}

De gast kreeg hierover een e-mail.`,
  });
}
