
module.exports = {
  preset: 'ts-jest',
  verbose: false,
  bail: true,
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  testTimeout: 30000,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
}
