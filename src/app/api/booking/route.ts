import { NextResponse } from "next/server";
import { createBookingRequest } from "@/lib/db";
import {
  sendGuestReceivedEmail,
  sendOwnerNewRequestEmail,
} from "@/lib/email";
import { createActionToken } from "@/lib/tokens";
import { bookingRequestSchema } from "@/lib/validations";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = bookingRequestSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Controleer even de velden.",
          fieldErrors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const booking = await createBookingRequest({
      ...parsed.data,
      approveToken: createActionToken(),
      declineToken: createActionToken(),
    });

    await Promise.all([
      sendOwnerNewRequestEmail(booking),
      sendGuestReceivedEmail(booking),
    ]);

    return NextResponse.json({ ok: true, id: booking.id });
  } catch (error) {
    console.error("booking create failed", error);
    return NextResponse.json(
      {
        error:
          "Je aanvraag kon niet worden verstuurd. Probeer later opnieuw of mail ons.",
      },
      { status: 500 },
    );
  }
}
