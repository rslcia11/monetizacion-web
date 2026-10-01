# Informe de verificación de artículos (Fase 4)

> Fecha: 1 de octubre de 2026. Revisión de los 20 artículos del calendario (plan §9) contra la guía de calidad.
> Los artículos publicables están en `src/content/articles/en/<slug>.mdx`. Los borradores originales en `.txt` no se tocaron.

## Resumen

- **20 de 20 temas aprobados por métricas** (plan §6 y §9, KD < 20). No se descartó ninguno.
- **20 de 20 reescritos y verificados.** Cada dato tiene su fuente oficial en `sources` (precios, docs, changelogs, repos, blogs oficiales). Se quitaron todas las fuentes de terceros (catdoes, flexprice, dev.to, cloudzero, checkthat.ai, oneuptime, ztabs, bidev, gigson, bacancy, procurementvms, cloudeagle, Wikipedia, blog de Apidog como fuente sobre Postman).
- **Todos llevan `method: research`.** El sitio ahora muestra "Researched" y "How we researched", con una nota de que no hubo pruebas prácticas. No se afirma ninguna medición propia.
- **Código donde aporta:** 17 artículos tienen ejemplos de código o comandos sacados de la documentación oficial de cada herramienta. Los 3 restantes (Notion alternatives, Notion vs Confluence, Obsidian alternatives) no lo necesitan.
- `npm run check`: 0 errores. `npm run build`: 30 páginas y 20 artículos indexados por Pagefind.
- Lista negra de palabras: limpia. Enlaces internos: entre 2 y 4 por artículo, todos válidos.
- Temas unificados en 5 clústeres: API clients (2), Backend (6), Notes and docs (6), Frontend and tooling (4), Mobile (2).

## Errores importantes corregidos en los borradores

| Artículo | Lo que decía el borrador | Lo correcto (con fuente oficial) |
|---|---|---|
| Postman alternatives | Yaak: $8/$12 por mes | Licencia única de **$50 por usuario al año** |
| Postman alternatives | Hoppscotch: solo Enterprise $19 | También tiene plan cloud **Organization a $6/usuario/mes** (anual) |
| Insomnia vs Postman | Postman solo guarda en Git en planes pagos | **Postman Native Git está en todos los planes** (app de escritorio) |
| Supabase vs Firebase | Firebase Spark: 50.000 MAU gratis | Spark con Identity Platform: **3.000 usuarios activos diarios**. Los 50.000 MAU gratis son de Blaze |
| Firebase alternatives | Firebase no tiene ningún tope de gasto | Hay **spend caps** para Functions, App Hosting, AI Logic y Extensions; **no** para Firestore |
| Supabase alternatives | Appwrite resuelve la pausa de proyectos gratuitos | **Appwrite también pausa** los proyectos Free tras 7 días y los borra a los 90 días pausados |
| Supabase/Firebase alternatives | Appwrite: $25 plano sin cobro de cómputo | $25/mes **+ $15 por proyecto extra**. Postgres nativo es una instancia dedicada desde $10/mes |
| Notion (4 artículos) | Notion no funciona offline | **Notion funciona offline desde agosto de 2025** (apps de escritorio y móvil) |
| Notion vs Confluence | Confluence sin modo offline | Confluence **guarda ediciones sin conexión** y su app móvil tiene modo offline |
| Notion vs Confluence | (no mencionado) | El plan Free de Confluence **no permite permisos** por espacio ni por página |
| Notion alternatives / AppFlowy | Self-host gratis para equipos | El servidor self-hosted ahora es **comercial**: gratis para 1 asiento, luego $10/asiento/mes |
| Notion alternatives | Anytype Plus $4/mes | Los precios de Anytype están en transición. No se publica una cifra sin confirmar |
| Logseq (2 artículos) | Logseq guarda Markdown | Logseq se dividió: **OG (Markdown) en mantenimiento** y **2.0 (SQLite) en beta** |
| Obsidian vs Notion | Notion tiene bases de datos y Obsidian no | Obsidian tiene **Bases** desde la versión 1.9 (tabla, tarjetas, lista, Kanban) |
| Expo vs RN CLI | EAS Production $99; setup de 5–10 vs 30–60 min; +3–5 MB | Production **$199**. Los tiempos y tamaños **se quitaron** porque no estaban medidos |
| Expo vs RN CLI | CodePush como opción OTA | **App Center (CodePush) se retiró el 31/03/2025** |
| Riverpod vs Provider | Provider "oficialmente en modo mantenimiento" | **Sin fuente oficial**, se quitó. Se añadió que la documentación de Flutter sigue enseñando Provider |
| pnpm vs npm | pnpm 12 / npm 10 | **pnpm 12 es una reescritura en Rust**. **npm 12** (julio de 2026) bloquea los scripts de instalación de las dependencias. Node 25+ ya no incluye Corepack |
| Vite vs Webpack | Vite usa esbuild en desarrollo y Rollup en producción | **Vite 8 (marzo de 2026) usa Rolldown** para todo |
| NestJS vs Express | NestJS sin versión; Express 4 | **NestJS 12** (agosto de 2026); **Express 5** es el default en npm |
| Todos los "X vs Y" | `kind: vs`, `winner="Tie"` | `kind: comparison` (`vs` y `Tie` rompían el build) |

