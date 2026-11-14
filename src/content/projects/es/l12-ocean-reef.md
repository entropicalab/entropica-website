---
title: l12 ocean reef
slug: l12-ocean-reef
locale: es
eyebrow: '// estudio de vidrios'
lede: "¿qué vidrio vale la pena pagar? simulamos esta casa en panamá con los tres vidrios que ofreció el proveedor. el vidrio doble deja entrar la mitad del calor y baja 10% la electricidad del aire acondicionado."
location: ocean reef, panamá
year: 2023
typology: residential
role: estudio de vidrios + simulación de desempeño
roleNote: 'arquitectura: forza creativa'
status: no construido
featured: false
order: 12.5
metric:
  value: '−46'
  unit: '%'
  label: de calor por el vidrio en un año, de vidrio sencillo a la mezcla optimizada
  note: "simulado con el clima de tocumen, reejecutado en 2026. arquitectura de forza creativa, estudio de entrópica."
brief: |
  l12 ocean reef es una casa de tres pisos en panamá con 173 m² de vidrio. el proveedor, profil 2000 / metra, ofreció tres opciones: vidrio sencillo, vidrio doble selectivo y el mismo vidrio doble con una capa acústica.
approach: |
  la respuesta fue una mezcla: vidrio acústico en las áreas sociales y la suite principal, vidrio doble en las recámaras y sencillo en la cocina y el servicio. la mezcla logra 91% del ahorro de poner vidrio doble en toda la casa.

  el vidrio acústico aísla del calor igual que el doble. lo que se paga de más es silencio.
