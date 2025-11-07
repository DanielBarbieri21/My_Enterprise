module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.spec.ts',
    '!src/**/*.module.ts',
    '!src/main.ts',
    '!src/**/*.routes.ts',
    '!src/**/*.config.ts',
  ],
  coverageReporters: ['html', 'text', 'lcov'],
  coverageDirectory: 'coverage',
  moduleNameMapper: {
    '^@app/(.*)$': '<rootDir>/src/app/$1',
    '^@core/(.*)$': '<rootDir>/src/app/core/$1',
    '^@shared/(.*)$': '<rootDir>/src/app/shared/$1',
    '^@features/(.*)$': '<rootDir>/src/app/features/$1',
  },
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
};

