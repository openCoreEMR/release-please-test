const { greet, thank } = require('@rpt/api-contracts');

module.exports = {
  hello: (name) => greet(name),
  thanks: (name) => thank(name),
};
