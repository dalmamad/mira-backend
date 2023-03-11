module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    // 'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'prettier',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    // 'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-console': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
  },
};
