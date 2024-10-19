import tseslint from 'typescript-eslint'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(prettierRecommended, {
  rules: {
    '@typescript-eslint/consistent-type-imports': 'warn',
    'prettier/prettier': 'error',
    'vue/multi-word-component-names': 'warn',
  },
}).prepend(tseslint.configs.recommended, tseslint.configs.stylistic)
