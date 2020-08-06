var http = require('http')

// 创建一个服务
var server = http.createServer()


server.on('request',function(){
  console.log('收到客户端请求啦');
})

server.listen(3000,function(){
  console.log('服务器启动了，可以通过http://127.0.0.1/3000  进行访问了');
})