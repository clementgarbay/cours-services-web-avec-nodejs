module.exports = (commander, managerInjector) =>
  commander
    .command('list')
    .description('List all contacts')
    .action(() => managerInjector(manager => manager.display()));
