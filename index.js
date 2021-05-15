const express = require('express');
const app = express();
const port = 5000;
const path = require('path');
const request = require('request');

app.use(express.static(path.join(__dirname, '/public'), {index: false}));

app.get('/', (req, res) => {
  res.redirect('./dp/1');
});

const sendIndex = (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
};

app.get('*/dp/:productId', sendIndex);

app.get('/images/:productId', (req, res) => {
  request('http://localhost:1166' + req.url, function (err, response, body) {
    res.json(JSON.parse(body));
  });
});

app.get('/Information', (req, res) => {
  request('http://localhost:3001' + req.url, function (err, response, body) {
    res.json(JSON.parse(body));
  });
});

app.listen(port, () => {
  console.log(`Product Gallery listening at http://localhost:${port}`);
});
