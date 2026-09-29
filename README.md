# release-please-test

Test repository for opencoreemr/release-please fork features:

- `--annotated-tag` / `annotated-tag` config option
- `--json` flag for machine-readable dry-run output
- Multi-component releases in the same shape as oce-fe-harness: a pnpm workspace with three path-scoped components, `separate-pull-requests`, and the `node-workspace` plugin

## Components

| Path | Component | Tags | Depends on |
|------|-----------|------|------------|
| `apps/web` | `web` | `web-vX.Y.Z` (continues the `1.4.2` line) | `@rpt/api-contracts` |
| `apps/operator` | `operator` | `operator-vX.Y.Z` (from `1.0.0`) | `@rpt/api-contracts` |
| `packages/api-contracts` | `api-contracts` | `api-contracts-vX.Y.Z` (from `1.0.0`) | — |

Both apps depend on the contracts package through `workspace:*`, so `node-workspace` patch-bumps them whenever the contracts package has a pending release. A commit that touches only `packages/api-contracts/` therefore exercises the dependency-only release pull requests the plugin creates for the apps.

Releases before the split were repository-wide (`release-please-test-vX.Y.Z`); the root `CHANGELOG.md` is frozen at the last of them.

## Functions

`packages/api-contracts/index.js` exports:

- `greet(name)` - Say hello
- `farewell(name)` - Say goodbye
- `welcome(name)` - Welcome someone
- `celebrate(name)` - Congratulate someone
- `thank(name)` - Thank someone
