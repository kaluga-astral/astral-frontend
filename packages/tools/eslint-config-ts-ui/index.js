module.exports = {
  env: {
    jest: true,
    browser: true,
  },
  plugins: ['prettier', 'jest'],
  extends: ['airbnb-typescript', 'plugin:prettier/recommended'],
  parserOptions: {
    project: ['tsconfig.json'],
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'import/prefer-default-export': 'off',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',

    'prettier/prettier': ['error', { singleQuote: true }],

    'react/jsx-props-no-spreading': [
      'error',
      {
        html: 'enforce',
        custom: 'ignore',
      },
    ],

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
        pathGroups: [
          {
            pattern: '@foundation/gql-dto/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@foundation/cypress/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@foundation/core/components/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@foundation/core/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@foundation/entities/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@foundation/modules/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@foundation/interactors/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: 'shared/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'entities/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'modules/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'config/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'images/**',
            group: 'internal',
            position: 'after',
          },
        ],
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
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
};
