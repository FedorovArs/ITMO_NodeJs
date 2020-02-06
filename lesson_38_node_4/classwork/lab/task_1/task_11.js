let http = require('http');
let fs = require('fs');

const port = process.argv[2];
const file = process.argv[3];

http.createServer(function(req, res){

    let fileReadStream = fs.createReadStream(file);
    fileReadStream.pipe(res);
}).listen(port);