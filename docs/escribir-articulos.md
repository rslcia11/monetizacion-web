# Cómo escribir un artículo en Kriterio

Un artículo es un solo archivo `.mdx`. El diseño, el SEO, la portada, el índice, "How we tested", las fuentes, la caja de autor y los anuncios salen solos. Si falta algo obligatorio, el build falla con un mensaje que dice qué corregir.

Estándar editorial: [plan-sitio-adsense.md §9.3](../articulos/plan-sitio-adsense.md). Diseño: [DESIGN.md](../DESIGN.md).

---

## 1. Antes del primer artículo: el autor

Un archivo por autor en `src/content/authors/<id>.json`. La foto va en `src/assets/authors/`.

```json
{
  "name": "Nombre Apellido",
  "role": { "en": "Backend developer", "es": "Desarrollador backend" },
  "bio": {
    "en": "Real, verifiable bio (80+ characters): what you build and the tools you use every day.",
    "es": "Bio real y verificable (mínimo 80 caracteres). Obligatoria cuando se active el español."
  },
  "photo": "../../assets/authors/nombre-apellido.jpg",
  "links": [{ "label": "GitHub", "url": "https://github.com/usuario" }]
}
```

El `<id>` es el nombre del archivo sin `.json` y es lo que va en `author:` de cada artículo.

---

## 2. Dónde va cada archivo

| Qué | Dónde | Ejemplo |
|---|---|---|
| Artículo en inglés | `src/content/articles/en/<slug>.mdx` | `en/postman-alternatives.mdx` → `/postman-alternatives/` |
| Su versión en español | `src/content/articles/es/<mismo-slug>.mdx` | → `/es/postman-alternatives/` (se enlazan solas con `hreflang`) |
| Capturas propias | `src/assets/screenshots/<slug>/<nombre-descriptivo>.png` | `postman-alternatives/bruno-collection-after-clone.png` |
| Logos oficiales | `src/assets/logos/<herramienta>.svg` | `Hoppscotch` → `hoppscotch.svg`, `Next.js` → `next-js.svg` |

- El nombre del archivo es la URL: corto, descriptivo, sin fecha. Una sola página por comparación (cubre "A vs B" y "B vs A").
- Nombres reservados (el build falla si los usas): `comparisons`, `alternatives`, `guides`, `about`, `how-we-test`, `contact`, `privacy`, `terms`.
- Logos: del press kit o repo oficial de la herramienta. Si falta el archivo se muestran sus iniciales.

---

## 3. Frontmatter

```yaml
---
title: The best Postman alternatives, tested on the same collection # máx. 70 caracteres
description: Postman's Free plan now covers one user. We measured the alternatives on start time, memory and a real collection. # 50–160
lede: Entradilla bajo el título. Qué pasó y qué medimos.
kind: alternatives        # comparison | alternatives | guide
topic: API clients        # clúster temático
tools: [Postman, Bruno, Hoppscotch, Insomnia]  # portada; una comparison necesita 2 o más
author: nombre-apellido   # id del archivo en src/content/authors/
publishedAt: 2026-10-01
updatedAt: 2026-10-01     # no puede ser anterior a publishedAt
testedAt: 2026-09-28
method: tested           # tested (pruebas propias con números) | research (solo fuentes oficiales, sin mediciones)
testing:                  # genera la sección "How we tested"
  environment: MacBook Air M2, 16 GB RAM, macOS 15.4
  versions:
    - { tool: Postman, version: "11.2.0" }
    - { tool: Bruno, version: "2.3.1" }
  notes: Opcional. Algo específico de estas pruebas.
sources:                  # genera la sección "Sources"; mínimo una, solo http(s)
  - { title: Postman pricing, url: "https://www.postman.com/pricing/" }
draft: false              # true = solo visible en desarrollo
---
```

---

## 4. Estructura del cuerpo

Los títulos de sección siempre en Markdown (`## ...`): así entran al índice lateral. Un `##` dice la conclusión, no un rótulo ("Bruno keeps your requests in the repo", no "Bruno").

No escribas secciones "How we tested" ni "Sources": salen del frontmatter.

Los valores del ejemplo solo muestran el formato; no son mediciones.

