const commander = require('commander');

const ContactsManager = require('./src/services/contacts-manager');
const FileManager = require('./src/services/file-manager');
const load = require('./src/services/module-loader');

const commandsPath = `${__dirname}/src/commands`;

const fileManager = new FileManager(`${__dirname}/contacts.json`);
const contactsManager = new ContactsManager(fileManager);

load(commandsPath, [commander, contactsManager], () => {
  commander.parse(process.argv);

  if (process.argv.length < 3) {
    commander.help();
  }
});
