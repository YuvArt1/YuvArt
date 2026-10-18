import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, product, deliverables, timeline, details } = body;

    // Basic server-side validation
    if (!name || !email || !product || !deliverables || !timeline) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "DesignYuv Inquiry <onboarding@resend.dev>",
      to: "hello@designyuv.com",
      replyTo: email,
      subject: `New inquiry from ${name} — ${product}`,
      html: `
        <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; background: #fff; padding: 40px; border-radius: 8px; border: 1px solid #e5e7eb;">
          <p style="font-size: 12px; font-weight: 600; letter-spacing: 0.08em; color: #6b7280; text-transform: uppercase; margin: 0 0 24px;">DesignYuv — New Project Inquiry</p>
          <h1 style="font-size: 22px; font-weight: 700; color: #111; margin: 0 0 24px;">${name} wants to work together</h1>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; font-size: 13px; color: #6b7280; width: 40%;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #111; font-weight: 500;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; font-size: 13px; color: #6b7280;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #111; font-weight: 500;"><a href="mailto:${email}" style="color: #111;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; font-size: 13px; color: #6b7280;">Product / Brand</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #111; font-weight: 500;">${product}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; font-size: 13px; color: #6b7280;">Deliverables</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #111; font-weight: 500;">${deliverables}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; font-size: 13px; color: #6b7280;">Timeline</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #111; font-weight: 500;">${timeline}</td>
            </tr>
            ${
              details
                ? `<tr>
              <td style="padding: 12px 0; font-size: 13px; color: #6b7280; vertical-align: top;">Project details</td>
              <td style="padding: 12px 0; font-size: 14px; color: #111; white-space: pre-line;">${details}</td>
            </tr>`
                : ""
            }
          </table>

          <div style="margin-top: 32px; padding: 16px; background: #f9fafb; border-radius: 6px;">
            <p style="margin: 0; font-size: 13px; color: #6b7280;">Hit reply to respond directly to <strong>${name}</strong> at ${email}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("API route error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
