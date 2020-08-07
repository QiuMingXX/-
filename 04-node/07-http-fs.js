var http = require('http')
var fs = require('fs')

var server = http.createServer();

server.on('request',function(req,res){
  var url = req.url;

  if(url = '/'){
    fs.readFile('./resource/index.html',function(err,data){
      if(err){
        // 设置请求头
        res.setHeader('Content-type','text/plain ; charset=utf-8');
        res.end('读取文件失败，请稍后重试')
      }else{
        res.setHeader('Content-type','text/plain ; charset=utf-8');
        res.end(data)
      }
    })
  }
})

server.listen(3000,function(){
  console.log('server running');
})