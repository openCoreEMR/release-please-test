const { welcome } = require('@rpt/api-contracts');

module.exports = { onboard: (name) => welcome(name) };
