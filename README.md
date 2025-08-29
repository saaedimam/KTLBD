# WEB20

This project is a simple static web application built with HTML, CSS, and TypeScript bundled via Webpack.
It includes:

- A GitHub Pages workflow to deploy the site on every push to `main`.
- A GHCR workflow to build a production-ready Nginx image of the `dist/` output.
- A Vercel workflow for production deployments and preview URLs on pull requests.

## Quick start

Install dependencies and run a development server:

```sh
npm install
npm run build
npx serve dist
```

## Deployment

### GitHub Pages

This repository contains a `.github/workflows/pages.yml` workflow that automatically builds the project (if a `package.json` and build script are present) and publishes the `dist/` or `public/` folder to GitHub Pages.  To enable Pages, go to **Settings → Pages** and set the source to **GitHub Actions**.

### Docker (GHCR)

Use the `Dockerfile.nginx` to produce a lean Nginx image that serves the compiled project.  The `.github/workflows/docker-ghcr.yml` workflow builds and pushes the image to GitHub's container registry.

Run the image locally:

```sh
docker run -p 8080:80 ghcr.io/YOUR_USERNAME/web20:latest
```

### Vercel

A `.github/workflows/vercel.yml` workflow is provided for deployment to Vercel.  It installs dependencies, builds the project, and ensures that a `public/` directory exists before deploying using the `amondnet/vercel-action`.  Configure `VERCEL_TOKEN`, `VERCEL_ORG_ID`, and `VERCEL_PROJECT_ID` as repository secrets.  See `vercel.json` for build configuration.

## Support files

- `.nvmrc` pins the Node.js version to v20 for consistency across local and CI environments.
- `404.html` provides a single page app fallback for client-side routing.

Feel free to adjust the build commands and output directories according to your own tooling.

## Node Version (nvm)

This project targets Node.js 20.

- Version file: `.nvmrc` pins Node to `20.17.0`.
- Engines: `package.json` sets `"engines": { "node": "^20" }` to help CI and tooling.

Using nvm:

```sh
nvm install           # installs the version from .nvmrc (20.17.0)
nvm use               # switches your shell to that version
nvm alias default 20  # optional: make Node 20 your default
```
