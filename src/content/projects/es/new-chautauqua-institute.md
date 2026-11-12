---
title: new chautauqua institute
slug: new-chautauqua-institute
locale: es
eyebrow: '// trabajo académico'
lede: 'una fachada que lee la sombra de la ciudad. en la densa singapur los vecinos dan sombra a los pisos bajos, así que las persianas se cierran a medida que el edificio sube: reducen 71% el sol sobre el vidrio y mantienen luz natural suficiente en 94% del área de piso.'
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
  note: 'proyecto académico en equipo, universidad de pensilvania, taller arch 708 de diseño ambiental de edificios, 2017. modelos de archivo reejecutados en 2026: radiance y energyplus, clima iwec de singapur. la imagen es una visualización con ia.'
brief: |
  el new chautauqua institute es un proyecto de taller de 2017 para un edificio de
  investigación y residencia sobre un estacionamiento en el centro de singapur, de josé
  barría, bhakti kothari y neeharika siram, en el taller de diseño ambiental de edificios
  de la universidad de pensilvania.

  esta página sigue una idea de una versión temprana del diseño: una jaula de persianas
  horizontales que se cierra a medida que el edificio sale de la sombra de sus vecinos. en
  2026 se reejecutaron los modelos de archivo y se recalculó cada número de esta página.
approach: |
  singapur es caliente y húmeda todo el año, y la calle nunca está fresca, así que la
  sombra y el aire en movimiento son las herramientas. una oficina mostró el orden: primero
  la sombra, luego un mejor vidrio, luego la ventilación natural.

  en el edificio, la ciudad ya da sombra a los pisos bajos. el último piso, por encima de
  los techos vecinos de 20 m, recibe 2.9 veces más sol en su vidrio que el primero. por eso
  las persianas no se reparten por igual: 7 en el primer piso, 14 en el último.
