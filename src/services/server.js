const express = require('express');
const bodyParser = require('body-parser');

const load = require('./module-loader');

const routesPath = `${__dirname}/../routes/`;
const port = process.env.npm_package_config_port;

const app = express();

app.use(bodyParser.json());

load(routesPath, [app]);

module.exports = () => {
  app.listen(port, () => {
    console.log(`port: ${port}`);
  });
};
