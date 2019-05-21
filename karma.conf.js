// Karma configuration
// Generated on Thu May 02 2019 14:58:12 GMT-0400 (GMT-04:00)
process.env.CHROME_BIN = require('puppeteer').executablePath()
module.exports = function(config) {
  "use strict";
  config.set({

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['ui5'],
    
    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    reporters: ["progress"],

    browsers: ["ChromeHeadless","Chrome_without_security"],

    customLaunchers: {
      Chrome_without_security: {
         base: 'ChromeHeadless',
         flags: ['--disable-web-security', '--no-sandbox']
      }
    },

    singleRun: true

  });
};
