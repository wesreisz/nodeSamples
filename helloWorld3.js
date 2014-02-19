   console.log('sending world')
   setInterval(function(){
      console.log("world");
   },5000);

   var http = require('http');
   setInterval(function(){
      console.log('fetching google.com');
      http.get({host: 'google.com'},function(res){
         console.log(res.headers);
      });
   },2000);

   console.log('hello');


   console.log('starting a web server');
   var s = http.Server(function(req,res){
      res.writeHead(200);
      setInterval(function(){
         res.end("Rock'n the server... \n");
      },1000);
   });

   s.listen(8000);
