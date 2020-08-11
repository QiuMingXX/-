var http = require('http')
var fs = require('fs')

var server = http.createServer();

server.on('request',function(req,res){
  var url = req.url;


  //这里是判断等于否， 不是赋值，   要用==
  if(url == '/'){
    fs.readFile('./resource/index.html',function(err,data){
      // 请求文件失败
      if(err){
        // 设置请求头
        res.setHeader('Content-type','text/plain ; charset=utf-8');
        res.end('读取文件失败，请稍后重试')
      }else{
        res.setHeader('Content-type','text/html ; charset=utf-8');
        // 成功就直接发送请求回来的数据
        res.end(data)
      }
    })
  }else if(url == '/baby'){
    fs.readFile('./resource/baby.png',function(err,data){
      // 请求文件失败
      if(err){
        // 设置请求头
        res.setHeader('Content-type','text/plain ; charset=utf-8');
        res.end('读取文件失败，请稍后重试')
      }else{
        res.setHeader('Content-type','image/png');
        // 成功就直接发送请求回来的数据
        res.end(data)
      }
    })
  }
})

server.listen(3000,function(){
  console.log('server running');
})