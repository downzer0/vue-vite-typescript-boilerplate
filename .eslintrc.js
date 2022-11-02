module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: [
    '@typescript-eslint',
    'prettier',
  ],
  env: {
    es6: true,
    node: true,
  },
}