// Writes public/sitemap.xml with both language versions and hreflang links.
// lastmod is the date of the latest commit, so it only moves when content does.
// Runs automatically before `yarn build` (see "prebuild" in package.json).
import { writeFileSync } from 'node:fs'
import { execSync } from 'node:child_process'

const SITE = 'https://www.yasc.com.br'

let lastmod = new Date().toISOString().slice(0, 10)
try {
  lastmod = execSync('git log -1 --format=%cs', { stdio: ['ignore', 'pipe', 'ignore'] })
    .toString()
    .trim() || lastmod
} catch {
  // No git history available (for example a tarball build): keep today's date.
}

const urls = { pt: `${SITE}/`, en: `${SITE}/en` }

const entry = (loc) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${urls.pt}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${urls.en}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${urls.pt}"/>
  </url>`

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entry(urls.pt)}
${entry(urls.en)}
</urlset>
`

writeFileSync('public/sitemap.xml', xml)
console.log(`sitemap.xml written (lastmod ${lastmod})`)
