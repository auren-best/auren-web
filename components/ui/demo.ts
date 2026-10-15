import type { DayStatus } from "./charts";

/** Deterministic PRNG so demo data is identical on server and client. */
export function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Smooth-ish random walk around `base`, rounded to one decimal. */
export function demoSeries(
  seed: number,
  length: number,
  base: number,
  variance: number,
  spikes: Record<number, number> = {},
) {
  const rand = mulberry32(seed);
  let v = base;
  return Array.from({ length }, (_, i) => {
    v += (base - v) * 0.25 + (rand() - 0.5) * variance;
    return Math.round((v + (spikes[i] ?? 0)) * 10) / 10;
  });
}

/** Daily status history; `incidents` maps day index → status. */
export function demoDays(length: number, incidents: Record<number, DayStatus>) {
  return Array.from({ length }, (_, i): DayStatus => incidents[i] ?? "up");
}
