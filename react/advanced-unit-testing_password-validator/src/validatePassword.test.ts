import { describe, expect, test } from "vitest";
import { assertValidPassword, validatePassword } from "./validatePassword";

describe("validatePassword", () => {
  test("returns an empty array for a valid password", () => {
    // TODO: use the password "Secret123"
    expect(validatePassword("Secret123")).toEqual([]);
  });

  test("reports a password that is too short", () => {
    const errors = validatePassword("Ab1");

    expect(errors).toContain("Password must have at least 8 characters");
  });

  test("accepts a password with exactly 8 characters", () => {
    // TODO: boundary case, use the password "Abcdef12"
    expect(validatePassword("Abcdef123")).toEqual([]);
  });

  test("reports a password without a digit", () => {
    // TODO
    const errors = validatePassword("Abcdefghk");
    expect(errors).toEqual(["Password must contain a digit"]);
  });

  test("reports a password without an uppercase letter", () => {
    // TODO
    const errors = validatePassword("abcdefgh12");
    expect(errors).toEqual(["Password must contain an uppercase letter"]);
  });

  test("reports a password with a space", () => {
    // TODO
    const errors = validatePassword("Abcdef 123");
    expect(errors).toEqual(["Password must not contain spaces"]);
  });

  test("returns all errors at once for a password that breaks every rule", () => {
    // TODO: use the password "a b"
    expect(validatePassword("a b")).toHaveLength(4);
  });
});

describe("assertValidPassword", () => {
  test("does not throw for a valid password", () => {
    // TODO
    expect(() => assertValidPassword("Secret123")).not.toThrow();
  });

  test("throws an error that lists the broken rules", () => {
    // TODO
    expect(() => assertValidPassword("abcd")).toThrow(
      "Password must have at least 8 characters, Password must contain a digit, Password must contain an uppercase letter",
    );
  });
});
