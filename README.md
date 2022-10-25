# repro-bug-nuxt3-auto-import
Reproduction nuxt 3 auto import component

### Steps

```
corepack enable
pnpm i
```

- See that `packages/nuxt-app/app.vue` does not autocomplete the `GButton` component

To make it work :

- In `packages/ui/components/index.ts` change first line to `export * from './shared/atoms/GButton'`

- run `pnpm i` (this run `prepare` script in all packages)

==> Now autocomplete works
