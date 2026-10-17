# vijoypandey.com

Personal website for Vijoy Pandey, built with Astro and deployed as a static site.

## GitHub Pages deployment

The repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.
Push to `main` or run the workflow manually to build and deploy the site to GitHub Pages.

In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.
The custom domain is defined in `public/CNAME`.

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the local development server |
| `npm run check` | Run Astro's type and template checks |
| `npm run build` | Build the production site to `dist/` |
