"use server";

import { validateContact } from "./contact-validation.mjs";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<"name" | "email" | "company" | "message", string>>;
};

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

  if (value(formData, "website")) {
    return {
      status: "success",
      message: "Thanks. Your message has been sent.",
    };
  }

  const errors: ContactState["errors"] = validateContact({
    name,
    email,
    company,
    message,
  });

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Check the highlighted fields and try again.",
      errors,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return {
      status: "error",
      message: "The form is temporarily unavailable. Please email me directly.",
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
        message: "The message could not be sent. Please try again or email me directly.",
      };
    }

    return {
      status: "success",
      message: "Thanks. Your message has been sent.",
    };
  } catch {
    return {
      status: "error",
      message: "The message could not be sent. Please try again or email me directly.",
    };
  }
}
