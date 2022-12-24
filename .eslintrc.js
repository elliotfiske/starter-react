module.exports = {
    extends: ["react-app", "react-app/jest"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        babelOptions: {
            presets: [
                ["babel-preset-react-app", false],
                // Weird hack. See https://youtrack.jetbrains.com/issue/WEB-54170/Allow-specifying-environment-variables-for-ESLint
                process.env.NODE_ENV === "production"
                    ? "babel-preset-react-app/prod"
                    : process.env.NODE_ENV === "test"
                    ? "babel-preset-react-app/test"
                    : "babel-preset-react-app/dev",
            ],
        },
    },
}
