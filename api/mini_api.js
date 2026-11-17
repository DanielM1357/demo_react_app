'use strict'

// part from here:
// - https://github.com/expressjs/express/blob/master/examples/web-service/index.js
// - added cors

const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

var users = [
  { name: 'tobi' }
  , { name: 'loki' }
  , { name: 'jane' }
];

app.get('/api/users', function (req, res) {
  res.send(users);
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example api listening on port ${port}`)
})
