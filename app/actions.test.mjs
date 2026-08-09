import assert from "node:assert/strict";
import test from "node:test";
import { validateContact } from "./contact-validation.mjs";

test("contact validation accepts recruiter details and rejects unsafe input", () => {
  assert.deepEqual(
    validateContact({
      name: "Eddy Chan",
      email: "recruiter@example.com",
      company: "Example Studio",
      message: "I would like to discuss a full-stack developer role.",
    }),
    {},
  );

  assert.deepEqual(
    Object.keys(
      validateContact({
        name: "E",
        email: "not-an-email",
        company: "",
        message: "Too short",
      }),
    ),
    ["name", "email", "message"],
  );
});
