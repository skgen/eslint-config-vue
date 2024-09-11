# `@skg3n/eslint-config-vue`

## Install:

```sh
pnpm add -D @skg3n/eslint-config-vue eslint@^8.0.0 typescript@~5.4.5
```

```js
// .eslintrc.cjs

module.exports = {
  extends: [
    '@skg3n/eslint-config-vue',
  ],
  parserOptions: {
    project: [
      './tsconfig.json', // your tsconfig file
    ],
  },
};
```