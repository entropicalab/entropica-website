---
title: oficinas privadas de banca
slug: private-bank-offices
locale: es
eyebrow: '// concurso'
lede: "primero la sombra, luego el vidrio. en esta sucursal en chitré, un techo grande y una piel de bloque perforado le quitan al vidrio nuevo 94% del sol."
location: chitré, panamá
year: 2021
area: '376 m²'
typology: commercial
role: arquitectura + simulación
status: concurso
featured: true
order: 3
heroImage: /projects/private-bank-offices/01.jpg
metric:
  value: '−94'
  unit: '%'
  label: menos sol sobre el vidrio
  note: "frente al mismo edificio sin sombra: de 331 a 21 kWh/m² al año. simulado antes de construir, con el modelo reconstruido en 2026. concurso."
brief: |
  chitré está en el arco seco, la zona más seca de panamá. al sol, la mayoría de las horas del día traen estrés térmico fuerte; a la sombra, casi ninguna.

  el diseño de 2021 suma un bloque de vidrio frente a la sucursal existente, bajo un techo grande.
approach: |
  el techo hace casi todo el trabajo: da sombra a la calle, al recorrido y al vidrio de la plaza. la piel de bloque solo protege el vidrio de la calle.

  la sucursal crece 31% con la misma energía de aire acondicionado por m². con una pintura blanca en el techo viejo, gasta 9% menos que antes.
