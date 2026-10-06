---
title: 'dos paredes abiertas, hasta 26 puntos más de confort'
slug: aulas-bioclimaticas-unp
locale: es
categories: ['estudios de caso', 'ventilación natural']
tags: ['ventilación cruzada', 'confort térmico', 'CFD', 'celosías', 'aulas']
keywords: ['ventilación natural aulas panamá', 'confort térmico sin aire acondicionado', 'CFD ventilación cruzada', 'celosías trópico']
eyebrow: '// casos · ventilación'
heroImage: /blog/aulas-bioclimaticas-unp/aulas-301-propuesta.jpg
summary: un estudio CFD de dos aulas ventiladas de forma natural en la universidad nacional de panamá. abrir la pared del pasillo con celosías sube las horas en confort hasta 26 puntos, sin aire acondicionado.
date: 2021-07-15
author: josé barría
draft: false
---

## el resultado

en 2021, entrópica analizó con dinámica de fluidos computacional (CFD) dos aulas de la universidad nacional de panamá (UNP), en la ciudad de panamá. las dos operan con ventilación natural.

el cambio propuesto es simple: abrir la pared del pasillo con celosías, además de las ventanas de la fachada. con ese cambio, las horas en confort térmico suben así:

| aula | original | propuesta | mejora |
|---|---|---|---|
| aula 402 | 42% | 66% | +24 puntos |
| aula 301 | 47% | 73% | +26 puntos |

la propuesta no usa aire acondicionado. solo cambia la ubicación y el tamaño de las aberturas.

## el problema: el aire entra, pero no sale

en el diseño original, cada aula tiene ventanas en la fachada y una sola salida pequeña hacia el pasillo de acceso. el aire entra por la fachada, pero no encuentra una salida de tamaño equivalente.

el mapa de vectores muestra el efecto. la velocidad del aire sube hasta 2.89 m/s junto a la salida del aula 402. en el resto del aula, el aire casi no se mueve. el estudiante sentado en el centro no recibe la brisa.

sin movimiento de aire, el calor y la humedad del clima de panamá llevan el aula fuera de confort durante más de la mitad de las horas de clase.

## el método

![ubicación del proyecto y de la estación meteorológica de tocumen](/blog/aulas-bioclimaticas-unp/aulas-ubicacion.jpg)

los datos meteorológicos vienen de la estación del aeropuerto internacional de tocumen (archivo Tocumen Intl AP 787920, ISD-TMYx).

las simulaciones usaron estos parámetros:

1. horario de uso: de 8:00 a.m. a 10:30 p.m., de lunes a viernes.
2. velocidad del aire de entrada: 1 m/s.
3. entradas de aire: en la fachada.
4. salidas de aire: hacia el pasillo de acceso.

modelo de confort térmico: confort adaptativo.
software de simulación: ladybug tools, con butterfly y OpenFOAM.

## aula 402

### original

![aula 402, diseño original: gráfica de confort térmico y mapa de vectores de velocidad](/blog/aulas-bioclimaticas-unp/aulas-402-original.jpg)

- horas en confort: 42%. el resto del tiempo está en calor.
- aberturas: ventanas en la fachada y una salida pequeña hacia el pasillo.
- flujo: el aire se concentra en una línea entre las ventanas y la salida.

### propuesta

![aula 402, propuesta: gráfica de confort térmico y mapa de vectores de velocidad](/blog/aulas-bioclimaticas-unp/aulas-402-propuesta.jpg)

- horas en confort: 66%.
- aberturas: celosías en la parte baja de la fachada y celosías en la pared del pasillo.
- flujo: el aire cruza toda el aula a una velocidad de entre 0.4 m/s y 0.6 m/s, aproximadamente.

## aula 301

### original

![aula 301, diseño original: gráfica de confort térmico y mapa de vectores de velocidad](/blog/aulas-bioclimaticas-unp/aulas-301-original.jpg)

- horas en confort: 47%. el resto del tiempo está en calor.
- aberturas: ventanas en la fachada y una salida pequeña hacia el pasillo.
- flujo: la velocidad sube hasta 1.88 m/s junto a la salida. el centro del aula queda con aire casi quieto.

### propuesta

![aula 301, propuesta: gráfica de confort térmico y mapa de vectores de velocidad](/blog/aulas-bioclimaticas-unp/aulas-301-propuesta.jpg)

- horas en confort: 73%.
- aberturas: celosías en la fachada y dos paños de celosías en la pared del pasillo.
- flujo: el aire cruza el aula de forma uniforme.

## qué aprendimos

1. **la salida importa tanto como la entrada.** una ventana grande sin una salida equivalente no produce ventilación cruzada.
2. **la velocidad alta en un punto no es confort.** el confort depende de la velocidad del aire en la zona donde se sientan las personas.
3. **las celosías permiten abrir sin perder control.** una pared de celosías deja pasar el aire, filtra la luz directa y protege de la lluvia.
4. **la mejora es grande con poca obra.** el cambio afecta solo las aberturas. la estructura y la losa no cambian.

en las gráficas de la propuesta, las horas en calor quedan cerca del mediodía y de la tarde. para esas horas, el siguiente paso es combinar la ventilación cruzada con ventiladores de techo o con protección solar en la fachada.

## límites del estudio

- la estación de tocumen está en un entorno rural o suburbano. las aulas están en un entorno urbano denso, así que el microclima del sitio puede ser distinto del de la estación.
- la simulación usa una velocidad de entrada constante de 1 m/s. en el sitio, la velocidad y la dirección del viento cambian cada hora.
- los resultados comparan dos diseños bajo las mismas condiciones. sirven para elegir entre opciones, no para predecir la temperatura exacta del aula.

## conclusión

en el trópico, antes de instalar aire acondicionado, conviene revisar por dónde sale el aire. una pared de celosías hacia el pasillo puede convertir un aula caliente en un aula ventilada, sin consumo de energía.

---

*estudio de entrópica para la universidad nacional de panamá, 2021.*
