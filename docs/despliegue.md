# Despliegue y lanzamiento de Kriterio

Pasos en orden. Lo marcado con 👤 lo haces tú con tus cuentas.

## 1. Cloudflare (sitio en modo privado)

1. 👤 Crea una cuenta en Cloudflare y conecta tu GitHub.
2. 👤 En **Workers & Pages → Create → Import a repository**, elige `rslcia11/monetizacion-web` y la rama `main`.
3. Configuración de build (el repo ya trae `wrangler.jsonc` y `.node-version`):
   - Build command: `npm run build`
   - Deploy command: `npx wrangler deploy`
4. Variables de entorno, **antes del primer deploy**:
   - `PUBLIC_INDEXABLE` = `false` → todas las páginas llevan `noindex`. Así puedes probar el sitio en producción sin que Google lo indexe.
5. Abre la URL `*.workers.dev` y revisa portada, artículos, búsqueda, `/sitemap-index.xml` y `/rss.xml`.

No uses `Disallow` en `robots.txt` para esconder el sitio: si Google no puede rastrear, tampoco ve el `noindex` (plan §10.4).

## 2. Dominio

1. 👤 Compra `kriterio.dev` (Cloudflare Registrar, a precio de costo).
2. 👤 En el Worker → **Settings → Domains & Routes → Add custom domain** → `kriterio.dev`.
3. 👤 Crea el correo del dominio (por ejemplo, `contact@kriterio.dev`) y avísame para cambiarlo en `src/lib/site.ts`.

## 3. Lanzamiento

1. Cambia `PUBLIC_INDEXABLE` a `true` y vuelve a desplegar.
2. Comprueba que el código fuente de un artículo **ya no** tiene `<meta name="robots" content="noindex">`.
3. 👤 **Google Search Console** → añade la propiedad de dominio `kriterio.dev` (verificación DNS en Cloudflare) → **Sitemaps** → envía `https://kriterio.dev/sitemap-index.xml`.
4. 👤 Pide la indexación de la portada y de 3 o 4 artículos con **Inspección de URLs**.

## 4. AdSense (después del lanzamiento, con el sitio ya indexable)

1. 👤 Solicita AdSense con `kriterio.dev`.
2. 👤 Configura el mensaje de consentimiento en **AdSense → Privacy & messaging** (obligatorio para visitantes de Europa y Reino Unido).
3. 👤 Cuando te aprueben, crea tres bloques en **Ads → By ad unit**: artículo, barra lateral (300×600) y portada.
4. Pon las variables en Cloudflare: `ADSENSE_CLIENT`, `ADSENSE_SLOT_ARTICLE`, `ADSENSE_SLOT_SIDEBAR` y `ADSENSE_SLOT_HOME`. `/ads.txt` se genera solo.

## Checklist antes de solicitar AdSense (plan §11)

- [ ] Dominio propio con HTTPS
- [ ] Privacy, About, Contact y Terms publicadas (ya existen)
- [ ] 20 artículos publicados e indexables
- [ ] Sitemap enviado en Search Console
- [ ] Foto real del autor en `src/assets/authors/` y `"photo"` en `src/content/authors/wilson-martinez.json`
- [ ] Correo del dominio en `src/lib/site.ts`

---

# Reglas de AdSense: cómo no ser penalizado

