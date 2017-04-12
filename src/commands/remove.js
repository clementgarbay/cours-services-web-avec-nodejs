module.exports = (commander, managerInjector) =>
  commander
    .command('remove <id>')
    .description('Remove a contact its given id')
    .action(id => managerInjector(manager => manager.remove(id)));
