/**
 * Shared site configuration. URLs are overridable per environment so local
 * development can point the two sites at each other (see `.env.example`).
 * Each `process.env.NEXT_PUBLIC_*` access is a literal so Next.js can inline it.
 */
const strip = (url: string) => url.replace(/\/+$/, "");

export const AUREN_URL = strip(
  process.env.NEXT_PUBLIC_AUREN_URL ?? "https://auren.rest",
);
export const ZENT_URL = strip(
  process.env.NEXT_PUBLIC_ZENT_URL ?? "https://zent.auren.rest",
);
export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@auren.rest";
