import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "");

export async function sendReport(
  email: string,
  brandName: string,
  score: number,
  reportHtml: string
) {
  if (!process.env.RESEND_API_KEY) {
    console.log("[Email] No RESEND_API_KEY set, skipping email send");
    return { success: false, error: "No API key" };
  }

  const { data, error } = await resend.emails.send({
    from: "Locully AI Checker <checker@locully.org>",
    to: email,
    subject: `Your AI Visibility Report for ${brandName} — Score: ${score}/100`,
    html: reportHtml,
  });

  if (error) {
    console.error("[Email] Send failed:", error);
    return { success: false, error };
  }

  return { success: true, data };
}
