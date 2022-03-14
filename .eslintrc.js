module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'no-console': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'no-plusplus': 'off',
    'consistent-return': 'off',
    'func-names': 'off',
    'no-underscore-dangle': 'off',
    eqeqeq: 'off',
    'no-tabs': 'off',
    'max-len': 'off',
  },
};
