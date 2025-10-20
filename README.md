# Podcast Mini-Application

A Single Page Application for browsing and listening to music podcasts from Apple's iTunes. Features real-time search, episode management, intelligent caching, and a built-in audio player.

## Deployed version
- [https://podcast-app-lsf.vercel.app](https://podcast-app-lsf.vercel.app)

## Tech Stack

- **React 18** with TypeScript
- **Vite** for build tooling
- **TanStack Query** for data fetching and caching
- **React Router v6** for client-side routing
- **Tailwind CSS** + **shadcn/ui** for styling

## Installation

```bash
npm install
```

## Development

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## Project Structure

```
src/
├── app/                 # Application configuration
├── domain/              # Business entities and interfaces
├── infrastructure/      # External services (API)
├── features/            # Feature modules (podcasts, episodes)
└── shared/              # Shared components and utilities
```

## Future improvements

- i18n
- Unit test with vitest
- E2E tests with playwright
