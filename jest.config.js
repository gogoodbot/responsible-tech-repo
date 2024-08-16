require('dotenv').config({ path: '.env.local' });

module.exports = {
    testMatch: ["**/test/*.test.js", "!**/src/**"], // Define test file patterns
    transform: {
      "^.+\\.js$": "babel-jest", // Use Babel for JavaScript files
    },
    setupFiles: ["dotenv/config"], // Include dotenv configuration
    moduleNameMapper: {
      '^@/lib/client$': '<rootDir>/lib/client', // Map module aliases
    },
  };
  