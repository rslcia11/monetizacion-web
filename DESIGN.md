# Kriterio: diseño aprobado

Especificación del diseño aprobado en el mockup. Referencia visual: `mockups/Home.dc.html` (portada) y `mockups/Main.dc.html` (artículo). Esos archivos usan un formato de canvas (plantillas `{{...}}`, `<sc-for>`, fuentes de Google Fonts, solo desktop); se leen como referencia de estructura y estilos, no se copian tal cual. Si el mockup y este documento difieren, manda este documento.

Principio: sitio informativo de artículos. El usuario entra, entiende de qué trata y encuentra lo que busca sin vueltas. Serio, fácil de leer, con color donde aporta significado.

---

## 1. Colores

| Token | Hex | Uso |
|---|---|---|
| `--ink` | `#16211E` | Texto principal, encabezado de tablas |
| `--ink-2` | `#24312D` | Texto secundario largo (entradillas, resúmenes) |
| `--muted` | `#3E4B47` | Metadatos, captions, etiquetas |
| `--pending` | `#5E6B67` | Datos pendientes (—) |
| `--paper` | `#FFFFFF` | Fondo de página |
| `--surface` | `#F4F7F6` | Fondos neutros (anuncios, capturas vacías) |
| `--line` | `#E1E8E5` | Bordes y separadores |
| `--line-strong` | `#D5DEDA` | Bordes de bloques |
| `--accent` | `#0B6E5E` | Navegación: links, botones, íconos ✓ |
| `--accent-hover` | `#08544A` | Hover de links |
| `--accent-soft` | `#E4F2ED` | Fondo de cabecera de artículo, ficha rápida, "Worth it if", índice |
| `--warm` | `#F2B33D` | Destacar lo importante: "Our top pick", columna ganadora |
| `--warm-soft` | `#FDF4E1` | Fondo de fila top pick, celdas ganadoras, caja de autor |
| `--warm-line` | `#EADFC7` | Bordes dentro de zonas cálidas |
| `--con` | `#B8432A` | Solo íconos ✗ y contras |
| `--con-text` | `#9C3822` | Título "Think twice if" |
| `--con-soft` | `#FBEEEA` | Fondo de "Think twice if" |

Reglas: el color siempre significa algo. Verde = navegar/positivo. Amarillo = destacado/ganador. Coral = contra. Nada de gradientes.

---

## 2. Tipografía

- **Cuerpo y UI:** Public Sans (400, 500, 600, 700).
- **Títulos (h1, h2, logo):** serif. **Newsreader 700 (confirmada, 1 de octubre de 2026).** Alternativas evaluadas y descartadas: Literata, Source Serif 4.
- **Cifras:** `font-variant-numeric: tabular-nums`. No usar fuente monoespaciada para datos.
- Cargar fuentes self-hosted con `font-display: swap` (rendimiento y sin peticiones a terceros).

| Elemento | Tamaño | Interlineado |
|---|---|---|
| Cuerpo de artículo | 18px | 1.65 |
| Entradilla (lede) | 20px | 1.6 |
| h1 artículo | 46–48px | 1.12–1.15 |
| h1 portada | 30px | 1.2 |
| h2 | 32px (artículo), 26px (portada) | 1.2 |
| h3 tarjeta | 20px | 1.3 |
| Metadatos, captions | 14–15px | 1.45 |

- Ancho de lectura: columna de 720px (≈ 66 caracteres a 18px). Nunca más de 75 caracteres por línea.
- Frases en minúscula normal (sentence case). Sin mayúsculas decorativas.

---

## 3. Layout

- Contenedor: `max-width: 1120px`, padding lateral 24px, centrado.
- **Artículo:** columna principal 720px + barra lateral 300px, separación 52px (suman 1072px, el contenedor sin márgenes). 300px porque es el ancho del anuncio vertical 300×600 de AdSense. En la barra lateral solo el anuncio es sticky (`top: 100px`); el índice queda arriba, fijo en su lugar. Reglas de Google para anuncios sticky: uno solo, solo en escritorio, máximo 300px de ancho, nunca sobre el contenido.
- Radios: 12–14px bloques grandes y portadas; 8–10px botones y cajas; 50% avatares.
- Espaciado entre secciones: 48–56px.

