# Executor TypeScript Template

A minimal, production-ready TypeScript template for Executor-style Roblox projects using `roblox-ts`, `rbxts-bundler`, and `rojo`.

## Features
- TypeScript source compiled with `roblox-ts` (`rbxtsc`)
- Rojo export to a `.rbxm` in `dist/`
- Luau bundling for Executor runtimes via `rbxts-bundler`
- ESLint + Prettier configuration included

**Note:** All imports under `@rbxts` and `@executor-ts` namespaces are valid and will be bundled with the rest of your code.

## Requirements
- Node.js (v16+ recommended)
- npm (comes with Node.js)
- `rojo` available on your PATH (used by `npm run rojo`)

## Quick start

```bash
npm install              # Install dependencies
npm run build            # Compile TypeScript with rbxtsc
npm run watch            # Watch mode for development
npm run deploy           # Full pipeline: build → rojo → bundle
```

## Available scripts
- `build` — Compile TypeScript with `rbxtsc` (produces compiled output used by Rojo)
- `watch` — Run `rbxtsc` in watch mode for development
- `rojo` — Ensure `dist/` exists and run `rojo build -o dist/build.rbxm`
- `bundle` — Run `rbxts-bundler` to produce Executor Luau bundles into `dist/scripts` (all targets included)
- `deploy` — Full pipeline: `build` → `rojo` → `bundle`

### Bundle targets

- `dev` — line data and debugging preserved.
- `rel` — optimized for size/performance; more difficult to debug.
- `*-compat` (e.g. `dev-compat`, `rel-compat`) — produce bundles compatible with earlier Luau versions, aiming to be as close to Lua 5.1 compatibility as possible.

## Project layout

- [config/](config/) — ESLint and Prettier configuration
- [include/](include/) — Runtime includes (`Promise.lua`, `RuntimeLib.lua`)
- [src/](src/) — TypeScript source code
  - [index.client.ts](src/index.client.ts) — Entry point
  - [libs/module.ts](src/libs/module.ts) — Example module
 - `dist/` — Generated output (created by build scripts)
  - `build.rbxm` — Rojo-compiled model file (created by the `rojo` script)
  - `scripts/` — Luau bundles produced by `rbxts-bundler`. Expect multiple targets such as `dev`, `dev-compat`, `rel`, and `rel-compat` (filenames depend on bundler configuration)
- [package.json](package.json) — Dependencies and scripts

## Contributing

1. Fork the repository and create a feature branch
2. Make your changes and ensure they build: `npm run deploy`
3. Run linting checks (configure your editor to use the ESLint/Prettier configs in `config/`)
4. Submit a pull request with a clear description of changes

## License

See [LICENSE](LICENSE) for details.