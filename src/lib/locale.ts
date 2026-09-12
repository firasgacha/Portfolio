export function isFrench(language: string): boolean {
  return language.toLowerCase().startsWith("fr");
}

export const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";
