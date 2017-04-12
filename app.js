const commander = require('commander');

const ContactsManager = require('./src/services/contacts-manager');
const HttpContactsManager = require('./src/services/http-contacts-manager');
const FileManager = require('./src/services/file-manager');
const InMemoryManager = require('./src/services/in-memory-manager');
const load = require('./src/services/module-loader');

const args = process.argv;
const isInMemory = args.indexOf('--memory') > 0;
const isHttp = args.indexOf('--http') > 0;

commander.option('--http');
commander.option('--memory');
commander.option('--promise');

const manager = (isInMemory) ? new InMemoryManager() : new FileManager(`${__dirname}/contacts.json`);
const contactsManager = (isHttp) ? new HttpContactsManager('http://localhost:3232') : new ContactsManager(manager);

load(`${__dirname}/src/commands`, [commander, contactsManager], () => {
  commander.parse(args);

  if (args.length < 3) {
    commander.help();
  }
});
