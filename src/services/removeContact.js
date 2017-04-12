const writeJson = require('../writeJsonInFile');

module.exports = (contactFile, contacts, id) => {
  writeJson(contactFile, contacts.filter(c => c.id !== id));
};
