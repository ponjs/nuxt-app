import prettierRecommended from 'eslint-plugin-prettier/recommended'
import tseslint from 'typescript-eslint'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(prettierRecommended, {
  rules: {
    '@stylistic/arrow-parens': 'off',
    '@stylistic/brace-style': 'off',
    '@stylistic/comma-dangle': 'off',
    '@typescript-eslint/consistent-type-imports': 'warn',
    'dot-notation': 'warn',
    'prettier/prettier': 'error',
    'import/order': [
      'warn',
      {
        groups: [['builtin', 'external'], 'internal', ['parent', 'index', 'sibling']],
        alphabetize: { order: 'asc' },
      },
    ],
    'vue/multi-word-component-names': 'off',
  },
}).prepend(tseslint.configs.recommended, tseslint.configs.stylistic)
