const path = require('path');

module.exports = {
    //入口
    entry:'./src/index.js',
    // 出口
    output:{
        filename:'main.js',
        path:path.resolve(__dirname,'dist'),
    }

}