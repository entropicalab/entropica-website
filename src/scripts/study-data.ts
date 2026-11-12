// ============================================================
// shared helpers for the interactive study charts
// ------------------------------------------------------------
// several charts on one page read the same hourly file, so
// fetches are cached by url: the file downloads once.
// temperatures in study files are integers in tenths of °C.
// ============================================================

const cache = new Map<string, Promise<unknown>>();

export function loadStudyData<T>(url: string): Promise<T> {
  if (!cache.has(url)) cache.set(url, fetch(url).then((r) => (r.ok ? r.json() : Promise.reject(r.status))));
  return cache.get(url) as Promise<T>;
}

export const MONTH_DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export const MONTHS = {
  en: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
  es: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
};

// hour h is the hour ending at h:00 (energyplus convention):
// en h=15 -> "2–3 pm", h=12 -> "11 am–12 pm"; es h=15 -> "14–15 h"
export function hourSpan(locale: 'en' | 'es', h: number): string {
  if (locale === 'es') return `${h - 1}–${h} h`;
  const f = (x: number): [number, string] => [x % 12 === 0 ? 12 : x % 12, x % 24 < 12 ? 'am' : 'pm'];
  const [s, sp] = f(h - 1), [e, ep] = f(h);
  return sp === ep ? `${s}–${e} ${ep}` : `${s} ${sp}–${e} ${ep}`;
}

// clock label for a point in time (hour of day 0–24), e.g. axis ticks
export function clock(locale: 'en' | 'es', h: number): string {
  if (locale === 'es') return `${h} h`;
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12} ${h % 24 < 12 ? 'am' : 'pm'}`;
}

export const deg = (tenths: number) => `${(tenths / 10).toFixed(1)} °C`;
export const signedDeg = (tenths: number) => `${tenths > 0 ? '+' : tenths < 0 ? '−' : '±'}${Math.abs(tenths / 10).toFixed(1)} °C`;
