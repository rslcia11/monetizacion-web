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

## 9. Calendario: primeros 20 artículos

**Clúster 1 — API / Backend (núcleo, mayor volumen)**
1. Best Postman Alternatives in 2026
2. Best Open Source Postman Alternatives
3. Best Free Postman Alternatives for Mac
4. Bruno vs Postman: Which API Client Should You Use
5. FastAPI vs Django: Which Should You Choose in 2026
6. NestJS vs Express: Performance and Use Case Comparison

**Clúster 2 — Monorepo / Frontend tooling**
7. Turborepo vs Nx: Complete Comparison for 2026
8. Turborepo vs Nx vs Lerna: Which Monorepo Tool Wins
9. Riverpod vs Provider in Flutter: Which to Pick

**Clúster 3 — Backend-as-a-Service**
10. Supabase vs Firebase: Full Comparison
11. Supabase vs Firebase Pricing Breakdown

**Clúster 4 — Productividad para devs**
12. Best Notion Alternatives (Open Source & Free)
13. Best Self-Hosted Notion Alternatives
14. Best Free Notion Alternatives for Teams
15. AppFlowy vs Notion: Is It a Real Alternative

**Clúster 5 — Mobile**
16. Flutter vs React Native: 2026 Comparison
17. Flutter vs React Native for Startups

**Clúster 6 — Carrera / otros**
18. Coding Bootcamp vs Computer Science Degree: Which Pays Off
19. Flask vs FastAPI vs Django: Full Comparison
20. Insomnia vs Postman: Which API Client Wins

Estándar por artículo: investigación propia, experiencia real con la herramienta, fuentes enlazadas, sin relleno.

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
8. Tabla comparativa con números (cifras tabulares con `tabular-nums`, sin fuente monoespaciada).
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
- Astro trae routing i18n nativo: se configura desde el inicio sin costo extra. Implementado con rutas `src/pages/[...lang]/`: un archivo por tipo de página sirve a ambos idiomas.
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
- Decisión de compra: la toma Wilson.

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

---

## 11. Checklist antes de aplicar a AdSense

- [ ] Dominio propio comprado y conectado (HTTPS)
- [ ] Páginas: Privacy Policy, About, Contact, Terms
- [ ] 15–20 artículos de calidad publicados
- [ ] Navegación clara, sin categorías vacías
- [ ] Sitemap y robots.txt
- [ ] Google Search Console configurado y sitio indexado
- [ ] Espacios de anuncios reservados en el layout (evitar CLS)
- [x] ads.txt: se genera solo al configurar `ADSENSE_CLIENT`
- [ ] Activar el mensaje de consentimiento de AdSense (Privacidad y mensajes) para EEE/UK/Suiza antes de mostrar anuncios: la Privacy policy lo promete y Google lo exige en esas regiones
- [ ] Revisar Privacy y Terms con alguien de confianza en temas legales antes de publicar
- [ ] Si se agregan analytics, actualizar la Privacy policy (hoy dice que no se usan)

---

## 11.1 Auditoría de cumplimiento (28-sep-2026)

