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

## 🧪 Unit Testing (Vitest + React Testing Library)

### Running Tests

```bash
# Run all unit tests
pnpm test

# Run tests once (CI mode)
pnpm test -- --run

# Run tests with UI
pnpm test:ui

# Run tests with coverage
pnpm test:coverage
```

### Test Structure

Unit tests are located next to the components they test with the `.test.tsx` extension.


## 🎭 E2E Testing (Playwright)

### Running E2E Tests

```bash
# Run E2E tests (starts dev server automatically)
pnpm test:e2e

# Run E2E tests with UI mode
pnpm test:e2e:ui
```

### Test Structure

E2E tests are located in the `e2e/` directory with the `.spec.ts` extension.

## Future improvements

- i18n
