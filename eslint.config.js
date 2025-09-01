import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import nPlugin from 'eslint-plugin-n';

export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    plugins: {
      import: importPlugin,
      n: nPlugin,
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        // Node.js globals
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        location: 'readonly',
        fetch: 'readonly',
        FormData: 'readonly',
        URLSearchParams: 'readonly',
        setTimeout: 'readonly',
        setInterval: 'readonly',
        requestAnimationFrame: 'readonly',
        IntersectionObserver: 'readonly',
        // Custom globals
        CONFIG: 'readonly',
        KTL: 'readonly',
        confetti: 'readonly',
      },
    },
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      'no-useless-catch': 'off',
      'import/no-unresolved': 'off',
      'n/no-missing-require': 'off',
      'n/no-unpublished-require': 'off',
    },
  },
  {
    ignores: [
      'node_modules/**',
      'project/node_modules/**',
      'dist/**',
      'public/**',
      'build/**',
    ],
  },
];