study:
  keyNumbers:
    - { value: '93%', label: 'de las horas del año con estrés térmico, incluso a la sombra (utci de 26 °C o más)' }
    - { value: '35 → 74%', label: 'de horas en confort en una oficina: sombras, mejor vidrio, ventilación natural' }
    - { value: '2.9×', label: 'más sol sobre el vidrio del último piso que sobre el del primero, sin sombra' }
    - { value: '7 a 14', label: 'persianas por piso, del primero al último' }
    - { value: '−71%', label: 'de sol sobre el vidrio detrás de las persianas (de 389 a 114 kWh/m² al año)' }
    - { value: '94%', label: 'del área de piso con luz natural suficiente (sDA) detrás de las persianas' }
  panels:
    - headline: caliente y húmedo, todo el año
      image: /projects/new-chautauqua-institute/new-chautauqua-institute_01_climate.webp
      interactive: { type: heat-heatmap, data: /projects/new-chautauqua-institute/data/climate-hourly.json }
      width: 2160
      height: 2200
      alt: 'gráficos hora por hora del año en singapur: la temperatura del aire, cálida todas las tardes y casi sin cambio entre meses; y la temperatura sentida a la sombra (utci), casi todas las horas con estrés térmico moderado.'
      caption: 'cada hora del año en singapur. el aire promedia 27.5 °C y 84% de humedad, casi sin estaciones. a la sombra, 93% de las horas tienen estrés térmico: la calle nunca está fresca, así que la sombra y el aire en movimiento son las herramientas.'
      numbers:
        - { value: '27.5', unit: '°C', label: 'temperatura media del aire' }
        - { value: '93', unit: '%', label: 'de las horas con estrés térmico a la sombra' }
    - headline: primero la sombra, luego el vidrio, luego el aire
      image: /projects/new-chautauqua-institute/new-chautauqua-institute_02_ladder.webp
      interactive: { type: comfort-heatmap, data: /projects/new-chautauqua-institute/data/room-hourly.json, cases: ['la oficina original', 'sombras, vidrio y aire'] }
      width: 2160
      height: 2200
      alt: 'gráficos hora por hora de una oficina, original y con sombras, mejor vidrio y ventilación natural. la franja de calor del mediodía se reduce: de 3,064 a 6,519 horas en confort.'
      caption: 'una oficina, el mismo clima, un cambio a la vez. la oficina original está en confort 35% del año. las sombras la llevan a 52%, un mejor vidrio a 57% y la ventilación natural a 74%. el gráfico compara el primer paso con el último.'
      numbers:
        - { value: '35', unit: '%', label: 'la oficina original' }
        - { value: '52', unit: '%', label: '+ sombras' }
        - { value: '57', unit: '%', label: '+ mejor vidrio' }
        - { value: '74', unit: '%', label: '+ ventilación natural' }
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
      caption: 'sol anual sobre el vidrio de la caja sin persianas, del primer piso al último. el primer piso recibe 208 kWh/m²; el último, por encima de los techos vecinos de 20 m, recibe 603: 2.9 veces más. la fachada no necesita la misma sombra a cada altura.'
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
      caption: 'las persianas de 2017 y cuántas recibe cada piso: 7, 7, 10, 11, 14, más una debajo del primer piso (50 en total). repartir las 49 persianas de los pisos 1 a 5 en proporción al sol de cada piso da 5, 7, 9, 13, 15. el espaciado de 2017 sigue de cerca al sol. debajo de cada piso: su sol sin persianas.'
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
      caption: 'las mismas 50 persianas, con el espaciado de 2017 o parejo. con el de 2017 el último piso recibe 17% menos sol (183 contra 221 kWh/m²), y los pisos bajos, ya sombreados por la ciudad, reciben más sol y más luz natural (62 contra 25 en el primer piso). en toda la fachada el espaciado de 2017 deja entrar un poco más de sol (114 contra 99): mueve la sombra, no la aumenta.'
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
      caption: 'luz natural en cada piso sin persianas, con persianas parejas y con las de 2017. con las persianas de 2017, 94% del área de piso recibe luz natural suficiente (sin persianas: 99%). el primer piso conserva 82% contra 75% con espaciado parejo, y las horas con exceso de luz en el último piso bajan de 37% a 10%.'
      numbers:
        - { value: '94', unit: '%', label: 'del área de piso con luz natural suficiente, persianas de 2017' }
        - { value: '37 → 10', unit: '%', label: 'horas con exceso de luz en el último piso' }
    - headline: el sol se queda en las persianas
      image: /projects/new-chautauqua-institute/new-chautauqua-institute_07_street.webp
      width: 2160
      height: 2200
      alt: 'perspectiva a nivel de calle de una caja elevada de cinco pisos envuelta en persianas horizontales. el vidrio detrás de las persianas muestra franjas rojas pálidas del sol anual. las guías marcan el último piso (183 kWh/m² al año) y el primero (62).'
      caption: 'la caja desde la esquina noreste, con el sol anual calculado sobre el vidrio detrás de las persianas desde la misma cámara. 389 kWh/m² al año sobre el vidrio sin protección pasan a 114: 62 en el primer piso y 183 en el último.'
      numbers:
        - { value: '−71', unit: '%', label: 'de sol sobre el vidrio detrás de las persianas' }
  method:
    - 'clima: archivo climático iwec de singapur (changi, 1.37° n). utci a la sombra con la temperatura radiante media igual a la del aire; estrés térmico = utci de 26 °C o más.'
    - 'escalera de la oficina: la oficina de energyplus archivada en 2017 (7 × 12 × 4 m, vidrio al sur, sin climatización), reejecutada en energyplus 9.1 para las 8,760 horas; confort adaptativo (ashrae 55, 90%), aire quieto. las láminas de 2017 usaban el viento del archivo climático en el interior y una semana de junio, así que se leen distinto. mejor vidrio: valores de ashrae 189.1, zona 1 (supuestos).'
    - 'edificio: una versión temprana del diseño de 2017, una caja de 25.0 × 51.5 m con cinco pisos sobre una planta baja abierta, envuelta en 50 persianas horizontales de 0.30 m de profundidad (49 en los pisos 1 a 5, una debajo del primer piso), sobre el modelo de sitio de 2017 con sus vecinos. vidrio supuesto de piso a techo en la cara interior de las columnas.'
    - 'sol sobre el vidrio: radiance (rcontrib), cielo perez acumulado en 145 parches del archivo climático, con el contexto, sin reflexión del suelo. el caso parejo mueve las mismas 50 persianas a un espaciado igual.'
    - 'luz natural: coeficientes de luz natural de radiance en dos fases (cielo de 577 parches, 6 rebotes), plano de trabajo a 0.75 m en una malla de 1.5 m, de 8 a 18 h. sDA = parte del área de piso con 300 lx o más la mitad de las horas. exceso de luz = más de 3,000 lx. supuestos: transmitancia visible del vidrio 0.60, pisos abiertos sin núcleo, reflectancias 0.2 piso, 0.5 muros, 0.8 cielo raso.'
    - 'norte: como en el modelo de sitio de 2017; el lote real corre cerca de n30e.'
  credits: 'equipo: josé barría, bhakti kothari, neeharika siram. críticos: william braham, mostapha sadeghipour roudsari. taller arch 708 de diseño ambiental de edificios, universidad de pensilvania, primavera de 2017. reejecución de 2026 y gráficos: josé barría. un proyecto académico, no un encargo de entrópica. la imagen principal es una visualización con ia.'
---
