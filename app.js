const commander = require('commander');
const fs = require('fs');

const contactFile = process.env.npm_package_config_contacts;
const contacts = require(contactFile);

commander
  .command('list')
  .description('List all contacts')
  .action(() => {
    contacts.forEach(c => console.log(`${c.lastName.toUpperCase()} ${c.firstName}`));
  });

commander
  .command('add <firstName> <lastName>')
  .description('Add a new contact')
  .action((firstName, lastName) => {
    contacts.push({
      firstName,
      lastName,
      id: 'TEST',
    });

    fs.writeFile(contactFile, JSON.stringify(contacts, null, 4), (err) => {
      if (err) throw err;
      console.log('Saved!');
    });
  });

commander.parse(process.argv);

if (process.argv.length < 3) {
  commander.help();
}
