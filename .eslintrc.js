module.exports = require('@hugsmidjan/hxmstyle')({
  // Place your project-specific additions or overrides here
  // using standard ESLint config syntax...
  extends: ['plugin:@next/next/recommended'],
  rules: {
    '@next/next/no-img-element': 0,
    'react/react-in-jsx-scope': 0,

    // interfaces have their place
    '@typescript-eslint/consistent-type-definitions': 0,

    // all console logging should go through logger (`allow` can't be empty)
    'no-console': ['error', { allow: ['dir'] }],
  },
});
