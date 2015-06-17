var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());   
app.use(express.static(__dirname));   

app.get("*", function(req, res) {
    res.sendFile(__dirname + "/app/views/index.html");
});

var port = 9000;
app.listen(port);
console.log("Running on localhost:" + port); 