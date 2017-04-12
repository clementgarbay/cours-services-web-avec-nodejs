const server = require('../Service/server');

module.exports = (commander, repositoryInjector) =>
  commander
    .command('serve')
    .description('Starts a HTTP server')
    .action(() => repositoryInjector(contactRepository => server(contactRepository)));
