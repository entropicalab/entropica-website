---
title: new chautauqua institute
slug: new-chautauqua-institute
locale: es
eyebrow: '// trabajo académico'
lede: "una fachada que lee la sombra de la ciudad. en singapur los vecinos dan sombra a los pisos bajos, así que las persianas se cierran a medida que el edificio sube. el sol sobre el vidrio baja 71%."
location: singapur
year: 2017
typology: mixed-use
role: proyecto en equipo, upenn arch 708
roleNote: 'josé barría, bhakti kothari, neeharika siram'
status: proyecto académico
featured: false
order: 14.5
heroImage: /projects/new-chautauqua-institute/01.jpg
heroCaption: '// visualización con ia, basada libremente en el proyecto de taller de 2017'
heroAlt: 'visualización con ia basada libremente en el new chautauqua institute: un edificio de altura media envuelto en persianas horizontales de madera, con terrazas sembradas y paneles solares en el techo, sobre una calle arbolada de singapur'
metric:
  value: '−71'
  unit: '%'
  label: de sol sobre el vidrio detrás de las persianas, en un año
  note: "proyecto académico en equipo, universidad de pensilvania, 2017. modelos reejecutados en 2026. la imagen es una visualización con ia."
brief: |
  el new chautauqua institute es un proyecto de taller de 2017 en la universidad de pensilvania, de josé barría, bhakti kothari y neeharika siram: un edificio de investigación y residencia en el centro de singapur.

  esta página sigue una idea de una versión temprana del diseño. en 2026 se volvieron a correr los modelos.
approach: |
  el último piso, por encima de los techos vecinos, recibe 2.9 veces más sol que el primero. por eso las persianas no se reparten por igual: 7 en el primer piso y 14 en el último.
