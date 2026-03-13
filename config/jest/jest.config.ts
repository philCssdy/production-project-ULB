import type { Config } from "jest";


const config: Config = {
  preset: "ts-jest",
  clearMocks: true,
  testEnvironment: "jsdom",

  rootDir: "../../", // указываем на корень проекта

  moduleDirectories: ["node_modules"],
  modulePaths: ["<rootDir>/src"],

  moduleFileExtensions: [
    "js",
    "ts",
    "tsx",
    "jsx",
    "json",
    "node",
  ],

  setupFilesAfterEnv: ["<rootDir>/config/jest/setupTest.ts"],

  testMatch: ["<rootDir>/src/**/*(*.)+(spec|test).[tj]s?(x)"],

  moduleNameMapper: {
    "^shared/(.*)$": "<rootDir>/src/shared/$1",
    "^app/(.*)$": "<rootDir>/src/app/$1",
    "^widgets/(.*)$": "<rootDir>/src/widgets/$1",
    "\\.(s?css|less)$": "identity-obj-proxy",
    "\\.svg$": "<rootDir>/config/jest/jestEmptyComponent.tsx",
  },

  coveragePathIgnorePatterns: ["\\\\node_modules\\\\"],
};

export default config;