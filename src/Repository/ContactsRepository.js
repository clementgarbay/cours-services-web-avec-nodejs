const shortid = require('shortid');

class ContactsRepository {
  constructor(database) {
    this.database = database;
  }

  findAll() {
    return Promise.resolve(this.database.read());
  }

  insert(firstName, lastName) {
    const contacts = this.database.read();
    const id = shortid.generate();

    contacts.push({
      id,
      lastName,
      firstName,
    });

    return this.database.write(contacts).then(() => Promise.resolve(id), () => Promise.reject());
  }

  remove(id) {
    const contacts = this.database.read();

    return this.database.write(contacts.filter(c => c.id !== id));
  }
}

module.exports = ContactsRepository;
