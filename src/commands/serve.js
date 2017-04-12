const server = require('../services/server');

module.exports = (commander, contactsManager) =>
  commander
    .command('serve')
    .option('--memory')
    .description('Starts a HTTP server')
    .action(() => server(contactsManager));
