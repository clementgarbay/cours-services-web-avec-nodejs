const shortid = require('shortid');
const displayContacts = require('./display-contacts');

class ContactsManager {
  constructor(fileManager) {
    this.fileManager = fileManager;
  }

  contacts() {
    return Promise.resolve(this.fileManager.read());
  }

  add(firstName, lastName) {
    const contacts = this.fileManager.read();
    const id = shortid.generate();

    contacts.push({
      id,
      lastName,
      firstName,
    });

    return this.fileManager.write(contacts).then(() => Promise.resolve(id), () => Promise.reject());
  }

  remove(id) {
    const contacts = this.fileManager.read();

    return this.fileManager.write(contacts.filter(c => c.id !== id));
  }

  display() {
    const contacts = this.fileManager.read();
    displayContacts(contacts);
  }
}

module.exports = ContactsManager;
