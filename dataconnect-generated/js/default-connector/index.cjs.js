const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'NetFlix-Clone',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

