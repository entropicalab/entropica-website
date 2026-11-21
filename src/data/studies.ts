// ============================================================
// shared study data for the two landing pages
// ------------------------------------------------------------
// one source for every number that appears on both
// /en/specification-studies and /en/modeling-support. a number
// that changes here changes on both pages at once.
// every figure comes from a published study or the tornillo
// sample study export (C:/Entropica/047-ElTornillo/sim_export/
// tor_cases.csv). check it there before changing it.
// ============================================================

export interface Result {
  cat: string;
  say: string;
  num: string;
  numUnit: string;
  a: { l: string; v: number };
  b: { l: string; v: number };
  u: string;
  unit: string;
  src: string;
  ramp: 'calor' | 'sol';
  note?: 'comfort';
}

// ---- results, one per product type ---------------------------------------
// say = the sentence a rep can use. num + numUnit = the headline figure, unit
// in words. a = compared with, b = with the product. u = the unit on each bar.
// ramp: 'calor' (cooling, heat) or 'sol' (sun). refrigeration tons to kW at
// 3.517 kW per ton.
export const results: Result[] = [
  {
    cat: 'glazing',
    say: 'double reflective glass cuts the chiller capacity a 30-floor tower needs by 232 refrigeration tons, compared with single clear.',
    num: '−232',
    numUnit: 'refrigeration tons of chiller capacity (816 kW)',
    a: { l: 'single clear', v: 852 },
    b: { l: 'double reflective', v: 620 },
    u: ' tons',
    unit: 'chiller capacity, refrigeration tons',
    src: 'office tower, sample study',
    ramp: 'calor',
  },
  {
    cat: 'facade systems',
    say: 'a shaded glass band cuts the same tower’s chiller by another 91 refrigeration tons.',
    num: '−91',
    numUnit: 'refrigeration tons of chiller capacity (320 kW)',
    a: { l: 'glass wall', v: 620 },
    b: { l: 'shaded band', v: 529 },
    u: ' tons',
    unit: 'chiller capacity, refrigeration tons',
    src: 'office tower, sample study',
    ramp: 'calor',
  },
  {
    cat: 'dynamic glass',
    say: 'electrochromic glass cuts overheated working hours 1 m from the glass from 29.4% to 17.5%.',
    num: '−40%',
    numUnit: 'overheated working hours at a desk 1 m from the glass',
    a: { l: 'double reflective', v: 29.4 },
    b: { l: 'electrochromic', v: 17.5 },
    u: '%',
    unit: 'share of working hours overheated',
    src: 'office tower, sample study',
    ramp: 'calor',
    note: 'comfort',
  },
  {
    cat: 'louvers and shading',
    say: 'fixed louvers cut the yearly solar radiation reaching the glass by 71%.',
    num: '−71%',
    numUnit: 'solar radiation on the glass, per year',
    a: { l: 'no louvers', v: 389 },
    b: { l: 'louvers', v: 114 },
    u: ' kWh/m²',
    unit: 'solar radiation on the glass, kWh/m² a year',
    src: 'academic study, singapore',
    ramp: 'sol',
  },
  {
    // l12 ocean reef (published project page): three glass options from the
    // supplier, placed room by room. heat through the glass 73.1 -> 39.8 MWh.
    cat: 'glass selection',
    say: 'choosing the glass room by room keeps 91% of the saving of double glass everywhere, with single glass left in the kitchen and service rooms.',
    num: '91%',
    numUnit: 'of the saving of double glass everywhere, with the room-by-room mix',
    a: { l: 'single glass', v: 73.1 },
    b: { l: 'room-by-room mix', v: 39.8 },
    u: ' MWh',
    unit: 'heat through the glass, MWh a year',
    src: 'house, panamá',
    ramp: 'calor',
  },
  {
    // casa castillo (published project page): a parasol roof 0.30 m above the
    // roof. temperature and radiation only, no percentage (jose, 2026-11-17).
    cat: 'roof shading',
    say: 'a second roof with a 0.30 m open air gap drops the roof surface from 60 °C to 35 °C in its hottest hour.',
    num: '−25 °C',
    numUnit: 'on the roof surface in its hottest hour (60.4 to 35.2 °C)',
    a: { l: 'one roof', v: 1900 },
    b: { l: 'two roofs', v: 16 },
    u: ' kWh/m²',
    unit: 'sun on the roof, kWh/m² a year',
    src: 'house, panamá',
    ramp: 'sol',
  },
];

export const num = (v: number) => v.toLocaleString('en-US');
export const COMFORT = 'overheated: pmv above +0.5 (ashrae 55 pmv model; 1.1 met, 0.5 clo, air at 0.1 m/s). with the a/c at 24 °C and 53% humidity: operative temperature above 27 °C.';
export const SCALING = '3 representative floors simulated. every floor has the same plate, rotated 8.18°, so results are scaled to 30 floors.';
