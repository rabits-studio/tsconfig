/**
 * @see https://github.com/lint-staged/lint-staged
 * @type {import('lint-staged').Configuration}
 */
export default {
  "*": "cspell",
  "*.{js,jsx,ts,tsx}": "eslint --fix",
  "*.{html,css,json,jsonc,md,mdx}": "prettier --write",
};
