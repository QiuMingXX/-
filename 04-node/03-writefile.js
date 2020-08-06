var fs = require('fs')

fs.writeFile('./data/writefile.txt','你好，这是写入文件的测试',function(error){
  console.log('write success');
})