### Responsive (el mockup es solo desktop)
- < 1120px: una columna, sin barra lateral ni anuncio sticky (tablets incluidas); el índice va arriba del contenido como desplegable.
- Grilla de portada: 3 columnas desktop, 2 tablet, 1 móvil.
- Tabla de resultados: scroll horizontal dentro de su contenedor; la página nunca hace scroll lateral.
- Botones y enlaces táctiles ≥ 44px.

---

## 4. Componentes

**Logo:** palabra "Kriterio" en serif 700 con la "K" dentro de un recuadro (radio 5px) y "riterio" pegado a continuación. Sobre el header verde: recuadro blanco con K verde, resto en blanco (`tone="dark"`). Sobre fondo claro: recuadro `--accent` con K blanca, resto en `--ink`. El favicon es el recuadro solo. Componente `Logo.astro`.

**Header** (sticky, fondo `--accent`, texto blanco, alto 56px, sin borde): ocupa casi todo el ancho de la pantalla (máx. 1440px, márgenes de 40px) para que el logo quede a la izquierda; el contenido de abajo sigue centrado en 1120px. Menú editorial: Latest, Comparisons, Alternatives, Guides (solo las secciones con artículos) · enlace "Español" cuando existe la traducción. Página actual: subrayado `--warm` de 3px. Foco visible en blanco. Botón de búsqueda (lupa, 44×44) a la derecha, solo cuando hay artículos.

**Buscador (portada, junto al título):** formulario GET a /search/ (funciona sin JS). Input redondeado (alto 50px, radio 25px, borde `#C9D3CF`), placeholder "Search a tool, like Postman or Supabase", botón circular `--accent` con lupa. Label accesible oculto.

**Artículo destacado (portada):** carrusel con todos los artículos (rota cada 7 s, empieza en uno al azar, se pausa con hover, foco o botón, quieto con reduced-motion). Cada slide: grilla 2 columnas, imagen 16:9 + tema en `--accent`, h2 serif 36px, resumen 18px, autor y fecha. Todo el bloque es un link.

**Grilla de artículos:** tarjeta = imagen 16:9 + tema (14px, `--accent`, 700) + título (20px, 700) + resumen de una línea (16px, `--muted`). Sin sombras.

**Filtro por tema ("Latest" en portada):** aparece solo con 2 temas o más; sin JS no se muestra y se ven todas las tarjetas. Botones de texto; activo = fondo `--ink`, texto blanco, radio 8px. `aria-pressed`. Estado vacío con mensaje útil.

**Búsqueda:** Pagefind, índice generado en el build (`astro build && pagefind`); solo indexa el cuerpo del artículo (`data-pagefind-body`), sin navegación, anuncios ni caja de autor. La página /search/ es `noindex` y no va al sitemap. En `astro dev` no hay índice: muestra "no disponible".

**Imagen de cada artículo (actualizado 1 oct 2026, tras investigar CTR y Google Discover):** fondo `--ink` con trama de puntos, logos oficiales en baldosas blancas con un halo del color de cada marca (`lib/brand.ts`), "vs" en `--warm` y un gancho de 2–4 palabras (`hook` en el frontmatter) en un rótulo `--warm`. Excepción documentada a "nada de gradientes": solo el halo radial detrás de cada logo. Animación: al pasar el mouse, los logos suben y el halo se intensifica; en el carrusel, entran escalonados y el halo "respira". Todo se desactiva con `prefers-reduced-motion`.

**Imagen para compartir y datos estructurados:** PNG generados en el build (satori + resvg) con el mismo diseño: /og/<locale>/<slug>.png (1200×630, og:image) y -16x9, -4x3 y -1x1 (1200 px de ancho, los tres formatos que pide Google para Article). Sin el título: Discover recomienda imágenes con poco texto. Meta `max-image-preview:large` en páginas indexables. Portada y páginas usan /og/default.png.

