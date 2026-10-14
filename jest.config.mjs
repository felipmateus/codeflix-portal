import nextJest from 'next/jest.js';

// Loads next.config.mjs and .env files, and wires up SWC transforms,
// CSS/image mocks and the `@/` path alias for the test environment.
const createJestConfig = nextJest({ dir: './' });

/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/app/layout.tsx',
  ],
};

export default createJestConfig(config);
