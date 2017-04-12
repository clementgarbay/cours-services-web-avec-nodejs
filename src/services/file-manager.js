const fs = require('fs');

class FileManager {
  constructor(filePath) {
    this.filePath = filePath;
  }

  read() {
    return require(this.filePath);
  }

  write(data) {
    return fs.writeFile(this.filePath, JSON.stringify(data, null, 4), (err) => {
      if (err) throw err;
      console.log('Saved!');
    });
  }
}

module.exports = FileManager;
