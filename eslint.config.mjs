import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import importPlugin from 'eslint-plugin-import'
import { defineConfig } from 'eslint/config'

export default defineConfig([
    js.configs.recommended,

    ...tseslint.configs.recommended,

    react.configs.flat.recommended,

    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

        languageOptions: {
            globals: globals.browser,
            parserOptions: {
                project: './tsconfig.json',
            },
        },

        plugins: {
            react,
            'react-hooks': reactHooks,
            import: importPlugin,
        },

        rules: {

            'react/react-in-jsx-scope': 'off',
            'react/require-default-props': 'off',
            // 'react/jsx-props-no-spreading': 'warn',
            'react/function-component-definition': 'off',
            'react/jsx-indent': [2, 4],
            'react/jsx-indent-props': [2, 4],
            'react/jsx-filename-extension': [
                2,
                { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
            ],


            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',

            'import/no-unresolved': 'off',
            'import/prefer-default-export': 'off',

            indent: [2, 4],

            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                },
            ],

            'no-shadow': 'off',
            '@typescript-eslint/no-shadow': 'error',
            'import/extensions': 'off'
        },

        settings: {
            react: {
                version: 'detect',
            },
        },
    },
])
