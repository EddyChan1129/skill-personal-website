"use server";

import { validateContact } from "./contact-validation.mjs";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<"name" | "email" | "company" | "message", string>>;
};

const messages = {
  en: {
    success: "Thanks. Your message has been sent.",
    validation: "Check the highlighted fields and try again.",
    unavailable: "The form is temporarily unavailable. Please email me directly.",
    failed: "The message could not be sent. Please try again or email me directly.",
  },
  zh: {
    success: "謝謝，你的訊息已經傳送。",
    validation: "請檢查標示的欄位後再試一次。",
    unavailable: "表格暫時未能使用，請直接以電郵聯絡我。",
    failed: "訊息未能傳送，請再試一次或直接以電郵聯絡我。",
  },
} as const;

function value(formData: FormData, key: string) {
  const entry = formData.get(key);
  return typeof entry === "string" ? entry.trim() : "";
}

export async function sendContact(
  _previousState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = value(formData, "name");
  const email = value(formData, "email");
  const company = value(formData, "company");
  const message = value(formData, "message");
  const locale = value(formData, "locale") === "zh" ? "zh" : "en";
  const t = messages[locale];

  if (value(formData, "website")) {
    return {
      status: "success",
      message: t.success,
    };
  }

  const errors: ContactState["errors"] = validateContact(
    { name, email, company, message },
    locale,
  );

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: t.validation,
      errors,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return {
      status: "error",
      message: t.unavailable,
    };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from:
          process.env.RESEND_FROM_EMAIL ??
          "Eddy Chan Portfolio <onboarding@resend.dev>",
        to: [process.env.CONTACT_TO_EMAIL ?? "eddychan1129@gmail.com"],
        reply_to: email,
        subject: `Portfolio enquiry from ${name}`,
        text: [
          "New portfolio enquiry",
          "",
          `Name: ${name}`,
          `Email: ${email}`,
          `Company: ${company || "Not provided"}`,
          "",
          "Message:",
          message,
        ].join("\n"),
      }),
    });

    if (!response.ok) {
      return {
        status: "error",
        message: t.failed,
      };
    }

    return {
      status: "success",
      message: t.success,
    };
  } catch {
    return {
      status: "error",
      message: t.failed,
    };
  }
}