study:
  keyNumbers:
    - { value: '−47%', label: 'de horas con estrés térmico fuerte del lado de la calle (de 68% a 36% de las horas de atención)' }
    - { value: '−94%', label: 'de sol sobre el vidrio nuevo (de 331 a 21 kWh/m² al año)' }
    - { value: '92%', label: 'de las horas de atención con luz natural útil en el bloque de vidrio (28% sin el techo ni el bloque perforado)' }
    - { value: '88%', label: 'del ahorro de un techo nuevo completo, con una pintura blanca sobre el techo existente' }
    - { value: '75.5 kWh/m²', label: 'de electricidad de aire acondicionado al año, con 31% más de área y 2.2 veces el vidrio (antes: 76.0)' }
  panels:
    - headline: el techo hace la sombra
      image: /projects/private-bank-offices/private-bank-offices_01_street.webp
      width: 2160
      height: 2200
      alt: 'tres plantas de sitio, norte arriba, coloreadas por la parte de las horas de atención con estrés térmico fuerte en el área peatonal. antes: 68%. bloque de vidrio sin el techo: 63%. diseño de 2021 con el techo: 36%.'
      caption: "las horas de calor fuerte en la calle bajan de 68% a 36% de las horas de atención. el bloque de vidrio solo casi no cambia nada (63%); el techo hace el trabajo."
      numbers:
        - { value: '68 → 36', unit: '%', label: 'horas de atención con estrés térmico fuerte, lado de la calle' }
    - headline: el bloque de vidrio puede ser de vidrio
      image: /projects/private-bank-offices/private-bank-offices_03_glass.webp
      interactive:
        type: bars
        yLabel: sol sobre el vidrio nuevo (kWh/m² al año)
        yUnit: kWh/m²
        decimals: 0
        change: false
        categories:
          - { label: sin sombra }
          - { label: + techo }
          - { label: + techo y bloque perforado, note: 'cualquier abertura del bloque entre 15% y 55% funciona: de 22 a 30 kWh/m²' }
        bars:
          - { label: 'vidrio de la calle, nne', values: [252, 104, 21] }
          - { label: 'vidrio de la plaza, ono', values: [466, 22, 22] }
      width: 2160
      height: 2200
      alt: 'gráfico de barras del sol sobre el vidrio nuevo en tres pasos. vidrio de la calle: 252, 104, 21 kWh/m². vidrio de la plaza: 466, 22, 22 kWh/m².'
      caption: "el sol sobre el vidrio nuevo, paso a paso. el techo protege el vidrio de la plaza; la piel de bloque, el de la calle, que recibe el sol de abril a agosto."
      numbers:
        - { value: '−94', unit: '%', label: 'de sol sobre el vidrio nuevo' }
        - { value: '331 → 21', unit: 'kWh/m²', label: 'al año' }
    - headline: pinta el techo viejo antes de construir uno nuevo
      image: /projects/private-bank-offices/private-bank-offices_05_oldroof.webp
      width: 2160
      height: 2200
      alt: 'gráfico de puntos de la electricidad de aire acondicionado por m² del diseño de 2021 con cinco opciones para el techo existente: tal cual 75.5; aislamiento 72.5; pintura blanca + aislamiento 71.1; pintura blanca envejecida 71.0; pintura blanca nueva 69.0 kWh/m². techo nuevo completo: 68.1. antes: 76.0.'
      caption: "un techo nuevo sobre toda la sucursal bajaría el aire acondicionado a 68.1 kWh/m² al año. una pintura blanca sobre el techo viejo logra 88% de ese ahorro."
      numbers:
        - { value: '88', unit: '%', label: 'del ahorro del techo completo, pintura blanca' }
        - { value: '69.0', unit: 'kWh/m²', label: 'de aire acondicionado al año con la pintura blanca' }
    - headline: más banco, la misma energía por m²
      image: /projects/private-bank-offices/private-bank-offices_06_branch.webp
      interactive:
        type: lines
        xLabel: mes
        yLabel: electricidad de aire acondicionado por m² de piso
        yUnit: ' kWh/m²'
        xTicks: [ene, feb, mar, abr, may, jun, jul, ago, sep, oct, nov, dic]
        series:
          - { label: 'antes (537 m²)', points: [[1, 6.28], [2, 5.88], [3, 7.15], [4, 6.89], [5, 7.19], [6, 6.60], [7, 5.94], [8, 6.33], [9, 5.97], [10, 5.83], [11, 5.96], [12, 6.00]] }
          - { label: 'diseño de 2021 (705 m²)', points: [[1, 6.29], [2, 5.83], [3, 7.06], [4, 6.64], [5, 7.01], [6, 6.47], [7, 5.88], [8, 6.32], [9, 6.02], [10, 5.92], [11, 6.04], [12, 6.01]] }
          - { label: 'con pintura blanca en el techo existente', points: [[1, 5.64], [2, 5.13], [3, 6.21], [4, 5.79], [5, 6.45], [6, 6.03], [7, 5.53], [8, 5.93], [9, 5.65], [10, 5.54], [11, 5.64], [12, 5.45]] }
      width: 2160
      height: 2200
      alt: 'gráfico de líneas de la electricidad de aire acondicionado por m² mes a mes. antes: 76.0 kWh/m² al año (40,852 kWh). diseño de 2021: 75.5 (53,214 kWh). con la pintura blanca: 69.0 (48,649 kWh).'
      caption: "el aire acondicionado por m², mes a mes. la sucursal crece de 537 a 705 m² y gasta lo mismo por m²: 76.0 antes, 75.5 después y 69.0 con la pintura blanca."
      numbers:
        - { value: '76.0 → 75.5', unit: 'kWh/m²', label: 'de aire acondicionado al año' }
        - { value: '−9', unit: '%', label: 'con la pintura blanca' }
  method:
    - 'estado: simulado, en etapa de diseño. no se midió nada.'
    - 'modelo: reconstruido en 2026 a partir de los planos del concurso de 2021 (rhino). sitio a 7.96° n; la fachada de la calle mira al nne (19°), el vidrio de la plaza al ono (289°). vecino del lado ono: 7 m (supuesto).'
    - 'clima: tmyx de chitré (climate.onebuilding.org). lluvia: estación los santos del imhpa (128-001), a 3 km, media desde 1964.'
    - 'confort exterior: utci (pythermalcomfort) cada 0.5 m a 1.25 m de altura, de 8:00 a 17:00. sombra y vista de cielo con radiance 5.3, temperatura radiante con ladybug solarcal, viento del archivo climático (sin crédito por resguardo bajo el techo). estrés térmico fuerte: utci de 32 °C o más.'
    - 'sol sobre superficies: radiance 5.3, 145 parches de cielo, solo cielo (método de radiación incidente de ladybug), malla de 0.25 m.'
    - 'luz natural: radiance 5.3, 2 fases, 5 rebotes, malla de 0.6 m a la altura del escritorio, de 8:00 a 17:00, tvis del vidrio 0.88, sin persianas. luz natural útil: de 100 a 3,000 lx. sDA: 300 lx la mitad de las horas (no es un resultado de cumplimiento lm-83).'
    - 'energía: energyplus 24.2 con honeybee-energy 1.128, cargas ideales, aire acondicionado a 24 °C en horas de atención, electricidad = enfriamiento / cop 3.2 (supuesto). muros de bloque hueco, techo de concreto de 200 mm sin aislamiento, vidrio claro sencillo. piso: 537.4 m² antes, 705.1 m² después.'
  credits: 'concurso 2021: entrópica. simulación y gráficos: entrópica, 2026. herramientas: radiance, energyplus, ladybug tools (honeybee, ladybug), pythermalcomfort, python.'
---
