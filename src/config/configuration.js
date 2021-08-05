const yaml = require('js-yaml');
const fs = require('fs');

const file = fs.readFileSync('./src/config/config.yml', 'utf8');
const configuration = yaml.load(file);

module.exports = configuration;