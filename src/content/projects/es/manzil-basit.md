---
title: manzil basit
slug: manzil-basit
locale: es
eyebrow: '// estudio de estrategias pasivas'
lede: "¿qué enfría una habitación en el desierto? antes de diseñar esta casa en abu dabi, probamos seis estrategias en una sola habitación. sin aire acondicionado, pasó de estar cómoda 20% del año a 67%."
location: abu dabi, emiratos árabes unidos
year: 2020
typology: residential
role: estudio de estrategias pasivas + simulación de desempeño
roleNote: cliente privado
status: concepto
featured: false
order: 13
heroImage: /projects/manzil-basit/01.jpg
heroCaption: '// visualización con ia, basada en el diseño conceptual del cliente'
heroAlt: 'visualización con ia de manzil basit, abu dabi, basada en el diseño conceptual del cliente: dos volúmenes bajo sombras de techo flotantes, con celosías perforadas sobre el vidrio'
metric:
  value: '3.4'
  unit: '×'
  label: más horas en confort al año, misma habitación, sin aire acondicionado
  note: "simulado con el clima de abu dabi. las imágenes de la casa son visualizaciones con ia basadas en el diseño conceptual del cliente."
brief: |
  manzil basit, "casa simple" en árabe, es una casa privada en abu dabi. afuera, la mitad del año hay estrés térmico, incluso a la sombra.

  antes de diseñar, probamos una habitación de 6 × 9 × 3 m con seis estrategias, una después de otra.
approach: |
  lo que más ayudó fue el aire y el agua: ventilar, mover el aire y enfriar con agua. bloquear el sol aportó la mitad de eso.

  esas ideas no salen en una foto. por eso el estudio se hizo antes del diseño.
