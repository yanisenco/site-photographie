import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: { name: "Focus & Lumière", email: "contact@focusetlumiere.fr" },
        to: [{ email: body.to }],
        bcc: [{ email:"contact@focusetlumiere.fr"}],
        subject: body.subject,
        htmlContent: body.htmlContent,
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY!,
          "Content-Type": "application/json",
        },
      }
    );

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Erreur d'envoi :", error.response?.data || error.message);
      return NextResponse.json(
        { success: false, error: error.response?.data || error.message },
        { status: 500 }
      );
    } else {
      console.error("Erreur d'envoi :", (error as Error).message);
      return NextResponse.json(
        { success: false, error: (error as Error).message },
        { status: 500 }
      );
    }
  }
}