study:
  keyNumbers:
    - { value: '93%', label: 'de las horas del año con estrés térmico, incluso a la sombra (utci de 26 °C o más)' }
    - { value: '35 → 74%', label: 'de horas en confort en una oficina: sombras, mejor vidrio, ventilación natural' }
    - { value: '2.9×', label: 'más sol sobre el vidrio del último piso que sobre el del primero, sin sombra' }
    - { value: '7 a 14', label: 'persianas por piso, del primero al último' }
    - { value: '−71%', label: 'de sol sobre el vidrio detrás de las persianas (de 389 a 114 kWh/m² al año)' }
    - { value: '94%', label: 'del área de piso con luz natural suficiente (sDA) detrás de las persianas' }
  panels:
    - headline: la ciudad da sombra abajo, el cielo quema arriba
      image: /projects/new-chautauqua-institute/new-chautauqua-institute_03_shadow.webp
      interactive:
        type: lines
        xLabel: piso
        yLabel: sol sobre el vidrio, sin persianas (kWh/m² al año)
        yUnit: ' kWh/m²'
        xTicks: [piso 1, piso 2, piso 3, piso 4, piso 5]
        series:
          - { label: sin persianas, points: [[1, 208.2], [2, 271.0], [3, 360.9], [4, 502.6], [5, 602.6]] }
      width: 2160
      height: 2200
      alt: 'gráfico de líneas del sol anual sobre el vidrio de cada piso sin persianas: 208, 271, 361, 503 y 603 kWh/m² del primer piso al quinto.'
      caption: "el sol de un año sobre el vidrio de cada piso, sin persianas. el primero recibe 208 kWh/m²; el último, por encima de los vecinos, 603."
      numbers:
        - { value: '208', unit: 'kWh/m²·año', label: 'primer piso, sin persianas' }
        - { value: '603', unit: 'kWh/m²·año', label: 'último piso, sin persianas' }
    - headline: persianas que se cierran con la altura
      image: /projects/new-chautauqua-institute/new-chautauqua-institute_04_barcode.webp
      interactive:
        type: bars
        yLabel: persianas por piso
        decimals: 0
        change: false
        categories:
          - { label: piso 1, sub: 208 kWh/m², note: 'una persiana más va debajo del primer piso: 50 en total' }
          - { label: piso 2, sub: 271 kWh/m² }
          - { label: piso 3, sub: 361 kWh/m² }
          - { label: piso 4, sub: 503 kWh/m² }
          - { label: piso 5, sub: 603 kWh/m² }
        bars:
          - { label: como se dibujaron en 2017, values: [7, 7, 10, 11, 14] }
          - { label: en proporción al sol, values: [5, 7, 9, 13, 15] }
      width: 2160
      height: 2200
      alt: 'gráfico de barras de persianas por piso, como se dibujaron en 2017 (7, 7, 10, 11, 14) y en proporción al sol de cada piso (5, 7, 9, 13, 15).'
      caption: "cuántas persianas lleva cada piso, como se dibujaron en 2017 y repartidas según el sol. se parecen mucho. una más va debajo del primer piso: 50 en total."
      numbers:
        - { value: '7 a 14', unit: '', label: 'persianas por piso, como se dibujaron' }
        - { value: '5 a 15', unit: '', label: 'persianas por piso, en proporción al sol' }
    - headline: las mismas persianas, puestas según el sol
      image: /projects/new-chautauqua-institute/new-chautauqua-institute_05_trade.webp
      interactive:
        type: lines
        xLabel: piso
        yLabel: sol sobre el vidrio detrás de las persianas (kWh/m² al año)
        yUnit: ' kWh/m²'
        xTicks: [piso 1, piso 2, piso 3, piso 4, piso 5]
        series:
          - { label: espaciado parejo, points: [[1, 24.7], [2, 41.4], [3, 70.7], [4, 139.0], [5, 220.6]] }
          - { label: espaciado de 2017, points: [[1, 62.2], [2, 69.3], [3, 103.6], [4, 151.5], [5, 182.6]] }
      width: 2160
      height: 2200
      alt: 'gráfico de líneas del sol anual sobre el vidrio de cada piso detrás de las mismas 50 persianas, con espaciado parejo (25, 41, 71, 139, 221 kWh/m²) y con el espaciado de 2017 (62, 69, 104, 151, 183).'
      caption: "las mismas 50 persianas, con el espaciado de 2017 o parejo. el de 2017 le quita 17% de sol al último piso y deja más luz abajo, donde la ciudad ya da sombra."
      numbers:
        - { value: '−17', unit: '%', label: 'de sol en el último piso' }
        - { value: '62 vs 25', unit: 'kWh/m²·año', label: 'primer piso, 2017 contra parejo' }
    - headline: menos deslumbramiento, casi la misma luz
      image: /projects/new-chautauqua-institute/new-chautauqua-institute_06_daylight.webp
      interactive:
        type: bars
        yLabel: área de piso con luz natural suficiente, sDA (%)
        yUnit: '%'
        decimals: 0
        categories:
          - { label: piso 1, note: 'horas con exceso de luz: 13.7% sin persianas · 5.5% 2017 · 0.5% parejo' }
          - { label: piso 2, note: 'horas con exceso de luz: 17.0% sin persianas · 4.6% 2017 · 1.2% parejo' }
          - { label: piso 3, note: 'horas con exceso de luz: 22.1% sin persianas · 7.3% 2017 · 3.5% parejo' }
          - { label: piso 4, note: 'horas con exceso de luz: 30.9% sin persianas · 12.2% 2017 · 9.3% parejo' }
          - { label: piso 5, note: 'horas con exceso de luz: 36.7% sin persianas · 9.9% 2017 · 17.6% parejo' }
        bars:
          - { label: sin persianas, values: [96.69, 99.26, 100, 100, 100] }
          - { label: persianas de 2017, values: [81.99, 89.34, 98.90, 100, 100] }
          - { label: persianas parejas, values: [74.82, 85.29, 99.08, 100, 100] }
      width: 2160
      height: 2200
      alt: 'gráfico de barras del área de piso con luz natural suficiente (sDA) por piso, sin persianas, con las persianas de 2017 y con persianas parejas. piso 1: 97, 82 y 75%; pisos 3 a 5 cerca de 100% en todos los casos.'
      caption: "luz natural en cada piso. con las persianas de 2017, 94% del piso tiene luz suficiente (99% sin persianas), y el exceso de luz en el último piso baja de 37% a 10% de las horas."
      numbers:
        - { value: '94', unit: '%', label: 'del área de piso con luz natural suficiente, persianas de 2017' }
        - { value: '37 → 10', unit: '%', label: 'horas con exceso de luz en el último piso' }
  method:
    - 'clima: archivo climático iwec de singapur (changi, 1.37° n). utci a la sombra con la temperatura radiante media igual a la del aire; estrés térmico = utci de 26 °C o más.'
    - 'escalera de la oficina: la oficina de energyplus archivada en 2017 (7 × 12 × 4 m, vidrio al sur, sin climatización), reejecutada en energyplus 9.1 para las 8,760 horas; confort adaptativo (ashrae 55, 90%), aire quieto. las láminas de 2017 usaban el viento del archivo climático en el interior y una semana de junio, así que se leen distinto. mejor vidrio: valores de ashrae 189.1, zona 1 (supuestos).'
    - 'edificio: una versión temprana del diseño de 2017, una caja de 25.0 × 51.5 m con cinco pisos sobre una planta baja abierta, envuelta en 50 persianas horizontales de 0.30 m de profundidad (49 en los pisos 1 a 5, una debajo del primer piso), sobre el modelo de sitio de 2017 con sus vecinos. vidrio supuesto de piso a techo en la cara interior de las columnas.'
    - 'sol sobre el vidrio: radiance (rcontrib), cielo perez acumulado en 145 parches del archivo climático, con el contexto, sin reflexión del suelo. el caso parejo mueve las mismas 50 persianas a un espaciado igual.'
    - 'luz natural: coeficientes de luz natural de radiance en dos fases (cielo de 577 parches, 6 rebotes), plano de trabajo a 0.75 m en una malla de 1.5 m, de 8 a 18 h. sDA = parte del área de piso con 300 lx o más la mitad de las horas. exceso de luz = más de 3,000 lx. supuestos: transmitancia visible del vidrio 0.60, pisos abiertos sin núcleo, reflectancias 0.2 piso, 0.5 muros, 0.8 cielo raso.'
    - 'norte: como en el modelo de sitio de 2017; el lote real corre cerca de n30e.'
  credits: 'equipo: josé barría, bhakti kothari, neeharika siram. críticos: william braham, mostapha sadeghipour roudsari. taller arch 708 de diseño ambiental de edificios, universidad de pensilvania, primavera de 2017. reejecución de 2026 y gráficos: josé barría. un proyecto académico, no un encargo de entrópica. la imagen principal es una visualización con ia.'
---
