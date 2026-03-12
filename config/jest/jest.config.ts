/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "jest";
import path from "path";

const config: Config = {
  clearMocks: true,
  testEnvironment: "jsdom",
  coveragePathIgnorePatterns: ["\\\\node_modules\\\\"],

  moduleDirectories: ["node_modules"],
  modulePaths: ["<rootDir>/src"], // добавлен слэш после <rootDir>

  moduleFileExtensions: [
    "js",
    "mjs",
    "cjs",
    "jsx",
    "ts",
    "mts",
    "cts",
    "tsx",
    "json",
    "node",
  ],

  rootDir: "../../",

  // исправлен путь: добавлен слэш после <rootDir>
  setupFilesAfterEnv: ["<rootDir>/config/jest/setupTest.ts"],

  testMatch: ["<rootDir>/src/**/*(*.)+(spec|test).[tj]s?(x)"],

  moduleNameMapper: {
    "\\.(s?css|less)$": "identity-obj-proxy",
    "\\.svg$": path.resolve(__dirname, "jestEmptyComponent.tsx"),
  },

  // Чтобы Jest корректно работал с TypeScript
  preset: "ts-jest",
};

export default config;