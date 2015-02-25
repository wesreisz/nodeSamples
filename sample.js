//Step 5
var net = require('net')
var port = 8000;

var server = net.createServer(function(socket){
   socket.write("hello class\n");
   socket.on('data',function(data) {
	  console.log("rcvd (" + socket.remoteAddress + "): " + data)
      socket.write("echo: " + data);
   });
});

server.listen(port);

// Put a friendly message on the terminal
require('dns').lookup(require('os').hostname(), function (err, add, fam) {
  console.log('Server running at: ' + add + " " + port);
})
