module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "eslint:recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
    tsconfigRootDir: "./",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "@typescript-eslint/semi": 0,
    "@typescript-eslint/quotes": 0,
    "react/react-in-jsx-scope": 0,
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],

  },
};
