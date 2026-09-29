const { welcome, farewell } = require('@rpt/api-contracts');

module.exports = {
  onboard: (name) => welcome(name),
  offboard: (name) => farewell(name),
};
