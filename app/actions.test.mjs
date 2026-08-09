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

  assert.deepEqual(
    validateContact(
      {
        name: "陳",
        email: "invalid",
        company: "",
        message: "太短",
      },
      "zh",
    ),
    {
      name: "請輸入 2 至 80 個字元的姓名。",
      email: "請輸入有效的電郵地址。",
      message: "請輸入 20 至 2,000 個字元的訊息。",
    },
  );
});
