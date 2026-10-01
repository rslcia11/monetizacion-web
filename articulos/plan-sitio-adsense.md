# Plan: Sitio de contenido monetizado con Google AdSense

> Documento vivo. Última actualización: 27 de septiembre de 2026 (rev. 2).
> Regla del proyecto: **decisiones con datos, no con suposiciones.**

---

## 1. Objetivo

Crear sitios estáticos de contenido original, bien investigado, monetizados con Google AdSense. Empezar con **un solo sitio** bien hecho; escalar a varios después. A largo plazo, un orquestador propio para gestionar sitios y publicar artículos (fuera de alcance por ahora).

---

## 2. Requisitos oficiales de AdSense (fuente: Google)

Fuente: https://support.google.com/adsense/answer/9724

- Contenido propio, original y de calidad que atraiga audiencia.
- Cumplir las políticas del programa AdSense.
- Ser mayor de 18 años.
- Tener acceso al código fuente HTML del sitio.

**Lo que Google NO exige oficialmente:** mínimo de tráfico, número de artículos ni antigüedad de dominio. La causa más común de rechazo es "contenido de bajo valor" (páginas delgadas o poco originales).

**Recomendaciones prácticas (no oficiales, pero consistentes entre fuentes):**
- Dominio propio (no subdominio gratuito).
- Páginas obligatorias: Política de privacidad, Sobre nosotros/mí, Contacto, Términos.
- Contenido enfocado en un solo tema/audiencia (los sitios "de todo un poco" se rechazan más).
- Enlazar a fuentes de autoridad que respalden lo que se afirma.

---

## 3. Geolocalización

- El CPM/RPM depende de **dónde está el visitante**, no de dónde vive el publisher ni dónde está el hosting.
- Tráfico de EE.UU./UK/Canadá/Australia paga notablemente más; tráfico fuera de esos países suele rendir entre 50% y 80% menos de RPM (fuente: ToolSignal, dataset de 450+ blogs 2025–2026).
- **Decisión:** primer sitio en **inglés**, audiencia objetivo **EE.UU.** Sitio en español/LATAM queda para después.

---

## 4. RPM real de AdSense por nicho

