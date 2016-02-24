var express = require('express');
var app = express();
var port = 8000;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/a', function (req, res) {
  res.send('Hello a class!');
});

app.get('/b', function (req, res) {
  res.send('Hello another class!');
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});