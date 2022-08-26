module.exports = {
  testMatch: ['**/+(*.)+(test).+(ts)'],
  testEnvironment: 'jsdom',
  reporters: ["default", "jest-junit"],
  moduleFileExtensions: [ 'ts', 'js' ]
};
