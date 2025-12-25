import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import robloxTs from "eslint-plugin-roblox-ts";

export default [
    {
        ignores: ["out/**", "node_modules/**", "include/**"],
    },
    robloxTs.configs.recommended,
    {
        files: ["**/*.ts", "**/*.tsx"],
        languageOptions: {
            parser: tsparser,
        },
        plugins: {
            "@typescript-eslint": tseslint,
            "prettier": prettierPlugin,
        },
        rules: {
            ...tseslint.configs.recommended.rules,
            ...robloxTs.configs.tsRecommendedCompat.rules,
            "prettier/prettier": "warn",
        },
    },
    prettierConfig,
];