Fuentes: [políticas del programa AdSense](https://support.google.com/adsense/answer/48182), [requisitos de elegibilidad](https://support.google.com/adsense/answer/9724), [políticas para publishers de Google](https://support.google.com/publisherpolicies/answer/10502938), [CMP certificado para EEE/UK/Suiza](https://support.google.com/adsense/answer/13554116), [leyes estatales de EE.UU.](https://support.google.com/adsense/answer/9560818), reglas de anuncios sticky ([Ad Manager](https://support.google.com/admanager/answer/7246067)).

| Requisito | Estado |
|---|---|
| Contenido original y de valor; nada copiado sin aportar análisis | Estándar editorial §9.3 + validaciones de build. Faltan los artículos. |
| Transparencia: dueño, propósito, independencia, relaciones comerciales | About, How we test, Contact; autor real con bio. |
| Política de privacidad con cookies de terceros (Google) y opt-out | Privacy con los avisos exigidos, LOPDP, GDPR y opt-out de estados de EE.UU. |
| CMP certificado (EEE/UK/Suiza) | Se activa en AdSense > Privacidad y mensajes; no requiere código (lo sirve el script de AdSense). |
| Estados de EE.UU. ("Do not sell or share") | Mensaje de estados de EE.UU. en Privacidad y mensajes; opcional RDP. |
| Anuncios distinguibles del contenido, etiquetados, sin incitar clics | Etiqueta "Advertisement"; sin textos tipo "support us" ni flechas. |
| No anuncios junto a navegación ni imitándola | Solo 3 ubicaciones: dentro del artículo, barra lateral y portada. |
| Sticky: uno solo, escritorio, ≤300px, sin tapar contenido | Barra lateral 300px, solo el anuncio es sticky, oculto <1120px. |
| Densidad (Better Ads Standards) | Máx. 3 anuncios en el artículo, nunca seguidos, nunca antes del veredicto. |
| Espacio reservado (CLS) | Alto fijo por ubicación. |
| ads.txt | Automático con `ADSENSE_CLIENT`. |
| Navegación clara, sin secciones vacías | Menú solo con secciones con artículos. |
| Acceso al HTML del sitio, dominio propio, HTTPS | Sitio propio en Astro; .dev obliga HTTPS. |
| Sitemap, robots, canonical, datos estructurados | Sí (Article, BreadcrumbList, WebSite, Organization). RSS en `/rss.xml`. |
| Accesibilidad básica | Enlace "Skip to content", foco visible, contraste, `alt` obligatorio en capturas. |
| Identidad visual completa | Favicon propio (SVG). Pendiente: imagen para compartir en redes (og:image). |

**Pendiente antes de aplicar:** comprar el dominio y desplegar, 15–20 artículos reales, activar los mensajes de Privacidad y mensajes, revisión legal de Privacy/Terms.

---

## 11.2 Monetización más allá de AdSense (investigación 28-sep-2026)

| Opción | Requisito de entrada | Encaje con Kriterio |
|---|---|---|
| AdSense | Sin mínimo de tráfico; contenido de calidad | **Fase 1.** |
| Google Ad Manager (gratis) | Sin mínimo; acceso a AdX solo vía un socio MCM | Cuando haya volumen, para sumar demanda. |
| Journey by Mediavine | 1.000 sesiones/mes (desde ene-2026) | Primer salto natural desde AdSense. |
| Raptive | 25.000 páginas vistas/mes (desde oct-2025) | Fase de crecimiento. |
| Mediavine (principal) | ~$5.000/año en ingresos por anuncios | Fase madura. |
| Ezoic | Subió a 250.000 usuarios/mes (feb-2026, dato de terceros; verificar) | No por ahora. |
| EthicalAds / Carbon | Audiencia de desarrolladores; CPM ~$1–2.5; Carbon pide miles de visitas diarias | Complemento que encaja con la audiencia y con el tono independiente. |
| Afiliados de herramientas | Programas de cada vendedor | Posible, pero exige divulgación visible y `rel="sponsored"`; hoy el sitio declara que no tenemos relaciones comerciales, así que se decide artículo por artículo y se actualiza About/How we test. |

Fuentes: [Mediavine y Raptive cambian requisitos](https://thisweekinblogging.com/mediavine-raptive-requirements/), [Journey 2026](https://www.productiveblogging.com/everything-you-need-to-know-about-journey-by-mediavine/), [Ezoic y alternativas](https://newormedia.com/blog/best-ad-networks-for-publishers-2026/), [EthicalAds publishers](https://www.ethicalads.io/publishers/), [Carbon FAQ](https://www.carbonads.net/faq), [Ad Manager y MCM](https://www.publift.com/blog/google-mcm-multiple-customer-management).

**Preparado para cambiar de red:** todos los anuncios pasan por un solo componente (`AdSlot`), un solo script en el `<head>` y un solo `ads.txt`. Cambiar o sumar una red es tocar esos tres puntos, no los artículos. Journey/Mediavine piden redirigir `ads.txt` a su servidor: se configura en el hosting.

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
- Compra de kriterio.dev (la hace Wilson).
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
4. ✅ Proyecto Astro base (27-sep-2026): Astro 7.3 (Node 22.12+), MDX, sitemap i18n, fuentes self-hosted (API de fuentes de Astro), Content Collection `articles` con esquema validado, layout con SEO (canonical, hreflang, JSON-LD Article + BreadcrumbList), portada, secciones (Comparisons, Alternatives, Guides), página de artículo y 404. Español listo pero apagado: se activa agregando `'es'` a `publishedLocales` en `src/i18n/ui.ts` (probado).
5. ✅ Componentes del artículo (27-sep-2026): Picks/Pick, Results, ToolFacts, Screenshot, ProsCons y Ad en MDX; How we tested, Sources y caja de autor generados desde el frontmatter; colección `authors` bilingüe; logos por archivo en `src/assets/logos/`; anuncios apagados hasta configurar `ADSENSE_*` (y `ads.txt` automático); menú sin secciones vacías. El build valida anclas, posición de anuncios, filas de resultados y frontmatter. Guía: `docs/escribir-articulos.md`.
6. ✅ Páginas del footer (27-sep-2026): About, How we test, Contact, Privacy (avisos de AdSense + LOPDP/GDPR/CCPA) y Terms (ley de Ecuador, tribunales de Loja), en `src/content/pages/en/`. Datos del responsable en `src/lib/site.ts` (Wilson Rene Martínez Jimenez, Loja, Ecuador). El build falla si falta una página del footer.
7. **Siguiente:** archivo de autor (`src/content/authors/`: rol, bio y foto) para firmar artículos; buscador (Pagefind) + filtros en la portada.
