const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const request = require('request');

app.use(express.static(path.join(__dirname, '/public')));

const sendIndex = (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
};

app.get('/user_image.png', (req, res) => {
  request('http://localhost:3004/user_image.png').pipe(res);
});



app.get('/:productId', sendIndex);

app.get('*/dp/:productId', sendIndex);

app.listen(port, () => {
  console.log(`Product Gallery listening at http://localhost:${port}`);
});
