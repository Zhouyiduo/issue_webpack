const path = require('path')

module.exports = {
    entry : "./indexOther.js",
    output: 
    {
        path:path.resolve(__dirname,'dist'),
        filename:'index.dis.js'
    }
};