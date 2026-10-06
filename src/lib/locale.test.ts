import { describe, expect, it } from "vitest";
import { isFrench, pickLocale } from "./locale";

describe("locale helpers", () => {
  it("detects French language tags", () => {
    expect(isFrench("fr")).toBe(true);
    expect(isFrench("fr-FR")).toBe(true);
    expect(isFrench("en")).toBe(false);
    expect(isFrench("en-US")).toBe(false);
  });

  it("picks the matching locale value", () => {
    const value = { en: "Present", fr: "aujourd'hui" };

    expect(pickLocale("en", value)).toBe("Present");
    expect(pickLocale("fr-FR", value)).toBe("aujourd'hui");
  });
});
