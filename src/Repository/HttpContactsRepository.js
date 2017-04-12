const request = require('request');

class HttpContactsRepository {
  constructor(url) {
    this.url = url;
  }

  findAll() {
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

  insert(firstName, lastName) {
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

  update(id, firstName, lastName) {
    return new Promise((resolve, reject) => {
      request.put({
        url: `${this.url}/contacts/:id`,
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
}

module.exports = HttpContactsRepository;
