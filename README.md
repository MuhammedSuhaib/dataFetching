# Data Fetching Projects

This repository contains two Next.js projects demonstrating different approaches to data fetching - one using traditional CSS and another using Tailwind CSS. Both projects showcase both client-side and server-side data fetching methods.

## Projects

- **CSS Version**: Built with traditional CSS modules
- **Tailwind CSS Version**: Built with Tailwind CSS utility classes

Each project includes:

- **Server-Side Data Fetching**: Fetches data at build time using Next.js App Router (Static Site Generation)
- **Client-Side Data Fetching**: Fetches data in the browser using React hooks

## Data Sources

- **Server-Side**: Uses [Simple Books API](https://simple-books-api.glitch.me/) to fetch book information
- **Client-Side**: Uses [Fake Store API](https://fakestoreapi.com/) to fetch product information

## Deployment

This repository is deployed as a monorepo with both projects hosted at:
- Main page: https://muhammedsuhaib.github.io/dataFetching/
- CSS Version: https://muhammedsuhaib.github.io/dataFetching/css/
- Tailwind Version: https://muhammedsuhaib.github.io/dataFetching/tailwindcss/

## Architecture & Development Notes

### **Consolidated Deployment & Monorepo Learning Documentation**

#### **1. Monorepo Architecture (Git Subtree)**
*   **The Problem:** Merging independent repositories without losing commit history.
*   **The Solution:** Use `git subtree` instead of `git add` or submodules.
*   **Key Command:** `git subtree add --prefix=foldername remote-label branchname`.
*   **Outcome:** All authors, timestamps, and history are preserved in one parent repository.

#### **2. Multi-Project Asset Management**
*   **The Strategy:** Maintain **one single `public/` folder** at the root for maintainability.
*   **The Build Trick:** Since Next.js projects look for assets inside their own `public/` folder, the CI/CD pipeline must **copy** the root `public/` folder into each project directory (`css/public/`, `tailwindcss/public/`) **before** running `npm/pnpm run build`.

#### **3. Path Resolution in Subfolder Deployments**
*   **GitHub Pages Constraint:** Projects are hosted at `username.github.io/repo-name/css/`, not at the domain root.
*   **Absolute vs. Relative:**
    *   `href="/ClientSide"` fails because it looks at the domain root.
    *   `href="./ClientSide"` or `href="ClientSide"` succeeds because it stays within the project subfolder.
*   **Images:** Using `./7.png` works everywhere if the asset is copied to every project folder during the build.

#### **4. Data Fetching on Static Hosts (GitHub Pages)**
*   **Client-Side (`use client`):** Works dynamically at runtime. Browsers fetch data every time a user visits. Ideal for live data (e.g., `fakestoreapi`).
*   **Server-Side (App Router):** Operates as **SSG (Static Site Generation)**. Data is fetched **once** during the GitHub Action build. The HTML becomes static. Ideal for data that doesn't change often (e.g., book lists).
*   **Limitation:** You cannot use `getServerSideProps` or dynamic server-side logic on GitHub Pages; everything must be exportable as HTML/JS/CSS.

#### **5. Advanced CI/CD (GitHub Actions)**
*   **Multi-Project Orchestration:** A single `.yml` file can handle multiple builds by using `cd project-folder` commands.
*   **Caching Strategy:** To speed up builds with `pnpm`, you must specify `cache-dependency-path` for all `pnpm-lock.yaml` files in the monorepo to avoid "lock file not found" errors.
*   **Artifact Preparation:** Use a `dist/` folder to manually structure the final site:
    *   `dist/index.html` (Landing Page)
    *   `dist/css/` (Project 1)
    *   `dist/tailwindcss/` (Project 2)

#### **6. Troubleshooting Common Deployment Errors**
*   **404 on Subpages:** Caused by absolute paths in `Link` components.
*   **Missing Images:** Caused by relative paths pointing to the parent directory (`../../../public`) which doesn't exist after the project is bundled into a standalone `out` folder.
*   **Build Failures:** Often due to missing environment variables or `basePath` mismatches in `next.config`.

## Technologies Used

- Next.js 14 with App Router
- React Server Components and Client Components
- Tailwind CSS (for the Tailwind version)
- CSS Modules (for the CSS version)
- TypeScript
- pnpm (package manager)

## Local Development

To run either project locally:

1. Navigate to the project directory (`cd css` or `cd tailwindcss`)
2. Install dependencies: `pnpm install`
3. Run the development server: `pnpm dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser