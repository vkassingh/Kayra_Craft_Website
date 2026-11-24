# Kayra Craft Project Guide

This guide helps contributors find the right files and make changes to the Kayra Craft website. The project is a Next.js application using the App Router, React, and Tailwind CSS.

## Getting started

You will need Node.js and npm installed.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. The available package scripts are:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run build` | Create a production build. |
| `npm run start` | Serve the production build; run `npm run build` first. |

There are currently no test or lint scripts in `package.json`.

## Project structure

```text
.
├── app/
│   ├── contact/
│   │   └── page.js
│   ├── privacy-policy/
│   │   └── page.js
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── components/
│   ├── Features.js
│   ├── Footer.js
│   ├── Hero.js
│   ├── HowItWorks.js
│   ├── Listings.js
│   ├── Navbar.js
│   ├── SellBanner.js
│   └── Testimonials.js
├── public/
│   └── images/
├── jsconfig.json
├── next.config.js
├── package.json
├── postcss.config.js
└── tailwind.config.js
```

Generated files and installed dependencies are not source files: `.next/` contains Next.js build/development output, and `node_modules/` contains installed packages.

## Routes and page composition

The App Router creates routes from folders under `app/`:

| URL | Entry file | Purpose |
| --- | --- | --- |
| `/` | `app/page.js` | Home page, composed from the shared components. |
| `/contact` | `app/contact/page.js` | Contact options, message form, and FAQs. |
| `/privacy-policy` | `app/privacy-policy/page.js` | Privacy policy content. |

`app/layout.js` is the shared root layout. It imports the global stylesheet and sets the document language and site metadata. Add a new route by creating a folder under `app/` with a `page.js` file.

## Important files

### Application and layout

- `app/page.js` assembles the home page in display order: navigation, hero, features, listings, how-it-works, testimonials, seller banner, and footer.
- `app/contact/page.js` owns the contact page and its local form/FAQ state. It is a client component.
- `app/privacy-policy/page.js` owns the privacy page and its policy text.
- `app/layout.js` provides global document metadata and imports `app/globals.css`.
- `app/globals.css` contains Tailwind directives, smooth scrolling, base page colors, and the shared text-shadow utility.

### Reusable UI

- `components/Navbar.js` provides desktop and mobile navigation. Its section links depend on matching IDs in the home-page sections.
- `components/Hero.js` renders the home-page introduction and links into the listings and seller sections.
- `components/Features.js` displays marketplace benefits.
- `components/Listings.js` renders the sample product cards and their tags.
- `components/HowItWorks.js` describes the buyer and seller flows.
- `components/Testimonials.js` renders the sample testimonials.
- `components/SellBanner.js` contains the seller call to action and email input.
- `components/Footer.js` contains site navigation and the privacy/contact links.

### Configuration and assets

- `package.json` lists dependencies and the supported npm scripts; `package-lock.json` locks dependency versions.
- `tailwind.config.js` defines the content scan paths and the shared `cream`, `walnut`, `sand`, and `charcoal` colors, plus the serif font family.
- `postcss.config.js` configures CSS processing.
- `next.config.js` contains Next.js configuration.
- `jsconfig.json` maps `@/` imports to the project root (for example, `@/components/Navbar`).
- `public/images/` stores static images. Reference an image from the browser using a URL starting at `/images/`, not a filesystem path.
- `.gitignore` excludes dependencies, generated Next.js output, environment files, and other local artifacts.

## Working in this codebase

- Keep route-specific page content in its `app/<route>/page.js`; move UI reused across pages into `components/`.
- The home page's section navigation uses fragment IDs such as `#shop`, `#listings`, `#how-it-works`, and `#sell`. Keep IDs and links in sync when changing sections.
- Components that use React hooks or browser-side event handlers must be client components; follow the existing `"use client";` convention at the top of the file.
- Use the Tailwind color tokens in `tailwind.config.js` to keep new UI aligned with the existing palette. Put truly global styles in `app/globals.css`.
- Add static images under `public/images/` and use their public URL paths in components.
- The project uses JavaScript (`.js`) rather than TypeScript.
- The `@/` alias is configured in `jsconfig.json`; preserve it for project-local imports.

## Current implementation notes

This repository currently provides a front-end presentation rather than a connected commerce backend:

- `components/Listings.js` stores sample product data directly in the component. Its image paths (for example, `/images/dining-table.jpg`) do not match the current filenames in `public/images/`; update the data paths or add the corresponding assets when changing listings.
- Product actions such as “Add to Cart” and “View All Listings” are presentation-only; no cart or catalog service is wired up.
- The contact form displays a local confirmation state, but does not send the message to a server or email service.
- The seller email form prevents the browser's default submission and does not enroll or send the address anywhere.

When adding real submission or commerce behavior, connect it to an explicit backend/API flow and update the UI to report success and failure accurately.
