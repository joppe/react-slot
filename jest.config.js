/* eslint-env node  */

module.exports = {
    coverageDirectory: 'coverage',
    setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
    testEnvironment: 'jsdom',
};
