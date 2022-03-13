module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    project: './tsconfig.eslint.json',
    sourceType: 'module', // Allows for the use of imports
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  extends: [
    'react-app', // https://www.npmjs.com/package/eslint-config-react-app
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'plugin:storybook/recommended',
  ],
  plugins: [
    // ...
    'react-hooks',
  ],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    'react/prop-types': 'off',
    'react/jsx-boolean-value': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': ['warn'],
    'react/jsx-sort-props': [
      'warn',
      { callbacksLast: true, shorthandFirst: true },
    ],
    'default-case': 'error',
    eqeqeq: ['error', 'smart'],
    'no-duplicate-imports': 'error',
    'no-implicit-coercion': ['error', { allow: ['!!'] }],
    'object-shorthand': ['error', 'always', { avoidQuotes: true }],
    radix: 'error',
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    'import/first': 'off',
    'import/order': [
      'error',
      {
        pathGroups: [{ pattern: '@/**', group: 'external', position: 'after' }],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    // 'max-lines': ['warn', { skipBlankLines: true, skipComments: true }],
    'max-depth': ['warn'],
    'max-params': ['warn'],
  },
};
