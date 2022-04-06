module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'class-methods-use-this': 'off',
    'no-unused-vars': 'off',
    'no-console': 'off',
    'no-promise-executor-return': 'off',
    'consistent-return': 'off',
    'prefer-const': 'off',
    camelcase: 'off',
    'eol-last': 'off',
  },
};
