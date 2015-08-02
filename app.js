var express = require("express");
var ip = require('ip');

var PORT = 8080;

var app = express();

app.get('/', function(req, res){
    res.send("Hello Docker...from " + ip.address());
});

app.listen(PORT);
console.log("Running on PORT:" + PORT);