study:
  keyNumbers:
    - { value: '−46%', label: 'de calor por el vidrio en un año, de vidrio sencillo a la mezcla optimizada' }
    - { value: '−10%', label: 'de electricidad del aire acondicionado, familia de dos (de 19,849 a 17,870 kWh al año)' }
    - { value: '1,979 kWh', label: 'menos de electricidad del aire acondicionado al año, familia de dos' }
    - { value: '+6.2 pts', label: 'de horas en confort sin aire acondicionado, toda la casa' }
    - { value: '91%', label: 'del ahorro del vidrio doble en toda la casa, con vidrio sencillo solo en las áreas de servicio' }
    - { value: '6 dB', label: 'más de aislamiento acústico con el vidrio acústico, con el mismo resultado térmico' }
  panels:
    - headline: la mitad del calor por el vidrio
      image: /projects/l12-ocean-reef/l12-ocean-reef_01_glass.webp
      interactive:
        type: bars
        yLabel: calor que entra por el vidrio (MWh al año)
        yUnit: MWh
        categories:
          - { label: norte, sub: 25 m² }
          - { label: este, sub: 50 m², note: '50 m² de vidrio. la mezcla deja vidrio sencillo en algunas áreas de servicio de este lado: 18.3 MWh, contra 16.8 con vidrio doble en toda la casa' }
          - { label: sur, sub: 69 m² }
          - { label: oeste, sub: 29 m², note: '29 m² de vidrio. la mezcla deja vidrio sencillo en algunas áreas de servicio de este lado: 9.1 MWh, contra 5.9 con vidrio doble en toda la casa' }
        bars:
          - { label: vidrio sencillo en toda la casa, values: [7.1, 35.8, 17.6, 12.6] }
          - { label: mezcla optimizada, values: [3.5, 18.3, 8.9, 9.1] }
      width: 2160
      height: 2200
      alt: 'gráfico de barras del calor que entra por el vidrio en cada fachada, vidrio sencillo contra la mezcla optimizada. norte: de 7.1 a 3.5 MWh (25 m² de vidrio); este: de 35.8 a 18.3 MWh (50 m² de vidrio); sur: de 17.6 a 8.9 MWh (69 m² de vidrio); oeste: de 12.6 a 9.1 MWh (29 m² de vidrio).'
      caption: "el calor que entra por el vidrio en un año, por fachada. con la mezcla baja de 73.1 a 39.8 MWh. la fachada este es la que más gana."
      numbers:
        - { value: '−46', unit: '%', label: 'de calor por el vidrio' }
        - { value: '73.1 → 39.8', unit: 'MWh', label: 'al año, todas las ventanas' }
    - headline: una décima menos de aire acondicionado
      image: /projects/l12-ocean-reef/l12-ocean-reef_02_ac.webp
      interactive:
        type: lines
        xLabel: mes
        yLabel: electricidad del aire acondicionado, familia de dos
        yUnit: ' kWh'
        xTicks: [ene, feb, mar, abr, may, jun, jul, ago, sep, oct, nov, dic]
        series:
          - { label: vidrio sencillo en toda la casa, points: [[1, 1590.5], [2, 1536.3], [3, 1783.8], [4, 1966.9], [5, 1781.1], [6, 1600.7], [7, 1873.8], [8, 1659.5], [9, 1590.7], [10, 1550.4], [11, 1358.9], [12, 1556.8]] }
          - { label: mezcla optimizada, points: [[1, 1400.9], [2, 1338.8], [3, 1552.5], [4, 1748.9], [5, 1616.6], [6, 1469.7], [7, 1719.9], [8, 1523.4], [9, 1455.1], [10, 1411.3], [11, 1235.3], [12, 1397.8]] }
      width: 2160
      height: 2200
      alt: 'gráfico de líneas de la electricidad del aire acondicionado mes a mes, vidrio sencillo contra la mezcla optimizada. la mezcla está por debajo todos los meses. año: 19,849 y 17,870 kWh.'
      caption: "la electricidad del aire acondicionado mes a mes, para una familia de dos. la mezcla gasta menos todos los meses: de 19,849 a 17,870 kWh al año. el vidrio es solo una de las fuentes de calor."
      numbers:
        - { value: '−10', unit: '%', label: 'de electricidad del aire acondicionado, familia de dos' }
        - { value: '1,979', unit: 'kWh', label: 'menos al año' }
        - { value: '−9.5', unit: '%', label: 'con la casa llena' }
    - headline: habitación por habitación
      image: /projects/l12-ocean-reef/l12-ocean-reef_04_rooms.webp
      interactive:
        type: dumbbell
        cases: ['vidrio sencillo', 'mezcla optimizada']
        xLabel: horas en confort sin aire acondicionado (% del año)
        xUnit: '%'
        rows:
          - { label: atrio / escalera, a: 83.62, b: 94.65, note: 'set 1 en la mezcla · 27.9 m² de vidrio · 130.3 m² de piso' }
          - { label: sala / comedor, a: 82.85, b: 94.16, note: 'set 1 en la mezcla · 21.1 m² de vidrio · 34.6 m² de piso' }
          - { label: cocina, a: 91.74, b: 93.38, note: 'set 3 (sencillo) en la mezcla · 3.1 m² de vidrio · 34.8 m² de piso' }
          - { label: 'visitas, planta baja', a: 82.31, b: 89.03, note: 'set 2 en la mezcla · 1.9 m² de vidrio · 14.6 m² de piso' }
          - { label: recámara 3, a: 84.35, b: 87.90, note: 'set 2 en la mezcla · 5.4 m² de vidrio · 29.2 m² de piso' }
          - { label: recámara principal, a: 78.84, b: 85.59, note: 'set 1 en la mezcla · 11.6 m² de vidrio · 33.0 m² de piso' }
          - { label: recámara 2, a: 80.31, b: 84.03, note: 'set 2 en la mezcla · 5.4 m² de vidrio · 26.3 m² de piso' }
          - { label: recámara 1, a: 78.55, b: 83.38, note: 'set 2 en la mezcla · 8.2 m² de vidrio · 25.2 m² de piso' }
          - { label: 'visitas, último piso', a: 69.68, b: 74.60, note: 'set 2 en la mezcla · 6.2 m² de vidrio · 16.8 m² de piso' }
          - { label: estudio / oficina, a: 68.74, b: 72.11, note: 'set 2 en la mezcla · 21.7 m² de vidrio · 156.8 m² de piso' }
          - { label: gimnasio, a: 64.92, b: 70.14, note: 'set 2 en la mezcla · 25.6 m² de vidrio · 54.6 m² de piso' }
      width: 2160
      height: 2200
      alt: 'gráfico de puntos de las horas en confort por habitación sin aire acondicionado, vidrio sencillo contra la mezcla optimizada. sala / comedor: de 82.8 a 94.2%; cocina: de 91.7 a 93.4%; atrio / escalera: de 83.6 a 94.7%; visitas, planta baja: de 82.3 a 89.0%; recámara 1: de 78.5 a 83.4%; recámara 2: de 80.3 a 84.0%; recámara 3: de 84.3 a 87.9%; recámara principal: de 78.8 a 85.6%; visitas, último piso: de 69.7 a 74.6%; estudio / oficina: de 68.7 a 72.1%; gimnasio: de 64.9 a 70.1%.'
      caption: "horas cómodas sin aire acondicionado, habitación por habitación. las que tienen más vidrio son las que más ganan: la sala, 11.3 puntos."
      numbers:
        - { value: '+6.2', unit: 'pts', label: 'toda la casa' }
        - { value: '+11.3', unit: 'pts', label: 'sala / comedor' }
    - headline: dónde va cada vidrio
      image: /projects/l12-ocean-reef/l12-ocean-reef_05_sets.webp
      interactive:
        type: bars
        yLabel: área de vidrio en la mezcla optimizada (m²)
        yUnit: m²
        categories:
          - { label: set 1, sub: doble acústico, note: 'ug 1.1 W/m²K · g 0.40 · rw 43 dB. áreas sociales y suite principal' }
          - { label: set 2, sub: doble, note: 'ug 1.1 W/m²K · g 0.40 · rw 37 dB. recámaras, estudio y gimnasio' }
          - { label: set 3, sub: sencillo, note: 'ug 5.6 W/m²K · g 0.84 · rw 32 dB. cocina, lavandería y áreas de servicio' }
        bars:
          - { label: '', values: [74.1, 79.8, 18.9] }
      width: 2160
      height: 2200
      alt: 'gráfico de barras del área de vidrio en la mezcla optimizada: set 1 74 m², set 2 80 m², set 3 19 m². set 1: ug 1.1, g 0.40, rw 43 dB; set 2: ug 1.1, g 0.40, rw 37 dB; set 3: ug 5.6, g 0.84, rw 32 dB.'
      caption: "dónde va cada vidrio en la mezcla. los sets 1 y 2 aíslan igual del calor; el 1 suma 6 dB de silencio."
      numbers:
        - { value: '91', unit: '%', label: 'del ahorro del vidrio doble en toda la casa' }
        - { value: '6', unit: 'dB', label: 'set 1 contra set 2, mismo calor' }
  method:
    - 'modelo: la casa como se diseñó en 2023: 30 espacios, 173 m² de vidrio en 29 ventanas reales, las persianas y las celosías. energyplus 24.2 con honeybee (reejecución de 2026).'
    - 'vidrio: valores de la ficha del proveedor (profil 2000 / metra) al centro del vidrio (sets 1 y 2: ug 1.1 W/m²K, g 0.40; set 3: ug 5.6 W/m²K, g 0.84). los marcos no se modelaron.'
    - 'muros: bloque hueco con fachada ventilada (planta baja) o eifs (pisos altos). techo: losa de concreto sin aislamiento. suelo a la temperatura del terreno del archivo climático.'
    - 'aire acondicionado: familia de dos, a 24 °C solo donde y cuando están. electricidad = carga de enfriamiento / cop 3.2 (supuesto, igual en todos los casos). casa llena (10 personas) como control.'
    - 'confort: la misma casa sin aire acondicionado, con la mitad de cada ventana abierta cuando adentro hay más de 24 °C y afuera menos de 32 °C. ashrae 55 adaptativo, límites de 80% (± 3.5 °C), aire quieto.'
    - 'clima: año típico de tocumen 787920.'
    - 'control: en 2026 revisamos el estudio de 2023. el modelo de 2023 usaba vidrios de biblioteca, ventanas genéricas y el viento del aeropuerto como velocidad del aire interior, así que lo reconstruimos.'
  credits: 'estudio de vidrios y gráficos: entrópica. arquitectura: forza creativa. vidrio: profil 2000 / metra. herramientas: energyplus, ladybug tools (honeybee), python.'
---
