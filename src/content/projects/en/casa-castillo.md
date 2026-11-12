---
title: casa castillo
slug: casa-castillo
locale: en
eyebrow: "// bioclimatic design study"
lede: "a parasol over the house. a second roof 0.30 m above a family country house in panamá's dry arc takes 99% of the yearly sun off the main roof and adds 450 comfortable hours a year, with no air-conditioning."
location: "los santos, panamá"
year: 2020
typology: residential
role: "simulations + strategy validation"
roleNote: "design: labhaus studio"
roleNoteUrl: "https://www.instagram.com/labhausstudio/"
featured: false
order: 13.5
heroImage: /projects/casa-castillo/01.jpg
heroCaption: "// ai illustration, based on the 2020 study model"
heroAlt: "ai illustration of casa castillo, based on the 2020 study model: a long, low house on stilts under a thin flat roof, with louvered panels, on a grassy hillside among palms and trees"
metric:
  value: '+450'
  unit: 'h'
  label: "more comfortable hours a year, with no air-conditioning"
  note: "main house, adaptive comfort (ashrae 55), still air, santiago de veraguas tmyx weather. design case: parasol and ventilated plenum. simulation by entrópica, design by labhaus studio."
brief: |
  casa castillo is a family country house in panamá's dry arc, in los santos, designed by labhaus studio. entrópica ran the simulations and validated the design's strategies: a collaboration between the two studios.

  this close to the equator the sun passes almost overhead, so the design puts a second roof 0.30 m above the first: a parasol. we tested the house with and without it, and all 64 ways to set the sliding panels of its patio.
approach: |
  the parasol takes 99% of the yearly sun off the main roof, the roof surface stops burning and, with a ventilated plenum under the raised floor, the house gains 450 comfortable hours a year.

  on the patio, the best of the 64 settings lets in less than half the daytime sun of a patio with no panels.
