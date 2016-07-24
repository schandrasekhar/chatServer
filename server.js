'use strict';

var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.use(express.static('./public'));

app.get("/", function(req, res) {
	var rootPath = __dirname + "/public";
	res.sendFile("index.html", {root: rootPath});
});

io.on("connection", function(socket) {
	console.log("a user connected");
	socket.on("chat message", function(msg) {
		io.emit("chat message", msg);
	});
});

http.listen(3000, function() {
	console.log("Listening at port 3000");
});
