var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/missatge_per_a_tu', function(req, res) {
  res.send('T\'estimo Cati!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

