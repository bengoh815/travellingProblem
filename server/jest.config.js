module.exports = {
  projects: [
    {
      displayName: "models",
      preset: "ts-jest",
      testMatch: ["<rootDir>/src/tests/models/**/*.test.ts"],
      setupFilesAfterEnv: ["<rootDir>/src/tests/models/jest.setup.ts"],
      testEnvironment: "node",
    },
  ],
};
