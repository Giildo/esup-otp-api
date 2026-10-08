import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";

export default defineConfig([
    {   // nodejs
        ignores: ["public/**"],
        extends: [js.configs.recommended],
        languageOptions: {
            globals: {
                ...globals.node,
            },

            ecmaVersion: "latest",
            sourceType: "module",
        },
        rules: {
            "no-unused-vars": ["error", {
                "args": "all",
                "varsIgnorePattern": "^_",
                "argsIgnorePattern": "^(_|((t|user|req|res)$))", // ignore `(t) => {...}` in ./test/ , and user|req|res
                "caughtErrorsIgnorePattern": "^_",
                "destructuredArrayIgnorePattern": "^_",
            }],
        },
    },
    {   // browser
        files: ["public/**/*.js"],
        extends: [js.configs.recommended],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.jquery,
            },

            ecmaVersion: "latest",
            sourceType: "module",
        },
        rules: {
            "no-unused-vars": ["warn", {
                "args": "all",
                "varsIgnorePattern": "^_",
                "argsIgnorePattern": "^_",
                "caughtErrorsIgnorePattern": "^_",
            }],
            "no-empty": ["error", {
                "allowEmptyCatch": true,
            }],
        },
    }
]);