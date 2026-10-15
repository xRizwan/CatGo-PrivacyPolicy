# Cat Go! — website and privacy policy

Landing page + privacy policy for **Cat Go!** (`com.xoproductions.catgo`), published by XO Labs.
Served at **https://catgo.xoproduction.com** (and the older catgo.xolabs.anavrin.pk).

Built with [Astro](https://astro.build) as a fully static site. Vercel project `catgo`,
CLI-deployed, no Git link. `vercel.json` sets the Astro framework preset, so Vercel runs
`astro build` and serves `dist/`.

```
npm install
npm run dev        # http://localhost:4321
npm run build      # -> dist/
vercel --prod      # from this folder
```

| Path | Purpose |
|---|---|
| `src/pages/index.astro` | The landing page (all sections, structured data) |
| `src/components/LaneDemo.astro` | The small playable lane demo |
| `src/layouts/Layout.astro` | `<head>`: SEO, Open Graph, JSON-LD, fonts, global styles |
| `src/data/copy.json` | **All page copy.** Edit text here, not in the markup |
| `src/assets/` | Game art copied from `CatGo/Assets/_Project/Art/Lane` (Astro converts it to webp at build) |
| `public/privacy-policy.html` | The policy — **this URL is referenced by the Play listing**. Served at `/privacy-policy` via `cleanUrls` |
| `public/app-ads.txt` | AdMob's authorised-seller line. Crawlers start at the **root** domain, so the same file must also be served at `https://xoproduction.com/app-ads.txt` (Vercel project `xo-labs`). Add a line in both places for every ad network added. |
| `public/llms.txt`, `robots.txt`, `sitemap.xml` | For search and answer engines. Regenerate `llms.txt` if the copy changes a lot |
| `public/og-image.jpg` | 1200x630 social card, cut from `store/lane/feature-1024x500.png` |

Hero perks and prices on the page mirror `LaneCats.cs`; the comic captions mirror `LaneStory.cs`.
Change them together. **Remove the Halloween section after 31 October.**

## Keep the policy accurate

The policy has to match the **Data safety** declaration in the Play Console. If the
app's data handling changes, update both together:

- ads are Google AdMob (with UMP consent); leaderboards are Google Play Games Services
  (session 28, Oct 2026) - both are named in the policy
- adding another ad network or analytics → add a section, and declare it in Data safety
- changing purchase handling away from RevenueCat → update the partner table

A policy that contradicts the Data safety form is a common cause of Play rejection,
so treat this file as part of the release checklist rather than write-once.

Contact: xo.labs.production@gmail.com
