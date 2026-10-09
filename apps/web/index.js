const { greet, thank } = require('@rpt/api-contracts');

module.exports = {
  hello: (name) => greet(name),
  thanks: (name) => thank(name),
};

// A web-only change, to cut a web-only release.
