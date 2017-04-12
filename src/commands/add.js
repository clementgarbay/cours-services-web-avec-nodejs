module.exports = (commander, contactsManager) =>
  commander
    .command('add <firstName> <lastName>')
    .description('Add a new contact')
    .action((firstName, lastName) => contactsManager.add(firstName, lastName));
