//Initialization
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 6060;

//Helper Functions
const rng = require('./randomNumberGenerator');

//Middleware
app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json());

//API
app.get('/api/number', (req, res) => {
  const number = rng.randomNumberGenerator();
  res.send(`${number}`);
});

//Listen for connection
app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});