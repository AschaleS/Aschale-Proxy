const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const request = require('request');
const dotenv = require('dotenv').config();

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

app.listen(port, () => {
  console.log(`Proxy listening at http://localhost:${port}`);
});