study:
  keyNumbers:
    - { value: '3.4×', label: 'más horas en confort al año, misma habitación, sin aire acondicionado' }
    - { value: '19.72 → 66.67%', label: 'parte del año dentro de la banda de confort adaptativo, de la habitación base a la final' }
    - { value: '64%', label: 'de la ganancia viene del aire y del agua (ventilación, movimiento de aire percibido, enfriamiento evaporativo)' }
    - { value: '32%', label: 'de la ganancia viene de bloquear el sol (sombra en ventanas, doble techo)' }
    - { value: '14 °C', label: 'de enfriamiento mediano disponible al evaporar agua en las horas sobre 35 °C' }
  figure:
    src: /projects/manzil-basit/02.jpg
    alt: 'visualización con ia de manzil basit, basada en el diseño conceptual del cliente: una esquina de la casa con celosías perforadas sobre el vidrio, sombras de techo profundas y un volumen de entrada revestido en piedra'
    tag: '// visualización con ia, basada en el diseño conceptual del cliente'
  panels:
    - headline: el aire es caliente, pero seco
      image: /projects/manzil-basit/manzil-basit_01_climate.webp
      interactive: { type: climate-heatmap, data: /projects/manzil-basit/data/room-hourly.json }
      width: 2160
      height: 2200
      alt: 'dos gráficos hora por hora del año en abu dabi. arriba: temperatura percibida a la sombra (utci), con estrés térmico en 50% de las horas, más fuerte de mayo a septiembre por la tarde. abajo: enfriamiento disponible al evaporar agua, hasta 25 °C al mediodía.'
      caption: "cada hora del año en abu dabi. afuera hace calor, pero el aire es seco: en las horas de más de 35 °C, el agua al evaporarse puede enfriarlo 14 °C."
      numbers:
        - { value: '14', unit: '°C', label: 'depresión de bulbo húmedo mediana en las horas sobre 35 °C' }
        - { value: '50', unit: '%', label: 'del año con estrés térmico afuera, a la sombra' }
    - headline: seis estrategias, en orden
      image: /projects/manzil-basit/manzil-basit_02_ladder.webp
      width: 2160
      height: 2200
      alt: 'gráfico escalonado de horas en confort, de 19.72% (habitación base) a 66.67% (habitación final). pasos: orientación +1.04, sombra en ventanas +6.38, doble techo +8.73, intercambio de aire +2.30, movimiento de aire percibido +11.03, enfriamiento evaporativo +17.47 puntos porcentuales. los pasos de aire y agua van en ámbar (64% de la ganancia); los que bloquean el sol, en arena (32%).'
      caption: "cada barra suma una estrategia a la habitación. el enfriamiento con agua aporta más (+17.47 puntos) y la orientación casi nada (+1.04). la habitación termina cómoda 66.67% del año."
      numbers:
        - { value: '+17.47', unit: 'pts', label: 'enfriamiento evaporativo' }
        - { value: '+11.03', unit: 'pts', label: 'movimiento de aire percibido' }
        - { value: '+8.73', unit: 'pts', label: 'doble techo' }
        - { value: '+6.38', unit: 'pts', label: 'sombra en ventanas' }
        - { value: '+2.30', unit: 'pts', label: 'intercambio de aire' }
        - { value: '+1.04', unit: 'pts', label: 'orientación' }
    - headline: cada hora del año, antes y después
      image: /projects/manzil-basit/manzil-basit_03_year.webp
      interactive: { type: comfort-heatmap, data: /projects/manzil-basit/data/room-hourly.json, cases: ["habitación base", "habitación final"] }
      width: 2160
      height: 2200
      alt: 'dos gráficos hora por hora de grados respecto al objetivo de confort. habitación base: rojo oscuro (demasiado calor) casi todas las tardes de marzo a noviembre, 1,721 horas en confort. habitación final: casi todo en arena (confort), rojo claro en las tardes de verano, azul (demasiado frío) en las mañanas de invierno, 5,819 horas en confort.'
      caption: "cada hora del año, antes y después. la habitación base pasa casi todas las tardes con demasiado calor; la final está cómoda la mayor parte del año. ahora algunas mañanas de invierno quedan frescas."
      numbers:
        - { value: '1,721', unit: 'h', label: 'horas en confort al año, habitación base' }
        - { value: '5,819', unit: 'h', label: 'horas en confort al año, habitación final' }
    - headline: con la habitación ventilada, más vidrio no aporta nada
      image: /projects/manzil-basit/manzil-basit_05_window.webp
      interactive: { type: lines, series: [{ label: "", points: [[30, 49.20], [45, 47.83], [50, 47.48], [65, 47.08], [80, 46.13]] }], xLabel: "proporción de ventana en muro", yLabel: "horas en confort al año", xUnit: "%", yUnit: "%", chosen: [30, 49.20] }
      width: 2160
      height: 2200
      alt: 'gráfico de líneas de horas en confort según la proporción de ventana en muro: 49.2% con 30%, 47.8% con 45%, 47.5% con 50%, 47.1% con 65% y 46.1% con 80%. la línea es casi plana.'
      caption: "con la habitación ventilada, pasar de 30% a 80% de vidrio casi no cambia el confort (−3.07 puntos). el vidrio se puede elegir por la vista y la luz. nos quedamos con 30%."
      numbers:
        - { value: '−3.07', unit: 'pts', label: 'de 30% a 80% de vidrio' }
        - { value: '49.20', unit: '%', label: 'elegido: 30% de vidrio' }
  method:
    - 'clima: aeropuerto internacional de abu dabi, archivo climático iwec (8,760 horas).'
    - 'modelo: una habitación de 6 × 9 × 3 m sin climatización (muros de concreto pesado, vidrio claro sencillo, 40% de acristalamiento al inicio), simulada en energyplus mediante honeybee para grasshopper.'
    - 'confort: modelo adaptativo de ashrae 55, banda de 90% de aceptabilidad (±2.5 °C alrededor del objetivo), temperatura exterior media mensual.'
    - 'los pasos son acumulativos: cada estrategia se suma al mejor caso del paso anterior.'
    - 'la ventilación se muestra en dos partes: intercambio de aire (la habitación con el aire quieto) y movimiento de aire percibido (la banda de confort ampliada por la velocidad del aire; el estudio usó la velocidad del viento del archivo climático).'
    - 'enfriamiento evaporativo: 80% de eficiencia contra la temperatura de bulbo húmedo exterior, aplicado cuando el aire de la habitación supera 29 °C. este paso incluye además +0.59 pts de una envolvente mejorada (ashrae 189.1).'
    - 'verificación: en 2026 volvimos a correr los modelos archivados de 2020 (energyplus 9.1). los resultados coinciden con el estudio entregado con una diferencia de menos de 0.3 pts.'
  credits: 'estudio y gráficos: entrópica. herramientas: energyplus, ladybug tools (honeybee, ladybug), python.'
---
