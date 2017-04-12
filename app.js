const commander = require('commander');

const ContactsManager = require('./src/services/contacts-manager');
const HttpContactsManager = require('./src/services/http-contacts-manager');
const FileManager = require('./src/services/file-manager');
const InMemoryManager = require('./src/services/in-memory-manager');
const load = require('./src/services/module-loader');

const args = process.argv;

commander.option('--http');
commander.option('--memory');
commander.option('--promise');

function managerInjector(callback) {
  const manager = (commander.memory) ? new InMemoryManager() : new FileManager(`${__dirname}/contacts.json`);
  const contactsManager = (commander.http) ? new HttpContactsManager('http://localhost:3232') : new ContactsManager(manager);

  callback(contactsManager);
}

load(`${__dirname}/src/commands`, [commander, managerInjector], () => {
  commander.parse(args);

  if (args.length < 3) {
    commander.help();
  }
});
