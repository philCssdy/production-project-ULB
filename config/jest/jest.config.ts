// config/jest/jest.config.ts
import type { Config } from "jest";

const config: Config = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    clearMocks: true,
    rootDir: "../../",

    moduleFileExtensions: ["js", "ts", "tsx", "jsx", "json", "node"],
    moduleDirectories: ["node_modules"],
    modulePaths: ["<rootDir>/src"],

    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
        "^.+\\.(js|jsx)$": "babel-jest",
    },

    globals: {
        __IS_DEV__: true,
    },

    setupFilesAfterEnv: ["<rootDir>/config/jest/setupTest.ts"],

    testMatch: ["<rootDir>/src/**/*(*.)+(spec|test).[tj]s?(x)"],

    coveragePathIgnorePatterns: ["\\\\node_modules\\\\"],

    moduleNameMapper: {
        "^app/(.*)$": "<rootDir>/src/app/$1",
        "^entities/(.*)$": "<rootDir>/src/entities/$1",
        "^shared/(.*)$": "<rootDir>/src/shared/$1",
        "^features/(.*)$": "<rootDir>/src/features/$1",
        "^widgets/(.*)$": "<rootDir>/src/widgets/$1",
        "^pages/(.*)$": "<rootDir>/src/pages/$1",

        "\\.(s?css|less)$": "identity-obj-proxy",
        "\\.svg$": "<rootDir>/config/jest/jestEmptyComponent.tsx",
    },
};

export default config;
