var _ = require('lodash');

var localEnvVars = {
  TITLE:      'd3_app',
  SAFE_TITLE: 'd3_app'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
