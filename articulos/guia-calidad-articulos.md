# Kriterio: cómo se investiga, se escribe y se aprueba cada artículo

Aplica a todos los artículos, igual que al #1 (Postman alternatives).

## Fase 1. Aprobar el tema (antes de escribir)
1. KD en Ahrefs (Keyword Difficulty Checker, EE.UU.): menor a 20.
2. Volumen en Ahrefs (Keyword Generator): idealmente más de 100/mes. Con KD 0–5 se acepta menos.
3. "No data" en Ahrefs = no se escribe.
4. Una página por intención: si el top 10 de dos keywords comparte la mitad o más de los resultados, es la misma búsqueda y va en un solo artículo.
5. Que encaje en uno de los 3 clústeres y no sea YMYL.

## Fase 2. Investigar
1. Solo fuentes oficiales: página de precios, documentación, repositorio (archivo LICENSE), changelog, blog oficial.
2. Cada dato con su fuente y fecha de consulta. Todas van a `sources`.
3. Historia o polémicas: mínimo dos fuentes, y se escribe solo lo que ambas dicen.
4. Dato sin confirmar: se quita o va `null` en la tabla. Nunca se estima.
5. Nada de versiones, tiempos, memoria ni benchmarks si no se midieron.
6. Leer el top 5 de Google para esa keyword: qué dicen, qué les falta, quién es vendedor. Nuestro artículo cubre ese hueco.
7. "People also ask" de Google = preguntas para el FAQ.

## Fase 3. Escribir
Estructura:
1. `title` (máx. 70): exacto al aprobado. Describe, no exagera.
2. `description` (50–160): qué compara y qué va a saber el lector.
3. `lede`: la respuesta en 2 frases. Quien lee solo eso ya sabe qué elegir.
4. Our picks (o veredicto, en un "X vs Y"): quién gana y para quién.
5. Por qué importa ahora: el contexto en un párrafo (un cambio de precio, una versión, un problema real).
6. Tabla comparativa (`<Results>`): solo datos confirmados.
7. Una sección por herramienta: `##` que dice la conclusión, `<ToolFacts>`, 2 párrafos cortos, `<ProsCons>`.
8. How to choose in 30 seconds.
9. FAQ: 3 preguntas reales.
10. Nota del autor solo si es experiencia real.
11. 2–3 enlaces internos a artículos del mismo clúster.
12. Frontmatter: `method: research` si no hubo prueba práctica.

Lenguaje:
- Frases cortas. Palabras simples. Hablarle al lector de "you".
- Un párrafo = una idea. Máximo 3–4 líneas.
- Cero adjetivos de marketing: seamless, robust, powerful, lightning-fast, cutting-edge, game-changer, comprehensive, leverage, unlock, elevate, delve.
- Cero muletillas de IA: "In today's fast-paced world", "It's worth noting that", "Whether you're X or Y", "In conclusion", listas de tres adjetivos seguidas, guiones largos encadenados.
- No exagerar ("the best ever", "revolutionary"). Si algo tiene un contra, se dice.
- Prueba final: leerlo en voz alta. Si suena a folleto o a robot, se reescribe.

## Fase 4. Verificar (revisión antes de aprobar)
- [ ] Cada dato se puede rastrear a una fuente oficial en `sources`.
- [ ] Precios revisados el día de publicar; `updatedAt` al día.
- [ ] Nada inventado: versiones, números, funciones, fechas.
- [ ] `title` ≤ 70, `description` 50–160, `lede` responde de inmediato.
- [ ] Los `##` dicen conclusiones; los `href="#..."` de Picks funcionan.
- [ ] Sin palabras de la lista negra ni frases de IA.
- [ ] Enlaces internos del clúster puestos.
- [ ] `npm run check` y `npm run build` sin errores.
