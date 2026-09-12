import { describe, expect, it } from "vitest";
import en from "./locales/en.json";
import fr from "./locales/fr.json";

function keysOf(value: unknown, prefix = ""): string[] {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return Object.entries(value as Record<string, unknown>).flatMap(
      ([key, nested]) => keysOf(nested, prefix ? `${prefix}.${key}` : key),
    );
  }

  return prefix ? [prefix] : [];
}

describe("locales", () => {
  it("keeps English and French translation keys in sync", () => {
    expect(keysOf(fr).sort()).toEqual(keysOf(en).sort());
  });
});