```mdx
import brunoClone from '../../../assets/screenshots/postman-alternatives/bruno-collection-after-clone.png';

## Our picks

<Picks>
  <Pick tool="Bruno" top why="For teams that keep everything in Git." href="#bruno-keeps-your-requests-in-the-repo" />
  <Pick tool="Hoppscotch" label="Nothing to install" why="Runs in a browser tab." href="#hoppscotch-needs-nothing-installed" />
</Picks>

## Test results

Same laptop, same collection. A dash means the run is still pending.

<Results
  caption="Postman and three alternatives measured on the same collection"
  tools={['Postman', 'Bruno', 'Hoppscotch', 'Insomnia']}
  winner="Bruno"
  rows={[
    { label: 'Cold start', values: ['4.1 s', '1.2 s', null, '2.8 s'] },
    { label: 'Open source', values: [false, true, true, false] },
  ]}
/>

## Bruno keeps your requests in the repo

<ToolFacts tool="Bruno" price="Free, paid team plans" runsOn="Windows, macOS, Linux" license="MIT" />

Texto con lo que encontraste al usarla.

<Screenshot src={brunoClone} alt="Bruno sidebar showing the collection folders" caption="The collection right after cloning the repo. Nothing to import." />

<ProsCons pros={['you review API changes in pull requests']} cons={['...hallazgo de tus pruebas']} />

<Ad />

## Hoppscotch needs nothing installed

...

## FAQ

### Is Bruno free for teams?

...
```

---

## 5. Componentes

| Componente | Para qué | Props |
|---|---|---|
| `<Picks>` + `<Pick>` | Veredicto rápido, arriba de todo | `tool`, `why`, `href="#ancla"`, `top` (solo uno) o `label` (el caso que gana) |
| `<Results>` | Tabla con números propios | `caption`, `tools`, `winner?`, `rows` con un valor por herramienta: texto con unidad, `true`/`false` o `null` (pendiente) |
| `<ToolFacts>` | Ficha bajo el `##` de cada herramienta | `tool`, `price`, `runsOn`, `license` |
| `<Screenshot>` | Captura propia con marco | `src` (importada), `alt`, `caption` |
| `<ProsCons>` | "Worth it if" / "Think twice if" | `pros`, `cons` (mínimo uno de cada) |
| `<Ad />` | Anuncio dentro del artículo | ninguna |
| ` ``` ` (bloque de código) | Recuadro con etiqueta del lenguaje y botón **Copiar**, estilo W3Schools. Sale solo con cualquier bloque Markdown | el lenguaje después de ` ``` ` (`sh` se muestra como "Terminal") |
| `<Output>` | Lo que devuelve o imprime el código de arriba. Va justo después de un bloque de código | `label?` (por defecto "Result"); dentro va otro bloque de código |

El ancla de un `##` es el título en minúsculas con guiones: `## Bruno keeps your requests in the repo` → `#bruno-keeps-your-requests-in-the-repo`.

---

## 6. Qué revisa el build (falla si no se cumple)

- Frontmatter completo y con formato válido (largos, fechas, URLs http/https, autor existente).
- Una `comparison` con al menos dos herramientas.
- Cada `href="#..."` apunta a un título que existe.
- Ningún `<Ad />` antes de "Our picks" (o del primer `##` si el artículo no tiene picks), máximo 3 por artículo y nunca dos seguidos.
- `<Results>`: cada fila tiene un valor por herramienta y `winner` es una de ellas.
- `<Pick>` sin `top` necesita `label`; `<ProsCons>` necesita al menos un pro y un contra.
- El nombre del archivo no choca con una página del sitio.

Lo que el build no puede revisar y es tu responsabilidad: que cada número salga de una prueba real (si no está medido, va `null`), que las capturas sean tuyas y que las fuentes sean oficiales.

---

## 7. Anuncios (AdSense)

No se muestra nada relacionado con anuncios hasta configurar estas variables en el hosting (o en un `.env` local, que no se sube al repo):

| Variable | Valor |
|---|---|
| `ADSENSE_CLIENT` | `ca-pub-...` (AdSense > Cuenta > Información de la cuenta) |
| `ADSENSE_SLOT_ARTICLE` | ID del bloque de anuncios dentro del artículo (250 px) |
| `ADSENSE_SLOT_SIDEBAR` | ID del bloque de la barra lateral (300×600) |
| `ADSENSE_SLOT_HOME` | ID del bloque de la portada |

Con `ADSENSE_CLIENT` configurado se carga el script de AdSense y `/ads.txt` se genera solo. Cada espacio aparece cuando su ID está configurado.

---

## 8. Probar antes de publicar

```sh
npm run dev     # http://localhost:4321, incluye borradores (draft: true)
npm run check   # tipos y esquema de contenido
```
