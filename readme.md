# Hydro Wash Website

## Overview
This repository contains a Next.js website for the Hydro Wash project. The main app is in the project root under `app/`, with older example copies in `hydro-wash/` and `hydro-wash 2/`.

## What is not committed to GitHub
The repository intentionally excludes generated files, local artifacts, and environment-specific data. These are typically created at runtime or exist only on a developer machine.

### Common files/folders left out of GitHub
- `node_modules/` - installed npm packages
- `.next/` - Next.js build/cache output
- `dist/` - generated build output
- `.npm-cache/` - npm cache directory
- `*.log` - npm/yarn debug logs
- `.DS_Store` - macOS Finder metadata files
- `.vercel/` - Vercel deployment metadata
- `*.pem` - private certificate/key files
- `tsconfig.tsbuildinfo` - TypeScript incremental build cache
- `.env`, `.env.local`, `.env.*` - environment variable files

### Local development artifacts present in this workspace
These files should not be committed and are specific to a local environment:
- `dev.db` - local database file
- `dev.db-journal` - local database journal file

## Required libraries and frameworks
The project depends on the following libraries, as declared in `package.json`:

- `next` ^14.2.0
- `react` ^18.2.0
- `react-dom` ^18.2.0
- `tailwindcss` ^4.2.4
- `@tailwindcss/postcss` ^4.2.4
- `mongodb` ^7.2.0
- `@prisma/client` ^7.8.0

Dev dependencies:
- `prisma` ^6.19.3
- `typescript` (latest)
- `@types/node` ^25.6.0
- `@types/react` latest
- `@types/react-dom` latest
- `@prisma/config` ^7.8.0

## System requirements
To run this project, you should have:

- Node.js (recommended 18.x or newer)
- npm (comes with Node.js)
- A MongoDB instance or connection string
- A `.env` file configured with the required environment values

## Setup and run
1. Install dependencies:
   ```bash
   npm install
   ```
2. Create your environment file:
   - Copy or create a `.env` file at the project root
   - Add the required values such as `MONGODB_URI`
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```
5. Start the production server:
   ```bash
   npm start
   ```

## Notes
- There is no sample `.env` file in the repository, so environment variables must be created manually.
- If the app uses Prisma migrations or a database schema, run the appropriate Prisma commands as needed.
- This README describes the current root project and the types of files that are intentionally excluded from source control.
