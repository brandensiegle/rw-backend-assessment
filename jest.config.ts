import type { Config } from "@jest/types";

export default async (): Promise<Config.InitialOptions> => {
  return {
    preset: "ts-jest",
    testEnvironment: "node",

    forceExit: true,
    detectOpenHandles: true,

    rootDir: "./",
    testPathIgnorePatterns: [
      "/node_modules/",
      "/dist/",
      "/test/",
      "/src/models/",
      "/src/schemas/",
    ],
    testTimeout: 30000,
    globalSetup: "<rootDir>/test/jest.globalSetup.ts",

    transform: {
      "^.+\\.(ts|tsx)$": [
        "ts-jest",
        {
          compiler: "ts-patch/compiler",
          tsconfig: "test/tsconfig.json",
        },
      ],
      "^.+\\.(js|jsx)$": "babel-jest",
    },
  };
};
