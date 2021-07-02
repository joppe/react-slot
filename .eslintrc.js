/* eslint-env node */

module.exports = {
    env: {
        browser: true,
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
    ],
    rules: {
        'react/display-name': 0,
        'react/react-in-jsx-scope': 0,
    },
};