study:
  keyNumbers:
    - { value: "74%", label: "of the direct sun on a flat roof comes from higher than 45°" }
    - { value: "−99%", label: "yearly sun on the main roof (1,900 to 16 kWh/m²)" }
    - { value: "−25 °C", label: "on the roof surface in its hottest hour (60.4 to 35.2 °C)" }
    - { value: "−5.5 °C", label: "on the ceiling at 3–4 pm, on the average day of the year" }
    - { value: "+450 h", label: "comfortable hours a year (3,441 to 3,891), with the parasol and plenum, no air-conditioning" }
    - { value: "418–644 kWh/m²", label: "daytime sun on the patio, best to worst of 64 panel settings (868 with no panels)" }
  panels:
    - headline: "the sun stands over the house"
      image: /projects/casa-castillo/casa-castillo_01_sunpath.webp
      interactive: { type: sunpath, data: /projects/casa-castillo/data/sunpath.json }
      width: 2160
      height: 2200
      alt: "sun path diagram, plan view with north up. hourly sun positions form figure-eight loops across the sky, most of them inside the 45° ring. dots are colored by air temperature from 20 to 36 °C; the warmest hours are in the early afternoon, high and to the west."
      caption: "the yearly path of the sun over the site, one dot per daylight hour, colored by air temperature. at 7.8° north the sun passes almost overhead: 74% of the direct sun that falls on a flat roof comes from higher than 45°. the roof is where the heat comes in."
      numbers:
        - { value: "74", unit: "%", label: "of the direct sun on a flat roof comes from higher than 45°" }
    - headline: "a second roof, 0.30 m up"
      image: /projects/casa-castillo/casa-castillo_02_section.webp
      interactive:
        type: hotspots
        spots:
          - label: "parasol"
            shapes: [[[16, 35.3], [55, 35.3], [55, 37.4], [16, 37.4]]]
            body: "a second roof 0.30 m above the slab, 8.1 × 19.3 m: 1 m wider than the house on the east and west sides. it takes the 1,900 kWh/m² of sun a year that would otherwise land on the roof, and air moves through the gap."
            model: "an opaque shading surface, with no mass of its own."
          - label: "slab roof"
            shapes: [[[16, 37.7], [55, 37.7], [55, 39.6], [16, 39.6]]]
            body: "under the parasol the slab gets 16 kWh/m² of sun a year instead of 1,900. its outside face peaks at 35.2 °C instead of 60.4 °C, and never passes 45 °C: without the parasol it does for 1,248 hours a year."
            model: "100 mm lightweight concrete, an air gap and a 19 mm acoustic tile ceiling: a generic energyplus roof, the same in both cases."
          - label: "main house"
            shapes: [[[29, 39.7], [48.6, 39.7], [48.6, 51.8], [29, 51.8]]]
            body: "6.1 × 19.1 m, free-running with natural ventilation: no air-conditioning in the model. with the parasol and the plenum it gains 450 comfortable hours a year, from 3,441 to 3,891."
          - label: "walls"
            shapes: [[[27.6, 39.2], [29.2, 39.2], [29.2, 52.1], [27.6, 52.1]], [[48.6, 39.2], [50.2, 39.2], [50.2, 52.1], [48.6, 52.1]]]
            body: "the same walls in both cases: the study changes the roof and the floor, not the façades."
            model: "100 mm brick, 200 mm heavyweight concrete, 50 mm insulation board, an air gap and 19 mm gypsum board: a generic energyplus wall."
          - label: "ventilated plenum"
            shapes: [[[20.7, 52.1], [50.2, 52.1], [50.2, 54.3], [20.7, 54.3]]]
            body: "the house stands on stilts. the design case models the 0.51 m of air under its raised floor as a ventilated plenum; the first model set the ground right under the floor. on the average day the floor's inside face runs 3.0 °C cooler at 3–4 pm. that gain comes from the plenum and the parasol together: the study did not run them apart."
            model: "a ventilated air space under the floor slab, in the design case only."
          - label: "patio"
            shapes: [[[50.4, 40.4], [88, 40.4], [88, 51.8], [50.4, 51.8]]]
            body: "8.00 × 19.10 m under a frame with six sliding panels: four walls and two roof panels. try every setting further down, in 08."
          - label: "the lowest sun"
            shapes: [[[15, 66], [30, 66], [62, 80], [62, 84], [45, 82.5], [15, 73]]]
            body: "only sun lower than 16.7° above the horizon can slip under the parasol's 1 m overhang and reach the roof over the rooms: early morning and late afternoon light."
      width: 2160
      height: 2200
      alt: "east-west section through the main house and the patio, cut elements hatched, with the ventilated plenum under the raised floor. a detail of the west edge shows the slab roof, the parasol 0.30 m above it, the 1.00 m overhang, and a sun ray at 16.7°, the lowest sun that can reach the roof over the rooms."
      caption: "the parasol covers the slab roof and its 1 m overhang, 0.30 m above it. air moves through the gap; sun lower than 16.7° above the horizon is the only direct sun that can pass under it and reach the roof over the rooms."
      numbers:
        - { value: "0.30", unit: "m", label: "gap between the roof and the parasol" }
        - { value: "16.7", unit: "°", label: "lowest sun that reaches the roof over the rooms" }
    - headline: "the sun lands on the parasol instead"
      image: /projects/casa-castillo/casa-castillo_03_isometrics.webp
      interactive:
        type: hotspots
        spots:
          - label: "main roof"
            shapes: [[[16, 58.2], [30.5, 66.8], [70, 45.4], [55.5, 36.8]]]
            body: "16 kWh/m² of sun a year under the parasol, down from 1,900 without it: 99% less."
          - label: "parasol"
            shapes: [[[16, 49.1], [54.3, 27.8], [70.3, 36.8], [32, 58.4]]]
            body: "lifted 3.5 m in this drawing to show the roof under it. it takes 1,900 kWh/m² of sun a year."
            model: "an opaque shading surface, with no mass of its own."
          - label: "walls"
            shapes: [[[18, 58.9], [46.2, 75.6], [46.2, 81.5], [18, 65.3]]]
            body: "the walls and the patio take the sun the parasol leaves. each surface is colored by its yearly total, from pale (under 200 kWh/m²) to dark (over 1,600)."
          - label: "patio and pool house"
            shapes: [[[58.5, 51.5], [70, 45.3], [84, 54.1], [84, 60.1], [71.2, 67.1], [58.5, 74.1]]]
            body: "the patio's frame and sliding panels, and the pool house. the patio's own sun map, setting by setting, is further down, in 08."
      width: 2160
      height: 2200
      alt: "exploded isometric of the house colored by yearly sun, from pale to dark red. the parasol, lifted above the house, is dark red (1,900 kWh/m²); the main roof under it is pale (16 kWh/m²). walls and patio are in between."
      caption: "yearly sun on every surface, with the parasol lifted to show the roof under it. the parasol takes 1,900 kWh/m² a year; the main roof under it gets 16, down from 1,900 without it."
      numbers:
        - { value: "1,900", unit: "kWh/m²·yr", label: "main roof, without the parasol" }
        - { value: "16", unit: "kWh/m²·yr", label: "main roof, under the parasol" }
    - headline: "the roof stops burning"
      image: /projects/casa-castillo/casa-castillo_04_roof.webp
      interactive: { type: surface-heatmap, field: roof, data: /projects/casa-castillo/data/main-house-hourly.json, cases: ["without the parasol", "with the parasol"] }
      width: 2160
      height: 2200
      alt: "two hour-by-hour charts of the roof surface temperature. without the parasol: dark red bands every midday all year, peak 60.4 °C. under the parasol: light colors only, peak 35.2 °C."
      caption: "every hour of the year on the outside face of the roof. without the parasol, the slab passes 45 °C on most afternoons and peaks at 60.4 °C. under the parasol it stays below 35.2 °C all year."
      numbers:
        - { value: "60.4", unit: "°C", label: "roof peak, without the parasol" }
        - { value: "35.2", unit: "°C", label: "roof peak, under the parasol" }
    - headline: "the ceiling stops radiating"
      image: /projects/casa-castillo/casa-castillo_05_inside.webp
      interactive: { type: average-day, data: /projects/casa-castillo/data/main-house-hourly.json, cases: ["without the parasol or plenum", "with the parasol and plenum"], surfaces: [{ field: ceiling, label: ceiling }, { field: floor, label: floor }] }
      width: 2160
      height: 2200
      alt: "two line charts of inside surface temperature over an average day. ceiling: without the parasol, peaks near 37 °C in mid-afternoon, with the parasol near 32 °C. floor: without the parasol near 34 °C, with the parasol near 31 °C. the lines meet at night."
      caption: "the average day of the year, inside the main house. the biggest gap comes at 3–4 pm: with the parasol and plenum the ceiling runs 5.5 °C cooler and the floor 3.0 °C. before dawn the curves cross, and the ceiling runs up to 0.6 °C warmer: the parasol works when the sun is up."
      numbers:
        - { value: "−5.5", unit: "°C", label: "ceiling at 3–4 pm" }
        - { value: "−3.0", unit: "°C", label: "floor at 3–4 pm" }
    - headline: "and the house gains 450 comfortable hours"
      image: /projects/casa-castillo/casa-castillo_06_comfort.webp
      interactive: { type: comfort-heatmap, data: /projects/casa-castillo/data/main-house-hourly.json, cases: ["without the parasol or plenum", "with the parasol and plenum"] }
      width: 2160
      height: 2200
      alt: "two hour-by-hour charts of degrees from the comfort target in the main house. both show warm afternoons (red) and cool nights (blue); with the parasol the afternoon red is lighter and thinner. 3,441 comfortable hours without the parasol, 3,891 with the parasol."
      caption: "every hour of the year in the main house, against the adaptive comfort target. the parasol and the plenum take the edge off the afternoons: from 3,441 to 3,891 comfortable hours a year, with no air-conditioning and no credit for breeze."
      numbers:
        - { value: "3,441", unit: "h", label: "comfortable hours a year, without the parasol or plenum" }
        - { value: "3,891", unit: "h", label: "comfortable hours a year, with the parasol and plenum" }
    - headline: "a patio that can be reset"
      image: /projects/casa-castillo/casa-castillo_07_elements.webp
      interactive:
        type: hotspots
        spots:
          - label: "e5"
            shapes: [[[27.8, 63.6], [41.8, 55.7], [50.5, 60.8], [36.8, 68.5]]]
            body: "sliding roof panel at 5.70 m. the biggest lever on the patio: moving it to the outer half adds 139.6 kWh/m² of daytime sun a year, on average across the 32 pairs of settings that differ only in this panel. keep it against the house."
          - label: "e6"
            shapes: [[[41.8, 55.7], [55.8, 47.6], [64.8, 52.8], [50.5, 60.8]]]
            body: "sliding roof panel at 5.70 m. moving it to the outer half takes away 41.5 kWh/m² of daytime sun a year, on average across the 32 pairs of settings that differ only in this panel. the best setting has it out."
          - label: "e1"
            shapes: [[[44.8, 64.0], [50.6, 60.9], [50.7, 67.3]]]
            body: "sliding wall, 4.00 × 2.63 m. moving it to the outer half adds 12.5 kWh/m² of daytime sun on the patio, on average across the 32 pairs of settings that differ only in this panel."
          - label: "e2"
            shapes: [[[59.8, 53.5], [64.8, 52.8], [64.8, 59.1]]]
            body: "sliding wall, 4.00 × 2.63 m. moving it to the outer half adds 0.7 kWh/m² of daytime sun on the patio, on average across the 32 pairs of settings that differ only in this panel. in practice it barely matters."
          - label: "e3"
            shapes: [[[62, 46.9], [70.8, 52], [70.8, 56.7], [62, 51.8]]]
            body: "sliding wall, 4.00 × 2.63 m. moving it to the outer half takes away 5.7 kWh/m² of daytime sun on the patio, on average across the 32 pairs of settings that differ only in this panel. the best setting has it out."
          - label: "e4"
            shapes: [[[66.5, 41.7], [75.3, 46.8], [75.3, 53.2], [66.5, 48.1]]]
            body: "sliding wall, 4.00 × 2.63 m. moving it to the outer half adds 10.2 kWh/m² of daytime sun on the patio, on average across the 32 pairs of settings that differ only in this panel."
      width: 2160
      height: 2200
      alt: "isometric drawing of the house and patio frame with six numbered panels. filled panels show position 0, against the house; dashed outlines show position 1, in the outer half of the patio."
      caption: "the patio has six sliding panels: four walls (e1–e4) and two roof panels (e5, e6). each one sits against the house or in the outer half of the patio, which gives 64 settings."
      numbers:
        - { value: "6", unit: "panels", label: "four sliding walls, two sliding roof panels" }
        - { value: "64", unit: "settings", label: "2 positions per panel" }
    - headline: "all 64 settings, ranked by sun"
      image: /projects/casa-castillo/casa-castillo_08_configurations.webp
      interactive: { type: patio, data: /projects/casa-castillo/data/patio-64.json }
      width: 2160
      height: 2200
      alt: "grid of 64 small patio plans, eight by eight, ranked from least to most sun. each plan is colored from pale to dark red by daytime sun on the floor, with sliding walls as lines and roof panels dashed. values run from 418 to 644 kWh/m²; the 2020 setting, 479, is framed."
      caption: "we ran every setting with the parasol in place. daytime sun on the patio ranges from 418 to 644 kWh/m² a year, against 868 with no panels. the best setting moves only e3 and e6 out. the 2020 setting (framed) lets in 479, 15% more than the best, and ranks 24th of 64."
      numbers:
        - { value: "418", unit: "kWh/m²·yr", label: "best setting" }
        - { value: "644", unit: "kWh/m²·yr", label: "worst setting" }
        - { value: "479", unit: "kWh/m²·yr", label: "2020 setting, 24th of 64" }
        - { value: "868", unit: "kWh/m²·yr", label: "no panels" }
  method:
    - "climate: santiago de veraguas (cantú airport) tmyx weather file, the closest station to the site. site 7.80 n, 80.57 w."
    - "model: the main house (6.1 × 19.1 m) and the pool house, free-running with natural ventilation, simulated in energyplus through honeybee for grasshopper."
    - "design case: the same house with a second roof 0.30 m above the slab roof and its 1 m overhang, and the 0.51 m of air under the raised floor modelled as a ventilated plenum (the base model set the ground right under the floor)."
    - "comfort: ashrae 55 adaptive model, 90% acceptability band, still air. with the weather-file wind as air speed, as in the delivered study, the gain is 4,296 to 4,930 h."
    - "sun on surfaces and on the patio: cumulative sky (tregenza patches, direct sun binned per patch, isotropic diffuse, 0.2 ground reflectance) and ray casting on 0.5 m grids. patio at 0.9 m, 07–18 h."
    - "drawings: rhino make2d lines of the 2020 model; colors computed on the same geometry and view."
    - "check: in 2026 we reran the archived 2020 energyplus models (9.1) to recover the hourly results shown here."
  credits: "design: labhaus studio. study and graphics: entrópica. tools: energyplus, ladybug tools (honeybee, ladybug), rhino, python."
---
