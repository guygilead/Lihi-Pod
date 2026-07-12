"use client";

import { useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { contact, socials } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Field } from "@/components/ui/Field";
import { Icon } from "@/components/ui/Icon";
import { Ltr } from "@/components/ui/Ltr";
import { track } from "@/lib/analytics";
import { SECTION } from "@/lib/nav";

type Values = {
  name: string;
  company: string;
  role: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
  /** Honeypot — must stay empty for real users. */
  company_url: string;
};

const initial: Values = {
  name: "",
  company: "",
  role: "",
  phone: "",
  email: "",
  interest: "",
  message: "",
  company_url: "",
};

type Status = "idle" | "submitting" | "success" | "error";

function validate(v: Values) {
  const errs: Partial<Record<keyof Values, string>> = {};
  if (!v.name.trim()) errs.name = "נא להזין שם מלא";
  if (!v.email.trim()) errs.email = "נא להזין כתובת מייל";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email))
    errs.email = "כתובת המייל אינה תקינה";
  if (!v.message.trim()) errs.message = "נא לכתוב הודעה קצרה";
  return errs;
}

function SuccessPanel({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex h-full flex-col items-center justify-center rounded-[var(--radius-card)] bg-paper p-10 text-center text-ink shadow-[var(--shadow-lift)]">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-tint text-gold-deep">
        <CheckCircle2 className="h-8 w-8" aria-hidden />
      </span>
      <h3 className="mt-5 font-serif text-2xl font-bold">
        {contact.successTitle}
      </h3>
      <p className="mt-3 max-w-md leading-relaxed text-muted">
        {contact.successText}
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-6 text-sm font-semibold text-gold-deep hover:text-ink"
      >
        לשליחת פנייה נוספת
      </button>
    </div>
  );
}

export function ContactForm() {
  const [values, setValues] = useState<Values>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>(
    {},
  );
  const [status, setStatus] = useState<Status>("idle");
  const started = useRef(false);

  const update: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  > = (e) => {
    if (!started.current) {
      started.current = true;
      track("form_start");
    }
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Honeypot: a bot filled the hidden field — pretend success, send nothing.
    if (values.company_url.trim()) {
      setStatus("success");
      setValues(initial);
      return;
    }

    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("submitting");
    track("form_submit", { interest: values.interest || undefined });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
      setValues(initial);
      started.current = false;
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id={SECTION.contact}
      className="scroll-mt-24 bg-charcoal py-20 text-cream md:py-28"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <SectionHeading
              align="start"
              tone="light"
              eyebrow={contact.eyebrow}
              title={contact.title}
              lead={contact.text}
            />

            <p className="mt-6 flex items-center gap-2 text-sm text-muted-light">
              <span className="inline-block h-px w-6 bg-gold-soft/60" aria-hidden />
              {contact.microcopy}
            </p>

            {socials.length > 0 && (
              <ul className="mt-8 space-y-3">
                {socials.map((s) => {
                  const external = s.href.startsWith("http");
                  const event =
                    s.icon === "mail"
                      ? "email_click"
                      : s.label === "WhatsApp"
                        ? "whatsapp_click"
                        : "phone_click";
                  return (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        onClick={() => track(event)}
                        className="group flex items-center gap-4 rounded-2xl bg-charcoal-deep p-4 ring-1 ring-line-dark transition-colors hover:ring-gold/40"
                      >
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-charcoal text-gold-soft ring-1 ring-line-dark">
                          <Icon
                            name={s.icon}
                            className="h-5 w-5"
                            strokeWidth={1.7}
                            aria-hidden
                          />
                        </span>
                        <span className="flex flex-col">
                          <span className="text-sm text-muted-light">
                            {s.label}
                          </span>
                          <span className="font-medium text-cream">
                            <Ltr>{s.value}</Ltr>
                          </span>
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          <div className="lg:col-span-7">
            {status === "success" ? (
              <SuccessPanel onReset={() => setStatus("idle")} />
            ) : (
              <form
                noValidate
                onSubmit={onSubmit}
                className="rounded-[var(--radius-card)] bg-paper p-6 text-ink shadow-[var(--shadow-lift)] md:p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="שם מלא"
                    name="name"
                    value={values.name}
                    onChange={update}
                    required
                    error={errors.name}
                    autoComplete="name"
                    dir="rtl"
                  />
                  <Field
                    label="חברה"
                    name="company"
                    value={values.company}
                    onChange={update}
                    autoComplete="organization"
                    dir="rtl"
                  />
                  <Field
                    label="תפקיד"
                    name="role"
                    value={values.role}
                    onChange={update}
                    autoComplete="organization-title"
                    dir="rtl"
                  />
                  <Field
                    label="טלפון"
                    name="phone"
                    type="tel"
                    value={values.phone}
                    onChange={update}
                    autoComplete="tel"
                    inputMode="tel"
                    dir="ltr"
                  />
                  <Field
                    label="מייל"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={update}
                    required
                    error={errors.email}
                    autoComplete="email"
                    inputMode="email"
                    dir="ltr"
                    className="sm:col-span-2"
                  />
                  <Field
                    as="select"
                    label={contact.interestLabel}
                    name="interest"
                    value={values.interest}
                    onChange={update}
                    className="sm:col-span-2"
                  >
                    <option value="">{contact.interestPlaceholder}</option>
                    {contact.interestOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </Field>
                  <Field
                    as="textarea"
                    label="הודעה חופשית"
                    name="message"
                    value={values.message}
                    onChange={update}
                    required
                    error={errors.message}
                    dir="rtl"
                    rows={4}
                    className="sm:col-span-2"
                  />
                </div>

                {/* Honeypot — hidden from users, catches naive bots */}
                <div
                  className="pointer-events-none absolute -left-[9999px] h-0 w-0 overflow-hidden"
                  aria-hidden
                >
                  <label htmlFor="company_url">אל תמלאו שדה זה</label>
                  <input
                    id="company_url"
                    name="company_url"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={values.company_url}
                    onChange={update}
                  />
                </div>

                {status === "error" && (
                  <p
                    role="alert"
                    className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700"
                  >
                    {contact.errorText}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-ink px-8 font-semibold text-cream transition-colors hover:bg-charcoal-deep disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {status === "submitting" ? "שולח…" : contact.submitLabel}
                </button>
                <p className="mt-3 text-xs text-muted">{contact.microcopy}</p>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
