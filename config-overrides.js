const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@pages': 'src/pages',
    "@examples": "src/examples",
    "@components": "src/components",
    "@config": "src/config"
  })(config);

  return config;
};