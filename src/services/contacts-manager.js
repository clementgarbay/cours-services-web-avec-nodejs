const shortid = require('shortid');

class ContactsManager {
  constructor(fileManager) {
    this.fileManager = fileManager;
  }

  get contacts() {
    return this.fileManager.read();
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

    contacts
      .map(c => `${c.lastName.toUpperCase()} ${c.firstName}`)
      .forEach(c => console.log(c));
  }
}

module.exports = ContactsManager;
