class ContactsManager {
  constructor(fileManager) {
    this.fileManager = fileManager;
  }

  get contacts() {
    return this.fileManager.read();
  }

  add(id, firstName, lastName) {
    const contacts = this.fileManager.read();

    contacts.push({
      id,
      lastName,
      firstName,
    });

    this.fileManager.write(contacts);

    return this;
  }

  remove(id) {
    const contacts = this.fileManager.read();

    this.fileManager.write(contacts.filter(c => c.id !== id));

    return this;
  }
}

module.exports = ContactsManager;
