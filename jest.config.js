module.exports = {
  coveragePathIgnorePatterns: ['/node_modules/', 'index.ts'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json'
    }
  },
  moduleFileExtensions: ['ts', 'js'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['**/?(*.)+(test).ts?(x)'],
  transform: { '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest' },
  reporters: ['default', 'jest-junit']
};
