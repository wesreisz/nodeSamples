var net = require('net');
var sockets = [];
var s = net.Server(function(socket){
   sockets.push(socket);

   socket.on('data',function(d){
     for(var i=0; i<sockets.length; i++){
     	 console.log(d);
         sockets[i].write(d);
     }
   });
});

s.listen(8000);
console.log("chat client listening on port 8000");