Fuente principal: Adstimate, dataset agregado de cuentas AdSense 2026 (https://adstimate.com/blog/highest-paying-adsense-niches.html). Confirmado en dirección por ToolSignal y SiteWorthIt.

| Nicho | RPM AdSense | Multiplicador |
|---|---|---|
| Finanzas | $30–$60 | 3.0x |
| Criptomonedas | $20–$45 | 2.6x |
| Seguros | $28–$55 | 2.4x |
| Software / SaaS | $30–$65 | 2.4x |
| Legal | $35–$65 | 2.3x |
| Tecnología | $25–$45 | 1.8x |
| Marketing | $22–$45 | 1.6x |
| Educación | $15–$30 | 1.5x |
| Deportes | $9–$18 | 0.9x |
| **Gaming** | **$4–$10** | **0.6x** |

Notas:
- Los rangos son de sitios establecidos; sitios nuevos suelen ganar 30–40% menos al inicio.
- Google no publica RPM oficial por nicho; son datos agregados de terceros, pero convergen entre fuentes independientes.
- Estacionalidad: Q4 paga más, Q1 menos.

**Conclusión:** gaming (modelo de la persona de referencia: jadeo.net / pericotrex) gana por volumen, no por valor por visita. Se descarta como base del primer sitio.

---

## 5. Lección clave: la competencia se mide por keyword, no por nicho

- Error corregido durante la investigación: se dijo que "mejora del hogar" era poco competido; los datos de Ahrefs mostraron keywords principales con KD 84–90.
- **No existen nichos "fáciles".** Cada nicho tiene términos cabeza (dominados por sitios gigantes) y long-tails (accesibles).
- Referencia de Ahrefs: KD 10 ≈ 10 dominios de referencia necesarios; KD 20 ≈ 22; KD 40 ≈ 56; KD 60 ≈ 129.
- Umbral de trabajo para sitio nuevo: **KD < 20**.
- YMYL (finanzas, salud, legal): Google exige más E-E-A-T (credenciales). SaaS/dev tools no es YMYL.
- E-E-A-T incluye "Experience": Google valora contenido de quien usó realmente el producto.

---

## 6. Datos de keywords (Ahrefs, EE.UU., septiembre 2026)

| Keyword | KD | Volumen | Veredicto |
|---|---|---|---|
| postman alternative | 4 (Fácil) | >1000 | ⭐ Mejor oportunidad |
| turborepo vs nx | 2 (Fácil) | >100 | ✅ |
| supabase vs firebase | 0 (Fácil) | >100 | ✅ |
| notion alternative | 8 (Fácil) | >100 | ✅ |
| fastapi vs django | Fácil | >100 | ✅ |
| nestjs vs express | Fácil | >100 | ✅ |
| coding bootcamp vs computer science degree | 4 (Fácil) | >100 | ✅ |
| postman alternatives free | 5 (Fácil) | <100 | ✅ (clúster) |
| riverpod vs provider | Fácil | <100 | ✅ (clúster) |
| flutter vs react native | Difícil | >1000 | ⏳ Después, con autoridad |
| coding bootcamp | 37 | — | ❌ |
| best aws certification for beginners | 41 | — | ❌ |
| monorepo tools | 44 | — | ❌ |
| best online courses for data analytics | 54 | — | ❌ |
| learn web development | 77 | — | ❌ |
| learn python for beginners | 86 | — | ❌ |

**Patrón confirmado:** el formato **"X vs Y"** y **"X alternative"** da KD bajo de forma consistente. Los términos genéricos ("learn X", "X tools") están dominados por MDN, Coursera, python.org, freeCodeCamp, etc.

"postman alternative" tiene 166 variaciones relacionadas (open source, free, mac, vscode, bruno...), la mayoría Fácil–Medio → da para un clúster completo.

---

## 7. Nicho elegido

**Sitio en inglés de comparativas y alternativas de herramientas para desarrolladores.**

Por qué (con datos):
1. RPM del vertical Software/SaaS/Tecnología: $25–$65 (de los más altos).
2. KD consistentemente bajo en formato comparación/alternativa.
3. Volumen real confirmado.
4. No es YMYL.
5. Ventaja de E-E-A-T por experiencia real usando las herramientas.

---

## 8. Estructura del sitio y categorías

La persona de referencia recomienda 4 categorías con mínimo 5 artículos cada una. La investigación encontró dos posturas:
- Guías genéricas: sí, N categorías × 5 artículos.
- Fuente con experiencia en aprobaciones: si no hay más de ~25 posts por categoría, **quitar categorías del menú**; categorías casi vacías se ven mal y se asocian a rechazos.

**Decisión:** organizar por **clústeres temáticos** (enlazado interno + SEO), pero el menú se mantiene simple hasta que cada categoría tenga masa real. Se revisa cuando haya contenido.

---

## 9. Calendario: primeros artículos (validado con Ahrefs)

Reglas de aprobación y calidad: `guia-calidad-articulos.md`.

**Clúster A: API y backend**
1. ✅ The best Postman alternatives in 2026, compared — `/postman-alternatives/` (KD 4, >1000)
2. Insomnia vs Postman: which API client fits your team? — `/insomnia-vs-postman/` (KD 14)
3. Supabase vs Firebase: which backend should you pick? — `/supabase-vs-firebase/` (KD 0, >100)
4. The best Supabase alternatives in 2026, compared — `/supabase-alternatives/` (KD 0)
5. The best Firebase alternatives in 2026, compared — `/firebase-alternatives/` (KD 5)
6. FastAPI vs Django: which Python framework should you choose? — `/fastapi-vs-django/` (Fácil, >100)
7. Flask vs FastAPI vs Django: which one fits your project? — `/flask-vs-fastapi-vs-django/` (Fácil, <100)
8. NestJS vs Express: when is the extra structure worth it? — `/nestjs-vs-express/` (Fácil, >100)

**Clúster B: productividad**
9. The best Notion alternatives in 2026, free and open source — `/notion-alternatives/` (KD 8, >100)
10. Obsidian vs Notion: which one should you use? — `/obsidian-vs-notion/` (KD 0)
11. AppFlowy vs Notion: is the open-source option good enough? — `/appflowy-vs-notion/` (KD 0)

**Clúster C: frontend, mobile y monorepos**
12. Turborepo vs Nx: which monorepo tool should you choose? — `/turborepo-vs-nx/` (KD 2, >100)
13. Expo vs React Native CLI: which should you start with? — `/expo-vs-react-native/` (KD 0)
14. Riverpod vs Provider: which Flutter state manager to use? — `/riverpod-vs-provider/` (Fácil, <100)

**Por validar (elegir 6):** hoppscotch vs postman, bruno vs insomnia, prisma vs drizzle, obsidian alternative, logseq vs obsidian, bloc vs riverpod, zustand vs redux, pnpm vs npm.

**Descartados:** Flutter vs React Native (KD difícil); open source / free / Mac Postman alternatives, self-hosted y free Notion alternatives, Turborepo vs Nx vs Lerna (misma intención que un artículo ya aprobado → canibalización); bruno vs postman, self hosted api client, open source documentation generator, nx alternative, django alternative (sin datos en Ahrefs); coding bootcamp vs CS degree (fuera del foco del sitio).

---

## 9.1 Contenido con IA: qué dice Google y nuestra postura

**Postura oficial de Google** (https://developers.google.com/search/docs/fundamentals/using-gen-ai-content):
- La IA es útil para investigar y dar estructura a contenido original.
- Generar muchas páginas sin aportar valor puede violar la política de spam "scaled content abuse".
- La política aplica igual a contenido de IA, humano, scrapeado o mixto: importa el valor, no el método.

**En la práctica:**
- Tras el core update de marzo 2026, sitios con cientos/miles de páginas de IA sin revisión editorial reportaron caídas de 50–80% de tráfico (dato de terceros, no de Google).
- Las Search Quality Rater Guidelines nombran explícitamente la IA generativa como posible fuente de contenido de calificación "Lowest".

**Conclusión:** "sitio hecho con IA + publicar" no sobrevive. La IA puede asistir en investigación, estructura y revisión; **la sustancia (pruebas, capturas, opinión, experiencia) es propia.**

---

## 9.2 Análisis de competencia (SERPs del nicho)

**Resultado #1 orgánico para "postman alternative" — Sematext:**
- Es una empresa de monitoreo, no un medio independiente; inserta su propio producto en el artículo.
- Opinión por herramienta: 2–3 líneas. Sin mediciones, sin capturas de pruebas, sin datos propios. Tablas cualitativas ("Strong/Weak").
- Driver de demanda: Postman limitó su plan gratuito a un solo usuario desde el 1 de marzo de 2026 → equipos buscando alternativas.

**Patrón general en los SERPs revisados:**
- Blogs de vendedores con conflicto de interés: Slite, Rock.so, getautonoma, EchoAPI, Openapi, Better Stack, Sematext.
- Foros en el top 3 casi siempre: Reddit, StackOverflow → Google no encuentra fuente independiente confiable.
- Medios generalistas: Zapier, XDA, G2.

**Hueco de mercado:** comparativas **independientes, con pruebas medidas y reproducibles.**

---

## 9.3 Estándar editorial (obligatorio en cada artículo)

1. **Pruebas propias con números** (ej. API clients: tiempo de arranque, RAM, tamaño de instalación, importación de colección real de Postman, funcionamiento offline).
2. **Capturas propias.** Nada de stock ni imágenes de la web del producto.
3. **Sección "How we tested"**: versión probada, fecha, entorno.
4. **Independencia declarada**: no vendemos ninguna herramienta reseñada.
5. **Autor real** con bio verificable.
6. **Fecha de actualización visible** y revisión periódica.
7. Fuentes oficiales enlazadas (docs, changelogs, pricing pages).

---

## 9.4 Identidad del sitio

- Principio: diseño propio, sin plantilla genérica ni look de sitio hecho con IA.
- ✅ **Dirección visual: editorial clásico, serio y sencillo.** Como los sitios de artículos que más generan: fácil de leer, el usuario entiende en segundos de qué trata la página y qué hacer.
- Código escrito a mano: sin temas, sin plantillas, sin UI kits ni constructores. CSS propio.

### Fundamentos (con datos)
- **Escaneo en "layer cake"** (Nielsen Norman Group, eyetracking): cuando los subtítulos son descriptivos y visualmente distintos, la gente salta de título en título y encuentra lo que busca; es el patrón de escaneo más eficiente. → Subtítulos que digan la conclusión, no títulos decorativos.
- **Respuesta primero:** la gente escanea, no lee. → Veredicto y tabla resumen arriba; detalle después.
- **Largo de línea:** 50–75 caracteres (óptimo ~66). → `max-width: ~66ch` en el cuerpo.
- **Tamaño de letra:** mínimo 16px; 18px en desktop. **Interlineado:** 1.5–1.7.
- Serif vs sans: sin diferencia significativa de legibilidad; se elige por carácter.

### Estructura de la página de artículo
1. Header simple: logo + navegación mínima.
2. Breadcrumb.
3. Título claro (lo que el usuario buscó).
4. Autor + fecha de actualización + "Tested on: versión/fecha".
5. **Veredicto rápido** (quién gana y para quién) + tabla resumen.
6. Índice de contenidos.
7. Secciones por herramienta con pruebas y capturas propias.
8. Tabla comparativa con números (cifras en fuente monoespaciada/tabular).
9. How we tested.
10. FAQ.
11. Fuentes.
- Slots de anuncios con espacio reservado (evitar CLS), nunca rompiendo la lectura del veredicto.

### Lista negra (huellas de diseño hecho con IA — prohibido)
- Fuentes sobreusadas: Inter, Geist, Space Grotesk, Instrument Serif.
- Gradientes morado/índigo/azul, texto con gradiente.
- Fila de tres tarjetas iguales con íconos.
- Emojis en títulos, badges "New"/"Live", pills decorativas.
- Modo oscuro con brillos de colores.
- Fondo crema/beige "por defecto".
- Tarjetas redondeadas con borde grueso de color a un lado.
- Etiquetas en mayúsculas con tracking amplio por todos lados.
- Ilustraciones de stock o generadas por IA.
- Placeholders tipo "John Doe", "Acme".

### Aprobado en mockup (canvas "Kriterio")
- Color: aprobado. Verde azulado (#0B6E5E) para navegar (links, botones, fondos suaves); amarillo cálido (#F2B33D) para destacar (top pick, columna ganadora, autor); coral (#B8432A) solo para contras/✗; tinta #16211E; fondo blanco.
- Tipografía: cuerpo y UI en sans (Public Sans); serif solo en títulos (Newsreader por defecto, a confirmar). Cifras tabulares.
- Menú editorial, no de servicios: Latest, Comparisons, Alternatives, Guides + buscador + Español. "How we test" va en el footer.
- Footer con descripción del sitio + About, How we test, Contact, Privacy, Terms.

### Portada (principio: "entra, ve artículos y ya")
- Header → título corto + buscador → artículo destacado grande → grilla de artículos con portada, tema, título y resumen de una línea → filtros por tema.
- Sin hero de marketing, sin textos de venta.
- Portadas propias y consistentes armadas con los logos de las herramientas sobre fondos de la paleta (sin imágenes de IA ni stock).

### Por definir
- Serif final de títulos.

### Nombre
- Criterios: sin marcas ajenas (postman, notion...), sin keyword exacta, que transmita "independiente y probado", corto.
- **Nuevo criterio: debe funcionar en inglés y en español** (mismo dominio para ambos idiomas).
- Nombre inventado/brandable: válido y preferido.
- ✅ **Decisión: Kriterio — dominio kriterio.dev.** Bilingüe (*criteria* / criterio), comunica juicio con criterio. kriterio.com está estacionado a la venta (sin sitio activo → sin conflicto de marca). .com de los demás candidatos no disponible.
- Otras opciones evaluadas con .dev libre: versado.dev, veredo.dev.
- Candidatos latinos (Expertum, Trutina, Pondera, Statera, Probatum, Comparo, Examen) y Compario: .com no disponible.
- Primera tanda descartada: Tradeoffs, Diffed, Toolproof, StackTested, Benchnotes, DevVerdict (ya usados por otros sitios, diffed.dev y devverdict.com no disponibles, y no convencen).

### Sitio en español (mismo dominio)
- Estructura: subdirectorio. Inglés en `/` y español en `/es/`. Google recomienda URLs distintas por idioma y anotaciones `hreflang` para enlazar las versiones.
- Astro trae routing i18n nativo: se configura desde el inicio sin costo extra.
- El español NO es traducción automática del inglés: contenido revisado/localizado y keyword research propio para el mercado hispano.
- RPM esperado menor (tráfico fuera de EE.UU./UK/CA/AU rinde 50–80% menos).
- Fase: inglés primero; el español se activa después, pero la arquitectura queda lista desde el día 1.

### Extensión (TLD)
- Google (oficial, 2015): trata las extensiones nuevas igual que .com; la extensión no da ventaja ni desventaja en ranking.
- Evitar extensiones baratas de alto abuso (.xyz, .top, .click, .icu, .cfd, .sbs, .bond): tienen tasas de spam/abuso altas según datos tipo Spamhaus y afectan confianza de usuarios, filtros de email y reputación.
- Opciones válidas: .com o .dev (.dev exige HTTPS, que igual vamos a tener).

### Registrador (datos, agosto 2026)
- Cloudflare Registrar: precio de costo, sin margen; registro y renovación iguales. .com ≈ $10.44/año (sube a ≈ $11.15 desde 1-nov-2026 por alza de Verisign). .dev ≈ $12. WHOIS privacy incluido. Requiere usar DNS de Cloudflare (no es problema: el hosting candidato también es Cloudflare).
- Namecheap: primer año con promoción; renovación .com ≈ $15.88.
- Decisión de compra: la toma Juan.

---

## 9.5 SEO (decidido)

La mayoría del tráfico entra desde Google directo al artículo, no por la portada. El SEO se diseña desde el día 1.

1. **URL corta y descriptiva por tema**, sin fechas: `kriterio.dev/nestjs-vs-nextjs/`, `kriterio.dev/es/nestjs-vs-nextjs/`.
2. **`<title>` único por página**, claro y sin relleno; nombre del sitio al final con separador. Ej.: `NestJS vs Next.js: Tested on the Same API | Kriterio`.
3. **Meta description única** por página, corta, con los puntos clave.
4. **Una sola página por comparación** (cubre "A vs B" y "B vs A"). Nunca duplicar.
5. **Datos estructurados:** Article (autor, datePublished, dateModified) y BreadcrumbList. FAQ se mantiene para el lector, pero Google dejó de mostrar resultados enriquecidos de FAQ (mayo 2026).
6. **Base técnica:** sitemap, robots.txt, canonical, `hreflang` en/es, Google Search Console desde el lanzamiento.
7. **Enlazado interno por clústeres** con anchor text descriptivo.
8. **Imágenes:** nombres de archivo descriptivos + alt.
9. **Buscador interno:** candidato Pagefind (índice estático en build). Confirmar al implementar.

---

## 10. Stack técnico

### 10.1 Decisión: un solo repositorio, sin monorepo
- Primero se publica **un sitio**. El monorepo (Turborepo) se introduce cuando exista el segundo sitio y haya código real que compartir.

### 10.2 Framework: Astro (validado con datos)

Datos de campo (CrUX + HTTP Archive, usuarios reales de Chrome):
- **Astro:** 67% de sitios con Core Web Vitals "buenos"; la página mediana más liviana del comparativo (≈1.6 MB) y el mejor puntaje Lighthouse (68). WordPress quedó último (≈49%). Fuente: Search Engine Journal, mayo 2026, sobre el HTTP Archive Tech Report.
- **Generadores estáticos puros (Hugo, Jekyll):** LCP bueno en ~90% de sitios móviles; los frameworks JS con hidratación pesada (Next.js, Nuxt, Gatsby) pasan CWV con mucha menos frecuencia. Fuente: PageSpeed Matters, julio 2026.
- **Peso de JS típico:** Astro 0–20 KB vs Next.js SSG 80–100 KB (gzip). Fuente: Locally Lost, benchmarks 2026.
- **Continuidad del proyecto:** Cloudflare adquirió al equipo de Astro en enero 2026; sigue siendo open source (MIT).

Matices honestos:
- Parte del buen resultado de Astro puede deberse a que se usa mayormente en sitios simples tipo blog — que es justo nuestro caso.
- Core Web Vitals es un factor de ranking menor; ayuda, pero el contenido manda.
- **El mayor riesgo real de CWV no será el framework sino los propios anuncios de AdSense** (CLS por anuncios que cargan tarde). Hay que reservar el espacio de los slots de anuncios desde el diseño.

**Astro vs Hugo — decisión final: Astro.**
- Rendimiento: empate práctico. Hugo tiene LCP ligeramente mejor (~90% de sitios móviles con buen LCP; 50.4% pasa CWV completo en móvil); Astro 67% con CWV buenos (fuentes distintas, no comparables 1:1). Ambos generan HTML estático casi sin JS.
- Desempate a favor de Astro:
  1. TypeScript/componentes (stack conocido) vs plantillas Go.
  2. Componentes dentro del Markdown (MDX): tablas de benchmarks, pros/contras, slots de anuncios. En Hugo serían shortcodes, más limitados.
  3. Content Collections con esquema tipado: un artículo mal formado falla en build (clave para el orquestador futuro).
- Hugo solo gana en velocidad de build, irrelevante con 20–100 artículos.
- Next.js descartado para este caso de uso.

### 10.3 Contenido
- Artículos en Markdown/MDX dentro del repo (Astro Content Collections, con validación de frontmatter).
- Sin CMS ni base de datos por ahora. Esto además deja la puerta abierta al orquestador futuro (publicar = commit).

### 10.4 Hosting
- Candidato: Cloudflare (estático, CDN, gratis). Confirmar el producto/plan exacto al momento de desplegar.


### Estrategia de despliegue (decidido)
- Desarrollo en local. Opcional: desplegar antes con `<meta name="robots" content="noindex">` (variable `PUBLIC_INDEXABLE=false`) solo para probar producción.
- **Lanzamiento:** con 15–20 artículos terminados, publicados juntos. Google (John Mueller) ha dicho que publicar muchas páginas a la vez no es problema si son buenas; lo que se evalúa es la calidad, no el ritmo.
- **Después del lanzamiento:** ritmo sostenible (ej. 2–3 por semana). Un calendario rígido no es factor de ranking; la constancia es para los lectores.
- **Lo que sí parece automatizado (evitar):** artículos con la misma plantilla de texto cambiando solo nombres, páginas casi duplicadas, varias páginas para la misma búsqueda, contenido sin pruebas propias.
- **Fechas reales:** la fecha es la de la prueba/publicación real. Nunca cambiar fechas sin cambiar contenido.
- No usar `Disallow` en robots.txt para esconder el sitio: Google dice que robots.txt no mantiene páginas fuera del índice, y si bloquea el rastreo, Google no puede leer el `noindex`.
- Lanzamiento público cuando haya 15–20 artículos: `PUBLIC_INDEXABLE=true`, verificar que el noindex desapareció, enviar sitemap en Search Console.
- AdSense: aplicar después del lanzamiento, con el contenido ya indexable.

---

### Estado del desarrollo (revisión técnica)
- ✅ Proyecto Astro revisado: `astro check` 0 errores; build OK; SEO base, JSON-LD (Article, BreadcrumbList, Organization), sitemap, robots, hreflang, ads.txt, reglas de anuncios, páginas legales, buscador Pagefind (solo artículos), `/search/` con noindex y fuera del sitemap, imágenes OG generadas por código, título de portada con marca.
- Pendientes antes de lanzar: foto real del autor, bio con experiencia concreta, correo del dominio (reemplazar Gmail personal), logos oficiales en `src/assets/logos/` (SVG o PNG), escribir los 20 artículos.
- Artículo #1 "Best Postman alternatives": borrador listo (`postman-alternatives.mdx`, draft). Enfoque: comparativa investigada con fuentes oficiales + experiencia del autor con Postman; sin afirmar pruebas que no se hicieron. Pendiente: bloque [TU EXPERIENCIA], verificar celdas "—", campo `method: research` en el sitio.
- Al activar AdSense: variables `ADSENSE_*` y mensaje de consentimiento en AdSense > Privacy & messaging.

---

## 11. Checklist antes de aplicar a AdSense

- [ ] Dominio propio comprado y conectado (HTTPS)
- [ ] Páginas: Privacy Policy, About, Contact, Terms
- [ ] 15–20 artículos de calidad publicados
- [ ] Navegación clara, sin categorías vacías
- [ ] Sitemap y robots.txt
- [ ] Google Search Console configurado y sitio indexado
- [ ] Espacios de anuncios reservados en el layout (evitar CLS)
- [ ] ads.txt listo para cuando llegue la aprobación

---

## 12. Decisiones cerradas y pendientes

**Cerradas:**
- ✅ Nicho: comparativas/alternativas de herramientas para developers, en inglés, audiencia EE.UU.
- ✅ Framework: Astro (Hugo evaluado y descartado).
- ✅ Estructura: un solo repositorio; monorepo solo cuando exista el segundo sitio.
- ✅ Contenido: Markdown/MDX con Content Collections, sin CMS.
- ✅ Categorías: clústeres internos; menú simple hasta tener masa real.
- ✅ Postura sobre IA y estándar editorial (secciones 9.1–9.3).
- ✅ Calendario de los primeros 20 artículos.
- ✅ Nombre y dominio: Kriterio — kriterio.dev.
- ✅ Bilingüe en el mismo dominio: inglés en `/`, español en `/es/`.

**Pendientes:**
- Compra de kriterio.dev (la hace Juan).
- Serif final de títulos.
- Hosting exacto (candidato: Cloudflare; confirmar al desplegar).
- Metodología de pruebas por tipo de herramienta.

**Para más adelante:**
- Variantes de "flutter vs react native" cuando el sitio tenga autoridad.
- Contenido del sitio en español (/es/), con keyword research propio.

---

## 13. Próximo paso

1. ✅ Nombre y dominio: kriterio.dev.
2. ✅ Dirección visual y colores aprobados en mockup. Pendiente: serif final y aprobación de la portada.
3. ✅ Diseño aprobado (portada + artículo). SEO definido (9.5).
4. **En curso:** crear el proyecto Astro base (un solo repo). Requisito: Node 22.12+ (Astro 6).
