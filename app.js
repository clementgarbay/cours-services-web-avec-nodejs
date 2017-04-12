const commander = require('commander');
const fs = require('fs');

const ContactsManager = require('./src/services/contacts-manager');
const FileManager = require('./src/services/file-manager');

const commandsPath = './src/commands';

const fileManager = new FileManager(`${__dirname}/contacts.json`);
const contactsManager = new ContactsManager(fileManager);

fs.readdir(commandsPath, (err, files) => {
  files.forEach(filePath =>
    require(`${commandsPath}/${filePath}`)(commander, contactsManager)
  );

  commander.parse(process.argv);

  if (process.argv.length < 3) {
    commander.help();
  }
});


