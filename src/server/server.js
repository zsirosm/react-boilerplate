var express = require('express');
var http = require('http');
var path = require('path');

var server = express();

var port = process.env.PORT || 3000;

server.use(express.static(path.resolve('./node_modules')));
server.use(express.static(path.resolve('./dist')));

server.get('/', function (req, res) {
    res.sendFile(path.resolve('./index.html'));
});

server.listen(port);
