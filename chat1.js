var net = require('net');
var port = 8000;
var sockets = [];
var s = net.Server(function(socket){
   sockets.push(socket);

   socket.on('data',function(d){
     for(var i=0; i<sockets.length; i++){
         if(sockets[i] == socket){
            continue;
         }
         var msg = sockets[i].remoteAddress + ": " + d.toString();
         console.log(msg);
         sockets[i].write(msg);
     }
   });
   socket.on('end',function(){
     var i = sockets.indexOf(socket);
     sockets.splice(i,1);
   });
});

require('dns').lookup(require('os').hostname(), function (err, add, fam) {
  console.log('You can connect using telnet: '+add + ' ' + port);
})

s.listen(port);
