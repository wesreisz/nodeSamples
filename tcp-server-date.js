var net = require('net')

var server = net.createServer(function(socket){
   socket.write("hello\n");
   socket.write("world\n");
   socket.on('data',function(data) {
      socket.write("date: " + new Date().toLocaleTimeString());
   });
});

server.listen(8000);
