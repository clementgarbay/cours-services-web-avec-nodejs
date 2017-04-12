const contactFile = process.env.npm_package_config_contacts;
const contacts = require(`../../${contactFile}`);

const removeContact = require('../services/removeContact');

module.exports = commander =>
  commander
    .command('remove <id>')
    .description('Remove a contact its given id')
    .action(id => removeContact(contactFile, contacts, id));
