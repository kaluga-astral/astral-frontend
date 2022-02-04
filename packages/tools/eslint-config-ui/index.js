module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended'],
  parser: 'babel-eslint',
  plugins: ['prettier', 'jest', 'import', 'jsx-a11y', 'react'],
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    // проблема при экспорте одиночной константы
    // TODO: вынести на обсуждение по style guid
    'import/prefer-default-export': 'off',
    'react/function-component-definition': 'off',

    'prettier/prettier': ['error', { singleQuote: true, trailingComma: 'all' }],

    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.stories.jsx',
          '**/*.test.jsx',
          '**/setupEnzyme.js',
        ],
      },
    ],

    'react/jsx-props-no-spreading': [
      'error',
      {
        html: 'enforce',
        custom: 'ignore',
      },
    ],
    'react/require-default-props': 'off',
    'react/state-in-constructor': 'off',

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

    'comma-dangle': ['error', 'always-multiline'],
  },
};
