var http = require('http'),
	Websocket = require('./node_modules/websocket').server,
	server = require('./server'),
	tictac = require('./tictac');


var httpserver = http.createServer(server.onRequest).listen(8080);
console.log("Server Listening on http://localhost:8080")
ws = new Websocket({httpServer:httpserver});
var t = new tictac.tictactoe();
ws.on('request', t.initConnection);
