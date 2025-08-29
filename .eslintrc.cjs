/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'script',
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'prettier',
  ],
  plugins: ['import'],
  rules: {
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
  },
  overrides: [
    {
      files: ['scripts/**/*.js'],
      env: { browser: true, node: false },
      globals: {
        window: 'readonly',
        document: 'readonly',
        location: 'readonly',
        CONFIG: 'readonly',
        KTL: 'writable',
        confetti: 'readonly',
      },
      parserOptions: { sourceType: 'script' },
    },
    {
      files: ['build.js', 'index.js', 'serve.js'],
      env: { node: true, browser: false },
      extends: ['plugin:n/recommended'],
      plugins: ['n'],
    },
  ],
};

