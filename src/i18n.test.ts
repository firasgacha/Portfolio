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

function collectShapeIssues(
  left: unknown,
  right: unknown,
  path: string,
  issues: string[],
) {
  if (Array.isArray(left) || Array.isArray(right)) {
    if (!Array.isArray(left) || !Array.isArray(right)) {
      issues.push(`type mismatch at ${path}`);
      return;
    }

    if (left.length !== right.length) {
      issues.push(
        `array length mismatch at ${path}: ${left.length} vs ${right.length}`,
      );
    }
    return;
  }

  if (left && typeof left === "object") {
    const leftRecord = left as Record<string, unknown>;
    const rightRecord =
      right && typeof right === "object"
        ? (right as Record<string, unknown>)
        : {};

    for (const key of new Set([
      ...Object.keys(leftRecord),
      ...Object.keys(rightRecord),
    ])) {
      collectShapeIssues(
        leftRecord[key],
        rightRecord[key],
        path ? `${path}.${key}` : key,
        issues,
      );
    }
  }
}

describe("locales", () => {
  it("keeps English and French translation keys in sync", () => {
    expect(keysOf(fr).sort()).toEqual(keysOf(en).sort());
  });

  it("keeps nested array translations the same length", () => {
    const issues: string[] = [];
    collectShapeIssues(en, fr, "", issues);
    expect(issues).toEqual([]);
  });
});
