module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        'prettier/prettier': 'error',
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_|^req|^next' }],
        'no-explicit-any': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'explicit-module-boundary-types': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'max-len': ['error', { code: 120, tabWidth: 4 }],
    },
    settings: {},
};
