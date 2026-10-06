export function isFrench(language: string): boolean {
  return language.toLowerCase().startsWith("fr");
}

export function pickLocale<T>(language: string, value: { en: T; fr: T }): T {
  return isFrench(language) ? value.fr : value.en;
}

export const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";
