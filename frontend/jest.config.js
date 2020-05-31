module.exports = {
  setupFiles: ["<rootDir>/jest.setup.js"],
  verbose: true,
  moduleNameMapper: {
    "\\.(scss|css)$": "<rootDir>/src/__mocks__/styleMocks.js",
    "\\.(png|jpg)$": "<rootDir>/src/__mocks__/imageMocks.js",
  },
};
