var baseConf = require('./karma.conf.js');

module.exports = function(config) {
  baseConf(config);

  Object.assign(config, {
    browsers: ["Chrome"],
    autoWatch: true,
  });

}