**Portadas generadas (sistema propio):** fondo de la paleta + logos oficiales de las herramientas enfrentados ("vs") o logo + "alternatives". Se generan por código a partir del frontmatter del artículo (sin imágenes de IA ni stock).

**Cabecera de artículo:** banda `--accent-soft` a todo el ancho: breadcrumb, h1, entradilla, autor con foto (48px, borde `--accent`), línea "Tested [fecha]. Updated [fecha]. No tool on this page paid to be here." La fecha de actualización es obligatoria (estándar editorial y `dateModified` del schema); el mockup no la muestra.

**Our picks:** bloque con borde, filas separadas. Fila top pick con fondo `--warm-soft`, etiqueta "Our top pick" (`--warm`, radio 6px), botón relleno `--accent`. Otras filas: etiqueta de caso en `--accent`, botón con borde. Cada fila: logo 60px, nombre 21px 700, una línea de por qué.

**Tabla de resultados:** contenedor con borde y radio 12px. Encabezado fondo `--ink`, texto blanco; columna ganadora con fondo `--warm` en el encabezado y `--warm-soft` en celdas. ✓ en `--accent`, ✗ en `--con`, pendiente "—" en `--pending`. `<caption>` accesible. Íconos con `aria-label`.

**Encabezado de herramienta:** h2 que dice la conclusión ("Bruno keeps your requests in the repo"). El h2 se escribe en Markdown para que entre al índice; el logo 52px va en la ficha rápida, justo debajo.

**Ficha rápida:** logo 52px + `<dl>` horizontal sobre `--accent-soft`: Price, Runs on, License.

**Captura:** marco tipo ventana (barra superior `--ink` con 3 puntos), borde, radio 12px, `figcaption` debajo. Siempre capturas propias, con `alt` y nombre de archivo descriptivo.

**Pros y contras:** dos cajas: "Worth it if" (`--accent-soft`, ✓) y "Think twice if" (`--con-soft`, ✗).

**Índice (barra lateral):** caja `--accent-soft`, "On this page", sección actual en `--accent` 700.

**Anuncios:** espacio reservado con alto fijo para evitar CLS. En contenido: 250px. Barra lateral: 300×600. Portada: 120px entre bloques. Fondo `--surface`, etiqueta "Advertisement". Nunca entre el título y "Our picks", máximo 3 dentro del artículo y nunca dos seguidos (el build lo impide). Mientras AdSense no esté configurado no se renderiza nada: ni script ni cajas vacías.

**Menú:** solo muestra las secciones (Comparisons, Alternatives, Guides) que tienen artículos; una sección vacía no genera página.

**How we tested, Sources y caja de autor:** se generan al final de cada artículo desde el frontmatter y la colección de autores.

**Caja de autor:** fondo `--warm-soft`, foto 72px, bio real, enlace a "How we test".

**Footer:** fondo `--surface` con borde superior `--line`, logo (versión chica) + una línea sobre qué es Kriterio + About, How we test, Contact, Privacy, Terms.

---

## 5. Lista negra (prohibido)

- Fuentes: Inter, Geist, Space Grotesk, Instrument Serif, Roboto, Arial como principal.
- Gradientes (fondos o texto), morado/índigo.
- Tres tarjetas iguales con íconos como decoración.
- Emojis en títulos o interfaz; badges "New"/"Live"; pills decorativas.
- Modo oscuro con brillos; fondo crema por defecto.
- Tarjetas con borde grueso de color a un lado.
- Etiquetas en MAYÚSCULAS con tracking amplio; metadatos unidos con "·"; flechas "→" en botones.
- Animaciones de entrada por sección.
- Ilustraciones de stock o generadas por IA; placeholders tipo "John Doe"/"Acme".
- Datos inventados: todo número viene de una prueba real o se muestra como pendiente.

---

## 6. Accesibilidad y rendimiento

- Contraste de texto ≥ 4.5:1 (≥ 3:1 en 24px+).
- Elementos reales: `<a href>`, `<button>`, `<label>`; foco visible con teclado.
- Respetar `prefers-reduced-motion`.
- Cero JavaScript salvo buscador y filtro (islas de Astro).
- Imágenes con `width`/`height` declarados; espacios de anuncios reservados.
