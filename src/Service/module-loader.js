const fs = require('fs');

module.exports = (path, args, callback = () => {}) =>
  fs.readdir(path, (err, files) => {
    files.forEach(file =>
      require(`${path}/${file}`)(...args)
    );

    callback();
  });
