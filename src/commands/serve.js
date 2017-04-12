const server = require('../services/server');

module.exports = (commander, managerInjector) =>
  commander
    .command('serve')
    .description('Starts a HTTP server')
    .action(() => managerInjector(manager => server(manager)));
