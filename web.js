var express = require('express');
var app = express();
var mybuf;
var fs = require('fs');

app.use(express.logger());

mybuf=fs.readFileSync('index.html');

app.get('/', function(request, response) {

 response.send(mybuf.toString()); 

});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
