---
title: new chautauqua institute
slug: new-chautauqua-institute
locale: en
eyebrow: '// academic work'
lede: "a facade that reads the city's shadow. in singapore the neighbors shade the lower floors, so the louvers tighten as the building rises. the sun on the glass drops by 71%."
location: singapore
year: 2017
typology: mixed-use
role: team project, upenn arch 708
roleNote: 'josé barría, bhakti kothari, neeharika siram'
status: academic project
featured: false
order: 14.5
heroImage: /projects/new-chautauqua-institute/01.jpg
heroCaption: '// ai visualization, loosely based on the 2017 studio project'
heroAlt: 'ai visualization loosely based on the new chautauqua institute: a mid-rise building wrapped in horizontal timber louvers, with planted terraces and roof solar panels, on a tree-lined street in singapore'
metric:
  value: '−71'
  unit: '%'
  label: sun on the glass behind the louvers, in a year
  note: "academic team project, university of pennsylvania, 2017. models rerun in 2026. the image is an ai visualization."
brief: |
  the new chautauqua institute is a 2017 studio project at the university of pennsylvania, by josé barría, bhakti kothari and neeharika siram: a research and residence building in central singapore.

  this page follows one idea from an early version of the design. in 2026 the models were rerun.
approach: |
  the top floor, above the neighbors' roofs, gets 2.9 times more sun than the first. so the louvers are not spread evenly: 7 on the first floor and 14 on the top.
