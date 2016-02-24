//node is nonblocking so it's going to read right through this
//event and keep going. It doesn't block and wait for the response
//before continuing.
setTimeout(function(){
    console.log("world");
},2000);
console.log("hello");

