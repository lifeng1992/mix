module.exports = {
    root: true,
    settings: {
        react: {
            version: "detect",
        }
    },
    env: {
        "browser": true,
        "node": true,
        "es6": true
    },
    globals: {
        "$": true,
        "globalThis": false
    },
    parserOptions: {
        "parser": "babel-eslint",
        "ecmaVersion": 2020,
        "sourceType": "module"
    },
    plugins: [
        "unused-imports"
    ],
    extends: [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    rules: {
        "no-unused-vars": "off",
        "no-undef": "error",
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": [
            "warn",
            {
                "vars": "all",
                "varsIgnorePattern": "^_",
                "args": "after-used",
                "argsIgnorePattern": "^_"
            }
        ]
    }
}
