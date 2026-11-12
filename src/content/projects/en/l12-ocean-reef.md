---
title: l12 ocean reef
slug: l12-ocean-reef
locale: en
eyebrow: '// glass study'
lede: 'which glass is worth paying for? the supplier offered three glass sets for this house in panamá. we simulated the house with each one: double selective glass cuts the heat through the glass by 46% and the a/c electricity by 10%. the acoustic glass buys quiet, not energy.'
location: ocean reef, panamá
year: 2023
typology: residential
role: glass study + building performance simulation
roleNote: 'architecture: forza creativa'
status: unbuilt
featured: false
order: 12.5
metric:
  value: '−46'
  unit: '%'
  label: heat through the glass in a year, single glass to the optimized mix
  note: 'energyplus 24.2, tocumen typical weather year, 2026 rerun of the 2023 study. glass values from the supplier sheet (profil 2000 / metra). architecture by forza creativa, glass study by entrópica.'
brief: |
  l12 ocean reef is a three-level house in panamá with 173 m² of glass. the glass
  supplier, profil 2000 / metra, proposed three sets: single clear glass, double
  selective glass, and the same double glass with an acoustic layer.

  we simulated the house with each one. double glass cuts the heat that comes in through
  the glass by 46%. the a/c electricity drops by about a tenth, because walls, roof and
  people still add heat. the acoustic glass gives the same heat result: it buys quiet,
  not energy.
approach: |
  the answer was a mix, not one glass for the whole house: acoustic glass in the living
  areas and the master suite, double glass in the bedrooms, and single glass in the
  kitchen and service rooms. the mix gets 91% of the saving of double glass everywhere.

  in 2026 we reviewed the 2023 study and rebuilt the model with the supplier's real glass
  values and real windows. every number on this page comes from that rerun.
