module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended'],
  parser: 'babel-eslint',
  plugins: ['prettier', 'jest'],
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    // проблема при экспорте одиночной константы
    // TODO: вынести на обсуждение по style guid
    'import/prefer-default-export': 'off',
    quotes: ['error', 'single'],

    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.stories.jsx', '**/*.test.jsx'] },
    ],

    'react/jsx-props-no-spreading': [
      'error',
      {
        html: 'enforce',
        custom: 'ignore',
      },
    ],
    // смотрим, чтобы в линки не прокидывали лишнего, например onClick
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to', 'hrefLeft', 'hrefRight'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],

    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['internal'],
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'object',
          'index',
        ],
      },
    ],
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: false,
      },
    ],
  },
};
