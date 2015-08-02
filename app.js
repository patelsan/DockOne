var express = require("express");
var ip = require('ip');

var PORT = 8080;

var app = express();

app.get('/loaderio-39f7bec3b847d1e5f0d406e9c380abbc', function(req, res){
    res.type('text/plain');
    res.send('loaderio-39f7bec3b847d1e5f0d406e9c380abbc');
});

app.get('/', function(req, res){
    res.send("Hello Docker...from " + ip.address());
});

app.listen(PORT);
console.log("Running on PORT:" + PORT);

