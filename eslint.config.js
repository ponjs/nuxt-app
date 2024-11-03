import prettierRecommended from 'eslint-plugin-prettier/recommended'
import tseslint from 'typescript-eslint'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  prettierRecommended,
  {
    rules: {
      '@typescript-eslint/consistent-indexed-object-style': 'off',
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/consistent-type-imports': 'warn',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/naming-convention': [
        'warn',
        {
          selector: ['interface', 'typeAlias', 'enum'],
          format: ['PascalCase', 'UPPER_CASE'],
        },
      ],
      curly: ['error', 'multi-line', 'consistent'],
      'dot-notation': 'warn',
      'no-lone-blocks': 'error',
      'no-lonely-if': 'error',
      'no-useless-rename': 'error',
      'object-shorthand': 'error',
      'quote-props': ['error', 'as-needed'],
      'prettier/prettier': 'error',
      'nuxt/nuxt-config-keys-order': 'error',
      'import/newline-after-import': ['error', { count: 1 }],
      'import/order': [
        'warn',
        {
          groups: [['builtin', 'external'], 'internal', ['parent', 'index', 'sibling']],
          alphabetize: { order: 'asc' },
        },
      ],
      'vue/block-order': [
        'error',
        {
          order: ['script', 'template', 'style'],
        },
      ],
      'vue/block-tag-newline': [
        'error',
        {
          multiline: 'always',
          singleline: 'always',
        },
      ],
      'vue/html-comment-content-spacing': ['error', 'always', { exceptions: ['-'] }],
      'vue/multi-word-component-names': 'off',
      'vue/padding-line-between-blocks': ['error', 'always'],
    },
  },
  {
    files: ['**/*.d.ts'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
    },
  }
)
  .prepend(tseslint.configs.recommended, tseslint.configs.stylistic)
  .override('nuxt/typescript/rules', {
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
    },
  })
