const request = require('request');
const displayContacts = require('./display-contacts');

class HttpContactsManager {
  constructor(url) {
    this.url = url;
  }

  contacts() {
    return new Promise((resolve, reject) => {
      request(`${this.url}/contacts/`, (err, res, body) => {
        if (err) {
          reject();
        } else {
          resolve(JSON.parse(body));
        }
      });
    });
  }

  add(firstName, lastName) {
    return new Promise((resolve, reject) => {
      request.post({
        url: `${this.url}/contacts/`,
        json: { firstName, lastName }
      }, (err, res, body) => {
        if (err) {
          reject();
        } else {
          resolve(body);
        }
      });
    });
  }

  remove(id) {
    return new Promise((resolve, reject) => {
      request.delete(`${this.url}/contacts/${id}`, (err, res, body) => {
        if (err) {
          reject();
        } else {
          resolve(body);
        }
      });
    });
  }

  display() {
    this.contacts().then(contacts => displayContacts(contacts));
  }
}

module.exports = HttpContactsManager;
