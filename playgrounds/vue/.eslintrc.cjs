module.exports = {
  extends: [
    '@skg3n/eslint-config-vue',
  ],
  parserOptions: {
    project: [
      './tsconfig.app.json',
      './tsconfig.config.json',
    ],
  },
};