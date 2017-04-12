module.exports = (commander, contactsManager) =>
  commander
    .command('remove <id>')
    .description('Remove a contact its given id')
    .action(id => contactsManager.remove(id));