Fuentes oficiales: [Políticas del programa AdSense](https://support.google.com/adsense/answer/48182), [Políticas de ubicación de anuncios](https://support.google.com/adsense/answer/1346295), [Tráfico inválido](https://support.google.com/adsense/answer/16737), [Cómo prevenir tráfico inválido](https://support.google.com/adsense/answer/1112983), [Anuncios en pantallas sin contenido](https://support.google.com/publisherpolicies/answer/11112688), [Contenido obligatorio (privacidad)](https://support.google.com/adsense/answer/1348695), [Consentimiento en EEE, Reino Unido y Suiza](https://support.google.com/adsense/answer/13554116) y [Anuncios fijos (sticky)](https://support.google.com/adsense/answer/10734935).

## Lo que el sitio ya cumple (en el código)

| Regla | Cómo se cumple |
|---|---|
| Etiqueta solo "Advertisements" o "Sponsored Links" | Cada anuncio dice "Advertisements" ("Anuncios" en español) |
| Sin anuncios en páginas sin contenido (404, búsqueda, gracias, legales) | El script de AdSense solo se carga en la portada y en los artículos |
| Anuncios lejos de botones y navegación (clics accidentales) | 48 px libres arriba y abajo del anuncio del artículo. El build falla si un anuncio queda pegado a un bloque de código, a "Our picks" o a un "Result" |
| Nunca antes del veredicto, máximo 3 por artículo, nunca dos seguidos | El build lo verifica en cada artículo |
| Más contenido que anuncios | 1 anuncio en el texto + 1 en la barra lateral por artículo |
| Anuncio fijo (sticky): uno solo, solo en escritorio, máximo 300 px, sin tapar contenido | Solo la barra lateral de 300×600, desde 1120 px de ancho y 760 px de alto |
| Sin pop-ups, intersticiales ni anuncios que tapen la página (Better Ads Standards) | No existen en el sitio |
| Espacio reservado (la página no "salta" al cargar el anuncio) | Alto mínimo fijo por ubicación |
| Política de privacidad con cookies de Google, terceros y enlaces de exclusión | `/privacy/` |
| `ads.txt` | Se genera solo con `ADSENSE_CLIENT` |
| Nada que invite a hacer clic | Sin textos como "click the ads" o "support us", sin flechas ni imágenes junto a los anuncios |

## Lo que haces tú en la cuenta de AdSense

1. **Anuncios automáticos (Auto ads): apagados.** El sitio ya tiene sus ubicaciones. Si algún día los activas, excluye `/search/` en **Anuncios → Exclusiones de páginas**.
2. **Mensaje de consentimiento** en **Privacy & messaging**: crea el de **European regulations** (EEE, Reino Unido y Suiza) y el de **US state regulations**. Es la plataforma de consentimiento certificada de Google, gratis. Sin ella, en Europa solo se muestran anuncios limitados.
3. **Verifica `ads.txt`** en **Sites** unos días después del lanzamiento: debe decir "Authorized".

## Tráfico inválido: lo que nunca debes hacer

- **Nunca hagas clic en tus propios anuncios**, ni para "probar". Si te interesa un anunciante, escribe su dirección en el navegador.
- **No recargues** las páginas una y otra vez para ver anuncios. Para revisar el sitio, ábrelo en modo incógnito o usa `npm run dev` en local, donde no hay anuncios.
- **No pidas a amigos ni familiares** que hagan clic o que visiten el sitio en masa.
- **No compres tráfico** ni uses intercambios de visitas, bots, sitios de "tráfico garantizado" o redes de anuncios pop-under.
- **No publiques enlaces en grupos de "apoyo mutuo"** de clics.
- Comparte en redes y comunidades solo donde el artículo aporte de verdad (Reddit, dev.to, foros técnicos).

## Qué vigilar cada semana

| Métrica | Normal | Señal de alerta | Qué hacer |
|---|---|---|---|
| CTR de anuncios | 0,5 % – 3 % | Más de 5 %, o que se duplique de un día a otro | Revisa en **Informes** de dónde viene el tráfico. Si es raro, bloquéalo en Cloudflare |
| Tráfico | Sube de forma gradual | Picos de un solo país, una sola página o a horas raras | Cloudflare → **Security → Analytics**. Activa **Bot Fight Mode** (deja pasar a Googlebot) |
| Tráfico inválido | Ajustes pequeños en los pagos | Avisos en **Policy center** | Responde rápido. Si alguien te ataca con clics, repórtalo con el [formulario de actividad inválida](https://support.google.com/adsense/contact/invalid_clicks_contact) |

**Sobre la tasa de rebote:** AdSense no la usa como regla, pero un rebote alto indica que el lector no encontró lo que buscaba. El sitio ya la reduce con el veredicto arriba, el índice, los enlaces internos y el carrusel en la portada. Lo importante es que cada artículo responda bien la búsqueda.

## Antes de cambiar algo de los anuncios

- No agregues más de 3 `<Ad />` por artículo, y siempre entre secciones de texto.
- No cambies la etiqueta "Advertisements" por otra palabra.
- No pongas anuncios dentro de tablas, junto a botones, en el menú ni en el pie de página.
- No hagas que un anuncio se vea como contenido del sitio: mismo color de fondo que los enlaces, títulos falsos, etc.
