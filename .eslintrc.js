module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'react/require-default-props': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
}
