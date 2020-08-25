module.exports = {
  verbose: true,
  testURL: "http://localhost/",
  coverageDirectory: './coverage/',
  collectCoverage: true,
  testRegex: '(/__tests__/.*|/tests/.*|(\\.|/)(test|spec))\\.jsx?$',
  reporters: ['jest-tap-reporter'],
};
