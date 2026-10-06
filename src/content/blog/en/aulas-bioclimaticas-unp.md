---
title: 'two open walls, up to 26 points more comfort'
slug: aulas-bioclimaticas-unp
locale: en
categories: ['case study', 'natural ventilation']
tags: ['cross ventilation', 'thermal comfort', 'CFD', 'louvers', 'classrooms']
keywords: ['natural ventilation classrooms panama', 'thermal comfort without air conditioning', 'CFD cross ventilation', 'louvers tropics']
eyebrow: '// cases · ventilation'
heroImage: /blog/aulas-bioclimaticas-unp/aulas-301-propuesta.jpg
summary: a CFD study of two naturally ventilated classrooms at the national university of panamá. opening the corridor wall with louvers raises the hours in comfort by up to 26 points, with no air conditioning.
date: 2021-07-15
author: josé barría
draft: false
---

## the result

in 2021, entrópica used computational fluid dynamics (CFD) to analyse two classrooms at the national university of panamá (UNP), in panamá city. both run on natural ventilation.

the proposed change is simple: open the corridor wall with louvers, in addition to the façade windows. with that change, the hours in thermal comfort rise like this:

| classroom | original | proposal | gain |
|---|---|---|---|
| classroom 402 | 42% | 66% | +24 points |
| classroom 301 | 47% | 73% | +26 points |

the proposal uses no air conditioning. it only changes where the openings are and how big they are.

## the problem: air comes in, but it does not leave

in the original design, each classroom has windows on the façade and a single small outlet toward the access corridor. air comes in through the façade, but it finds no outlet of equivalent size.

the vector map shows the effect. air speed rises to 2.89 m/s next to classroom 402's outlet. in the rest of the room, the air barely moves. the student sitting in the centre gets no breeze.

with no air movement, the heat and humidity of panamá's climate push the classroom out of comfort for more than half of the class hours.

## the method

![project location and the tocumen weather station](/blog/aulas-bioclimaticas-unp/aulas-ubicacion.jpg)

the weather data comes from the tocumen international airport station (file Tocumen Intl AP 787920, ISD-TMYx).

the simulations used these parameters:

1. use schedule: 8:00 a.m. to 10:30 p.m., monday to friday.
2. inlet air speed: 1 m/s.
3. air inlets: on the façade.
4. air outlets: toward the access corridor.

thermal-comfort model: adaptive comfort.
simulation software: ladybug tools, with butterfly and OpenFOAM.

## classroom 402

### original

![classroom 402, original design: thermal-comfort chart and velocity vector map](/blog/aulas-bioclimaticas-unp/aulas-402-original.jpg)

- hours in comfort: 42%. the rest of the time is in heat.
- openings: façade windows and a small outlet to the corridor.
- flow: the air concentrates in a line between the windows and the outlet.

### proposal

![classroom 402, proposal: thermal-comfort chart and velocity vector map](/blog/aulas-bioclimaticas-unp/aulas-402-propuesta.jpg)

- hours in comfort: 66%.
- openings: louvers low on the façade and louvers on the corridor wall.
- flow: the air crosses the whole room at roughly 0.4 m/s to 0.6 m/s.

## classroom 301

### original

![classroom 301, original design: thermal-comfort chart and velocity vector map](/blog/aulas-bioclimaticas-unp/aulas-301-original.jpg)

- hours in comfort: 47%. the rest of the time is in heat.
- openings: façade windows and a small outlet to the corridor.
- flow: speed rises to 1.88 m/s next to the outlet. the centre of the room is left with almost still air.

### proposal

![classroom 301, proposal: thermal-comfort chart and velocity vector map](/blog/aulas-bioclimaticas-unp/aulas-301-propuesta.jpg)

- hours in comfort: 73%.
- openings: louvers on the façade and two louver panels on the corridor wall.
- flow: the air crosses the room evenly.

## what we learned

1. **the outlet matters as much as the inlet.** a large window without an equivalent outlet does not produce cross ventilation.
2. **high speed at one point is not comfort.** comfort depends on air speed in the zone where people sit.
3. **louvers let you open without losing control.** a louver wall lets air through, filters direct light and keeps the rain out.
4. **the gain is large for little work.** the change touches only the openings. the structure and the slab do not change.

in the proposal charts, the hours in heat sit close to midday and the afternoon. for those hours, the next step is to combine cross ventilation with ceiling fans or with solar shading on the façade.

## limits of the study

- the tocumen station is in a rural or suburban setting. the classrooms are in a dense urban one, so the site microclimate may differ from the station's.
- the simulation uses a constant inlet speed of 1 m/s. on site, wind speed and direction change every hour.
- the results compare two designs under the same conditions. they help you choose between options, not predict the classroom's exact temperature.

## conclusion

in the tropics, before installing air conditioning, it is worth checking where the air leaves. a louver wall onto the corridor can turn a hot classroom into a ventilated one, with no energy use.

---

*a study by entrópica for the national university of panamá, 2021.*
