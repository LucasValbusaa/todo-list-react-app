/* eslint-env node */

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: "@rocketseat/eslint-config/react",
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
}
