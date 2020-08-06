// 加载文件处理核心模块
var fs = require('fs')

fs.readFile('./data/hello.txt', function (error, data) {
  //关于错误的处理
  if (error) {
    console.log('读取文件失败了');
  } else {
    console.log(data.toString());
  }

})