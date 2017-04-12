const commander = require('commander');
const fs = require('fs');

const commandsPath = './src/commands';

fs.readdir(commandsPath, (err, files) => {
  files.forEach(filePath =>
    require(`${commandsPath}/${filePath}`)(commander)
  );

  commander.parse(process.argv);

  if (process.argv.length < 3) {
    commander.help();
  }
});


