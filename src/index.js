module.exports = {
  root: true,
  env: {
    browser: true,
    'vue/setup-compiler-macros': true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript/recommended',
    '@skg3n/eslint-config-base',
  ],
  ignorePatterns: [
    '**/.stylelintrc.cjs',
  ],
  rules: {
    'max-len': ['error', { code: 150 }],
  },
};
