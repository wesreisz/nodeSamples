var http = require('http');

var s = http.createServer(function(req,res){
   res.writeHead(200, {'context-type': 'text/plain'});
   res.end('hello world');
});

s.listen(8000);
