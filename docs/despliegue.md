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
