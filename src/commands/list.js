const contactFile = process.env.npm_package_config_contacts;
const contacts = require(`../../${contactFile}`);

const displayContacts = require('../services/displayContacts');

module.exports = commander =>
  commander
    .command('list')
    .description('List all contacts')
    .action(() => displayContacts(contacts));