study:
  keyNumbers:
    - { value: '93%', label: 'of the hours of the year in heat stress, even in the shade (utci 26 °C or above)' }
    - { value: '35 → 74%', label: 'comfortable hours in one office room: shades, better glass, natural ventilation' }
    - { value: '2.9×', label: 'more sun on the top floor''s glass than on the first, before any shading' }
    - { value: '7 to 14', label: 'louvers per floor, from the first floor to the top' }
    - { value: '−71%', label: 'sun on the glass behind the louvers (389 to 114 kWh/m² a year)' }
    - { value: '94%', label: 'of the floor area with enough daylight (sDA) behind the louvers' }
  panels:
    - headline: the city shades the bottom, the sky burns the top
      image: /projects/new-chautauqua-institute/new-chautauqua-institute_03_shadow.webp
      interactive:
        type: lines
        xLabel: floor
        yLabel: sun on the glass, no louvers (kWh/m² a year)
        yUnit: ' kWh/m²'
        xTicks: [floor 1, floor 2, floor 3, floor 4, floor 5]
        series:
          - { label: no louvers, points: [[1, 208.2], [2, 271.0], [3, 360.9], [4, 502.6], [5, 602.6]] }
      width: 2160
      height: 2200
      alt: 'line chart of the yearly sun on the glass of each floor with no louvers: 208, 271, 361, 503 and 603 kWh/m² from the first floor to the fifth.'
      caption: "a year of sun on the glass of each floor, with no louvers. the first floor gets 208 kWh/m²; the top floor, above the neighbors, 603."
      numbers:
        - { value: '208', unit: 'kWh/m²·yr', label: 'first floor, no louvers' }
        - { value: '603', unit: 'kWh/m²·yr', label: 'top floor, no louvers' }
    - headline: louvers that tighten with height
      image: /projects/new-chautauqua-institute/new-chautauqua-institute_04_barcode.webp
      interactive:
        type: bars
        yLabel: louvers per floor
        decimals: 0
        change: false
        categories:
          - { label: floor 1, sub: 208 kWh/m², note: 'one more louver sits below the first floor: 50 in all' }
          - { label: floor 2, sub: 271 kWh/m² }
          - { label: floor 3, sub: 361 kWh/m² }
          - { label: floor 4, sub: 503 kWh/m² }
          - { label: floor 5, sub: 603 kWh/m² }
        bars:
          - { label: as drawn in 2017, values: [7, 7, 10, 11, 14] }
          - { label: in proportion to the sun, values: [5, 7, 9, 13, 15] }
      width: 2160
      height: 2200
      alt: 'bar chart of louvers per floor, as drawn in 2017 (7, 7, 10, 11, 14) and in proportion to the sun on each floor (5, 7, 9, 13, 15).'
      caption: "how many louvers each floor gets, as drawn in 2017 and spread by the sun. they are very close. one more sits below the first floor: 50 in all."
      numbers:
        - { value: '7 to 14', unit: '', label: 'louvers per floor, as drawn' }
        - { value: '5 to 15', unit: '', label: 'louvers per floor, in proportion to the sun' }
    - headline: same louvers, placed by the sun
      image: /projects/new-chautauqua-institute/new-chautauqua-institute_05_trade.webp
      interactive:
        type: lines
        xLabel: floor
        yLabel: sun on the glass behind the louvers (kWh/m² a year)
        yUnit: ' kWh/m²'
        xTicks: [floor 1, floor 2, floor 3, floor 4, floor 5]
        series:
          - { label: even spacing, points: [[1, 24.7], [2, 41.4], [3, 70.7], [4, 139.0], [5, 220.6]] }
          - { label: 2017 spacing, points: [[1, 62.2], [2, 69.3], [3, 103.6], [4, 151.5], [5, 182.6]] }
      width: 2160
      height: 2200
      alt: 'line chart of the yearly sun on the glass of each floor behind the same 50 louvers, evenly spaced (25, 41, 71, 139, 221 kWh/m²) and as spaced in 2017 (62, 69, 104, 151, 183).'
      caption: "the same 50 louvers, spaced as in 2017 or evenly. the 2017 spacing takes 17% of the sun off the top floor and leaves more light below, where the city already gives shade."
      numbers:
        - { value: '−17', unit: '%', label: 'sun on the top floor' }
        - { value: '62 vs 25', unit: 'kWh/m²·yr', label: 'first floor, 2017 against even' }
    - headline: less glare, almost the same light
      image: /projects/new-chautauqua-institute/new-chautauqua-institute_06_daylight.webp
      interactive:
        type: bars
        yLabel: floor area with enough daylight, sDA (%)
        yUnit: '%'
        decimals: 0
        categories:
          - { label: floor 1, note: 'over-lit hours: 13.7% no louvers · 5.5% 2017 · 0.5% even' }
          - { label: floor 2, note: 'over-lit hours: 17.0% no louvers · 4.6% 2017 · 1.2% even' }
          - { label: floor 3, note: 'over-lit hours: 22.1% no louvers · 7.3% 2017 · 3.5% even' }
          - { label: floor 4, note: 'over-lit hours: 30.9% no louvers · 12.2% 2017 · 9.3% even' }
          - { label: floor 5, note: 'over-lit hours: 36.7% no louvers · 9.9% 2017 · 17.6% even' }
        bars:
          - { label: no louvers, values: [96.69, 99.26, 100, 100, 100] }
          - { label: 2017 louvers, values: [81.99, 89.34, 98.90, 100, 100] }
          - { label: even louvers, values: [74.82, 85.29, 99.08, 100, 100] }
      width: 2160
      height: 2200
      alt: 'bar chart of the floor area with enough daylight (sDA) per floor, with no louvers, the 2017 louvers and even louvers. floor 1: 97, 82 and 75%; floors 3 to 5 near 100% in every case.'
      caption: "daylight on each floor. with the 2017 louvers, 94% of the floor has enough light (99% with no louvers), and the over-lit hours on the top floor drop from 37% to 10%."
      numbers:
        - { value: '94', unit: '%', label: 'floor area with enough daylight, 2017 louvers' }
        - { value: '37 → 10', unit: '%', label: 'over-lit hours on the top floor' }
  method:
    - 'climate: singapore iwec weather file (changi, 1.37° n). utci in the shade with mean radiant temperature equal to air temperature; heat stress = utci 26 °C or above.'
    - 'office room ladder: the archived 2017 energyplus room (7 × 12 × 4 m, south glass, free-running), rerun in energyplus 9.1 for all 8,760 hours; adaptive comfort (ashrae 55, 90%), still air. the 2017 boards used the weather-file wind indoors and one june week, so they read differently. better glass: ashrae 189.1 zone 1 values (assumed).'
    - 'building: an early 2017 version of the design, a 25.0 × 51.5 m box of five floors above an open ground floor, wrapped in 50 horizontal louvers 0.30 m deep (49 on floors 1 to 5, one below the first floor), on the 2017 site model with its neighbors. glass assumed full height at the inner face of the columns.'
    - 'sun on the glass: radiance (rcontrib), cumulative perez sky in 145 patches from the weather file, context included, no ground reflection. the even case moves the same 50 louvers to equal spacing.'
    - 'daylight: radiance two-phase daylight coefficients (577-patch sky, 6 bounces), work plane 0.75 m on a 1.5 m grid, 8-18 h. sDA = share of floor area with 300 lx or more half of the hours. over-lit = above 3,000 lx. assumed: glass visible transmittance 0.60, open floors with no core, reflectances 0.2 floor, 0.5 walls, 0.8 ceiling.'
    - 'north: as in the 2017 site model; the real lot runs about n30e.'
  credits: 'team: josé barría, bhakti kothari, neeharika siram. critics: william braham, mostapha sadeghipour roudsari. arch 708 environmental building design studio, university of pennsylvania, spring 2017. 2026 rerun and graphics: josé barría. an academic project, not an entrópica commission. the hero image is an ai visualization.'
---
