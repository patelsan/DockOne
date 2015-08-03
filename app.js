var express = require("express");
var ip = require('ip');

var PORT = 8080;

var app = express();

app.get('/loaderio-555e3ec69b5e3e42b879172e38ab3f9c', function(req, res){
    res.type('text/plain');
    res.send('loaderio-555e3ec69b5e3e42b879172e38ab3f9c');
});

app.get('/', function(req, res){
    res.send("Hello Docker...from (2) " + ip.address());
});

app.listen(PORT);
console.log("Running on PORT:" + PORT);

