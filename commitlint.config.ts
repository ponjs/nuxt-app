import { RuleConfigSeverity, type UserConfig } from '@commitlint/types'

export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-empty': [RuleConfigSeverity.Error, 'never'],
    'type-case': [RuleConfigSeverity.Error, 'always', 'lower-case'],
    'type-empty': [RuleConfigSeverity.Error, 'never'],
    'type-enum': [
      RuleConfigSeverity.Error,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'chore', 'test'],
    ],
  },
} satisfies UserConfig
