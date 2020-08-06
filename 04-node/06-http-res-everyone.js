var http = require('http')

var server = http.createServer();
//自己写的
// server.on('request',function(request,response){
//   if(request.url == '/'){
//     response.write('hello,/')

//     response.end()
//   }
//   if(request.url == '/index'){
//     response.write('hello index')
//     response.end()
//   }
// })


// 标准代码

server.on('request',function(req,res){
  var url = req.url;
  if(url == '/'){
    res.end('index.page')
  }else if(url == '/login'){
    res.end('login page')
  }else{
    res.end('404 not found')
  }
})


server.listen(3000,function(){
  console.log('服务器启动了');
})