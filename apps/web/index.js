const { greet } = require('@rpt/api-contracts');

module.exports = { hello: (name) => greet(name) };
