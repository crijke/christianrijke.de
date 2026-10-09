# christianrijke.de

My personal website: a single page about my work as a software engineer.

## Stack and approach

- **[Astro](https://astro.build) with React components.** The sections are React components
  that Astro renders to static HTML at build time. Only the parts that need interactivity ship
  JavaScript: the section navigation, the theme toggle and the copy button
  (`client:` directives in `src/pages/index.astro` and `src/components/SiteHeader.astro`).
- **Tailwind CSS v4**, configured in CSS (`src/styles/global.css`). Colour tokens use
  `light-dark()`, so utilities follow the active colour scheme without `dark:` variants.
- **Scroll-driven animations in plain CSS** (`animation-timeline: view()` / `scroll()`): the
  experience timeline fills as you scroll, entries fade in, and the header shows reading
  progress. They're progressive enhancement: browsers without support and users with
  `prefers-reduced-motion` get the final, static state.
- **Theme switching with the View Transitions API**, revealing the new theme from the toggle.
  A small inline script applies a stored theme before first paint.
- **No third-party requests.** Fonts and images are self-hosted and optimised at build time.

Content lives in typed modules in `src/content/`, separate from the components.

## Development

Requires Node.js 24 (see `.nvmrc`).

```sh
npm install
npm run dev        # http://localhost:4321
```

| Script             | Purpose                                              |
| ------------------ | ---------------------------------------------------- |
| `npm run build`    | Static build into `dist/`                            |
| `npm run preview`  | Serve the build locally                              |
| `npm test`         | Unit and component tests (Vitest, Testing Library)   |
| `npm run test:e2e` | End-to-end and accessibility tests (Playwright, axe) |
| `npm run lint`     | ESLint                                               |
| `npm run check`    | Type-check Astro and TypeScript files                |
| `npm run verify`   | All of the above, as run in CI                       |

`npm run test:e2e` builds nothing itself; run `npm run build` first. To test a running
deployment instead of the local preview, set `BASE_URL`, e.g.
`BASE_URL=http://localhost:8080 npm run test:e2e`.

## Deployment

The site is a static build served by nginx in a Docker container
(`Dockerfile`, `deploy/nginx.conf`), with security headers, long-term caching for hashed assets
and clean URLs (`/imprint` serves `imprint.html`).

```sh
docker compose up -d --build   # serves on 127.0.0.1:8080
```

The container only speaks HTTP and is meant to sit behind a reverse proxy on the host that
handles TLS and redirects. For example, with Caddy:

```caddy
christianrijke.de {
	reverse_proxy 127.0.0.1:8080
}

www.christianrijke.de, christianrijke.ch, www.christianrijke.ch {
	redir https://christianrijke.de{uri} permanent
}
```

`dist/` also works on any static host (e.g. uploaded to shared hosting), but then the security
headers and clean URLs need to be configured there.
