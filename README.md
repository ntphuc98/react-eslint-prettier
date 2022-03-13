### Create React App

```
npx create-react-app react-eslint-prettier --template typescript
```

### Setup ESLint

- Step 1: Add ESLint package

```
npm install eslint --save-dev
```

or

```
yarn add eslint --dev
```

- Step 2: Create `.eslintrc.json` by running

```
npx eslint --init
```

or

```
yarn run eslint --init
```

![ESLint init](/public/eslint-init.gif)

- Step 3: Change eslint config

```
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
    'plugin:valtio/recommended',
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
```

- Step 4: Add ESLint commands to `package.json`

```
"eslint": "eslint --cache \"src/**/*.{js,jsx,ts,tsx}\" \"functions/src/**/*.ts\"",
"prettier": "prettier \"./**/*.{js,jsx,ts,tsx,css,yml,json,md}\"",
"lint": "run-p lint:*",
"lint:eslint": "yarn eslint",
"lint:prettier": "yarn prettier --check",
"lint:tsc": "tsc",
"fix": "run-s fix:*",
"fix:eslint": "yarn eslint --fix",
"fix:prettier": "yarn prettier --write",
```

- Step 5: Create `tsconfig.eslint.json`

```
{
  "extends": "./tsconfig.json",
  "include": [
    "src/**/*.js",
    "src/**/*.jsx",
    "src/**/*.ts",
    "src/**/*.tsx",
    ".eslintrc.js"
  ],
  "exclude": ["node_modules"]
}

```

- Step 6: Add `npm-run-all` packages to run command `yarn run-p ....`

```
yarn add npm-run-all --dev
```

### Setup Prettier

- Step 1: Add Prettier packages

```
npm install eslint-config-prettier eslint-plugin-prettier prettier --save-dev
```

or

```
yarn add eslint-config-prettier eslint-plugin-prettier prettier --dev
```

- Step 2: Create `.prettierrc.js` and paste the below code

```
module.exports = {
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 80,
  tabWidth: 2,
  endOfLine: 'auto',
};
```

- Step 3: Create `.prettierignore` and paste the below code

```
build/
public/
**/coverage/
**/node_modules/
**/*.min.js
*.config.js
tsconfig.json
```

### Extensions

Prettier - Code formatter - https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
