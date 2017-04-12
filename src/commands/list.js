module.exports = (commander, contactsManager) =>
  commander
    .command('list')
    .description('List all contacts')
    .action(() => contactsManager.display());
