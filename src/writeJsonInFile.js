const fs = require('fs');

module.exports = (filePath, json) =>
  fs.writeFile(filePath, JSON.stringify(json, null, 4), (err) => {
    if (err) throw err;
    console.log('Saved!');
  });
