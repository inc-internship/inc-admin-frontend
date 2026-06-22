# INC Admin Frontend

Starter project for the administrative dashboard of an Instagram-like product. The repository is intended to be the base for a front-end team: shared UI, application providers, locale-aware routing, Redux Toolkit store, and Storybook are already wired together.

## Stack

- `Next.js 16` with App Router
- `React 19`
- `TypeScript`
- `Redux Toolkit` + `RTK Query`
- `SCSS Modules`
- `Storybook 10`

## Getting Started

1. Install dependencies:

```bash
pnpm install
```

2. Create local environment file from the example:

```bash
cp .env.example .env.local
```

3. Set the backend API URL:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

4. Run the application:

```bash
pnpm dev
```

The app will be available at `http://localhost:3000`. Middleware redirects the root path to the default locale route, so the first real page is `http://localhost:3000/en`.

## Scripts

- `pnpm dev` - run Next.js in development mode
- `pnpm build` - production build
- `pnpm start` - start the production server
- `pnpm lint` - run ESLint
- `pnpm typecheck` - run TypeScript checks without emitting files
- `pnpm storybook` - run Storybook locally on port `6006`
- `pnpm build-storybook` - build static Storybook output into `storybook-static`
- `pnpm check` - run the main quality gates: lint, typecheck, app build, Storybook build

## Project Structure

```text
src/
  app/                    App Router entrypoints, layouts, global providers
    [lang]/               Locale-aware pages and layouts
    providers/            Store and application providers
    styles/               Global SCSS tokens and boilerplate
  shared/
    api/                  RTK Query base API
    i18n/                 Locale config, dictionaries, path helpers
    store/                Typed Redux hooks
    ui/                   Shared UI components and stories
    styles/               Shared SCSS variables and mixins
  views/                  Route-level view components
  widgets/                Composite UI blocks
  features/               Feature-level logic and UI
  entities/               Domain entities
```

The repository already contains the structural layers for a feature-sliced style architecture. New business functionality should follow the same separation:

- `entities` for domain primitives and entity-centric UI
- `features` for user actions and feature workflows
- `widgets` for assembled interface blocks
- `views` for route-level composition

## Store Setup

The project already has typed Redux hooks in [src/shared/store](/C:/Users/User/inc-admin-frontend/src/shared/store/index.ts:1):

- `useAppDispatch`
- `useAppSelector`

The store configuration lives in [src/app/providers/store/config](/C:/Users/User/inc-admin-frontend/src/app/providers/store/config/store.ts:1).

Current state foundation:

- `session` slice for application session state
- `baseApi` reducer from RTK Query
- `rootReducer` as the single reducer composition point

### How to add a new slice

1. Create a slice in `src/app/providers/store/config` or move slices later into their feature/entity module when the domain becomes clearer.
2. Export its reducer.
3. Register it in [rootReducer.ts](/C:/Users/User/inc-admin-frontend/src/app/providers/store/config/rootReducer.ts:1).
4. Read it from components with `useAppSelector`.
5. Dispatch actions with `useAppDispatch`.

Minimal pattern:

```ts
import { createSlice } from '@reduxjs/toolkit'

const exampleSlice = createSlice({
  name: 'example',
  initialState: { value: 0 },
  reducers: {
    increment: state => {
      state.value += 1
    },
  },
})

export const { increment } = exampleSlice.actions
export const exampleReducer = exampleSlice.reducer
```

Then connect it in `rootReducer`:

```ts
export const rootReducer = combineReducers({
  session: sessionReducer,
  example: exampleReducer,
  [baseApi.reducerPath]: baseApi.reducer,
})
```

## Locale Routing

The application now uses locale-aware routing through `app/[lang]`.

Current behavior:

- `/` redirects to `/en`
- `/en` and `/ru` are statically generated
- invalid locale segments fall into `notFound()`
- middleware redirects non-localized application routes to the default locale

Key files:

- [middleware.ts](/C:/Users/User/inc-admin-frontend/middleware.ts:1)
- [src/app/[lang]/layout.tsx](/C:/Users/User/inc-admin-frontend/src/app/[lang]/layout.tsx:1)
- [src/app/[lang]/page.tsx](/C:/Users/User/inc-admin-frontend/src/app/[lang]/page.tsx:1)
- [src/shared/i18n/config.ts](/C:/Users/User/inc-admin-frontend/src/shared/i18n/config.ts:1)
- [src/shared/i18n/routing.ts](/C:/Users/User/inc-admin-frontend/src/shared/i18n/routing.ts:1)

### How to add a new localized page

Create the route under `src/app/[lang]/...`.

Example:

```text
src/app/[lang]/users/page.tsx
```

This keeps locale in the URL and allows the existing `useI18n` provider to stay aligned with the current pathname.

## Storybook

Storybook is configured to document shared UI components from `src/shared/ui`.

Run locally:

```bash
pnpm storybook
```

Build static output:

```bash
pnpm build-storybook
```

Storybook uses:

- global SCSS from `src/app/styles/index.scss`
- Vite alias `@ -> src`
- shared SCSS load paths for module styles

## Environment Variables

Documented environment variables:

- `NEXT_PUBLIC_API_URL` - public base URL for backend API requests used by RTK Query

Keep `.env.local`, `.env.production`, and CI secrets aligned with this variable name.

## Current Conventions

- Shared reusable components live in `src/shared/ui`
- Each shared component may have a colocated `*.stories.tsx`
- Global state goes through Redux Toolkit
- Remote data should go through RTK Query
- Locale-aware pages must live under `app/[lang]`
- Generated artifacts such as `storybook-static` must not be committed as source

## Recommended Next Steps

To turn this repository into a stronger team starter, the next additions should be:

1. Add a real admin layout with sidebar and topbar
2. Introduce one reference business module, for example `users moderation`
3. Choose one testing stack and remove duplicated tooling
4. Add CI around `pnpm check`
5. Expand the session slice into real auth/session handling
