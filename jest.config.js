export default  {
    moduleNameMapper: {
      '\\.svg\\?react$': '<rootDir>/__mocks__/svg.js',
    },
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setupTest.js'],
    // collectCoverage: true,
  }