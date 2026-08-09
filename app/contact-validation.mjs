const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact({ name, email, company, message }) {
  const errors = {};

  if (name.length < 2 || name.length > 80) {
    errors.name = "Enter a name between 2 and 80 characters.";
  }
  if (!emailPattern.test(email) || email.length > 254) {
    errors.email = "Enter a valid email address.";
  }
  if (company.length > 120) {
    errors.company = "Keep the company name under 120 characters.";
  }
  if (message.length < 20 || message.length > 2000) {
    errors.message = "Enter a message between 20 and 2,000 characters.";
  }

  return errors;
}
