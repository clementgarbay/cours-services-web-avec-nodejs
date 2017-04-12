module.exports = (commander, managerInjector) =>
  commander
    .command('add <firstName> <lastName>')
    .description('Add a new contact')
    .action((firstName, lastName) => managerInjector(manager => manager.add(firstName, lastName)));
