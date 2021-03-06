var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/callback', function(req, res) {
    res.sendFile(path.join(__dirname + '/callback.html'));
});

app.listen(8080, function () {
  console.log('The app is listening on port 8080!');
});
