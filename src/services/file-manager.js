const fs = require('fs');

class FileManager {
  constructor(filePath) {
    this.filePath = filePath;
  }

  read() {
    delete require.cache[require.resolve(this.filePath)]; // TODO: to review!
    return require(this.filePath);
  }

  write(data) {
    return new Promise((resolve, reject) => {
      fs.writeFile(this.filePath, JSON.stringify(data, null, 4), (err) => {
        if (err) {
          reject();
        } else {
          resolve();
        }
      });
    });
  }
}

module.exports = FileManager;
