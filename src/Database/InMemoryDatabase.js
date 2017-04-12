class InMemoryDatabase {
  constructor() {
    this.contacts = [];
  }

  read() {
    return this.contacts;
  }

  write(data) {
    this.contacts = data;
    return Promise.resolve(this.contacts);
  }
}

module.exports = InMemoryDatabase;