## Segunda ronda (1 de octubre de 2026): experiencia, logos y código

- **Experiencia del autor en los 20 artículos.** Cada uno tiene una sección en primera persona (antes de "How to choose in 30 seconds") con recomendaciones de mejores prácticas y ejemplos verificados: RLS en Supabase, reglas de Firestore, `ValidationPipe` en NestJS, usuario personalizado en Django, app factory en Flask, `outputs` y `env` en Turborepo, proxy y `VITE_` en Vite, `useShallow` en Zustand, instalación desde lockfile en CI, entre otros.
- **Proyectos reales citados:** Musa Rosa (Next.js en Firebase Hosting), backend NestJS con Prisma, JWT y Swagger, Flutter con Provider y get_it, pnpm en frontends y npm en backend, y Postman a diario. Los proyectos de clientes se mencionan sin nombres.
- **No se inventó** ninguna métrica, cliente con nombre ni incidente concreto.
- **Bio del autor:** desarrollador full-stack con su stack real. Se quitó "instala y prueba cada herramienta".
- **Textos del sitio:** la portada, About, "How we test and research", Terms y Contact ahora describen el método real: experiencia propia más fuentes oficiales.
- **Logos:** 38 de 39 herramientas. Vienen de Simple Icons (CC0) y de los repos oficiales de Riverpod, AppFlowy, Thunder Client y Zustand. Apidog queda con iniciales porque no hay logo accesible. Las portadas y las imágenes para redes se generan solas.
- **Bloques de código estilo W3Schools:** etiqueta con el lenguaje y botón Copiar en todos los bloques, y recuadro `<Output>` para el resultado (ejemplo en FastAPI vs Django).
- **`PUBLIC_INDEXABLE`:** con `false`, todas las páginas llevan `noindex`, para probar en producción antes del lanzamiento.
- **Cloudflare:** `wrangler.jsonc` y `.node-version` listos, más la guía paso a paso en `docs/despliegue.md`.
- **Fuente de títulos:** Newsreader, confirmada.

## Pendiente de tu parte antes de publicar

1. **Tu foto** en `src/assets/authors/` (cuadrada, real). Te la conecto en un minuto.
2. **Dominio y correo** (`kriterio.dev`, `contact@kriterio.dev`). Después actualizo `src/lib/site.ts`.
3. **Cloudflare, Search Console y AdSense**, siguiendo `docs/despliegue.md`.
4. **Lectura final de los 20 artículos**, sobre todo las secciones en primera persona.
5. **Revisar precios el día de publicar**, en especial Yaak, Appwrite, Anytype, Joplin y EAS.
