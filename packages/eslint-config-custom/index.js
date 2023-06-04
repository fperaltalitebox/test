module.exports = {
    root: true,
    env: {
      browser: true,
      es2021: true
    },
    parser: "@typescript-eslint/parser",
    extends: [
      "airbnb",
      "airbnb-typescript",
      "airbnb/hooks",
      "plugin:@typescript-eslint/recommended",
      "plugin:@next/next/recommended",
      "plugin:prettier/recommended",
      "plugin:react/jsx-runtime"
    ],
    plugins: ["prettier"],
    ignorePatterns: ["**/*.js"],
    rules: {
      "react/function-component-definition": [
        "error",
        {
          namedComponents: ["function-declaration", "arrow-function"],
          unnamedComponents: "arrow-function"
        }
      ],
      "react/jsx-key": "error",
      "import/no-extraneous-dependencies": "off",
      "react/require-default-props": "off",
      "react/jsx-props-no-spreading": "off",
      "import/prefer-default-export": "off",
      "no-restricted-exports": "off",
      "@typescript-eslint/restrict-plus-operands": "off",
      "no-param-reassign": "off",
      "class-methods-use-this": "off",
      "import/extensions": "off",
      "no-async-promise-executor": "off",
      '@next/next/no-html-link-for-pages': 'off',
    }
  };
  