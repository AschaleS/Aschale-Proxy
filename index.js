const newrelic = require('newrelic')
var compression = require('compression')
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const request = require('request');
const bodyParser = require('body-parser');
const axios = require('axios');
const dotenv = require('dotenv').config();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());
app.use(express.static(path.join(__dirname, '/public/dist')));

const sendIndex = (req, res) => {
  res.sendFile(path.join(__dirname, './public/dist/index.html'));
};

app.get('/user_image.png', (req, res) => {
  let status = 200;
  let response = request(`http://${dotenv.parsed.REVIEW_IP}:3004/user_image.png`);
  response.on('error', console.error);
  response.on('response', data => data.pipe(res));
});

app.get('/:productId', sendIndex);

app.get('*/dp/:productId', sendIndex);

app.get('/overview/:productId', (req, res) => {
  axios.get(`${'http://localhost:3002/overview'}/${req.params.productId}`)
    .then((result) => res.json(result.data))
    .catch((error) => console.log(error));
});

app.post('/overview', (req, res) => {
  let data = req.body;
  axios.post('http://localhost:3002/overview', data)
  .then((result) => res.json(result.data))
  .catch((error) => console.log(error));
});

app.get('/*.js', (req, res) => {
  res.sendFile(req.path);
});

app.listen(port, () => {
  console.log(`Proxy listening at http://localhost:${port}`);
});
