const writeJson = require('../writeJsonInFile');

module.exports = (contactFile, contacts, id, firstName, lastName) => {
  contacts.push({
    id,
    lastName,
    firstName,
  });

  writeJson(contactFile, contacts);
};
