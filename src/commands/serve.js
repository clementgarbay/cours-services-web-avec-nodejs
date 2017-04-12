const server = require('../services/server');

module.exports = (commander, contactsManager) =>
  commander
    .command('serve')
    .description('Starts a HTTP server')
    .action(() => server(contactsManager));
