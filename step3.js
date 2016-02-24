var http = require('http');

var s = http.createServer(function(req,res){
   res.writeHead(200, {'context-type': 'text/plain'});
   res.write('hello\n');
   setInterval(function(){
   	  console.log("world");
      res.end("world\n");
   },2000);
});

s.listen(8000);
console.log("Server running at http://127.0.0.1:8000/");
//ab -n 100 -c 10 http://127.0.0.1:8000/
//curl -v http://127.0.0.1:8000/

