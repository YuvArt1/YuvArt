import { z } from "zod";

const inquirySchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(254),
  product: z.string().trim().min(1).max(200),
  deliverables: z.enum([
    "Product imagery",
    "Product animation",
    "Campaign visuals",
    "Multiple product variations",
    "Something else",
  ]),
  timeline: z.enum([
    "As soon as possible",
    "Within one month",
    "One to three months",
    "Flexible",
    "Not sure yet",
  ]),
  details: z.string().trim().max(5000).optional(),
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Please submit a valid inquiry." }, { status: 400 });
  }

  const parsed = inquirySchema.safeParse(body);
  if (!parsed.success) {
    return Response.json({ error: "Please check the inquiry details and try again." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.INQUIRY_TO_EMAIL;
  if (!apiKey || !from || !to) {
    console.error("Inquiry email is not configured. Set RESEND_API_KEY, RESEND_FROM_EMAIL, and INQUIRY_TO_EMAIL.");
    return Response.json({ error: "The inquiry form is temporarily unavailable. Please email hello@designyuv.com." }, { status: 503 });
  }

  const inquiry = parsed.data;
  const text = [
    `Name: ${inquiry.name}`,
    `Work email: ${inquiry.email}`,
    `Product or brand: ${inquiry.product}`,
    `Deliverables: ${inquiry.deliverables}`,
    `Ideal timeline: ${inquiry.timeline}`,
    `Project details or reference links: ${inquiry.details || "Not provided"}`,
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: inquiry.email,
        subject: `Portfolio inquiry: ${inquiry.product}`,
        text,
      }),
    });

    if (!response.ok) {
      const providerError = await response.text();
      console.error(`Resend rejected the inquiry email (${response.status}): ${providerError}`);
      return Response.json({ error: "I couldn't send your inquiry. Please email hello@designyuv.com." }, { status: 502 });
    }
  } catch (error) {
    console.error("Failed to reach the email provider for an inquiry.", error);
    return Response.json({ error: "I couldn't send your inquiry. Please email hello@designyuv.com." }, { status: 502 });
  }

  return Response.json({ success: true });
}
