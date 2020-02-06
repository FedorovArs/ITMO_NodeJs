let http = require('http');
const map = require('through2-map');

const port = process.argv[2];

http.createServer(function(req, res){
    if (req.method === "POST"){
        req.pipe(map(function (chunk) {
            return chunk.toString().toUpperCase().split('').join('')
        })).pipe(res)
    }

}).listen(port);