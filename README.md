# Akshada Sanap: portfolio website

Next.js 14 (App Router), Tailwind CSS, Framer Motion, Lenis smooth scroll. Fonts are self-hosted through Fontsource, so there are no external requests at build time or runtime.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production check
```
Needs Node 18.17 or newer.

## Edit your content

Almost everything lives in **`content/site.ts`**: name, email, Instagram link, services, creators, videos, case studies, experience, offers.

Anything written like `[Add ...]` is a placeholder. Replace it or delete it before launch.

### Must-do before going live
1. `site.url` and `site.email`: replace `your-domain.com` and the placeholder email.
2. **Creators** (`managedCreators`): add each creator's real name, handle, niche and your exact scope. The five reel links are already in.
3. **Case studies**: for each brand, fill in the blocks on `/work/[slug]` and set `status: "live"`. Placeholder pages are marked noindex and left out of the sitemap until you do. Only add results the brand has confirmed.
4. **Brand sectors**: set the `sector` labels yourself. Several are left as `[Sector]`.
5. **About**: add a portrait in `components/About.tsx` (replace the dashed placeholder box).
6. **Strategy examples** (`strategyExamples`): swap placeholders for real calendars, scripts and trackers.

### Adding a video
1. Compress it: `ffmpeg -i in.mp4 -vf scale=720:-2 -c:v libx264 -crf 27 -c:a aac -b:a 96k -movflags +faststart public/videos/name.mp4`
2. Make a poster: `ffmpeg -ss 3 -i public/videos/name.mp4 -frames:v 1 -q:v 4 public/posters/name.jpg`
3. Add an entry to `videos` in `content/site.ts`. Set `whose` (`own`, `creator` or `sample`) and `role` to what you actually did. Use `aspect: "9 / 16"` for vertical clips.

### Adding a brand case study
Add an entry to `caseStudies`. A page is generated at `/work/<slug>` automatically. Each case study uses the same seven blocks (overview, objective, role, strategy, execution, creative examples, results), which map one to one onto a Behance project.

## Deploy (Vercel, free)
1. Push this folder to a GitHub repository.
2. Go to vercel.com, choose Add New, then Project, and import the repository. The defaults work as they are.
3. Add your domain under Settings, then Domains.
4. After changing `site.url`, redeploy so the sitemap and social tags update.

Netlify or any Node host also work (`npm run build`, then `npm start`).

## Notes
- Instagram reels are links, not embeds, because embeds are unreliable and heavy.
- Motion respects the reduced-motion setting. The hero spotlight drifts by itself on touch screens.
- Videos total about 25 MB. They load only when previewed or opened.
