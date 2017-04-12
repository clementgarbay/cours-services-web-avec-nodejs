const express = require('express');
const bodyParser = require('body-parser');

const load = require('./module-loader');

const routesPath = `${__dirname}/../Route/`;
const port = process.env.npm_package_config_port;

const app = express();

app.use(bodyParser.json());

module.exports = (contactsManager) => {
  load(routesPath, [app, contactsManager]);

  app.listen(port, () => {
    console.log(`port: ${port}`);
  });
};
