const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const messages = {
  en: {
    name: "Enter a name between 2 and 80 characters.",
    email: "Enter a valid email address.",
    company: "Keep the company name under 120 characters.",
    message: "Enter a message between 20 and 2,000 characters.",
  },
  zh: {
    name: "請輸入 2 至 80 個字元的姓名。",
    email: "請輸入有效的電郵地址。",
    company: "公司名稱不可超過 120 個字元。",
    message: "請輸入 20 至 2,000 個字元的訊息。",
  },
};

export function validateContact(
  { name, email, company, message },
  locale = "en",
) {
  const errors = {};
  const t = messages[locale] ?? messages.en;

  if (name.length < 2 || name.length > 80) {
    errors.name = t.name;
  }
  if (!emailPattern.test(email) || email.length > 254) {
    errors.email = t.email;
  }
  if (company.length > 120) {
    errors.company = t.company;
  }
  if (message.length < 20 || message.length > 2000) {
    errors.message = t.message;
  }

  return errors;
}
