import stylistic from '@stylistic/eslint-plugin'
import { defineConfig } from "eslint/config"

export default defineConfig([
  {
    ignores: [
      '**/*.d.ts',
      '**/tests',
      'coverage/**',
      'node_modules/*',
      'build/*',
      'static/*',
      'lib/posts/*',
      'tmp/**',
      'tsconfig.json',
      '.svelte-kit/**',
    ] 
	},
  stylistic.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      'no-console': 'error',
      'object-shorthand': 'off',
      'no-var': 'off',
      '@stylistic/quotes': 'off',
      'prefer-const': 'off',
    },
  },
  {
    files: ['src/**/*'],
    rules: {
      'svelte/no-svelte-internal': 'off',
    },
  },
])
