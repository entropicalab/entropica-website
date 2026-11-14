---
title: manzil basit
slug: manzil-basit
locale: en
eyebrow: '// passive strategy study'
lede: "what cools a room in the desert? before designing this house in abu dhabi, we tested six strategies on a single room. with no air-conditioning, it went from comfortable 20% of the year to 67%."
location: abu dhabi, united arab emirates
year: 2020
typology: residential
role: passive strategy study + building performance simulation
roleNote: private client
status: concept
featured: false
order: 13
heroImage: /projects/manzil-basit/01.jpg
heroCaption: '// ai visualization, based on the client''s conceptual design'
heroAlt: 'ai visualization of manzil basit, abu dhabi, based on the client''s conceptual design: two volumes under floating roof shades, with perforated screens over the glass'
metric:
  value: '3.4'
  unit: '×'
  label: more comfortable hours a year, same room, no air-conditioning
  note: "simulated with the abu dhabi climate. the images of the house are ai visualizations based on the client's conceptual design."
brief: |
  manzil basit, "simple house" in arabic, is a private house in abu dhabi. outdoors, half the year brings heat stress, even in the shade.

  before any design, we tested one 6 × 9 × 3 m room with six strategies, one after the other.
approach: |
  air and water helped most: ventilation, moving air and cooling with water. blocking the sun added half as much.

  those ideas don't show in a picture. that is why the study came before the design.
study:
  keyNumbers:
    - { value: '3.4×', label: 'more comfortable hours a year, same room, no air-conditioning' }
    - { value: '19.72 → 66.67%', label: 'share of the year inside the adaptive comfort band, base room to final room' }
    - { value: '64%', label: 'of the gain from air and water (ventilation, felt air movement, evaporative cooling)' }
    - { value: '32%', label: 'of the gain from blocking the sun (window shading, double roof)' }
    - { value: '14 °C', label: 'median cooling available from evaporating water in the hours above 35 °C' }
  figure:
    src: /projects/manzil-basit/02.jpg
    alt: 'ai visualization of manzil basit, based on the client''s conceptual design: a corner of the house with perforated screens over the glass, deep roof shades and a stone-clad entry volume'
    tag: '// ai visualization, based on the client''s conceptual design'
  panels:
    - headline: the air is hot, but it is dry
      image: /projects/manzil-basit/manzil-basit_01_climate.webp
      interactive: { type: climate-heatmap, data: /projects/manzil-basit/data/room-hourly.json }
      width: 2160
      height: 2200
      alt: 'two hour-by-hour charts of the abu dhabi year. top: felt temperature in the shade (utci), with heat stress on 50% of hours, strongest from may to september in the afternoon. bottom: cooling available from evaporating water, up to 25 °C at midday.'
      caption: "every hour of the year in abu dhabi. it is hot outside, but the air is dry: in the hours above 35 °C, evaporating water can cool it by 14 °C."
      numbers:
        - { value: '14', unit: '°C', label: 'median wet-bulb depression in the hours above 35 °C' }
        - { value: '50', unit: '%', label: 'of the year with heat stress outdoors, in the shade' }
    - headline: six moves, ranked
      image: /projects/manzil-basit/manzil-basit_02_ladder.webp
      width: 2160
      height: 2200
      alt: 'step chart of comfortable hours, from 19.72% (base room) to 66.67% (final room). steps: orientation +1.04, window shading +6.38, double roof +8.73, air exchange +2.30, felt air movement +11.03, evaporative cooling +17.47 percentage points. air and water steps are amber (64% of the gain); sun-blocking steps are sand (32%).'
      caption: "each bar adds one strategy to the room. cooling with water adds the most (+17.47 points) and orientation almost nothing (+1.04). the room ends up comfortable 66.67% of the year."
      numbers:
        - { value: '+17.47', unit: 'pts', label: 'evaporative cooling' }
        - { value: '+11.03', unit: 'pts', label: 'felt air movement' }
        - { value: '+8.73', unit: 'pts', label: 'double roof' }
        - { value: '+6.38', unit: 'pts', label: 'window shading' }
        - { value: '+2.30', unit: 'pts', label: 'air exchange' }
        - { value: '+1.04', unit: 'pts', label: 'orientation' }
    - headline: every hour of the year, before and after
      image: /projects/manzil-basit/manzil-basit_03_year.webp
      interactive: { type: comfort-heatmap, data: /projects/manzil-basit/data/room-hourly.json, cases: ["base room", "final room"] }
      width: 2160
      height: 2200
      alt: 'two hour-by-hour charts of degrees from the comfort target. base room: dark red (too hot) most afternoons from march to november, 1,721 comfortable hours. final room: mostly sand (comfortable), light red on summer afternoons, blue (too cold) on winter mornings, 5,819 comfortable hours.'
      caption: "every hour of the year, before and after. the base room is too hot almost every afternoon; the final room is comfortable most of the year. some winter mornings now run cool."
      numbers:
        - { value: '1,721', unit: 'h', label: 'comfortable hours a year, base room' }
        - { value: '5,819', unit: 'h', label: 'comfortable hours a year, final room' }
    - headline: with the room ventilated, more glass buys nothing
      image: /projects/manzil-basit/manzil-basit_05_window.webp
      interactive: { type: lines, series: [{ label: "", points: [[30, 49.20], [45, 47.83], [50, 47.48], [65, 47.08], [80, 46.13]] }], xLabel: "window-to-wall ratio", yLabel: "comfortable hours a year", xUnit: "%", yUnit: "%", chosen: [30, 49.20] }
      width: 2160
      height: 2200
      alt: 'line chart of comfortable hours against window-to-wall ratio: 49.2% at 30%, 47.8% at 45%, 47.5% at 50%, 47.1% at 65% and 46.1% at 80%. the line is almost flat.'
      caption: "with the room ventilated, going from 30% to 80% glass barely changes comfort (−3.07 points). the glass can follow the view and the light. we kept 30%."
      numbers:
        - { value: '−3.07', unit: 'pts', label: 'from 30% to 80% glass' }
        - { value: '49.20', unit: '%', label: 'chosen: 30% glass' }
  method:
    - 'climate: abu dhabi international airport, iwec weather file (8,760 hours).'
    - 'model: one free-running 6 × 9 × 3 m room (heavy concrete walls, single clear glass, 40% glazing to start), simulated in energyplus through honeybee for grasshopper.'
    - 'comfort: ashrae 55 adaptive model, 90% acceptability band (±2.5 °C around the target), monthly mean outdoor temperature.'
    - 'steps are cumulative: each strategy is added to the best case of the step before it.'
    - 'ventilation is shown in two parts: air exchange (the room with still air) and felt air movement (the comfort band widened by the air speed; the study used the weather-file wind speed).'
    - 'evaporative cooling: 80% efficiency against the outdoor wet-bulb temperature, applied when the room air is above 29 °C. this step also includes +0.59 pts from an upgraded envelope (ashrae 189.1).'
    - 'check: in 2026 we reran the archived 2020 models (energyplus 9.1). the rerun matches the delivered study within 0.3 pts.'
  credits: 'study and graphics: entrópica. tools: energyplus, ladybug tools (honeybee, ladybug), python.'
---
