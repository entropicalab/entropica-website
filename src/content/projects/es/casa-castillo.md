---
title: casa castillo
slug: casa-castillo
locale: es
eyebrow: "// estudio de diseño bioclimático"
lede: "un parasol sobre la casa. un segundo techo 0.30 m sobre una casa de campo familiar en el arco seco de panamá le quita al techo principal 99% de la radiación solar anual y suma 450 horas en confort al año, sin aire acondicionado."
location: "los santos, panamá"
year: 2020
typology: residential
role: "simulaciones + validación de estrategias"
roleNote: "diseño: labhaus studio"
roleNoteUrl: "https://www.instagram.com/labhausstudio/"
featured: false
order: 13.5
heroImage: /projects/casa-castillo/01.jpg
heroCaption: "// ilustración con ia, basada en el modelo del estudio de 2020"
heroAlt: "ilustración con ia de casa castillo, basada en el modelo del estudio de 2020: una casa larga y baja sobre pilotes bajo un techo plano delgado, con paneles de celosía, en una ladera con pasto entre palmas y árboles"
metric:
  value: '+450'
  unit: 'h'
  label: "más horas en confort al año, sin aire acondicionado"
  note: "casa principal, confort adaptativo (ashrae 55), aire quieto, clima tmyx de santiago de veraguas. simulación por entrópica, diseño de labhaus studio."
brief: |
  casa castillo es una casa de campo familiar en el arco seco de panamá, en los santos, diseñada por labhaus studio. entrópica hizo las simulaciones y validó las estrategias del diseño, en una colaboración entre ambos estudios.

  tan cerca del ecuador el sol pasa casi por encima, así que el diseño pone un segundo techo 0.30 m sobre el primero: un parasol. probamos la casa con y sin él, y las 64 maneras de configurar los paneles corredizos de su patio.
approach: |
  el parasol le quita al techo principal 99% de la radiación solar anual, la superficie del techo deja de quemar y la casa gana 450 horas en confort al año.

  en el patio, la mejor de las 64 configuraciones deja entrar menos de la mitad del sol diurno que un patio sin paneles.
