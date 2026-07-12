import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const schema = z.object({
  name: z.string().trim().min(2).max(120),
  company: z.string().trim().max(160).optional().default(""),
  role: z.string().trim().max(120).optional().default(""),
  phone: z.string().trim().max(40).optional().default(""),
  email: z.email(),
  interest: z.string().trim().max(80).optional().default(""),
  message: z.string().trim().max(4000).optional().default(""),
  // Honeypot — real users leave this empty.
  company_url: z.string().max(200).optional().default(""),
});

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad_json" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "validation" },
      { status: 400 },
    );
  }
  const v = parsed.data;

  // Honeypot tripped: accept silently so the bot sees success, send nothing.
  if (v.company_url.trim()) {
    return NextResponse.json({ ok: true, delivered: false });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  const from =
    process.env.CONTACT_FROM || "Lihi Podcast <onboarding@resend.dev>";

  // Graceful fallback: email isn't configured yet (e.g. local/dev or pre-launch).
  // The form still succeeds so it's never "dead"; configure env vars to deliver.
  if (!apiKey || !to) {
    console.warn(
      "[contact] RESEND_API_KEY/CONTACT_TO not set — logging submission instead of sending email.",
      v,
    );
    return NextResponse.json({ ok: true, delivered: false });
  }

  const subject = `פנייה חדשה מהאתר — ${v.name}${
    v.company ? ` · ${v.company}` : ""
  }`;
  const text = [
    `שם: ${v.name}`,
    v.company && `חברה: ${v.company}`,
    v.role && `תפקיד: ${v.role}`,
    v.phone && `טלפון: ${v.phone}`,
    `מייל: ${v.email}`,
    v.interest && `מתעניין/ת ב: ${v.interest}`,
    v.message && `\nהודעה:\n${v.message}`,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: v.email,
      subject,
      text,
    });
    if (error) {
      console.error("[contact] resend error", error);
      return NextResponse.json(
        { ok: false, error: "send_failed" },
        { status: 502 },
      );
    }
    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[contact] send exception", err);
    return NextResponse.json(
      { ok: false, error: "send_failed" },
      { status: 502 },
    );
  }
}
