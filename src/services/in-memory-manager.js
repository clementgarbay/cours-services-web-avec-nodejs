class InMemoryManager {
  constructor() {
    this.contacts = [{
      id: 'NyLimWRtx',
      lastName: 'Grimm',
      firstName: 'Benjamin'
    }];
  }

  read() {
    return this.contacts;
  }

  write(data) {
    this.contacts = data;
    return Promise.resolve(this.contacts);
  }
}

module.exports = InMemoryManager;
