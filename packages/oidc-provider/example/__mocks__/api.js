// Данный mock принимает запрос и его же отсылает назад
const express = require('express');
const bodyParser = require('body-parser');

const createMockApi = port => {
  const app = express();

  app.use(bodyParser.json());

  app.get('/test', (req, res) => {
    res.send({});
  });

  app.use('*', (req, res) => {
    res.send({ sendingHeaders: req.headers, sendingBody: req.body });
  });

  return app.listen(port, err => {
    if (err) throw err;

    // eslint-disable-next-line no-console
    console.log(`Mock api listening on port ${port}`);
  });
};

module.exports = { createMockApi };
