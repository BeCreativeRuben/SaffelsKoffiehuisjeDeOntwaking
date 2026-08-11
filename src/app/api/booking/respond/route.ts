import { NextRequest, NextResponse } from "next/server";
import { decideBooking, getBookingByToken } from "@/lib/db";
import {
  sendGuestDecisionEmail,
  sendOwnerDecisionCopy,
} from "@/lib/email";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? request.nextUrl.origin;

  if (!token) {
    return NextResponse.redirect(`${siteUrl}/bevestiging?status=invalid`);
  }

  try {
    const booking = await getBookingByToken(token);
    if (!booking) {
      return NextResponse.redirect(`${siteUrl}/bevestiging?status=invalid`);
    }

    if (booking.status !== "pending") {
      return NextResponse.redirect(
        `${siteUrl}/bevestiging?status=already&decision=${booking.status}`,
      );
    }

    const decision =
      token === booking.approve_token
        ? "approved"
        : token === booking.decline_token
          ? "declined"
          : null;

    if (!decision) {
      return NextResponse.redirect(`${siteUrl}/bevestiging?status=invalid`);
    }

    const updated = await decideBooking(booking.id, decision);
    if (!updated) {
      return NextResponse.redirect(
        `${siteUrl}/bevestiging?status=already&decision=${booking.status}`,
      );
    }

    await Promise.all([
      sendGuestDecisionEmail(updated),
      sendOwnerDecisionCopy(updated),
    ]);

    return NextResponse.redirect(
      `${siteUrl}/bevestiging?status=ok&decision=${decision}`,
    );
  } catch (error) {
    console.error("booking respond failed", error);
    return NextResponse.redirect(`${siteUrl}/bevestiging?status=error`);
  }
}
