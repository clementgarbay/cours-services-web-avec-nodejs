const commander = require('commander');

const ContactsRepository = require('./src/Repository/ContactsRepository');
const HttpContactsRepository = require('./src/Repository/HttpContactsRepository');
const FileDatabase = require('./src/Database/FileDatabase');
const InMemoryDatabase = require('./src/Database/InMemoryDatabase');
const load = require('./src/Service/module-loader');

const args = process.argv;

commander.option('--http');
commander.option('--memory');
commander.option('--promise');

function repositoryInjector(callback) {
  const manager = (commander.memory) ?
    new InMemoryDatabase() :
    new FileDatabase(`${__dirname}/contacts.json`);
  const contactsManager = (commander.http) ?
    new HttpContactsRepository('http://localhost:3232') :
    new ContactsRepository(manager);

  callback(contactsManager);
}

load(`${__dirname}/src/commands`, [commander, repositoryInjector], () => {
  commander.parse(args);

  if (args.length < 3) {
    commander.help();
  }
});
