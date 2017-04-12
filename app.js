const commander = require('commander');

const ContactsManager = require('./src/services/contacts-manager');
const FileManager = require('./src/services/file-manager');
const InMemoryManager = require('./src/services/in-memory-manager');
const load = require('./src/services/module-loader');

const args = process.argv;
const inMemory = args.indexOf('--memory') > 0;

const manager = (inMemory) ? new InMemoryManager() : new FileManager(`${__dirname}/contacts.json`);
const contactsManager = new ContactsManager(manager);

load(`${__dirname}/src/commands`, [commander, contactsManager], () => {
  commander.parse(args);

  if (args.length < 3) {
    commander.help();
  }
});
