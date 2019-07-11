module.exports = {
  preset: 'jest-puppeteer',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '/e2e/(.*|(\\.|/))\\.js$',
};
