const { withKeystone } = require("@keystone-next/keystone/next");
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = withKeystone();
