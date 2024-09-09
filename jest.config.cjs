/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

const config = {
  // All imported modules in your tests should be mocked automatically
  // automock: false,

  // Stop running tests after `n` failures
  // bail: 0,

  // The directory where Jest should store its cached dependency information
  // cacheDirectory: "/tmp/jest_rs",

  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",

  // The test environment that will be used for testing
  testEnvironment: "node",

  // Transform files with Babel or another transformer
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },

  // The regexp pattern or array of patterns that Jest uses to detect test files
  testMatch: [
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],

  // An array of regexp pattern strings that are matched against all modules before the module loader will automatically return a mock for them
  transformIgnorePatterns: ['<rootDir>/node_modules/'],

  // Allow importing modules with ES6 syntax
  moduleFileExtensions: [
    "js",
    "jsx",
    "ts",
    "tsx"
  ],

  // Add support for additional file extensions if needed
  moduleDirectories: [
    "node_modules"
  ],
};

module.exports = config;