study:
  keyNumbers:
    - { value: "74%", label: "de la radiación solar directa sobre un techo plano llega desde más de 45° de altura" }
    - { value: "−99%", label: "radiación solar anual sobre el techo principal (de 1,900 a 16 kWh/m²)" }
    - { value: "−25 °C", label: "en la superficie del techo en su hora más caliente (de 60.4 a 35.2 °C)" }
    - { value: "−4.4 °C", label: "en el cielorraso a las 2 pm, promedio del año" }
    - { value: "+450 h", label: "horas en confort al año (de 3,441 a 3,891), sin aire acondicionado" }
    - { value: "418–644 kWh/m²", label: "de radiación solar diurna en el patio, de la mejor a la peor de 64 configuraciones de paneles (868 sin paneles)" }
  panels:
    - headline: "el sol se para sobre la casa"
      image: /projects/casa-castillo/casa-castillo_01_sunpath.webp
      interactive: { type: sunpath, data: /projects/casa-castillo/data/sunpath.json }
      width: 2160
      height: 2200
      alt: "diagrama de trayectoria solar en planta, con el norte arriba. las posiciones horarias del sol forman lazos en forma de ocho en el cielo, la mayoría dentro del anillo de 45°. los puntos van coloreados por temperatura del aire de 20 a 36 °C; las horas más cálidas son a inicios de la tarde, altas y hacia el oeste."
      caption: "la trayectoria anual del sol sobre el sitio, un punto por cada hora de luz, coloreado por temperatura del aire. a 7.8° norte el sol pasa casi por encima: 74% de la radiación solar directa que cae sobre un techo plano llega desde más de 45° de altura. el calor entra por el techo."
      numbers:
        - { value: "74", unit: "%", label: "de la radiación solar directa sobre un techo plano llega desde más de 45° de altura" }
    - headline: "un segundo techo, 0.30 m arriba"
      image: /projects/casa-castillo/casa-castillo_02_section.webp
      interactive:
        type: hotspots
        spots:
          - label: "parasol"
            shapes: [[[16, 35.3], [55, 35.3], [55, 37.4], [16, 37.4]]]
            body: "un segundo techo 0.30 m sobre la losa, de 8.1 × 19.3 m: 1 m más ancho que la casa en los lados este y oeste. recibe los 1,900 kWh/m² de sol al año que si no caerían sobre el techo, y el aire se mueve por la separación."
            model: "una superficie de sombra opaca, sin masa propia."
          - label: "losa de techo"
            shapes: [[[16, 37.7], [55, 37.7], [55, 39.6], [16, 39.6]]]
            body: "bajo el parasol la losa recibe 16 kWh/m² de sol al año en vez de 1,900. su cara exterior llega a 35.2 °C en vez de 60.4 °C y nunca pasa de 45 °C: sin el parasol lo hace 1,248 horas al año."
            model: "100 mm de concreto liviano, una cámara de aire y un cielorraso de placa acústica de 19 mm: un techo genérico de energyplus, igual en ambos casos."
          - label: "casa principal"
            shapes: [[[29, 39.7], [48.6, 39.7], [48.6, 51.8], [29, 51.8]]]
            body: "6.1 × 19.1 m, sin climatización y con ventilación natural: sin aire acondicionado en el modelo. con el parasol y el plénum gana 450 horas en confort al año, de 3,441 a 3,891."
          - label: "muros"
            shapes: [[[27.6, 39.2], [29.2, 39.2], [29.2, 52.1], [27.6, 52.1]], [[48.6, 39.2], [50.2, 39.2], [50.2, 52.1], [48.6, 52.1]]]
            body: "los mismos muros en ambos casos: el estudio cambia el techo y el piso, no las fachadas."
            model: "100 mm de ladrillo, 200 mm de concreto pesado, 50 mm de aislante rígido, una cámara de aire y 19 mm de yeso: un muro genérico de energyplus."
          - label: "plénum ventilado"
            shapes: [[[20.7, 52.1], [50.2, 52.1], [50.2, 54.3], [20.7, 54.3]]]
            body: "el caso de diseño además eleva el piso sobre un plénum ventilado. en un día promedio la cara interior del piso está 2.2 °C más fresca a las 2 pm. esa ganancia viene del plénum y del parasol juntos: el estudio no los corrió por separado."
            model: "un espacio de aire ventilado bajo la losa de piso, solo en el caso de diseño."
          - label: "patio"
            shapes: [[[50.4, 40.4], [88, 40.4], [88, 51.8], [50.4, 51.8]]]
            body: "8.00 × 19.10 m bajo una estructura con seis paneles corredizos: cuatro muros y dos paneles de techo. prueba cada configuración más abajo, en 08."
          - label: "el sol más bajo"
            shapes: [[[15, 66], [30, 66], [62, 80], [62, 84], [45, 82.5], [15, 73]]]
            body: "solo el sol a menos de 16.7° sobre el horizonte puede pasar bajo el alero de 1 m del parasol y llegar al techo sobre los cuartos: la luz de primera hora y de final de la tarde."
      width: 2160
      height: 2200
      alt: "corte este-oeste por la casa principal y el patio, con los elementos cortados achurados y el plénum ventilado bajo el piso. un detalle del borde oeste muestra la losa de techo, el parasol 0.30 m encima, el alero de 1.00 m y un rayo de sol a 16.7°, el sol más bajo que puede llegar al techo sobre los cuartos."
      caption: "el parasol cubre la losa de techo y su alero de 1 m, 0.30 m por encima. el aire se mueve por la separación; el sol a menos de 16.7° sobre el horizonte es el único sol directo que puede pasar por debajo y llegar al techo sobre los cuartos."
      numbers:
        - { value: "0.30", unit: "m", label: "de separación entre el techo y el parasol" }
        - { value: "16.7", unit: "°", label: "el sol más bajo que llega al techo sobre los cuartos" }
    - headline: "el sol cae en el parasol"
      image: /projects/casa-castillo/casa-castillo_03_isometrics.webp
      interactive:
        type: hotspots
        spots:
          - label: "techo principal"
            shapes: [[[16, 58.2], [30.5, 66.8], [70, 45.4], [55.5, 36.8]]]
            body: "16 kWh/m² de sol al año bajo el parasol, frente a 1,900 sin él: 99% menos."
          - label: "parasol"
            shapes: [[[16, 49.1], [54.3, 27.8], [70.3, 36.8], [32, 58.4]]]
            body: "levantado 3.5 m en este dibujo para mostrar el techo de abajo. recibe 1,900 kWh/m² de sol al año."
            model: "una superficie de sombra opaca, sin masa propia."
          - label: "muros"
            shapes: [[[18, 58.9], [46.2, 75.6], [46.2, 81.5], [18, 65.3]]]
            body: "los muros y el patio reciben el sol que deja el parasol. cada superficie va coloreada por su total anual, de pálido (menos de 200 kWh/m²) a oscuro (más de 1,600)."
          - label: "patio y casa de piscina"
            shapes: [[[58.5, 47.2], [84, 53.8], [84, 60.1], [71, 67.6], [58.5, 73.2]]]
            body: "la estructura del patio con sus paneles corredizos, y la casa de piscina. el mapa de sol del patio, configuración por configuración, está más abajo, en 08."
      width: 2160
      height: 2200
      alt: "isométrico explotado de la casa coloreado por radiación solar anual, de pálido a rojo oscuro. el parasol, levantado sobre la casa, está en rojo oscuro (1,900 kWh/m²); el techo principal debajo está pálido (16 kWh/m²). los muros y el patio quedan en medio."
      caption: "radiación solar anual sobre cada superficie, con el parasol levantado para mostrar el techo de abajo. el parasol recibe 1,900 kWh/m² al año; el techo principal debajo recibe 16, frente a 1,900 sin él."
      numbers:
        - { value: "1,900", unit: "kWh/m²·yr", label: "techo principal, sin el parasol" }
        - { value: "16", unit: "kWh/m²·yr", label: "techo principal, bajo el parasol" }
    - headline: "el techo deja de quemar"
      image: /projects/casa-castillo/casa-castillo_04_roof.webp
      interactive: { type: surface-heatmap, field: roof, data: /projects/casa-castillo/data/main-house-hourly.json, cases: ["sin el parasol", "con el parasol"] }
      width: 2160
      height: 2200
      alt: "dos gráficos hora por hora de la temperatura superficial del techo. sin el parasol: bandas rojo oscuro cada mediodía todo el año, máximo de 60.4 °C. bajo el parasol: solo colores claros, máximo de 35.2 °C."
      caption: "cada hora del año en la cara exterior del techo. sin el parasol, la losa pasa de 45 °C casi todas las tardes y llega a 60.4 °C. bajo el parasol se queda por debajo de 35.2 °C todo el año."
      numbers:
        - { value: "60.4", unit: "°C", label: "máximo del techo, sin el parasol" }
        - { value: "35.2", unit: "°C", label: "máximo del techo, bajo el parasol" }
    - headline: "el cielorraso deja de irradiar"
      image: /projects/casa-castillo/casa-castillo_05_inside.webp
      interactive: { type: average-day, data: /projects/casa-castillo/data/main-house-hourly.json, cases: ["sin el parasol", "con el parasol"], surfaces: [{ field: ceiling, label: cielorraso }, { field: floor, label: piso }] }
      width: 2160
      height: 2200
      alt: "dos gráficos de líneas de temperatura superficial interior en un día promedio. cielorraso: sin el parasol llega cerca de 37 °C a media tarde, con el parasol cerca de 32 °C. piso: sin el parasol cerca de 34 °C, con el parasol cerca de 31 °C. las líneas se juntan de noche."
      caption: "el día promedio del año, dentro de la casa principal. con el parasol, el cielorraso está 4.4 °C más fresco a las 2 pm y el piso 2.2 °C más fresco. las noches no cambian; el parasol trabaja cuando hay sol."
      numbers:
        - { value: "−4.4", unit: "°C", label: "cielorraso a las 2 pm" }
        - { value: "−2.2", unit: "°C", label: "piso a las 2 pm" }
    - headline: "y la casa gana 450 horas en confort"
      image: /projects/casa-castillo/casa-castillo_06_comfort.webp
      interactive: { type: comfort-heatmap, data: /projects/casa-castillo/data/main-house-hourly.json, cases: ["sin el parasol", "con el parasol"] }
      width: 2160
      height: 2200
      alt: "dos gráficos hora por hora de grados respecto al objetivo de confort en la casa principal. ambos muestran tardes cálidas (rojo) y noches frescas (azul); con el parasol el rojo de la tarde es más claro y más delgado. 3,441 horas en confort sin el parasol, 3,891 con el parasol."
      caption: "cada hora del año en la casa principal, frente al objetivo de confort adaptativo. el parasol le quita el filo a las tardes: de 3,441 a 3,891 horas en confort al año, sin aire acondicionado y sin contar la brisa."
      numbers:
        - { value: "3,441", unit: "h", label: "horas en confort al año, sin el parasol" }
        - { value: "3,891", unit: "h", label: "horas en confort al año, con el parasol" }
    - headline: "un patio que se puede reconfigurar"
      image: /projects/casa-castillo/casa-castillo_07_elements.webp
      interactive:
        type: hotspots
        spots:
          - label: "e5"
            shapes: [[[27.8, 63.6], [41.8, 55.7], [50.5, 60.8], [36.8, 68.5]]]
            body: "panel de techo corredizo a 5.70 m. la palanca más grande del patio: moverlo a la mitad exterior suma 139.6 kWh/m² de sol diurno al año, en promedio entre los 32 pares de configuraciones que solo difieren en este panel. mejor contra la casa."
          - label: "e6"
            shapes: [[[41.8, 55.7], [55.8, 47.6], [64.8, 52.8], [50.5, 60.8]]]
            body: "panel de techo corredizo a 5.70 m. moverlo a la mitad exterior quita 41.5 kWh/m² de sol diurno al año, en promedio entre los 32 pares de configuraciones que solo difieren en este panel. la mejor configuración lo tiene afuera."
          - label: "e1"
            shapes: [[[44.8, 64.0], [50.6, 60.9], [50.7, 67.3]]]
            body: "muro corredizo de 4.00 × 2.63 m. moverlo a la mitad exterior suma 12.5 kWh/m² de sol diurno en el patio, en promedio entre los 32 pares de configuraciones que solo difieren en este panel."
          - label: "e2"
            shapes: [[[59.8, 53.5], [64.8, 52.8], [64.8, 59.1]]]
            body: "muro corredizo de 4.00 × 2.63 m. moverlo a la mitad exterior suma 0.7 kWh/m² de sol diurno en el patio, en promedio entre los 32 pares de configuraciones que solo difieren en este panel. en la práctica casi no importa."
          - label: "e3"
            shapes: [[[62, 46.9], [70.8, 52], [70.8, 56.7], [62, 51.8]]]
            body: "muro corredizo de 4.00 × 2.63 m. moverlo a la mitad exterior quita 5.7 kWh/m² de sol diurno en el patio, en promedio entre los 32 pares de configuraciones que solo difieren en este panel. la mejor configuración lo tiene afuera."
          - label: "e4"
            shapes: [[[66.5, 41.7], [75.3, 46.8], [75.3, 53.2], [66.5, 48.1]]]
            body: "muro corredizo de 4.00 × 2.63 m. moverlo a la mitad exterior suma 10.2 kWh/m² de sol diurno en el patio, en promedio entre los 32 pares de configuraciones que solo difieren en este panel."
      width: 2160
      height: 2200
      alt: "dibujo isométrico de la casa y la estructura del patio con seis paneles numerados. los paneles rellenos muestran la posición 0, contra la casa; los contornos punteados muestran la posición 1, en la mitad exterior del patio."
      caption: "el patio tiene seis paneles corredizos: cuatro muros (e1–e4) y dos paneles de techo (e5, e6). cada uno va contra la casa o en la mitad exterior del patio, lo que da 64 configuraciones."
      numbers:
        - { value: "6", unit: "paneles", label: "cuatro muros corredizos, dos paneles de techo corredizos" }
        - { value: "64", unit: "configuraciones", label: "2 posiciones por panel" }
    - headline: "las 64 configuraciones, ordenadas por sol"
      image: /projects/casa-castillo/casa-castillo_08_configurations.webp
      interactive: { type: patio, data: /projects/casa-castillo/data/patio-64.json }
      width: 2160
      height: 2200
      alt: "cuadrícula de 64 pequeñas plantas del patio, ocho por ocho, ordenadas de menos a más sol. cada planta va coloreada de pálido a rojo oscuro según la radiación solar diurna sobre el piso, con los muros corredizos como líneas y los paneles de techo punteados. los valores van de 418 a 644 kWh/m²; la configuración de 2020, 479, está enmarcada."
      caption: "corrimos todas las configuraciones con el parasol puesto. la radiación solar diurna en el patio va de 418 a 644 kWh/m² al año, frente a 868 sin paneles. la mejor configuración solo saca e3 y e6. la configuración de 2020 (enmarcada) deja entrar 479, 15% más que la mejor, y queda en el puesto 24 de 64."
      numbers:
        - { value: "418", unit: "kWh/m²·yr", label: "mejor configuración" }
        - { value: "644", unit: "kWh/m²·yr", label: "peor configuración" }
        - { value: "479", unit: "kWh/m²·yr", label: "configuración de 2020, puesto 24 de 64" }
        - { value: "868", unit: "kWh/m²·yr", label: "sin paneles" }
  method:
    - "clima: archivo climático tmyx de santiago de veraguas (aeropuerto de cantú), la estación más cercana al sitio. sitio 7.80 n, 80.57 o."
    - "modelo: la casa principal (6.1 × 19.1 m) y la casa de piscina, sin climatización y con ventilación natural, simuladas en energyplus mediante honeybee para grasshopper."
    - "caso de diseño: la misma casa con un segundo techo 0.30 m sobre la losa de techo y su alero de 1 m, y un plénum ventilado bajo el piso."
    - "confort: modelo adaptativo de ashrae 55, banda de 90% de aceptabilidad, aire quieto. con el viento del archivo climático como velocidad del aire, como en el estudio entregado, la ganancia es de 4,296 a 4,930 h."
    - "radiación solar sobre superficies y sobre el patio: cielo acumulado (parches de tregenza, sol directo agrupado por parche, difusa isotrópica, reflectancia del suelo de 0.2) y trazado de rayos en mallas de 0.5 m. patio a 0.9 m, de 07 a 18 h."
    - "dibujos: líneas make2d de rhino del modelo de 2020; colores calculados sobre la misma geometría y vista."
    - "verificación: en 2026 volvimos a correr los modelos archivados de energyplus de 2020 (9.1) para recuperar los resultados horarios que se muestran aquí."
  credits: "diseño: labhaus studio. estudio y gráficos: entrópica. herramientas: energyplus, ladybug tools (honeybee, ladybug), rhino, python."
---