study:
  keyNumbers:
    - { value: '−46%', label: 'heat through the glass in a year, single glass to the optimized mix' }
    - { value: '−10%', label: 'a/c electricity, family of two (19,849 to 17,870 kWh a year)' }
    - { value: '1,979 kWh', label: 'less a/c electricity a year, family of two' }
    - { value: '+6.2 pts', label: 'comfortable hours without a/c, whole house' }
    - { value: '91%', label: 'of the saving of double glass everywhere, with single glass only in the service rooms' }
    - { value: '6 dB', label: 'more sound reduction from the acoustic glass, at the same heat result' }
  panels:
    - headline: half the heat through the glass
      image: /projects/l12-ocean-reef/l12-ocean-reef_01_glass.webp
      interactive:
        type: bars
        yLabel: heat gain through the glass (MWh a year)
        yUnit: MWh
        categories:
          - { label: north, sub: 25 m² }
          - { label: east, sub: 50 m², note: '50 m² of glass. the mix keeps single glass in a few service rooms here: 18.3 MWh, against 16.8 with double glass everywhere' }
          - { label: south, sub: 69 m² }
          - { label: west, sub: 29 m², note: '29 m² of glass. the mix keeps single glass in a few service rooms here: 9.1 MWh, against 5.9 with double glass everywhere' }
        bars:
          - { label: single glass everywhere, values: [7.1, 35.8, 17.6, 12.6] }
          - { label: optimized mix, values: [3.5, 18.3, 8.9, 9.1] }
      width: 2160
      height: 2200
      alt: 'bar chart of the heat gain through the glass per facade, single glass against the optimized mix. north: 7.1 to 3.5 MWh (25 m² of glass); east: 35.8 to 18.3 MWh (50 m² of glass); south: 17.6 to 8.9 MWh (69 m² of glass); west: 12.6 to 9.1 MWh (29 m² of glass).'
      caption: 'double selective glass lets in 46% less heat through the glass: 73.1 to 39.8 MWh a year. the east facade gains the most: 35.8 to 18.3 MWh. most of the cut comes from the coating, which halves the sun that passes (g 0.84 to 0.40).'
      numbers:
        - { value: '−46', unit: '%', label: 'heat through the glass' }
        - { value: '73.1 → 39.8', unit: 'MWh', label: 'a year, all windows' }
    - headline: a tenth less air-conditioning
      image: /projects/l12-ocean-reef/l12-ocean-reef_02_ac.webp
      interactive:
        type: lines
        xLabel: month
        yLabel: a/c electricity, family of two
        yUnit: ' kWh'
        xTicks: [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec]
        series:
          - { label: single glass everywhere, points: [[1, 1590.5], [2, 1536.3], [3, 1783.8], [4, 1966.9], [5, 1781.1], [6, 1600.7], [7, 1873.8], [8, 1659.5], [9, 1590.7], [10, 1550.4], [11, 1358.9], [12, 1556.8]] }
          - { label: optimized mix, points: [[1, 1400.9], [2, 1338.8], [3, 1552.5], [4, 1748.9], [5, 1616.6], [6, 1469.7], [7, 1719.9], [8, 1523.4], [9, 1455.1], [10, 1411.3], [11, 1235.3], [12, 1397.8]] }
      width: 2160
      height: 2200
      alt: 'line chart of the a/c electricity month by month, single glass against the optimized mix. the mix is lower in every month. year: 19,849 and 17,870 kWh.'
      caption: 'for a family of two, the a/c uses 10% less electricity: 19,849 to 17,870 kWh a year. the mix is lower in every month, most in the dry season. the glass is one source of heat among many: walls, roof, people and appliances still need cooling. with 10 people in the house, the cut is 9.5%.'
      numbers:
        - { value: '−10', unit: '%', label: 'a/c electricity, family of two' }
        - { value: '1,979', unit: 'kWh', label: 'less a year' }
        - { value: '−9.5', unit: '%', label: 'a/c electricity, full house' }
    - headline: the living room, every hour
      image: /projects/l12-ocean-reef/l12-ocean-reef_03_year.webp
      interactive: { type: comfort-heatmap, data: /projects/l12-ocean-reef/data/living-room-hourly.json, cases: ['single glass', 'optimized mix'] }
      width: 2160
      height: 2200
      alt: 'hour-by-hour charts of the living room without a/c, colored by degrees from the comfort target. single glass: 7,258 comfortable hours. optimized mix: 8,248.'
      caption: 'each column is a day, each row an hour, with no a/c and the windows open when it helps. with single glass the living room is above 30 °C for 1,186 hours a year; with the optimized mix, 356. most of the hot hours fall between 11 am and 5 pm, and half of them in the dry season, january to april.'
      numbers:
        - { value: '1,186 → 356', unit: 'h', label: 'above 30 °C in the living room' }
        - { value: '7,258 → 8,248', unit: 'h', label: 'comfortable hours in the living room' }
    - headline: room by room
      image: /projects/l12-ocean-reef/l12-ocean-reef_04_rooms.webp
      interactive:
        type: dumbbell
        cases: ['single glass', 'optimized mix']
        xLabel: comfortable hours without a/c (% of the year)
        xUnit: '%'
        rows:
          - { label: atrium / stair, a: 83.62, b: 94.65, note: 'set 1 in the mix · 27.9 m² of glass · 130.3 m² of floor' }
          - { label: living / dining, a: 82.85, b: 94.16, note: 'set 1 in the mix · 21.1 m² of glass · 34.6 m² of floor' }
          - { label: kitchen, a: 91.74, b: 93.38, note: 'set 3 (single) in the mix · 3.1 m² of glass · 34.8 m² of floor' }
          - { label: 'guest room, ground floor', a: 82.31, b: 89.03, note: 'set 2 in the mix · 1.9 m² of glass · 14.6 m² of floor' }
          - { label: bedroom 3, a: 84.35, b: 87.90, note: 'set 2 in the mix · 5.4 m² of glass · 29.2 m² of floor' }
          - { label: master bedroom, a: 78.84, b: 85.59, note: 'set 1 in the mix · 11.6 m² of glass · 33.0 m² of floor' }
          - { label: bedroom 2, a: 80.31, b: 84.03, note: 'set 2 in the mix · 5.4 m² of glass · 26.3 m² of floor' }
          - { label: bedroom 1, a: 78.55, b: 83.38, note: 'set 2 in the mix · 8.2 m² of glass · 25.2 m² of floor' }
          - { label: 'guest room, top floor', a: 69.68, b: 74.60, note: 'set 2 in the mix · 6.2 m² of glass · 16.8 m² of floor' }
          - { label: den / office, a: 68.74, b: 72.11, note: 'set 2 in the mix · 21.7 m² of glass · 156.8 m² of floor' }
          - { label: gym, a: 64.92, b: 70.14, note: 'set 2 in the mix · 25.6 m² of glass · 54.6 m² of floor' }
      width: 2160
      height: 2200
      alt: 'dot chart of comfortable hours per room without a/c, single glass against the optimized mix. living / dining: 82.8 to 94.2%; kitchen: 91.7 to 93.4%; atrium / stair: 83.6 to 94.7%; guest room, ground floor: 82.3 to 89.0%; bedroom 1: 78.5 to 83.4%; bedroom 2: 80.3 to 84.0%; bedroom 3: 84.3 to 87.9%; master bedroom: 78.8 to 85.6%; guest room, top floor: 69.7 to 74.6%; den / office: 68.7 to 72.1%; gym: 64.9 to 70.1%.'
      caption: 'without a/c, the whole house gains 6.2 points of comfortable hours. the rooms with the most glass gain the most: living / dining +11.3, atrium / stair +11.0. the top-floor rooms stay the least comfortable with either glass.'
      numbers:
        - { value: '+6.2', unit: 'pts', label: 'whole house' }
        - { value: '+11.3', unit: 'pts', label: 'living / dining' }
    - headline: where each glass goes
      image: /projects/l12-ocean-reef/l12-ocean-reef_05_sets.webp
      interactive:
        type: bars
        yLabel: glass area in the optimized mix (m²)
        yUnit: m²
        categories:
          - { label: set 1, sub: acoustic double, note: 'ug 1.1 W/m²K · g 0.40 · rw 43 dB. living areas and master suite' }
          - { label: set 2, sub: double, note: 'ug 1.1 W/m²K · g 0.40 · rw 37 dB. bedrooms, den and gym' }
          - { label: set 3, sub: single, note: 'ug 5.6 W/m²K · g 0.84 · rw 32 dB. kitchen, laundry and service rooms' }
        bars:
          - { label: '', values: [74.1, 79.8, 18.9] }
      width: 2160
      height: 2200
      alt: 'bar chart of the glass area in the optimized mix: set 1 74 m², set 2 80 m², set 3 19 m². set 1: ug 1.1, g 0.40, rw 43 dB; set 2: ug 1.1, g 0.40, rw 37 dB; set 3: ug 5.6, g 0.84, rw 32 dB.'
      caption: 'the optimized mix puts acoustic glass in the living areas and the master suite, double glass in the bedrooms, and single glass in the kitchen, laundry and service rooms. this mix gets 91% of the saving of double glass everywhere. sets 1 and 2 have the same thermal values: the acoustic set buys 6 dB of quiet, not energy.'
      numbers:
        - { value: '91', unit: '%', label: 'of the saving of double glass everywhere' }
        - { value: '6', unit: 'dB', label: 'set 1 against set 2, same heat' }
  method:
    - 'model: the house as designed in 2023: 30 rooms, 173 m² of glass in 29 real windows, the louvers and celosías. energyplus 24.2 through honeybee (2026 rerun).'
    - 'glass: supplier sheet values (profil 2000 / metra) at the center of the glass (sets 1 and 2: ug 1.1 W/m²K, g 0.40; set 3: ug 5.6 W/m²K, g 0.84). frames are not modeled.'
    - 'walls: hollow block with a ventilated facade (ground floor) or eifs (upper floors). roof: concrete slab, no insulation. ground at the weather-file ground temperature.'
    - 'a/c: family of two, a/c at 24 °C only where and when they are. electricity = cooling load / cop 3.2 (assumed, same for all cases). full house (10 people) as a check.'
    - 'comfort: the same house with no a/c and half of each window open when inside > 24 °C and outside < 32 °C. ashrae 55 adaptive, 80% limits (± 3.5 °C), still air.'
    - 'weather: tocumen 787920 typical year.'
    - 'check: in 2026 we reviewed the 2023 study. the 2023 model used library glass, generic windows and the airport wind as indoor air speed, so we rebuilt it.'
  credits: 'glass study and graphics: entrópica. architecture: forza creativa. glass: profil 2000 / metra. tools: energyplus, ladybug tools (honeybee), python.'
---
