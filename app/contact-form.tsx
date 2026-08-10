"use client";

import { useActionState } from "react";
import { sendContact, type ContactState } from "./actions";

const initialState: ContactState = {
  status: "idle",
  message: "",
};

const formCopy = {
  en: {
    name: "Name",
    email: "Work email",
    company: "Company",
    message: "Enquiry details",
    website: "Website",
    required: "Required",
    sending: "Sending...",
    send: "Send message",
  },
  zh: {
    name: "姓名",
    email: "工作電郵",
    company: "公司",
    message: "查詢內容",
    website: "網站",
    required: "必填",
    sending: "傳送中...",
    send: "傳送訊息",
  },
} as const;

export function ContactForm({ locale }: { locale: "en" | "zh" }) {
  const [state, formAction, pending] = useActionState(
    sendContact,
    initialState,
  );
  const t = formCopy[locale];

  return (
    <form className="contact-form" action={formAction}>
      <input type="hidden" name="locale" value={locale} />
      <div className="form-field">
        <label htmlFor="contact-name">
          {t.name} <span>{t.required}</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          minLength={2}
          maxLength={80}
          aria-invalid={Boolean(state.errors?.name)}
          aria-describedby={state.errors?.name ? "name-error" : undefined}
          required
        />
        {state.errors?.name && (
          <p className="field-error" id="name-error">
            {state.errors.name}
          </p>
        )}
      </div>

      <div className="form-field">
        <label htmlFor="contact-email">
          {t.email} <span>{t.required}</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          maxLength={254}
          aria-invalid={Boolean(state.errors?.email)}
          aria-describedby={state.errors?.email ? "email-error" : undefined}
          required
        />
        {state.errors?.email && (
          <p className="field-error" id="email-error">
            {state.errors.email}
          </p>
        )}
      </div>

      <div className="form-field form-field-wide">
        <label htmlFor="contact-company">{t.company}</label>
        <input
          id="contact-company"
          name="company"
          type="text"
          autoComplete="organization"
          maxLength={120}
          aria-invalid={Boolean(state.errors?.company)}
          aria-describedby={state.errors?.company ? "company-error" : undefined}
        />
        {state.errors?.company && (
          <p className="field-error" id="company-error">
            {state.errors.company}
          </p>
        )}
      </div>

      <div className="form-field form-field-wide">
        <label htmlFor="contact-message">
          {t.message} <span>{t.required}</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          minLength={20}
          maxLength={2000}
          aria-invalid={Boolean(state.errors?.message)}
          aria-describedby={state.errors?.message ? "message-error" : undefined}
          required
        />
        {state.errors?.message && (
          <p className="field-error" id="message-error">
            {state.errors.message}
          </p>
        )}
      </div>

      <div className="form-honeypot" aria-hidden="true">
        <label htmlFor="contact-website">{t.website}</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="form-submit form-field-wide">
        <button className="button button-primary" type="submit" disabled={pending}>
          {pending ? t.sending : t.send}
        </button>
        <p
          className={`form-status${state.status !== "idle" ? ` is-${state.status}` : ""}`}
          aria-live="polite"
        >
          {state.message}
        </p>
      </div>
    </form>
  );
}
