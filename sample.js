//Step 5
var net = require('net')
var port = 8000;
var sockets = [];
 
var server = net.Server(function(socket){
   console.log(socket.remoteAddress + ": connected");
   sockets.push(socket);

   socket.on('data',function(data){
	 console.log("rcvd (" + socket.remoteAddress + "): " + data);
     for(var i=0; i<sockets.length; i++){
         if(sockets[i] == socket){
            continue;
         }
         sockets[i].write( socket.remoteAddress + ": " + data);
     }
   });
   socket.on('end',function(){
	 console.log("disconnected: " + socket.remoteAddress );
     var i = sockets.indexOf(socket);
     sockets.splice(i,1);
   });
});
server.listen(port);

// Put a friendly message on the terminal
require('dns').lookup(require('os').hostname(), function (err, add, fam) {
  console.log('Server running at: ' + add + " " + port);
})