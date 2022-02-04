module.exports = {
  env: {
    jest: true,
    browser: true,
  },
  plugins: ['prettier', 'jest', 'import', 'jsx-a11y', 'react'],
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
