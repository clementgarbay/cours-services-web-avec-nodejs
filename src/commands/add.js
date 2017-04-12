const shortid = require('shortid');

const contactFile = process.env.npm_package_config_contacts;
const contacts = require(`../../${contactFile}`);

const appendContact = require('../services/appendContact');

module.exports = commander =>
  commander
    .command('add <firstName> <lastName>')
    .description('Add a new contact')
    .action((firstName, lastName) =>
      appendContact(contactFile, contacts, shortid.generate(), firstName, lastName)
    );
