const displayContacts = require('../services/displayContacts');

module.exports = (commander, contactsManager) =>
  commander
    .command('list')
    .description('List all contacts')
    .action(() => displayContacts(contactsManager.contacts));
