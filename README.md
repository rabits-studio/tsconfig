# Rabits TSConfig

A collection of [Rabits](https://rabits.dev) TypeScript configuration files designed to enforce the strictest possible type checking.

## Installation

```sh
pnpm add -D -E @rabits/tsconfig typescript
```

## Usage

`tsconfig.json`:

```json
{
  "extends": ["@rabits/tsconfig/<preset>"],
  "compilerOptions": {
    // Your own configurations.
  }
}
```

### Available Presets

| Preset | Usage                                 |
| ------ | ------------------------------------- |
| base   | Base config shared across all presets |
| react  | React app (vite / nextjs)             |
| node   | Node.js app (node / ts-node)          |
| tsx    | Node.js app (tsx)                     |

## Recommendations

### Next.js

```json
{
  "extends": ["@rabits/tsconfig/react"],
  "compilerOptions": {
    "target": "ES2017",
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### Hono + TSX

```json
{
  "extends": ["@rabits/tsconfig/tsx"],
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "hono/jsx"
  },
  "include": ["**/*.ts"],
  "exclude": ["node_modules"]
}
```

## Credits

Development of `@rabits/tsconfig` was inspired by the following open-source projects.\
Sincere thanks to their authors and contributors.

- [`@fullstacksjs/tsconfig`](https://github.com/fullstacksjs/tsconfig) ([Website](https://fullstacksjs.com/en))
- [`@tsconfig/*`](https://github.com/tsconfig/bases)
