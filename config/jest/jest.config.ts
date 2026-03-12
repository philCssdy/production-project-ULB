import type { Config } from "jest";
import path from "path";

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
    "\\.(s?css|less)$": "identity-obj-proxy",
    "\\.svg$": path.resolve(__dirname, "jestEmptyComponent.tsx"),
  },

  coveragePathIgnorePatterns: ["\\\\node_modules\\\\"],
};

export default config;