# Rabits TSConfig

Rabits' base TSConfig

## Framework Guides:

### Hono

```json
{
  "extends": ["./configs/base.json", "./configs/strict.json"],
  "compilerOptions": {
    // TSX
    "lib": ["ES2024"],
    "module": "preserve",

    // Hono
    "jsx": "react-jsx",
    "jsxImportSource": "hono/jsx",

    "paths": {
      "@/*": ["./*"]
    }
  },
  "exclude": ["node_modules"],
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"]
}
```

### Next.js

```json
{
  "extends": ["./configs/base.json", "./configs/strict.json"],
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "strict": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "jsx": "preserve",
    "plugins": [{ "name": "next" }],

    "paths": {
      "@/*": ["./*"]
    }
  },
  "exclude": ["node_modules"],
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"]
}
```
